"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShareInfoRequest = void 0;
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const lodash_1 = require("lodash");
const getShareInfoRequest = async () => {
    const result = await (0, carbonio_shell_ui_1.soapFetch)('GetShareInfo', {
        _jsns: 'urn:zimbraAccount',
        includeSelf: 0
    });
    if ('Fault' in result) {
        return Promise.reject(result.Fault);
    }
    return Promise.resolve({ isFulfilled: !(0, lodash_1.isEmpty)(result), folders: result?.share ?? [] });
};
exports.getShareInfoRequest = getShareInfoRequest;
//# sourceMappingURL=get-share-info.js.map