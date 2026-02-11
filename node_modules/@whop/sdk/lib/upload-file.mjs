import { getDefaultFetch } from "../internal/shims.mjs";
import { sleep } from "../internal/utils/sleep.mjs";
import { toFile } from "../core/uploads.mjs";
function normalizeUploadHeaders(headers) {
    if (!headers)
        return undefined;
    const out = {};
    for (const [key, value] of Object.entries(headers)) {
        if (value === null || value === undefined)
            continue;
        out[key] = String(value);
    }
    return out;
}
/**
 * Upload a file using the `files.create()` and `files.retrieve()` APIs.
 *
 * Flow:
 * - create a file record (returns presigned upload URL + headers)
 * - upload bytes to the presigned URL
 * - poll retrieve until `ready` (or `failed` / timeout)
 */
export async function uploadFile(client, file, options) {
    const pollIntervalMs = options?.pollIntervalMs ?? 1000;
    const pollTimeoutMs = options?.pollTimeoutMs ?? 120000;
    const requestOptions = options?.requestOptions ?? undefined;
    const normalized = await toFile(file, options?.filename ?? undefined);
    const filename = (options?.filename ?? normalized.name)?.trim();
    if (!filename) {
        throw new Error('uploadFile: could not determine a filename; pass { filename } or provide a named File.');
    }
    const created = await client.files.create({ filename }, requestOptions);
    if (created.upload_status === 'failed') {
        throw new Error(`uploadFile: file creation failed (id: ${created.id}).`);
    }
    // Some backends may immediately mark the record ready (e.g. for remote/import flows).
    if (created.upload_status !== 'ready') {
        if (!created.upload_url) {
            throw new Error('uploadFile: missing upload_url from files.create response.');
        }
        const fetchImpl = client.fetch ?? getDefaultFetch();
        const uploadResponse = await fetchImpl(created.upload_url, {
            method: 'PUT',
            headers: normalizeUploadHeaders(created.upload_headers) ?? {},
            body: normalized,
        });
        if (!uploadResponse.ok) {
            throw new Error(`uploadFile: upload failed (status ${uploadResponse.status} ${uploadResponse.statusText}).`);
        }
    }
    const deadline = Date.now() + pollTimeoutMs;
    while (true) {
        const current = await client.files.retrieve(created.id, requestOptions);
        if (current.upload_status === 'ready')
            return current;
        if (current.upload_status === 'failed') {
            throw new Error(`uploadFile: processing failed (id: ${current.id}).`);
        }
        if (Date.now() >= deadline) {
            throw new Error(`uploadFile: timed out waiting for file to become ready (id: ${current.id}).`);
        }
        await sleep(pollIntervalMs);
    }
}
//# sourceMappingURL=upload-file.mjs.map