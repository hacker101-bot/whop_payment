// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class DmMembers extends APIResource {
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
        return this._client.get(path `/dm_members/${id}`, options);
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
        return this._client.patch(path `/dm_members/${id}`, { body, ...options });
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
        return this._client.getAPIList('/dm_members', (CursorPage), { query, ...options });
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
        return this._client.delete(path `/dm_members/${id}`, options);
    }
}
//# sourceMappingURL=dm-members.mjs.map