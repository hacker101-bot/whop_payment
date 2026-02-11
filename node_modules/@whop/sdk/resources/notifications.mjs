// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
export class Notifications extends APIResource {
    /**
     * Queues a notification to be sent to users in an experience or company team
     *
     * Required permissions:
     *
     * - `notification:create`
     *
     * @example
     * ```ts
     * const notification = await client.notifications.create({
     *   company_id: 'biz_xxxxxxxxxxxxxx',
     *   content: 'content',
     *   title: 'title',
     * });
     * ```
     */
    create(body, options) {
        return this._client.post('/notifications', { body, ...options });
    }
}
//# sourceMappingURL=notifications.mjs.map