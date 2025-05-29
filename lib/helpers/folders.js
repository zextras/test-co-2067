"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdministerAllowed = exports.isDeleteAllowed = exports.isCreateAllowed = exports.isInsertAllowed = exports.isWriteAllowed = exports.isReadAllowed = exports.isTrash = exports.isTrashed = exports.isSystemFolder = exports.isLink = exports.isRoot = exports.isDefaultAccountRoot = exports.isA = exports.getFolderOwnerAccountName = exports.getFolderOtherOwnerAccountName = exports.getFolderIdParts = void 0;
exports.isSharedAccountFolder = isSharedAccountFolder;
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const lodash_1 = require("lodash");
const folders_1 = require("../constants/folders");
const store_1 = require("../store/zustand/folder/store");
const NO_ACCOUNT_NAME = 'No account';
/*
 * Describe the folder id syntax
 *
 * [<zid>:]<folderId>
 *
 * e.g. a79fa996-e90e-4f04-97c4-c84209bb8277:2
 */
const FOLDERID_REGEX = /^([^:]+(?=:))*:?(\d+)$/;
/**
 * Parse the given folder id and returns on object with the composing parts of the folder id
 * @param folderId
 */
const getFolderIdParts = (folderId) => {
    const result = { zid: null, id: null };
    if (!folderId || !folderId.match(FOLDERID_REGEX)) {
        return result;
    }
    const parts = FOLDERID_REGEX.exec(folderId);
    if (!parts) {
        return result;
    }
    [, result.zid = null, result.id = null] = parts;
    return result;
};
exports.getFolderIdParts = getFolderIdParts;
/**
 * Get the account name of the owner of the given folder, if the owner is an
 * "other" account, different from the primary account of the current user.
 * If the owner is the primary account then <code>null</code> is returned
 * @param folderId
 * @param folderRoots
 */
const getFolderOtherOwnerAccountName = (folderId, folderRoots) => {
    if (!folderId) {
        return null;
    }
    const { zid } = (0, exports.getFolderIdParts)(folderId);
    if (!zid) {
        return null;
    }
    /** find the folderRoots for which the id corresponds to the message zid
     * if the folderRoots has an owner, return the owner
     * if not, return null
     * */
    const matchingFolderRoot = (0, lodash_1.find)(folderRoots, (c) => c.id.includes(zid));
    if (!matchingFolderRoot) {
        return null;
    }
    return 'owner' in matchingFolderRoot && matchingFolderRoot.owner
        ? matchingFolderRoot.owner
        : null;
};
exports.getFolderOtherOwnerAccountName = getFolderOtherOwnerAccountName;
/**
 * Returns the account name of the owner of the folder, based on the folder id
 * @param folderId
 * @param folderRoots
 */
const getFolderOwnerAccountName = (folderId, folderRoots) => {
    const primaryAccount = (0, carbonio_shell_ui_1.getUserAccount)();
    /*
     * Try to get the account of the "other" owner, aka an owner which
     * is not the primary account of the current user
     */
    const otherOwnerAccount = (0, exports.getFolderOtherOwnerAccountName)(folderId, folderRoots);
    if (!otherOwnerAccount) {
        return primaryAccount?.name ?? NO_ACCOUNT_NAME;
    }
    return otherOwnerAccount;
};
exports.getFolderOwnerAccountName = getFolderOwnerAccountName;
/**
 * Tells if a folder with the given id is a spam folder
 * @param folderId
 * @param folderType
 */
const isA = (folderId, folderType) => {
    if (!folderId) {
        return false;
    }
    return (0, exports.getFolderIdParts)(folderId).id === folderType;
};
exports.isA = isA;
/**
 * Tells if a folder with the given id is the default account root folder
 * @param folderId
 */
const isDefaultAccountRoot = (folderId) => folderId === folders_1.FOLDERS.USER_ROOT;
exports.isDefaultAccountRoot = isDefaultAccountRoot;
/**
 * Tells if a folder with the given id is a root folder
 * @param folderId
 */
const isRoot = (folderId) => (0, exports.isA)(folderId, folders_1.FOLDERS.USER_ROOT);
exports.isRoot = isRoot;
/**
 * Tells if the given folder is a link to a folder shared by another user
 * @param folder
 */
const isLink = (folder) => (folder && folder.isLink && (0, exports.getFolderIdParts)(folder.id).zid === null) ?? false;
exports.isLink = isLink;
/**
 * Tells if a folder is a folder of a shared account
 * @param folderId
 */
function isSharedAccountFolder(folderId) {
    return (0, exports.getFolderIdParts)(folderId).zid !== null;
}
/**
 * Tells if a folder is a system one
 * @param folderId
 */
const isSystemFolder = (folderId) => {
    const { id } = (0, exports.getFolderIdParts)(folderId);
    if (!id) {
        return false;
    }
    const systemFoldersIds = Object.values(folders_1.FOLDERS);
    return systemFoldersIds.includes(folderId);
};
exports.isSystemFolder = isSystemFolder;
/**
 * Tells if a folder is a trashed folder
 * @param folder
 * @param folderId
 */
const isTrashed = ({ folder, folderId }) => {
    if (!folder && !folderId) {
        return false;
    }
    const folderIdAbsPath = store_1.useFolderStore.getState()?.folders?.[folderId ?? '']?.absFolderPath;
    const path = folder ? folder.absFolderPath : folderIdAbsPath;
    if (!path) {
        return false;
    }
    return path.toLowerCase().startsWith('/trash');
};
exports.isTrashed = isTrashed;
/**
 * Tells if a folder with the given id is a trash folder
 * @param folderId
 */
const isTrash = (folderId) => (0, exports.isA)(folderId, folders_1.FOLDERS.TRASH);
exports.isTrash = isTrash;
/**
 * Tells if the current user has read permission on the given folder/link
 * @param folder
 */
const isReadAllowed = (folder) => !folder.perm || folder.perm.includes('r');
exports.isReadAllowed = isReadAllowed;
/**
 * Tells if the current user has write permission on the given folder/link
 * @param folder
 */
const isWriteAllowed = (folder) => !folder.perm || folder.perm.includes('w');
exports.isWriteAllowed = isWriteAllowed;
/**
 * Tells if the current user has insertion permission on the given folder/link
 * @param folder
 */
const isInsertAllowed = (folder) => !folder.perm || folder.perm.includes('i');
exports.isInsertAllowed = isInsertAllowed;
/**
 * Tells if the current user has subfolder creation permission on the given folder/link
 * @param folder
 */
const isCreateAllowed = (folder) => !folder.perm || folder.perm.includes('c');
exports.isCreateAllowed = isCreateAllowed;
/**
 * Tells if the current user has deletion permission on the given folder/link
 * @param folder
 */
const isDeleteAllowed = (folder) => !folder.perm || folder.perm.includes('d');
exports.isDeleteAllowed = isDeleteAllowed;
/**
 * Tells if the current user has administration permission on the given folder/link
 * @param folder
 */
const isAdministerAllowed = (folder) => !folder.perm || folder.perm.includes('a');
exports.isAdministerAllowed = isAdministerAllowed;
('');
//# sourceMappingURL=folders.js.map