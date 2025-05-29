"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderSelectorLabelFactory = exports.Square = void 0;
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = __importDefault(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const styled_components_1 = __importDefault(require("styled-components"));
exports.Square = styled_components_1.default.div `
	width: 1rem;
	height: 1rem;
	background: ${({ $color }) => $color};
	border-radius: 0.25rem;
	opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;
const ColorContainer = (0, styled_components_1.default)(carbonio_design_system_1.Container) `
	border-bottom: 0.0625rem solid ${({ theme }) => theme.palette.gray2.regular};
	transition: background 0.2s ease-out;
	&:hover {
		background: ${({ theme, background }) => (0, carbonio_design_system_1.getColor)(`${background}.hover`, theme)};
	}
`;
const TextUpperCase = (0, styled_components_1.default)(carbonio_design_system_1.Text) `
	text-transform: capitalize;
	color: ${({ theme, disabled }) => disabled ? theme.palette.text.disabled : theme.palette.text.regular};
`;
const FolderSelectorLabelFactory = ({ selected, label, open, focus, disabled }) => (react_1.default.createElement(ColorContainer, { orientation: "horizontal", width: "fill", crossAlignment: "center", mainAlignment: "space-between", borderRadius: "half", padding: {
        all: 'small'
    }, background: "gray5", style: { cursor: disabled ? 'no-drop' : 'pointer' } },
    react_1.default.createElement(carbonio_design_system_1.Row, { width: "100%", takeAvailableSpace: true, mainAlignment: "space-between" },
        react_1.default.createElement(carbonio_design_system_1.Row, { orientation: "vertical", crossAlignment: "flex-start", mainAlignment: "flex-start", padding: { left: 'small' } },
            react_1.default.createElement(carbonio_design_system_1.Text, { size: "small", disabled: disabled, color: (disabled && 'text.disabled') || ((open || focus) && 'primary') || 'secondary' }, label),
            react_1.default.createElement(carbonio_design_system_1.Row, null,
                react_1.default.createElement(carbonio_design_system_1.Padding, { right: "small" },
                    react_1.default.createElement(exports.Square, { "$color": selected[0].color, "$disabled": disabled })),
                react_1.default.createElement(TextUpperCase, { disabled: disabled }, selected[0].label)))),
    react_1.default.createElement(carbonio_design_system_1.Icon, { size: "large", icon: open ? 'ChevronUpOutline' : 'ChevronDownOutline', disabled: disabled, color: (disabled && 'text.disabled') || ((open || focus) && 'primary') || 'secondary', style: { alignSelf: 'center' } })));
exports.FolderSelectorLabelFactory = FolderSelectorLabelFactory;
//# sourceMappingURL=select-label-factory.js.map