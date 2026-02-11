"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeMarkups = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class FeeMarkups extends resource_1.APIResource {
    /**
     * Creates or updates a fee markup for a company.
     *
     * Required permissions:
     *
     * - `company:update_child_fees`
     *
     * @example
     * ```ts
     * const feeMarkup = await client.feeMarkups.create({
     *   company_id: 'biz_xxxxxxxxxxxxxx',
     *   fee_type: 'crypto_withdrawal_markup',
     * });
     * ```
     */
    create(body, options) {
        return this._client.post('/fee_markups', { body, ...options });
    }
    /**
     * Lists fee markups for a company.
     *
     * Required permissions:
     *
     * - `company:update_child_fees`
     *
     * @example
     * ```ts
     * // Automatically fetches more pages as needed.
     * for await (const feeMarkupListResponse of client.feeMarkups.list(
     *   { company_id: 'biz_xxxxxxxxxxxxxx' },
     * )) {
     *   // ...
     * }
     * ```
     */
    list(query, options) {
        return this._client.getAPIList('/fee_markups', (pagination_1.CursorPage), { query, ...options });
    }
    /**
     * Deletes a fee markup for a company.
     *
     * Required permissions:
     *
     * - `company:update_child_fees`
     *
     * @example
     * ```ts
     * const feeMarkup = await client.feeMarkups.delete('id');
     * ```
     */
    delete(id, options) {
        return this._client.delete((0, path_1.path) `/fee_markups/${id}`, options);
    }
}
exports.FeeMarkups = FeeMarkups;
//# sourceMappingURL=fee-markups.js.map