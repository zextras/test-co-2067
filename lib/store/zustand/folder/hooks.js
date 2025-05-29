"use strict";
/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpdateFolder = exports.useUpdateFolder = exports.getSearchFolders = exports.useSearchFolders = exports.getSearchFolder = exports.useSearchFolder = exports.getFoldersArrayByRoot = exports.useFoldersMapByRoot = exports.getRootByUser = exports.useRootByUser = exports.getRootsMap = exports.useRootsMap = exports.getRootsArray = exports.useRootsArray = exports.getRoot = exports.useRoot = exports.getLinksArray = exports.getFoldersMap = exports.useFoldersMap = exports.getFolder = exports.useFolder = void 0;
exports.getRootAccountId = getRootAccountId;
const react_1 = require("react");
const lodash_1 = require("lodash");
const store_1 = require("./store");
const utils_1 = require("./utils");
const folders_1 = require("../../../constants/folders");
const utils_2 = require("../../../constants/utils");
/**
 * Returns the folder with given ID or undefined
 * @params id */
const useFolder = (id) => (0, store_1.useFolderStore)((s) => s.folders?.[id]);
exports.useFolder = useFolder;
/**
 * Returns the folder with given ID or undefined
 * @params id */
const getFolder = (id) => store_1.useFolderStore.getState()?.folders?.[id];
exports.getFolder = getFolder;
/**
 * Returns a folders' map including roots and links. Each folder has its own tree structure included inside its children
 */
const useFoldersMap = () => (0, store_1.useFolderStore)((s) => s.folders);
exports.useFoldersMap = useFoldersMap;
/**
 * Returns a folders' map including roots and links. Each folder has its own tree structure included inside its children
 */
const getFoldersMap = () => store_1.useFolderStore.getState().folders;
exports.getFoldersMap = getFoldersMap;
/**
 * Returns a folders' array including only links. Each folder has its own tree structure included inside its children
 */
const getLinksArray = (view) => (0, lodash_1.filter)((0, lodash_1.values)(store_1.useFolderStore.getState().folders), (folder) => {
    if (view && folder.view !== view) {
        return false;
    }
    return folder.isLink;
});
exports.getLinksArray = getLinksArray;
/**
 * Returns the root folder id for a given folder
 * @param folder a Folder or LinkFolder
 * @returns the root folder id or null if the folder is not a link or the root folder
 */
function getRootFolderId(folder) {
    const parent = folder?.parent && (0, exports.getFolder)(folder.parent);
    if ('oname' in folder && folder?.oname === utils_2.ROOT_NAME) {
        return folder.id;
    }
    if (parent) {
        return getRootFolderId(parent);
    }
    return folder.id;
}
/**
 * Returns the root folder of the provided folderId or undefined
 * @params id
 * @returns the root folder or undefined
 * */
const useRoot = (id) => (0, store_1.useFolderStore)((s) => {
    const folder = s.folders?.[id];
    if (folder) {
        const rootFolderId = getRootFolderId(folder);
        return s.folders?.[rootFolderId];
    }
    return undefined;
});
exports.useRoot = useRoot;
/**
 * Returns the root folder of the provided folderId or undefined
 * @params id
 * @returns the root folder or undefined
 * */
const getRoot = (id) => {
    const folder = store_1.useFolderStore.getState().folders?.[id];
    if (folder) {
        const rootFolderId = getRootFolderId(folder);
        return store_1.useFolderStore.getState().folders?.[rootFolderId];
    }
    return undefined;
};
exports.getRoot = getRoot;
/**
 * Returns a roots' array. Each root has its own tree structure included inside its children
 */
const useRootsArray = () => (0, store_1.useFolderStore)((s) => (0, lodash_1.filter)(s.folders, (f) => f.id?.split(':')?.includes(folders_1.FOLDERS.USER_ROOT)));
exports.useRootsArray = useRootsArray;
/**
 * Returns a roots' array. Each root has its own tree structure included inside its children
 */
