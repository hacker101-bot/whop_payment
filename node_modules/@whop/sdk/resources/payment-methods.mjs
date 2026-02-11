// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class PaymentMethods extends APIResource {
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
        return this._client.get(path `/payment_methods/${id}`, { query, ...options });
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
        return this._client.getAPIList('/payment_methods', (CursorPage), {
            query,
            ...options,
        });
    }
}
//# sourceMappingURL=payment-methods.mjs.map