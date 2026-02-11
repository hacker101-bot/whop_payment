import type { RequestOptions } from "../internal/request-options.js";
import { type ToFileInput, type Uploadable } from "../core/uploads.js";
import type { Whop } from "../client.js";
import type { FileRetrieveResponse } from "../resources/files.js";
export interface UploadFileOptions {
    /**
     * Override the filename used when creating the file.
     * If omitted, we'll use the name inferred by `toFile()`.
     */
    filename?: string | null | undefined;
    /**
     * How often to poll `files.retrieve()` for status updates.
     *
     * @default 1000
     * @unit milliseconds
     */
    pollIntervalMs?: number | null | undefined;
    /**
     * Maximum time to wait for the file to reach `ready` after uploading.
     *
     * @default 120000
     * @unit milliseconds
     */
    pollTimeoutMs?: number | null | undefined;
    /**
     * Request options used for the `files.create()` and `files.retrieve()` API calls.
     */
    requestOptions?: RequestOptions | null | undefined;
}
/**
 * Upload a file using the `files.create()` and `files.retrieve()` APIs.
 *
 * Flow:
 * - create a file record (returns presigned upload URL + headers)
 * - upload bytes to the presigned URL
 * - poll retrieve until `ready` (or `failed` / timeout)
 */
export declare function uploadFile(client: Whop, file: Uploadable | ToFileInput | PromiseLike<Uploadable | ToFileInput>, options?: UploadFileOptions): Promise<FileRetrieveResponse>;
//# sourceMappingURL=upload-file.d.ts.map