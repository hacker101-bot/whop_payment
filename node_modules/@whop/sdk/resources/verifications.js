"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verifications = void 0;
const resource_1 = require("../core/resource.js");
const path_1 = require("../internal/utils/path.js");
class Verifications extends resource_1.APIResource {
    /**
     * Retrieves a verification by ID
     *
     * Required permissions:
     *
     * - `payout:account:read`
     */
    retrieve(id, options) {
        return this._client.get((0, path_1.path) `/verifications/${id}`, options);
    }
}
exports.Verifications = Verifications;
//# sourceMappingURL=verifications.js.map