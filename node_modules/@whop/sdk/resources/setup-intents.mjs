// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class SetupIntents extends APIResource {
    /**
     * A setup intent is an object used to securely collect and store a member’s
     * payment method for future use without charging them immediately. It handles
     * authentication steps up front so future off-session payments can be completed
     * smoothly. This ensures the payment method is verified and ready for later
     * billing.
     *
     * Required permissions:
     *
     * - `payment:setup_intent:read`
     * - `member:basic:read`
     * - `member:email:read`
     */
    retrieve(id, options) {
        return this._client.get(path `/setup_intents/${id}`, options);
    }
    /**
     * A setup intent is an object used to securely collect and store a member’s
     * payment method for future use without charging them immediately. It handles
     * authentication steps up front so future off-session payments can be completed
     * smoothly. This ensures the payment method is verified and ready for later
     * billing.
     *
     * Required permissions:
     *
     * - `payment:setup_intent:read`
     * - `member:basic:read`
     * - `member:email:read`
     */
    list(query, options) {
        return this._client.getAPIList('/setup_intents', (CursorPage), {
            query,
            ...options,
        });
    }
}
//# sourceMappingURL=setup-intents.mjs.map