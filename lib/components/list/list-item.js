"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomListItem = void 0;
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = __importDefault(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const styled_components_1 = __importDefault(require("styled-components"));
const CustomListItemHelper = (0, styled_components_1.default)(carbonio_design_system_1.ListItem) ``;
const StyledCustomListItem = (0, styled_components_1.default)(CustomListItemHelper) `
	transition: none;
	&:focus,
	&:active {
		background: ${({ $focusBackgroundColor, theme }) => (0, carbonio_design_system_1.getColor)($focusBackgroundColor, theme)};
		${CustomListItemHelper} {
			background: ${({ $focusBackgroundColor, theme }) => (0, carbonio_design_system_1.getColor)($focusBackgroundColor, theme)};
		}
	}

	&:hover {
		background: ${({ $baseBackgroundColor, theme }) => (0, carbonio_design_system_1.getColor)($baseBackgroundColor, theme)};
		&:focus,
		&:active {
			background: ${({ $focusBackgroundColor, theme }) => (0, carbonio_design_system_1.getColor)($focusBackgroundColor, theme)};
		}
	}
`;
exports.CustomListItem = react_1.default.forwardRef(function CustomListItemFn({ background = 'gray6', active, activeBackground = 'highlight', selected, selectedBackground = 'gray5', ...rest }, ref) {
    return (react_1.default.createElement(StyledCustomListItem, { ref: ref, "$baseBackgroundColor": (active && activeBackground) || (selected && selectedBackground) || background, "$focusBackgroundColor": `${(active && activeBackground) || 'gray6'}.focus`, ...rest }));
});
//# sourceMappingURL=list-item.js.map