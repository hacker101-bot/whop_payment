"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refunds = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class Refunds extends resource_1.APIResource {
    /**
     * Retrieves a Refund by ID
     *
     * Required permissions:
     *
     * - `payment:basic:read`
     * - `member:email:read`
     * - `member:basic:read`
     * - `member:phone:read`
     */
    retrieve(id, options) {
        return this._client.get((0, path_1.path) `/refunds/${id}`, options);
    }
    /**
     * Lists Refunds for a payment.
     *
     * Required permissions:
     *
     * - `payment:basic:read`
     */
    list(query, options) {
        return this._client.getAPIList('/refunds', (pagination_1.CursorPage), { query, ...options });
    }
}
exports.Refunds = Refunds;
//# sourceMappingURL=refunds.js.map