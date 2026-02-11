// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { path } from "../internal/utils/path.mjs";
export class Verifications extends APIResource {
    /**
     * Retrieves a verification by ID
     *
     * Required permissions:
     *
     * - `payout:account:read`
     */
    retrieve(id, options) {
        return this._client.get(path `/verifications/${id}`, options);
    }
}
//# sourceMappingURL=verifications.mjs.map