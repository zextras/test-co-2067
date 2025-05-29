"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomList = void 0;
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const styled_components_1 = __importDefault(require("styled-components"));
exports.CustomList = (0, styled_components_1.default)(carbonio_design_system_1.List) `
	padding-bottom: 0.25rem;
	min-height: 0;
`;
//# sourceMappingURL=list.js.map