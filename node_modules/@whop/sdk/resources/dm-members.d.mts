import { APIResource } from "../core/resource.mjs";
import { APIPromise } from "../core/api-promise.mjs";
import { CursorPage, type CursorPageParams, PagePromise } from "../core/pagination.mjs";
import { RequestOptions } from "../internal/request-options.mjs";
export declare class DmMembers extends APIResource {
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
    create(body: DmMemberCreateParams, options?: RequestOptions): APIPromise<DmMember>;
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
    retrieve(id: string, options?: RequestOptions): APIPromise<DmMember>;
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
    update(id: string, body?: DmMemberUpdateParams | null | undefined, options?: RequestOptions): APIPromise<DmMember>;
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
    list(query: DmMemberListParams, options?: RequestOptions): PagePromise<DmMemberListResponsesCursorPage, DmMemberListResponse>;
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
    delete(id: string, options?: RequestOptions): APIPromise<DmMemberDeleteResponse>;
}
export type DmMemberListResponsesCursorPage = CursorPage<DmMemberListResponse>;
/**
 * The notification preferences for a DMs feed member
 */
export type DmFeedMemberNotificationPreferences = 'all' | 'mentions' | 'none';
/**
 * The statuses of a DMs feed member
 */
export type DmFeedMemberStatuses = 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived';
/**
 * Represents a member of a DM channel
 */
export interface DmMember {
    /**
     * The unique identifier for the entity
     */
    id: string;
    /**
     * The ID of the DM channel
     */
    channel_id: string;
    /**
     * Timestamp when the member last viewed the channel (in milliseconds since Unix
     * epoch)
     */
    last_viewed_at: string | null;
    /**
     * The notification preference for this member (all, mentions, none)
     */
    notification_preference: DmFeedMemberNotificationPreferences;
    /**
     * The status of the membership (requested, accepted, rejected)
     */
    status: DmFeedMemberStatuses;
    /**
     * The ID of the user who is a member of the channel
     */
    user_id: string;
}
/**
 * Represents a member of a DM channel
 */
export interface DmMemberListResponse {
    /**
     * The unique identifier for the entity
     */
    id: string;
    /**
     * The ID of the DM channel
     */
    channel_id: string;
    /**
     * Timestamp when the member last viewed the channel (in milliseconds since Unix
     * epoch)
     */
    last_viewed_at: string | null;
    /**
     * The status of the membership (requested, accepted, rejected)
     */
    status: DmFeedMemberStatuses;
    /**
     * The ID of the user who is a member of the channel
     */
    user_id: string;
}
/**
 * Represents `true` or `false` values.
 */
export type DmMemberDeleteResponse = boolean;
export interface DmMemberCreateParams {
    /**
     * The ID of the DM channel to add the member to
     */
    channel_id: string;
    /**
     * The ID of the user to add to the channel
     */
    user_id: string;
}
export interface DmMemberUpdateParams {
    /**
     * The notification preferences for a DMs feed member
     */
    notification_preference?: DmFeedMemberNotificationPreferences | null;
    /**
     * The statuses of a DMs feed member
     */
    status?: DmFeedMemberStatuses | null;
}
export interface DmMemberListParams extends CursorPageParams {
    /**
     * The ID of the DM channel to list members for
     */
    channel_id: string;
    /**
     * Returns the elements in the list that come before the specified cursor.
     */
    before?: string | null;
    /**
     * Returns the first _n_ elements from the list.
     */
    first?: number | null;
    /**
     * Returns the last _n_ elements from the list.
     */
    last?: number | null;
}
export declare namespace DmMembers {
    export { type DmFeedMemberNotificationPreferences as DmFeedMemberNotificationPreferences, type DmFeedMemberStatuses as DmFeedMemberStatuses, type DmMember as DmMember, type DmMemberListResponse as DmMemberListResponse, type DmMemberDeleteResponse as DmMemberDeleteResponse, type DmMemberListResponsesCursorPage as DmMemberListResponsesCursorPage, type DmMemberCreateParams as DmMemberCreateParams, type DmMemberUpdateParams as DmMemberUpdateParams, type DmMemberListParams as DmMemberListParams, };
}
//# sourceMappingURL=dm-members.d.mts.map