// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class Payments extends APIResource {
    /**
     * Charge an existing member off-session using one of their stored payment methods.
     * You can provide an existing plan, or create a new one in-line. This endpoint
     * will respond with a payment object immediately, but the payment is processed
     * asynchronously in the background. Use webhooks to be notified when the payment
     * succeeds or fails.
     *
     * Required permissions:
     *
     * - `payment:charge`
     * - `plan:create`
     * - `access_pass:create`
     * - `access_pass:update`
     * - `plan:basic:read`
     * - `access_pass:basic:read`
     * - `member:email:read`
     * - `member:basic:read`
     * - `member:phone:read`
     * - `promo_code:basic:read`
     *
     * @example
     * ```ts
     * const payment = await client.payments.create({
     *   company_id: 'biz_xxxxxxxxxxxxxx',
     *   member_id: 'mber_xxxxxxxxxxxxx',
     *   payment_method_id: 'pmt_xxxxxxxxxxxxxx',
     *   plan: { currency: 'usd' },
     * });
     * ```
     */
    create(body, options) {
        return this._client.post('/payments', { body, ...options });
    }
    /**
     * Retrieves a payment by ID
     *
     * Required permissions:
     *
     * - `payment:basic:read`
     * - `plan:basic:read`
     * - `access_pass:basic:read`
     * - `member:email:read`
     * - `member:basic:read`
     * - `member:phone:read`
     * - `promo_code:basic:read`
     *
     * @example
     * ```ts
     * const payment = await client.payments.retrieve(
     *   'pay_xxxxxxxxxxxxxx',
     * );
     * ```
     */
    retrieve(id, options) {
        return this._client.get(path `/payments/${id}`, options);
    }
    /**
     * Lists payments
     *
     * Required permissions:
     *
     * - `payment:basic:read`
     * - `plan:basic:read`
     * - `access_pass:basic:read`
     * - `member:email:read`
     * - `member:basic:read`
     * - `member:phone:read`
     * - `promo_code:basic:read`
     *
     * @example
     * ```ts
     * // Automatically fetches more pages as needed.
     * for await (const paymentListResponse of client.payments.list(
     *   { company_id: 'biz_xxxxxxxxxxxxxx' },
     * )) {
     *   // ...
     * }
     * ```
     */
    list(query, options) {
        return this._client.getAPIList('/payments', (CursorPage), { query, ...options });
    }
    /**
     * Lists fees for a payment
     *
     * Required permissions:
     *
     * - `payment:basic:read`
     *
     * @example
     * ```ts
     * // Automatically fetches more pages as needed.
     * for await (const paymentListFeesResponse of client.payments.listFees(
     *   'pay_xxxxxxxxxxxxxx',
     * )) {
     *   // ...
     * }
     * ```
     */
    listFees(id, query = {}, options) {
        return this._client.getAPIList(path `/payments/${id}/fees`, (CursorPage), {
            query,
            ...options,
        });
    }
    /**
     * Refunds a payment
     *
     * Required permissions:
     *
     * - `payment:manage`
     * - `plan:basic:read`
     * - `access_pass:basic:read`
     * - `member:email:read`
     * - `member:basic:read`
     * - `member:phone:read`
     * - `promo_code:basic:read`
     *
     * @example
     * ```ts
     * const payment = await client.payments.refund(
     *   'pay_xxxxxxxxxxxxxx',
     * );
     * ```
     */
    refund(id, body = {}, options) {
        return this._client.post(path `/payments/${id}/refund`, { body, ...options });
    }
    /**
     * Retries a payment
     *
     * Required permissions:
     *
     * - `payment:manage`
     * - `plan:basic:read`
     * - `access_pass:basic:read`
     * - `member:email:read`
     * - `member:basic:read`
     * - `member:phone:read`
     * - `promo_code:basic:read`
     *
     * @example
     * ```ts
     * const payment = await client.payments.retry(
     *   'pay_xxxxxxxxxxxxxx',
     * );
     * ```
     */
    retry(id, options) {
        return this._client.post(path `/payments/${id}/retry`, options);
    }
    /**
     * Voids a payment
     *
     * Required permissions:
     *
     * - `payment:manage`
     * - `plan:basic:read`
     * - `access_pass:basic:read`
     * - `member:email:read`
     * - `member:basic:read`
     * - `member:phone:read`
     * - `promo_code:basic:read`
     *
     * @example
     * ```ts
     * const payment = await client.payments.void(
     *   'pay_xxxxxxxxxxxxxx',
     * );
     * ```
     */
    void(id, options) {
        return this._client.post(path `/payments/${id}/void`, options);
    }
}
//# sourceMappingURL=payments.mjs.map