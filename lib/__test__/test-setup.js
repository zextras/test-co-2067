"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersWrapper = exports.screen = void 0;
exports.within = within;
exports.setupTest = setupTest;
exports.setupHook = setupHook;
exports.makeListItemsVisible = makeListItemsVisible;
exports.triggerLoadMore = triggerLoadMore;
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = __importStar(require("react"));
const react_2 = require("@testing-library/react");
const user_event_1 = __importDefault(require("@testing-library/user-event"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const i18n_test_factory_1 = require("./i18n/i18n-test-factory");
const carbonio_ui_preview_1 = require("./mocks/carbonio-ui-preview");
/**
 * Matcher function to search an icon button through the icon data-testid
 */
const queryAllByRoleWithIcon = (container, role, { icon, ...options }) => (0, react_2.within)(container)
    .queryAllByRole(role, options)
    .filter((element) => (0, react_2.within)(element).queryByTestId(icon) !== null);
const getByRoleWithIconMultipleError = (_container, role, options) => `Found multiple elements with role ${role} and icon ${options.icon}`;
const getByRoleWithIconMissingError = (_container, role, options) => `Unable to find an element with role ${role} and icon ${options.icon}`;
const [queryByRoleWithIcon, getAllByRoleWithIcon, getByRoleWithIcon, findAllByRoleWithIcon, findByRoleWithIcon] = react_2.queryHelpers.buildQueries(queryAllByRoleWithIcon, getByRoleWithIconMultipleError, getByRoleWithIconMissingError);
const customQueries = {
    queryByRoleWithIcon,
    getAllByRoleWithIcon,
    getByRoleWithIcon,
    findAllByRoleWithIcon,
    findByRoleWithIcon
};
const queriesExtended = { ...react_2.queries, ...customQueries };
function within(element) {
    return (0, react_2.within)(element, queriesExtended);
}
exports.screen = { ...react_2.screen, ...within(document.body) };
const StoreProvider = ({ store, children }) => (store ? react_1.default.createElement(react_redux_1.Provider, { store: store }, children) : children);
const ProvidersWrapper = ({ children, store, initialEntries = ['/'], path = '/*' }) => {
    const i18n = (0, react_1.useMemo)(() => (0, i18n_test_factory_1.getAppI18n)(), []);
    return (react_1.default.createElement(carbonio_design_system_1.ThemeProvider, null,
        react_1.default.createElement(react_router_dom_1.MemoryRouter, { future: { v7_startTransition: false, v7_relativeSplatPath: false }, initialEntries: initialEntries, initialIndex: (initialEntries?.length || 1) - 1 },
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: path, element: react_1.default.createElement(StoreProvider, { store: store },
                        react_1.default.createElement(react_i18next_1.I18nextProvider, { i18n: i18n },
                            react_1.default.createElement(carbonio_design_system_1.SnackbarManager, null,
                                react_1.default.createElement(carbonio_ui_preview_1.PreviewsManagerContext.Provider, { value: carbonio_ui_preview_1.previewContextMock },
                                    react_1.default.createElement(carbonio_design_system_1.ModalManager, null, children))))) })))));
};
exports.ProvidersWrapper = ProvidersWrapper;
function customRender(ui, { store, initialEntries, path, ...renderOptions } = {}) {
    const Wrapper = ({ children }) => (react_1.default.createElement(exports.ProvidersWrapper, { store: store, initialEntries: initialEntries, path: path }, children));
    return (0, react_2.render)(ui, {
        wrapper: Wrapper,
        queries: { ...react_2.queries, ...customQueries },
        ...renderOptions
    });
}
function setupTest(ui, { setupOptions, ...customRenderOptions } = {}) {
    const user = user_event_1.default.setup({ advanceTimers: jest.advanceTimersByTime, ...setupOptions });
    const rightClick = (target) => user.pointer({ target, keys: '[MouseRight]' });
    return {
        user: { ...user, rightClick },
        ...customRender(ui, customRenderOptions)
    };
}
function setupHook(hook, { initialProps, setupOptions, ...providersProps } = {}) {
    const Wrapper = ({ children }) => (react_1.default.createElement(exports.ProvidersWrapper, { ...providersProps }, children));
    const { result, unmount, rerender } = (0, react_2.renderHook)((props) => hook(...(props ?? [])), {
        wrapper: Wrapper,
        initialProps
    });
    return {
        result,
        unmount,
        rerender,
        user: user_event_1.default.setup({ advanceTimers: jest.advanceTimersByTime, ...setupOptions })
    };
}
function makeListItemsVisible() {
    const { calls, instances } = window.IntersectionObserver.mock;
    calls.forEach((call, index) => {
        const [onChange] = call;
        // trigger the intersection on the observed element
        (0, react_2.act)(() => {
            onChange([
                {
                    intersectionRatio: 0,
                    isIntersecting: true
                }
            ], instances[index]);
        });
    });
}
function triggerLoadMore() {
    const { calls, instances } = window.IntersectionObserver
        .mock;
    const [onChange] = calls[calls.length - 1];
    const instance = instances[instances.length - 1];
    // trigger the intersection on the observed element
    (0, react_2.act)(() => {
        onChange([
            {
                target: exports.screen.getByTestId('list-bottom-element'),
                intersectionRatio: 0,
                isIntersecting: true
            }
        ], instance);
    });
}
//# sourceMappingURL=test-setup.js.map