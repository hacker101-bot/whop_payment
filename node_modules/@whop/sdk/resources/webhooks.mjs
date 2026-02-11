// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { Webhook as Webhook_ } from 'standardwebhooks';
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class Webhooks extends APIResource {
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
        return this._client.get(path `/webhooks/${id}`, options);
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
        return this._client.patch(path `/webhooks/${id}`, { body, ...options });
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
        return this._client.getAPIList('/webhooks', (CursorPage), { query, ...options });
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
        return this._client.delete(path `/webhooks/${id}`, options);
    }
    unwrap(body, { headers, key }) {
        if (headers !== undefined) {
            const keyStr = key === undefined ? this._client.webhookKey : key;
            if (keyStr === null)
                throw new Error('Webhook key must not be null in order to unwrap');
            const wh = new Webhook_(keyStr);
            wh.verify(body, headers);
        }
        return JSON.parse(body);
    }
}
//# sourceMappingURL=webhooks.mjs.map