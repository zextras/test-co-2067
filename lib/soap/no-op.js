"use strict";
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoOp = void 0;
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const utils_1 = require("../constants/utils");
const NoOp = async () => {
    const request = {
        _jsns: utils_1.JSNS.MAIL
    };
    const response = await (0, carbonio_shell_ui_1.soapFetch)('NoOp', request);
    if ('Fault' in response) {
        throw new Error(response.Fault.Reason.Text);
    }
};
exports.NoOp = NoOp;
//# sourceMappingURL=no-op.js.map