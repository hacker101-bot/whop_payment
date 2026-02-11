"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhooks = void 0;
const resource_1 = require("../core/resource.js");
const standardwebhooks_1 = require("standardwebhooks");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class Webhooks extends resource_1.APIResource {
    /**
     * Creates a new webhook
     *
     * Required permissions:
     *
     * - `developer:manage_webhook`
     *
     * @example
     * ```ts
     * const webhook = await client.webhooks.create({
     *   url: 'https://example.com/path',
     * });
     * ```
     */
    create(body, options) {
        return this._client.post('/webhooks', { body, ...options });
    }
    /**
     * Retrieves a webhook by ID
     *
     * Required permissions:
     *
     * - `developer:manage_webhook`
     *
     * @example
     * ```ts
     * const webhook = await client.webhooks.retrieve(
     *   'hook_xxxxxxxxxxxxx',
     * );
     * ```
     */
    retrieve(id, options) {
        return this._client.get((0, path_1.path) `/webhooks/${id}`, options);
    }
    /**
     * Updates a webhook
     *
     * Required permissions:
     *
     * - `developer:manage_webhook`
     *
     * @example
     * ```ts
     * const webhook = await client.webhooks.update(
     *   'hook_xxxxxxxxxxxxx',
     * );
     * ```
     */
    update(id, body = {}, options) {
        return this._client.patch((0, path_1.path) `/webhooks/${id}`, { body, ...options });
    }
    /**
     * Lists webhooks for a company
     *
     * Required permissions:
     *
     * - `developer:manage_webhook`
     *
     * @example
     * ```ts
     * // Automatically fetches more pages as needed.
     * for await (const webhookListResponse of client.webhooks.list(
     *   { company_id: 'biz_xxxxxxxxxxxxxx' },
     * )) {
     *   // ...
     * }
     * ```
     */
    list(query, options) {
        return this._client.getAPIList('/webhooks', (pagination_1.CursorPage), { query, ...options });
    }
    /**
     * Deletes a webhook
     *
     * Required permissions:
     *
     * - `developer:manage_webhook`
     *
     * @example
     * ```ts
     * const webhook = await client.webhooks.delete(
     *   'hook_xxxxxxxxxxxxx',
     * );
     * ```
     */
    delete(id, options) {
        return this._client.delete((0, path_1.path) `/webhooks/${id}`, options);
    }
    unwrap(body, { headers, key }) {
        if (headers !== undefined) {
            const keyStr = key === undefined ? this._client.webhookKey : key;
            if (keyStr === null)
                throw new Error('Webhook key must not be null in order to unwrap');
            const wh = new standardwebhooks_1.Webhook(keyStr);
            wh.verify(body, headers);
        }
        return JSON.parse(body);
    }
}
exports.Webhooks = Webhooks;
//# sourceMappingURL=webhooks.js.map