"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLessons = void 0;
const resource_1 = require("../core/resource.js");
const pagination_1 = require("../core/pagination.js");
const path_1 = require("../internal/utils/path.js");
class CourseLessons extends resource_1.APIResource {
    /**
     * Creates a new course lesson
     *
     * Required permissions:
     *
     * - `courses:update`
     *
     * @example
     * ```ts
     * const lesson = await client.courseLessons.create({
     *   chapter_id: 'chap_xxxxxxxxxxxxx',
     *   lesson_type: 'text',
     * });
     * ```
     */
    create(body, options) {
        return this._client.post('/course_lessons', { body, ...options });
    }
    /**
     * Retrieves a course lesson by ID
     *
     * Required permissions:
     *
     * - `courses:read`
     *
     * @example
     * ```ts
     * const lesson = await client.courseLessons.retrieve(
     *   'lesn_xxxxxxxxxxxxx',
     * );
     * ```
     */
    retrieve(id, options) {
        return this._client.get((0, path_1.path) `/course_lessons/${id}`, options);
    }
    /**
     * Updates a course lesson
     *
     * Required permissions:
     *
     * - `courses:update`
     *
     * @example
     * ```ts
     * const lesson = await client.courseLessons.update(
     *   'lesn_xxxxxxxxxxxxx',
     * );
     * ```
     */
    update(id, body = {}, options) {
        return this._client.patch((0, path_1.path) `/course_lessons/${id}`, { body, ...options });
    }
    /**
     * Lists lessons for a course or chapter
     *
     * Required permissions:
     *
     * - `courses:read`
     *
     * @example
     * ```ts
     * // Automatically fetches more pages as needed.
     * for await (const courseLessonListResponse of client.courseLessons.list()) {
     *   // ...
     * }
     * ```
     */
    list(query = {}, options) {
        return this._client.getAPIList('/course_lessons', (pagination_1.CursorPage), {
            query,
            ...options,
        });
    }
    /**
     * Deletes a course lesson
     *
     * Required permissions:
     *
     * - `courses:update`
     *
     * @example
     * ```ts
     * const courseLesson = await client.courseLessons.delete(
     *   'lesn_xxxxxxxxxxxxx',
     * );
     * ```
     */
    delete(id, options) {
        return this._client.delete((0, path_1.path) `/course_lessons/${id}`, options);
    }
    /**
     * Marks a course lesson as completed
     *
     * @example
     * ```ts
     * const response = await client.courseLessons.markAsCompleted(
     *   'lesson_id',
     * );
     * ```
     */
    markAsCompleted(lessonID, options) {
        return this._client.post((0, path_1.path) `/course_lessons/${lessonID}/mark_as_completed`, options);
    }
    /**
     * Starts a course lesson
     *
     * @example
     * ```ts
     * const response = await client.courseLessons.start(
     *   'lesson_id',
     * );
     * ```
     */
    start(lessonID, options) {
        return this._client.post((0, path_1.path) `/course_lessons/${lessonID}/start`, options);
    }
    /**
     * Submits answers for a course assessment
     *
     * @example
     * ```ts
     * const response =
     *   await client.courseLessons.submitAssessment('lesson_id', {
     *     answers: [{ question_id: 'question_id' }],
     *   });
     * ```
     */
    submitAssessment(lessonID, body, options) {
        return this._client.post((0, path_1.path) `/course_lessons/${lessonID}/submit_assessment`, { body, ...options });
    }
}
exports.CourseLessons = CourseLessons;
//# sourceMappingURL=course-lessons.js.map