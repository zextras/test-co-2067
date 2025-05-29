"use strict";
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FOLDERS_DESCRIPTORS = void 0;
const folders_1 = require("../constants/folders");
exports.FOLDERS_DESCRIPTORS = {
    userRoot: {
        id: folders_1.FOLDERS.USER_ROOT,
        desc: 'user root'
    },
    inbox: {
        id: folders_1.FOLDERS.INBOX,
        desc: 'inbox'
    },
    sent: {
        id: folders_1.FOLDERS.SENT,
        desc: 'sent'
    },
    draft: {
        id: folders_1.FOLDERS.DRAFTS,
        desc: 'drafts'
    },
    spam: {
        id: folders_1.FOLDERS.SPAM,
        desc: 'junk'
    },
    trash: {
        id: folders_1.FOLDERS.TRASH,
        desc: 'trash'
    },
    userDefined: {
        id: '1234567',
        desc: 'user defined'
    },
    contacts: {
        id: folders_1.FOLDERS.CONTACTS,
        desc: 'contacts'
    },
    autoContacts: {
        id: folders_1.FOLDERS.AUTO_CONTACTS,
        desc: 'emailed contacts'
    },
    calendar: {
        id: folders_1.FOLDERS.CALENDAR,
        desc: 'calendar'
    }
};
//# sourceMappingURL=constants.js.map