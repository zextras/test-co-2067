"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrefs = void 0;
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const usePrefs = () => {
    const { prefs } = (0, carbonio_shell_ui_1.useUserSettings)();
    return prefs;
};
exports.usePrefs = usePrefs;
//# sourceMappingURL=use-prefs.js.map