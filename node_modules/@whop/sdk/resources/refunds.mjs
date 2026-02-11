// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class Refunds extends APIResource {
    /**
     * Retrieves a Refund by ID
     *
     * Required permissions:
     *
     * - `payment:basic:read`
     * - `member:email:read`
     * - `member:basic:read`
     * - `member:phone:read`
     */
    retrieve(id, options) {
        return this._client.get(path `/refunds/${id}`, options);
    }
    /**
     * Lists Refunds for a payment.
     *
     * Required permissions:
     *
     * - `payment:basic:read`
     */
    list(query, options) {
        return this._client.getAPIList('/refunds', (CursorPage), { query, ...options });
    }
}
//# sourceMappingURL=refunds.mjs.map