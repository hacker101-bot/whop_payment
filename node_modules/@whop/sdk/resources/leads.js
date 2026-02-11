"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leads = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class Leads extends resource_1.APIResource {
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
        return this._client.get((0, path_1.path) `/leads/${id}`, options);
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
        return this._client.patch((0, path_1.path) `/leads/${id}`, { body, ...options });
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
        return this._client.getAPIList('/leads', (pagination_1.CursorPage), { query, ...options });
    }
}
exports.Leads = Leads;
//# sourceMappingURL=leads.js.map