"use strict";
/*
 * SPDX-FileCopyrightText: 2025 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFolders = exports.useFolders = exports.sortFolders = exports.getSortCriteria = void 0;
const react_1 = require("react");
const lodash_1 = require("lodash");
const folders_1 = require("../../../constants/folders");
const folders_2 = require("../../../helpers/folders");
const hooks_1 = require("../../../store/zustand/folder/hooks");
/**
 * calculate the sorting criteria for a given folder
 * system folders are placed before user folders
 * the trash folder is always the last one
 * @param folder
 * @returns the sorting criteria
 */
const getSortCriteria = (folder) => {
    const { id } = (0, folders_2.getFolderIdParts)(folder.id);
    if (id === folders_1.FOLDERS.TRASH) {
        return folders_1.FOLDERS.LAST_SYSTEM_FOLDER_POSITION;
    }
    return parseInt(id ?? '', 10) < 17 ? `   ${id}` : folder.name.toLowerCase();
};
exports.getSortCriteria = getSortCriteria;
/**
 * recursively sort the children of a folder according to a given sort function
 * @param children
 * @param sortFunction
 * @returns the sorted children
 */
const sortFolders = ({ children, sortFunction }) => {
    const childrenSorted = (0, lodash_1.sortBy)(children, sortFunction);
    return childrenSorted.map((folder) => ({
        ...folder,
        children: (0, exports.sortFolders)({ children: folder.children, sortFunction })
    }));
};
exports.sortFolders = sortFolders;
/**
 * sorts the children of the useRootsArray hook according to the specified sort function
 * @returns the sorted children
 */
const useFolders = () => {
    const roots = (0, hooks_1.useRootsArray)();
    return (0, react_1.useMemo)(() => (0, exports.sortFolders)({ children: roots, sortFunction: exports.getSortCriteria }), [roots]);
};
exports.useFolders = useFolders;
/**
 * sorts the children of the getRootsArray hook according to the specified sort function
 * @returns the sorted children
 */
const getFolders = () => {
    const roots = (0, hooks_1.getRootsArray)();
    return (0, exports.sortFolders)({ children: roots, sortFunction: exports.getSortCriteria });
};
exports.getFolders = getFolders;
//# sourceMappingURL=hooks.js.map