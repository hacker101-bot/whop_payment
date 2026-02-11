"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifications = void 0;
const resource_1 = require("../core/resource.js");
class Notifications extends resource_1.APIResource {
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
exports.Notifications = Notifications;
//# sourceMappingURL=notifications.js.map