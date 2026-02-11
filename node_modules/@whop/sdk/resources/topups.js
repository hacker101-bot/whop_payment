"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topups = void 0;
const resource_1 = require("../core/resource.js");
class Topups extends resource_1.APIResource {
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
exports.Topups = Topups;
//# sourceMappingURL=topups.js.map