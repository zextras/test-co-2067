"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFolderRequest = void 0;
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const lodash_1 = require("lodash");
const getFolderRequest = async ({ id, view }, account) => {
    const body = (0, lodash_1.omitBy)({
        _jsns: 'urn:zimbraMail',
        folder: id
            ? {
                l: id
            }
            : undefined,
        view,
        tr: 1
    }, lodash_1.isNil);
    return (0, carbonio_shell_ui_1.soapFetch)('GetFolder', body, account);
};
exports.getFolderRequest = getFolderRequest;
//# sourceMappingURL=get-folder.js.map