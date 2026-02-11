"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Withdrawals = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class Withdrawals extends resource_1.APIResource {
    /**
     * Creates a withdrawal request for a ledger account
     *
     * Required permissions:
     *
     * - `payout:withdraw_funds`
     * - `payout:destination:read`
     *
     * @example
     * ```ts
     * const withdrawal = await client.withdrawals.create({
     *   amount: 6.9,
     *   company_id: 'biz_xxxxxxxxxxxxxx',
     *   currency: 'usd',
     * });
     * ```
     */
    create(body, options) {
        return this._client.post('/withdrawals', { body, ...options });
    }
    /**
     * Retrieves a withdrawal by ID
     *
     * Required permissions:
     *
     * - `payout:withdrawal:read`
     * - `payout:destination:read`
     *
     * @example
     * ```ts
     * const withdrawal = await client.withdrawals.retrieve(
     *   'wdrl_xxxxxxxxxxxxx',
     * );
     * ```
     */
    retrieve(id, options) {
        return this._client.get((0, path_1.path) `/withdrawals/${id}`, options);
    }
    /**
     * Lists withdrawals
     *
     * Required permissions:
     *
     * - `payout:withdrawal:read`
     *
     * @example
     * ```ts
     * // Automatically fetches more pages as needed.
     * for await (const withdrawalListResponse of client.withdrawals.list(
     *   { company_id: 'biz_xxxxxxxxxxxxxx' },
     * )) {
     *   // ...
     * }
     * ```
     */
    list(query, options) {
        return this._client.getAPIList('/withdrawals', (pagination_1.CursorPage), { query, ...options });
    }
}
exports.Withdrawals = Withdrawals;
//# sourceMappingURL=withdrawals.js.map