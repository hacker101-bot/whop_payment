"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountLinks = void 0;
const resource_1 = require("../core/resource.js");
class AccountLinks extends resource_1.APIResource {
    /**
     * Generates a url that a user can be directed to in order to access their
     * sub-merchant account. For example, they can visit the hosted payouts portal or
     * the hosted KYC onboarding flow.
     *
     * @example
     * ```ts
     * const accountLink = await client.accountLinks.create({
     *   company_id: 'biz_xxxxxxxxxxxxxx',
     *   refresh_url: 'refresh_url',
     *   return_url: 'return_url',
     *   use_case: 'account_onboarding',
     * });
     * ```
     */
    create(body, options) {
        return this._client.post('/account_links', { body, ...options });
    }
}
exports.AccountLinks = AccountLinks;
//# sourceMappingURL=account-links.js.map