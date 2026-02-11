// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class Leads extends APIResource {
    /**
     * Creates a new lead
     *
     * Required permissions:
     *
     * - `lead:manage`
     * - `member:email:read`
     * - `access_pass:basic:read`
     * - `member:basic:read`
     *
     * @example
     * ```ts
     * const lead = await client.leads.create({
     *   company_id: 'biz_xxxxxxxxxxxxxx',
     * });
     * ```
     */
    create(body, options) {
        return this._client.post('/leads', { body, ...options });
    }
    /**
     * Retrieves a lead by ID
     *
     * Required permissions:
     *
     * - `lead:basic:read`
     * - `member:email:read`
     * - `access_pass:basic:read`
     * - `member:basic:read`
     *
     * @example
     * ```ts
     * const lead = await client.leads.retrieve(
     *   'lead_xxxxxxxxxxxxx',
     * );
     * ```
     */
    retrieve(id, options) {
        return this._client.get(path `/leads/${id}`, options);
    }
    /**
     * Updates a lead
     *
     * Required permissions:
     *
     * - `lead:manage`
     * - `member:email:read`
     * - `access_pass:basic:read`
     * - `member:basic:read`
     *
     * @example
     * ```ts
     * const lead = await client.leads.update(
     *   'lead_xxxxxxxxxxxxx',
     * );
     * ```
     */
    update(id, body = {}, options) {
        return this._client.patch(path `/leads/${id}`, { body, ...options });
    }
    /**
     * Lists leads for a company
     *
     * Required permissions:
     *
     * - `lead:basic:read`
     * - `member:email:read`
     * - `access_pass:basic:read`
     * - `member:basic:read`
     *
     * @example
     * ```ts
     * // Automatically fetches more pages as needed.
     * for await (const leadListResponse of client.leads.list({
     *   company_id: 'biz_xxxxxxxxxxxxxx',
     * })) {
     *   // ...
     * }
     * ```
     */
    list(query, options) {
        return this._client.getAPIList('/leads', (CursorPage), { query, ...options });
    }
}
//# sourceMappingURL=leads.mjs.map