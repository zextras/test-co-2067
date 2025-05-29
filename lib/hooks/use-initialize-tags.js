"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInitializeTags = void 0;
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = require("react");
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const lodash_1 = require("lodash");
const worker_1 = require("../worker");
const useInitializeTags = () => {
    const [initialized, setInitialized] = (0, react_1.useState)(false);
    const refresh = (0, carbonio_shell_ui_1.useRefresh)();
    (0, react_1.useEffect)(() => {
        if (!(0, lodash_1.isEmpty)(refresh) && !initialized) {
            setInitialized(true);
            worker_1.tagsWorker.postMessage({
                op: 'refresh',
                tags: refresh.tags
            });
        }
    }, [initialized, refresh]);
};
exports.useInitializeTags = useInitializeTags;
//# sourceMappingURL=use-initialize-tags.js.map