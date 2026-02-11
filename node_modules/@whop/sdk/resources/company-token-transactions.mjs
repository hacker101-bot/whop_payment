// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class CompanyTokenTransactions extends APIResource {
    /**
     * Create a token transaction (add/subtract/transfer) for a member
     *
     * Required permissions:
     *
     * - `company_token_transaction:create`
     * - `member:basic:read`
     * - `company:basic:read`
     *
     * @example
     * ```ts
     * const companyTokenTransaction =
     *   await client.companyTokenTransactions.create({
     *     amount: 6.9,
     *     company_id: 'biz_xxxxxxxxxxxxxx',
     *     destination_user_id: 'destination_user_id',
     *     transaction_type: 'transfer',
     *     user_id: 'user_xxxxxxxxxxxxx',
     *   });
     * ```
     */
    create(body, options) {
        return this._client.post('/company_token_transactions', { body, ...options });
    }
    /**
     * Retrieves a token transaction by ID
     *
     * Required permissions:
     *
     * - `company_token_transaction:read`
     * - `member:basic:read`
     * - `company:basic:read`
     */
    retrieve(id, options) {
        return this._client.get(path `/company_token_transactions/${id}`, options);
    }
    /**
     * Lists token transactions for a company
     *
     * Required permissions:
     *
     * - `company_token_transaction:read`
     * - `member:basic:read`
     * - `company:basic:read`
     */
    list(query, options) {
        return this._client.getAPIList('/company_token_transactions', (CursorPage), { query, ...options });
    }
}
//# sourceMappingURL=company-token-transactions.mjs.map