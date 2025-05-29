"use strict";
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlatChildrenFolders = exports.mapNodes = exports.filterNodes = exports.folderViewFilter = exports.isTrashOrNestedInIt = exports.isNestedInTrash = void 0;
const lodash_1 = require("lodash");
const folders_1 = require("../../../constants/folders");
const folders_2 = require("../../../helpers/folders");
const hasId = (f, id) => f.id.split(':').includes(id);
const isTrash = (f) => hasId(f, folders_1.FOLDERS.TRASH);
const isNestedInTrash = (item) => !!item?.absFolderPath?.includes(`/Trash/`);
exports.isNestedInTrash = isNestedInTrash;
const isTrashOrNestedInIt = (item) => isTrash(item) || (0, exports.isNestedInTrash)(item);
exports.isTrashOrNestedInIt = isTrashOrNestedInIt;
const folderViewFilter = (v) => (deep) => (f) => f.view === v || !deep || (typeof f.view === 'undefined' && !(0, folders_2.isRoot)(f.id));
exports.folderViewFilter = folderViewFilter;
const filterNodes = (children, f, sortFunction, deep) => {
    const childrenSorted = sortFunction ? (0, lodash_1.sortBy)(children, sortFunction) : children;
    return childrenSorted
        .filter(f(deep))
        .map((i) => ({ ...i, children: (0, exports.filterNodes)(i.children, f, sortFunction, true) }));
};
exports.filterNodes = filterNodes;
const mapNodes = (children, { mapFunction, filterFunction, recursionKey, sortFunction, deep }) => (0, lodash_1.sortBy)(children, sortFunction).reduce((acc, folder) => {
    if (filterFunction(deep)(folder)) {
        acc.push({
            ...mapFunction(folder),
            [recursionKey]: (0, exports.mapNodes)(folder.children, {
                mapFunction,
                filterFunction,
                recursionKey,
                sortFunction,
                deep: true
            })
        });
    }
    return acc;
}, []);
exports.mapNodes = mapNodes;
/**
 * Recursive function that returns a flat map of the children folders
 * @param children
 */
const getFlatChildrenFolders = (children) => {
    let destination = {};
    children.forEach((child) => {
        destination[child.id] = child;
        if (child.children) {
            destination = { ...destination, ...(0, exports.getFlatChildrenFolders)(child.children) };
        }
    });
    return destination;
};
exports.getFlatChildrenFolders = getFlatChildrenFolders;
//# sourceMappingURL=utils.js.map