// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
export class Topups extends APIResource {
    /**
     * Add funds to your platform balance by charging a stored payment method.
     *
     * Required permissions:
     *
     * - `payment:charge`
     *
     * @example
     * ```ts
     * const topup = await client.topups.create({
     *   amount: 6.9,
     *   company_id: 'biz_xxxxxxxxxxxxxx',
     *   currency: 'usd',
     *   payment_method_id: 'pmt_xxxxxxxxxxxxxx',
     * });
     * ```
     */
    create(body, options) {
        return this._client.post('/topups', { body, ...options });
    }
}
//# sourceMappingURL=topups.mjs.map