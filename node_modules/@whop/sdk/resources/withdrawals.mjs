// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class Withdrawals extends APIResource {
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
        return this._client.get(path `/withdrawals/${id}`, options);
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
        return this._client.getAPIList('/withdrawals', (CursorPage), { query, ...options });
    }
}
//# sourceMappingURL=withdrawals.mjs.map