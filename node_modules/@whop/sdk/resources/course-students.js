"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseStudents = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class CourseStudents extends resource_1.APIResource {
    /**
     * Retrieves a course student by interaction ID
     *
     * Required permissions:
     *
     * - `courses:read`
     * - `course_analytics:read`
     */
    retrieve(id, options) {
        return this._client.get((0, path_1.path) `/course_students/${id}`, options);
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
        return this._client.getAPIList('/course_students', (pagination_1.CursorPage), {
            query,
            ...options,
        });
    }
}
exports.CourseStudents = CourseStudents;
//# sourceMappingURL=course-students.js.map