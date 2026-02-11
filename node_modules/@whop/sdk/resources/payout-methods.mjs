// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class PayoutMethods extends APIResource {
    /**
     * Retrieves a payout method by ID
     *
     * Required permissions:
     *
     * - `payout:destination:read`
     */
    retrieve(id, options) {
        return this._client.get(path `/payout_methods/${id}`, options);
    }
    /**
     * Lists payout destinations for a company
     *
     * Required permissions:
     *
     * - `payout:destination:read`
     */
    list(query, options) {
        return this._client.getAPIList('/payout_methods', (CursorPage), {
            query,
            ...options,
        });
    }
}
//# sourceMappingURL=payout-methods.mjs.map