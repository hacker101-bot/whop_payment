"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethods = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class PaymentMethods extends resource_1.APIResource {
    /**
     * A payment method is a stored representation of how a customer intends to pay,
     * such as a card, bank account, or digital wallet. It holds the necessary billing
     * details and can be attached to a member for future one-time or recurring
     * charges. This lets you reuse the same payment credentials across multiple
     * payments. You must provide exactly one of company_id or member_id.
     *
     * Required permissions:
     *
     * - `member:payment_methods:read`
     */
    retrieve(id, query = {}, options) {
        return this._client.get((0, path_1.path) `/payment_methods/${id}`, { query, ...options });
    }
    /**
     * A payment method is a stored representation of how a customer intends to pay,
     * such as a card, bank account, or digital wallet. It holds the necessary billing
     * details and can be attached to a member for future one-time or recurring
     * charges. This lets you reuse the same payment credentials across multiple
     * payments.
     *
     * Required permissions:
     *
     * - `member:payment_methods:read`
     */
    list(query = {}, options) {
        return this._client.getAPIList('/payment_methods', (pagination_1.CursorPage), {
            query,
            ...options,
        });
    }
}
exports.PaymentMethods = PaymentMethods;
//# sourceMappingURL=payment-methods.js.map