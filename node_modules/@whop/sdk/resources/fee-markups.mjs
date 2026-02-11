// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class FeeMarkups extends APIResource {
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
        return this._client.getAPIList('/fee_markups', (CursorPage), { query, ...options });
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
        return this._client.delete(path `/fee_markups/${id}`, options);
    }
}
//# sourceMappingURL=fee-markups.mjs.map