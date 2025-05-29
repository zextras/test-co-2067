"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewsManagerContext = exports.previewContextMock = void 0;
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = __importDefault(require("react"));
exports.previewContextMock = {
    createPreview: jest.fn(),
    initPreview: jest.fn(),
    openPreview: jest.fn(),
    emptyPreview: jest.fn()
};
exports.PreviewsManagerContext = react_1.default.createContext(exports.previewContextMock);
//# sourceMappingURL=carbonio-ui-preview.js.map