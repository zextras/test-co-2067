"use strict";
/*
 * SPDX-FileCopyrightText: 2025 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFolderTranslatedName = exports.getSystemFolderTranslatedName = exports.getFolderIconName = exports.getFolderIconColor = void 0;
exports.flattenAndFilterFoldersWithCap = flattenAndFilterFoldersWithCap;
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const lodash_1 = require("lodash");
const folders_1 = require("../../../constants/folders");
const utils_1 = require("../../../constants/utils");
const folders_2 = require("../../../helpers/folders");
function flattenAndFilterFoldersWithCap(folders, search, limit, filterFolders) {
    if (limit <= 0)
        return [];
    const lowerCaseSearch = search.toLowerCase();
    const flattenAndFilter = (foldersToProcess) => (0, lodash_1.filter)(foldersToProcess, filterFolders).flatMap((folder) => {
        const isMatch = folder.name.toLowerCase().includes(lowerCaseSearch);
        const matched = isMatch ? [{ ...folder, children: [] }] : [];
        return [...matched, ...flattenAndFilter(folder.children)];
    });
    return flattenAndFilter(folders).slice(0, limit);
}
const getFolderIconColor = (f) => {
    if ('color' in f && f?.color) {
        return Number(f.color) < 10
            ? utils_1.ZIMBRA_STANDARD_COLORS[Number(f.color)].hex
            : (f?.rgb ?? utils_1.ZIMBRA_STANDARD_COLORS[0].hex);
    }
    return utils_1.ZIMBRA_STANDARD_COLORS[0].hex;
};
exports.getFolderIconColor = getFolderIconColor;
const getFolderDefaultIcon = (folder) => {
    const folderView = 'view' in folder && folder.view;
    switch (folderView) {
        case utils_1.FOLDER_VIEW.appointment:
            return 'Calendar2';
        default:
            return 'FolderOutline';
    }
};
const getFolderIconName = (folder) => {
    const { id } = (0, folders_2.getFolderIdParts)(folder.id);
    if (id === folders_1.FOLDERS.USER_ROOT ||
        ('isLink' in folder && folder.isLink && folder.oname === utils_1.ROOT_NAME)) {
        return null;
    }
    const folderDefaultIcon = getFolderDefaultIcon(folder);
    if (id && (0, folders_2.isSystemFolder)(id)) {
        switch (id) {
            case folders_1.FOLDERS.INBOX:
                return 'InboxOutline';
            case folders_1.FOLDERS.DRAFTS:
                return 'FileOutline';
            case folders_1.FOLDERS.SENT:
                return 'PaperPlaneOutline';
            case folders_1.FOLDERS.SPAM:
                return 'SlashOutline';
            case folders_1.FOLDERS.TRASH:
                return 'Trash2Outline';
            default:
                return folderDefaultIcon;
        }
    }
    return folderDefaultIcon;
};
exports.getFolderIconName = getFolderIconName;
const getSystemFolderTranslatedName = ({ folderName }) => {
    if (folderName) {
        switch (folderName) {
            case 'Inbox':
                return (0, carbonio_shell_ui_1.t)('folders.inbox', 'Inbox');
            case 'Sent':
                return (0, carbonio_shell_ui_1.t)('folders.sent', 'Sent');
            case 'Drafts':
                return (0, carbonio_shell_ui_1.t)('folders.drafts', 'Drafts');
            case 'Trash':
                return (0, carbonio_shell_ui_1.t)('folders.trash', 'Trash');
            case 'Spam':
                return (0, carbonio_shell_ui_1.t)('folders.spam', 'Spam');
            case 'Junk':
                return (0, carbonio_shell_ui_1.t)('folders.junk', 'Junk');
            default:
                return folderName;
        }
    }
    return folderName;
};
exports.getSystemFolderTranslatedName = getSystemFolderTranslatedName;
const getFolderTranslatedName = ({ folderId, folderName }) => {
    const { id } = (0, folders_2.getFolderIdParts)(folderId ?? '');
    if (id && (0, folders_2.isSystemFolder)(id)) {
        return (0, exports.getSystemFolderTranslatedName)({ folderName });
    }
    return folderName;
};
exports.getFolderTranslatedName = getFolderTranslatedName;
//# sourceMappingURL=utils.js.map