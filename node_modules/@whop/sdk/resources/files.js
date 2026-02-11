"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
const resource_1 = require("../core/resource.js");
const path_1 = require("../internal/utils/path.js");
const upload_file_1 = require("../lib/upload-file.js");
class Files extends resource_1.APIResource {
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
        return this._client.get((0, path_1.path) `/files/${id}`, options);
    }
    /**
     * Upload a file (create -> upload to presigned URL -> poll retrieve until ready).
     *
     * Polls for up to 2 minutes by default.
     */
    upload(file, options) {
        const { filename, ...requestOptions } = options ?? {};
        return (0, upload_file_1.uploadFile)(this._client, file, {
            filename,
            requestOptions,
        });
    }
}
exports.Files = Files;
//# sourceMappingURL=files.js.map