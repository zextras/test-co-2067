"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrefs = void 0;
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const getPrefs = () => {
    const { prefs } = (0, carbonio_shell_ui_1.getUserSettings)();
    return prefs;
};
exports.getPrefs = getPrefs;
//# sourceMappingURL=get-prefs.js.map