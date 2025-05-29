"use strict";
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleTagNotify = exports.handleTagRefresh = void 0;
const handleTagRefresh = (tags) => {
    if (typeof tags !== 'undefined') {
        return tags.reduce((acc, val) => {
            // eslint-disable-next-line no-param-reassign
            acc[val.id] = val;
            return acc;
        }, {});
    }
    return {};
};
exports.handleTagRefresh = handleTagRefresh;
const handleTagCreated = (tags, created) => {
    if (!created)
        return tags;
    return created.reduce((acc, val) => {
        // eslint-disable-next-line no-param-reassign
        acc[val.id] = val;
        return acc;
    }, tags);
};
const handleTagModified = (tags, modified) => {
    if (!modified)
        return tags;
    return modified.reduce((acc, val) => {
        if (val.id) {
            // eslint-disable-next-line no-param-reassign
            acc[val.id] = { ...tags[val.id], ...val };
        }
        return acc;
    }, tags);
};
const handleTagDeleted = (tags, deleted) => {
    if (!deleted)
        return tags;
    return deleted.reduce((acc, val) => {
        // eslint-disable-next-line no-param-reassign
        delete acc[val];
        return acc;
    }, tags);
};
const handleTagNotify = (notify, state) => handleTagDeleted(handleTagModified(handleTagCreated(state, notify.created?.tag), notify.modified?.tag), notify.deleted);
exports.handleTagNotify = handleTagNotify;
function deletedIdsContainTags({ deletedIds, tagIds }) {
    return deletedIds.some((deletedId) => tagIds?.includes(deletedId));
}
onmessage = ({ data }) => {
    if (data.op === 'refresh' && data.tags)
        postMessage({ tags: (0, exports.handleTagRefresh)(data.tags.tag) });
    const tagIds = data.state && Object.keys(data.state);
    if (data.op === 'notify' &&
        (data.notify.created?.tag ||
            data.notify.modified?.tag ||
            (data.notify.deleted && deletedIdsContainTags({ deletedIds: data.notify.deleted, tagIds }))))
        postMessage({ tags: (0, exports.handleTagNotify)(data.notify, data.state) });
};
//# sourceMappingURL=tags.js.map