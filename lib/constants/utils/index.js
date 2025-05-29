"use strict";
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROOT_NAME = exports.JSNS = exports.ZIMBRA_STANDARD_COLORS = exports.DRAG_DATA_TYPE = exports.TagsActionsType = exports.FOLDER_VIEW = void 0;
exports.FOLDER_VIEW = {
    search_folder: 'search folder',
    tag: 'tag',
    conversation: 'conversation',
    message: 'message',
    contact: 'contact',
    document: 'document',
    appointment: 'appointment',
    virtual_conversation: 'virtual conversation',
    remote_folder: 'remote folder',
    wiki: 'wiki',
    task: 'task',
    chat: 'chat'
};
// eslint-disable-next-line no-shadow
var TagsActionsType;
(function (TagsActionsType) {
    TagsActionsType["NEW"] = "new";
    TagsActionsType["DELETE"] = "delete";
    TagsActionsType["EDIT"] = "edit";
    TagsActionsType["Apply"] = "apply";
})(TagsActionsType || (exports.TagsActionsType = TagsActionsType = {}));
exports.DRAG_DATA_TYPE = {
    MESSAGE: 'message',
    CONVERSATION: 'conversation',
    FOLDER: 'folder',
    CONTACT: 'contact'
};
exports.ZIMBRA_STANDARD_COLORS = [
    { zValue: 0, hex: '#000000', zLabel: 'black' },
    { zValue: 1, hex: '#2b73d2', zLabel: 'blue' },
    { zValue: 2, hex: '#29B6F6', zLabel: 'cyan' },
    { zValue: 3, hex: '#66BB6A', zLabel: 'green' },
    { zValue: 4, hex: '#7e57c2', zLabel: 'purple' },
    { zValue: 5, hex: '#ef5350', zLabel: 'red' },
    { zValue: 6, hex: '#ffc107', zLabel: 'yellow' },
    { zValue: 7, hex: '#edaeab', zLabel: 'pink' },
    { zValue: 8, hex: '#828282', zLabel: 'gray' },
    { zValue: 9, hex: '#FF7043', zLabel: 'orange' }
];
var JSNS;
(function (JSNS) {
    JSNS["ACCOUNT"] = "urn:zimbraAccount";
    JSNS["ADMIN"] = "urn:zimbraAdmin";
    JSNS["MAIL"] = "urn:zimbraMail";
    JSNS["ALL"] = "urn:zimbra";
    JSNS["SYNC"] = "urn:zimbraSync";
})(JSNS || (exports.JSNS = JSNS = {}));
exports.ROOT_NAME = 'USER_ROOT';
//# sourceMappingURL=index.js.map