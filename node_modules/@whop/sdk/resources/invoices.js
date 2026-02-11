"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoices = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class Invoices extends resource_1.APIResource {
    /**
     * Creates an invoice
     *
     * Required permissions:
     *
     * - `invoice:create`
     * - `plan:basic:read`
     *
     * @example
     * ```ts
     * const invoice = await client.invoices.create({
     *   collection_method: 'send_invoice',
     *   company_id: 'biz_xxxxxxxxxxxxxx',
     *   due_date: '2023-12-01T05:00:00.401Z',
     *   member_id: 'mber_xxxxxxxxxxxxx',
     *   plan: {},
     *   product: { title: 'title' },
     * });
     * ```
     */
    create(body, options) {
        return this._client.post('/invoices', { body, ...options });
    }
    /**
     * Retrieves an invoice by ID or token
     *
     * Required permissions:
     *
     * - `invoice:basic:read`
     * - `plan:basic:read`
     */
    retrieve(id, options) {
        return this._client.get((0, path_1.path) `/invoices/${id}`, options);
    }
    /**
     * Lists invoices
     *
     * Required permissions:
     *
     * - `invoice:basic:read`
     * - `plan:basic:read`
     */
    list(query, options) {
        return this._client.getAPIList('/invoices', (pagination_1.CursorPage), { query, ...options });
    }
    /**
     * Void an invoice
     *
     * Required permissions:
     *
     * - `invoice:update`
     */
    void(id, options) {
        return this._client.post((0, path_1.path) `/invoices/${id}/void`, options);
    }
}
exports.Invoices = Invoices;
//# sourceMappingURL=invoices.js.map