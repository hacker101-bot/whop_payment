// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class Reactions extends APIResource {
    /**
     * Creates a new reaction
     *
     * Required permissions:
     *
     * - `chat:read`
     */
    create(body, options) {
        return this._client.post('/reactions', { body, ...options });
    }
    /**
     * Retrieves a reaction
     *
     * Required permissions:
     *
     * - `chat:read`
     */
    retrieve(id, options) {
        return this._client.get(path `/reactions/${id}`, options);
    }
    /**
     * Lists reactions for a post or a message
     *
     * Required permissions:
     *
     * - `chat:read`
     */
    list(query, options) {
        return this._client.getAPIList('/reactions', (CursorPage), { query, ...options });
    }
    /**
     * Deletes a reaction
     *
     * Required permissions:
     *
     * - `chat:read`
     */
    delete(id, params = {}, options) {
        const { emoji } = params ?? {};
        return this._client.delete(path `/reactions/${id}`, { query: { emoji }, ...options });
    }
}
//# sourceMappingURL=reactions.mjs.map