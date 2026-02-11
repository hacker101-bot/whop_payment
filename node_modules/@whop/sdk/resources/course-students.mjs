// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../core/resource.mjs";
import { CursorPage } from "../core/pagination.mjs";
import { path } from "../internal/utils/path.mjs";
export class CourseStudents extends APIResource {
    /**
     * Retrieves a course student by interaction ID
     *
     * Required permissions:
     *
     * - `courses:read`
     * - `course_analytics:read`
     */
    retrieve(id, options) {
        return this._client.get(path `/course_students/${id}`, options);
    }
    /**
     * Lists students for a course
     *
     * Required permissions:
     *
     * - `courses:read`
     * - `course_analytics:read`
     */
    list(query, options) {
        return this._client.getAPIList('/course_students', (CursorPage), {
            query,
            ...options,
        });
    }
}
//# sourceMappingURL=course-students.mjs.map