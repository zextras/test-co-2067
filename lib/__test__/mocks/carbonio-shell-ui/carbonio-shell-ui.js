"use strict";
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntegratedFunction = exports.getIntegratedFunction = exports.useActions = exports.getAction = exports.getIntegratedComponent = exports.useIntegratedComponent = exports.upsertApp = exports.registerFunctions = exports.reopenBoards = exports.setCurrentBoard = exports.getBoardById = exports.addBoardView = exports.addSettingsView = exports.removeRoute = exports.addRoute = exports.useRefresh = exports.registerActions = exports.registerComponents = exports.editSettings = exports.AppLink = exports.useLocalStorage = exports.useNotify = exports.soapFetch = exports.useIsCarbonioCE = exports.getCurrentRoute = exports.minimizeBoards = exports.useBoardHooks = exports.updateBoardContext = exports.closeBoard = exports.addBoard = exports.getBridgedFunctions = exports.setAppContext = exports.useAppContext = exports.useBoard = exports.pushHistory = exports.replaceHistory = exports.t = exports.getUserSettings = exports.useUserSettings = exports.useUserAccounts = exports.useUserAccount = exports.getUserAccount = exports.mockedAccount = void 0;
const react_1 = __importDefault(require("react"));
const account_generator_1 = require("../accounts/account-generator");
const fetch_1 = require("../network/fetch");
const settings_generator_1 = require("../settings/settings-generator");
exports.mockedAccount = (0, account_generator_1.generateAccount)();
const mockedAccounts = [exports.mockedAccount];
const mockedSettings = (0, settings_generator_1.generateSettings)();
exports.getUserAccount = jest.fn(() => exports.mockedAccount);
exports.useUserAccount = jest.fn(() => exports.mockedAccount);
exports.useUserAccounts = jest.fn(() => mockedAccounts);
exports.useUserSettings = jest.fn(() => mockedSettings);
exports.getUserSettings = jest.fn(() => mockedSettings);
exports.t = jest.fn((key) => key);
exports.replaceHistory = jest.fn();
exports.pushHistory = jest.fn();
exports.useBoard = jest.fn();
exports.useAppContext = jest.fn(() => mockedAccounts);
exports.setAppContext = jest.fn();
exports.getBridgedFunctions = jest.fn();
exports.addBoard = jest.fn();
exports.closeBoard = jest.fn();
exports.updateBoardContext = jest.fn();
exports.useBoardHooks = jest.fn().mockReturnValue({
    closeBoard: jest.fn(),
    updateBoard: jest.fn(),
    setCurrentBoard: jest.fn(),
    getBoardContext: jest.fn(),
    getBoard: jest.fn()
});
exports.minimizeBoards = jest.fn();
exports.getCurrentRoute = jest.fn();
exports.useIsCarbonioCE = jest.fn(() => false);
__exportStar(require("../network/fetch"), exports);
exports.soapFetch = (0, fetch_1.getSoapFetch)('test-environment');
exports.useNotify = jest.fn(() => []);
exports.useLocalStorage = jest.fn();
const AppLink = ({ children }) => react_1.default.createElement(react_1.default.Fragment, null, children);
exports.AppLink = AppLink;
exports.editSettings = jest.fn(() => Promise.resolve({ data: {} }));
exports.registerComponents = jest.fn();
exports.registerActions = jest.fn();
exports.useRefresh = jest.fn();
exports.addRoute = jest.fn();
exports.removeRoute = jest.fn();
exports.addSettingsView = jest.fn();
exports.addBoardView = jest.fn();
exports.getBoardById = jest.fn();
exports.setCurrentBoard = jest.fn();
exports.reopenBoards = jest.fn();
exports.registerFunctions = jest.fn();
exports.upsertApp = jest.fn();
/*
 * Integration mocks
 */
// Integrated components
const FakeIntegrationComponent = () => react_1.default.createElement("div", { "data-testid": "fake-component" });
const IntegrationComponent = jest.fn(FakeIntegrationComponent);
const isIntegrationAvailable = false;
exports.useIntegratedComponent = jest.fn((id) => [
    IntegrationComponent,
    isIntegrationAvailable
]);
exports.getIntegratedComponent = jest.fn((id) => [
    IntegrationComponent,
    isIntegrationAvailable
]);
// Integrated actions
exports.getAction = jest.fn((type, id) => [undefined, false]);
exports.useActions = jest
    .fn()
    .mockImplementation(() => []);
// Integrated functions
exports.getIntegratedFunction = jest.fn((id) => [jest.fn(), false]);
exports.useIntegratedFunction = jest.fn((id) => [jest.fn(), false]);
//# sourceMappingURL=carbonio-shell-ui.js.map