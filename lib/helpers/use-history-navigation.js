"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHistoryNavigation = void 0;
/*
 * SPDX-FileCopyrightText: 2025 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const useHistoryNavigation = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const replaceHistory = (0, react_1.useCallback)((path) => {
        navigate(path, { replace: true });
    }, [navigate]);
    const pushHistory = (0, react_1.useCallback)((path) => {
        navigate(path, { replace: false });
    }, [navigate]);
    return (0, react_1.useMemo)(() => ({
        replaceHistory,
        pushHistory
    }), [replaceHistory, pushHistory]);
};
exports.useHistoryNavigation = useHistoryNavigation;
//# sourceMappingURL=use-history-navigation.js.map