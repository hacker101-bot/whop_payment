"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutMethods = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class PayoutMethods extends resource_1.APIResource {
    /**
     * Retrieves a payout method by ID
     *
     * Required permissions:
     *
     * - `payout:destination:read`
     */
    retrieve(id, options) {
        return this._client.get((0, path_1.path) `/payout_methods/${id}`, options);
    }
    /**
     * Lists payout destinations for a company
     *
     * Required permissions:
     *
     * - `payout:destination:read`
     */
    list(query, options) {
        return this._client.getAPIList('/payout_methods', (pagination_1.CursorPage), {
            query,
            ...options,
        });
    }
}
exports.PayoutMethods = PayoutMethods;
//# sourceMappingURL=payout-methods.js.map