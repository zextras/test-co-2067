"use strict";
/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSortedTagsArray = exports.getTags = exports.useTags = void 0;
const lodash_1 = require("lodash");
const store_1 = require("./store");
function sortTags(tags) {
    return (0, lodash_1.orderBy)(Object.values(tags), (tag) => tag.name.toLowerCase(), 'asc');
}
const useTags = (ids) => (0, store_1.useTagStore)((state) => (ids ? (0, lodash_1.pick)(state.tags, ids) : state.tags));
exports.useTags = useTags;
const getTags = (ids) => ids ? (0, lodash_1.pick)(store_1.useTagStore.getState().tags, ids) : store_1.useTagStore.getState().tags;
exports.getTags = getTags;
const useSortedTagsArray = () => (0, store_1.useTagStore)((state) => sortTags(state.tags));
exports.useSortedTagsArray = useSortedTagsArray;
//# sourceMappingURL=hooks.js.map