"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmMembers = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class DmMembers extends resource_1.APIResource {
    /**
     * Adds a user to a DM channel
     *
     * Required permissions:
     *
     * - `dms:channel:manage`
     *
     * @example
     * ```ts
     * const dmMember = await client.dmMembers.create({
     *   channel_id: 'channel_id',
     *   user_id: 'user_xxxxxxxxxxxxx',
     * });
     * ```
     */
    create(body, options) {
        return this._client.post('/dm_members', { body, ...options });
    }
    /**
     * Retrieves a DM channel member
     *
     * Required permissions:
     *
     * - `dms:read`
     *
     * @example
     * ```ts
     * const dmMember = await client.dmMembers.retrieve('id');
     * ```
     */
    retrieve(id, options) {
        return this._client.get((0, path_1.path) `/dm_members/${id}`, options);
    }
    /**
     * Updates a DM channel member's settings
     *
     * Required permissions:
     *
     * - `dms:channel:manage`
     *
     * @example
     * ```ts
     * const dmMember = await client.dmMembers.update('id');
     * ```
     */
    update(id, body = {}, options) {
        return this._client.patch((0, path_1.path) `/dm_members/${id}`, { body, ...options });
    }
    /**
     * Lists members of a DM channel
     *
     * Required permissions:
     *
     * - `dms:read`
     *
     * @example
     * ```ts
     * // Automatically fetches more pages as needed.
     * for await (const dmMemberListResponse of client.dmMembers.list(
     *   { channel_id: 'channel_id' },
     * )) {
     *   // ...
     * }
     * ```
     */
    list(query, options) {
        return this._client.getAPIList('/dm_members', (pagination_1.CursorPage), { query, ...options });
    }
    /**
     * Removes a user from a DM channel
     *
     * Required permissions:
     *
     * - `dms:channel:manage`
     *
     * @example
     * ```ts
     * const dmMember = await client.dmMembers.delete('id');
     * ```
     */
    delete(id, options) {
        return this._client.delete((0, path_1.path) `/dm_members/${id}`, options);
    }
}
exports.DmMembers = DmMembers;
//# sourceMappingURL=dm-members.js.map