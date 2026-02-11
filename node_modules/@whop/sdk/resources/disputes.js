"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disputes = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class Disputes extends resource_1.APIResource {
    /**
     * Retrieves a Dispute by ID
     *
     * Required permissions:
     *
     * - `payment:dispute:read`
     * - `plan:basic:read`
     * - `access_pass:basic:read`
     * - `company:basic:read`
     * - `payment:basic:read`
     * - `member:email:read`
     * - `member:basic:read`
     * - `member:phone:read`
     */
    retrieve(id, options) {
        return this._client.get((0, path_1.path) `/disputes/${id}`, options);
    }
    /**
     * Lists disputes the current actor has access to
     *
     * Required permissions:
     *
     * - `payment:dispute:read`
     * - `plan:basic:read`
     * - `access_pass:basic:read`
     * - `company:basic:read`
     * - `payment:basic:read`
     */
    list(query, options) {
        return this._client.getAPIList('/disputes', (pagination_1.CursorPage), { query, ...options });
    }
    /**
     * Submit a payment dispute to the payment processor for review. Once submitted, no
     * further edits can be made.
     *
     * Required permissions:
     *
     * - `payment:dispute`
     * - `plan:basic:read`
     * - `access_pass:basic:read`
     * - `company:basic:read`
     * - `payment:basic:read`
     * - `member:email:read`
     * - `member:basic:read`
     * - `member:phone:read`
     */
    submitEvidence(id, options) {
        return this._client.post((0, path_1.path) `/disputes/${id}/submit_evidence`, options);
    }
    /**
     * Update a dispute with evidence data to attempt to win the dispute.
     *
     * Required permissions:
     *
     * - `payment:dispute`
     * - `plan:basic:read`
     * - `access_pass:basic:read`
     * - `company:basic:read`
     * - `payment:basic:read`
     * - `member:email:read`
     * - `member:basic:read`
     * - `member:phone:read`
     */
    updateEvidence(id, body = {}, options) {
        return this._client.post((0, path_1.path) `/disputes/${id}/update_evidence`, { body, ...options });
    }
}
exports.Disputes = Disputes;
//# sourceMappingURL=disputes.js.map