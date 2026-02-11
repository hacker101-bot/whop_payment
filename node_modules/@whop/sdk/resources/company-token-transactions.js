"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyTokenTransactions = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class CompanyTokenTransactions extends resource_1.APIResource {
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
        return this._client.get((0, path_1.path) `/company_token_transactions/${id}`, options);
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
        return this._client.getAPIList('/company_token_transactions', (pagination_1.CursorPage), { query, ...options });
    }
}
exports.CompanyTokenTransactions = CompanyTokenTransactions;
//# sourceMappingURL=company-token-transactions.js.map