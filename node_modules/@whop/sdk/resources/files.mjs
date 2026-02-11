// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { path } from "../internal/utils/path.mjs";
import { uploadFile } from "../lib/upload-file.mjs";
export class Files extends APIResource {
    /**
     * Creates a file and returns a presigned URL for upload
     */
    create(body, options) {
        return this._client.post('/files', { body, ...options });
    }
    /**
     * Retrieves a file by its ID
     */
    retrieve(id, options) {
        return this._client.get(path `/files/${id}`, options);
    }
    /**
     * Upload a file (create -> upload to presigned URL -> poll retrieve until ready).
     *
     * Polls for up to 2 minutes by default.
     */
    upload(file, options) {
        const { filename, ...requestOptions } = options ?? {};
        return uploadFile(this._client, file, {
            filename,
            requestOptions,
        });
    }
}
//# sourceMappingURL=files.mjs.map