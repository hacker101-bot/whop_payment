// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class Disputes extends APIResource {
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
        return this._client.get(path `/disputes/${id}`, options);
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
        return this._client.getAPIList('/disputes', (CursorPage), { query, ...options });
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
        return this._client.post(path `/disputes/${id}/submit_evidence`, options);
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
        return this._client.post(path `/disputes/${id}/update_evidence`, { body, ...options });
    }
}
//# sourceMappingURL=disputes.mjs.map