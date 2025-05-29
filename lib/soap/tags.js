"use strict";
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeTagColor = exports.renameTag = exports.deleteTag = exports.createTag = void 0;
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const createTag = (tag) => (0, carbonio_shell_ui_1.soapFetch)('CreateTag', {
    _jsns: 'urn:zimbraMail',
    tag
});
exports.createTag = createTag;
const deleteTag = (id) => (0, carbonio_shell_ui_1.soapFetch)('TagAction', {
    _jsns: 'urn:zimbraMail',
    action: { op: 'delete', id }
});
exports.deleteTag = deleteTag;
const renameTag = (id, name) => (0, carbonio_shell_ui_1.soapFetch)('TagAction', {
    _jsns: 'urn:zimbraMail',
    action: { op: 'rename', id, name }
});
exports.renameTag = renameTag;
const changeTagColor = (id, color) => (0, carbonio_shell_ui_1.soapFetch)('TagAction', {
    _jsns: 'urn:zimbraMail',
    action: typeof color === 'number' ? { op: 'color', color, id } : { op: 'color', rgb: color, id }
});
exports.changeTagColor = changeTagColor;
//# sourceMappingURL=tags.js.map