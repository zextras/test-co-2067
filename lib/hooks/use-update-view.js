"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateView = void 0;
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = require("react");
const no_op_1 = require("../soap/no-op");
const useUpdateView = () => {
    const handler = (0, react_1.useCallback)(() => {
        (0, no_op_1.NoOp)();
    }, []);
    (0, react_1.useEffect)(() => {
        window.addEventListener('updateView', handler);
        return function cleanup() {
            window.removeEventListener('updateView', handler);
        };
    }, [handler]);
};
exports.useUpdateView = useUpdateView;
//# sourceMappingURL=use-update-view.js.map