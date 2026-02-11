// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class DmChannels extends APIResource {
    /**
     * Creates a DM channel
     *
     * @example
     * ```ts
     * const dmChannel = await client.dmChannels.create({
     *   with_user_ids: ['string'],
     * });
     * ```
     */
    create(body, options) {
        return this._client.post('/dm_channels', { body, ...options });
    }
    /**
     * Retrieves a DM channel
     *
     * Required permissions:
     *
     * - `dms:read`
     *
     * @example
     * ```ts
     * const dmChannel = await client.dmChannels.retrieve('id');
     * ```
     */
    retrieve(id, options) {
        return this._client.get(path `/dm_channels/${id}`, options);
    }
    /**
     * Updates a DM channel
     *
     * Required permissions:
     *
     * - `dms:channel:manage`
     *
     * @example
     * ```ts
     * const dmChannel = await client.dmChannels.update('id');
     * ```
     */
    update(id, body = {}, options) {
        return this._client.patch(path `/dm_channels/${id}`, { body, ...options });
    }
    /**
     * Lists DM channels for the current user
     *
     * Required permissions:
     *
     * - `dms:read`
     *
     * @example
     * ```ts
     * // Automatically fetches more pages as needed.
     * for await (const dmChannelListResponse of client.dmChannels.list()) {
     *   // ...
     * }
     * ```
     */
    list(query = {}, options) {
        return this._client.getAPIList('/dm_channels', (CursorPage), { query, ...options });
    }
    /**
     * Deletes a DM channel
     *
     * Required permissions:
     *
     * - `dms:channel:manage`
     *
     * @example
     * ```ts
     * const dmChannel = await client.dmChannels.delete('id');
     * ```
     */
    delete(id, options) {
        return this._client.delete(path `/dm_channels/${id}`, options);
    }
}
//# sourceMappingURL=dm-channels.mjs.map