const getRootsArray = () => (0, lodash_1.filter)(store_1.useFolderStore.getState().folders, (f) => f.id?.split(':')?.includes(folders_1.FOLDERS.USER_ROOT));
exports.getRootsArray = getRootsArray;
/**
 * Returns a roots' map. Each root has its own tree structure included inside its children
 */
const useRootsMap = () => (0, store_1.useFolderStore)((s) => (0, lodash_1.keyBy)((0, lodash_1.filter)(s.folders, (f) => f.id?.split(':')?.includes(folders_1.FOLDERS.USER_ROOT)), 'id'));
exports.useRootsMap = useRootsMap;
/**
 * Returns a roots' map. Each root has its own tree structure included inside its children
 */
const getRootsMap = () => (0, lodash_1.keyBy)((0, lodash_1.filter)(store_1.useFolderStore.getState().folders, (f) => f.id?.split(':')?.includes(folders_1.FOLDERS.USER_ROOT)), 'id');
exports.getRootsMap = getRootsMap;
// ROOTS BY VIEW
/**
 * Returns a root with given user ID.
 * @params userId
 */
const useRootByUser = (userId) => (0, store_1.useFolderStore)((s) => (0, lodash_1.find)(s.folders, (f) => f.name === userId));
exports.useRootByUser = useRootByUser;
/**
 * Returns a root with given user ID.
 * @params userId
 */
const getRootByUser = (userId) => {
    const { folders } = store_1.useFolderStore.getState();
    return (0, lodash_1.find)(folders, (f) => f.name === userId);
};
exports.getRootByUser = getRootByUser;
/**
 * Returns the root account id for a given folder
 * @param folder a Folder or LinkFolder
 * @returns the root account id or null if the folder is not a link or the root folder
 */
function getRootAccountId(id) {
    const roots = (0, exports.getRootsArray)();
    const root = (0, lodash_1.find)(roots, (r) => (0, lodash_1.some)(r.id?.split(':'), (v) => id?.split(':')?.includes(v)));
    return root?.id;
}
/**
 * Return a flat array of folder that are children of the given root
 * @param rootId
 */
const useFoldersMapByRoot = (rootId) => {
    const root = (0, exports.useRoot)(rootId);
    return (0, react_1.useMemo)(() => (0, utils_1.getFlatChildrenFolders)(root?.children ?? []), [root?.children]);
};
exports.useFoldersMapByRoot = useFoldersMapByRoot;
/**
 * Return a flat array of folder that are children of the given root
 * @param rootId
 */
const getFoldersArrayByRoot = (rootId) => {
    const root = (0, exports.getRoot)(rootId);
    if (!root) {
        return [];
    }
    return Object.values((0, utils_1.getFlatChildrenFolders)(root.children));
};
exports.getFoldersArrayByRoot = getFoldersArrayByRoot;
// SEARCHES
const useSearchFolder = (id) => (0, store_1.useFolderStore)((s) => s.searches?.[id]);
exports.useSearchFolder = useSearchFolder;
const getSearchFolder = (id) => store_1.useFolderStore.getState().searches[id];
exports.getSearchFolder = getSearchFolder;
const useSearchFolders = () => (0, store_1.useFolderStore)((s) => s.searches);
exports.useSearchFolders = useSearchFolders;
const getSearchFolders = () => store_1.useFolderStore.getState().searches;
exports.getSearchFolders = getSearchFolders;
// useful hooks to update the value of a folder. Created because we don't receive acl data from notify when we modify folder grants.
/**
 * Returns a callback function to update a specific folder.
 *
 * @returns callback function to update a specific folder
 */
const useUpdateFolder = () => (0, store_1.useFolderStore)((s) => s.updateFolder);
exports.useUpdateFolder = useUpdateFolder;
/**
 * Returns a callback function to update a specific folder.
 *
 * @returns callback function to update a specific folder
 */
const getUpdateFolder = () => store_1.useFolderStore.getState().updateFolder;
exports.getUpdateFolder = getUpdateFolder;
//# sourceMappingURL=hooks.js.map