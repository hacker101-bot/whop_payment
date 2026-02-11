"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmChannels = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class DmChannels extends resource_1.APIResource {
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
        return this._client.get((0, path_1.path) `/dm_channels/${id}`, options);
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
        return this._client.patch((0, path_1.path) `/dm_channels/${id}`, { body, ...options });
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
        return this._client.getAPIList('/dm_channels', (pagination_1.CursorPage), { query, ...options });
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
        return this._client.delete((0, path_1.path) `/dm_channels/${id}`, options);
    }
}
exports.DmChannels = DmChannels;
//# sourceMappingURL=dm-channels.js.map