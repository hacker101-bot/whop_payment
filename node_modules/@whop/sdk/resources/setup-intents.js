"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupIntents = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class SetupIntents extends resource_1.APIResource {
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
        return this._client.get((0, path_1.path) `/setup_intents/${id}`, options);
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
        return this._client.getAPIList('/setup_intents', (pagination_1.CursorPage), {
            query,
            ...options,
        });
    }
}
exports.SetupIntents = SetupIntents;
//# sourceMappingURL=setup-intents.js.map