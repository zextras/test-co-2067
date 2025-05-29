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
exports.ColorSelect = exports.TextUpperCase = exports.ColorContainer = void 0;
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = __importStar(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const react_i18next_1 = require("react-i18next");
const styled_components_1 = __importDefault(require("styled-components"));
const utils_1 = require("../../constants/utils");
const Square = styled_components_1.default.div `
	width: 1.125rem;
	height: 1.125rem;
	position: relative;
	top: -0.1875rem;
	border: 0.0625rem solid ${({ theme }) => theme.palette.gray2.regular};
	background: ${({ $color }) => $color};
	border-radius: 0.25rem;
`;
exports.ColorContainer = (0, styled_components_1.default)(carbonio_design_system_1.Container) `
	border-bottom: 0.0625rem solid ${({ theme }) => theme.palette.gray2.regular};
	cursor: 'pointer';
`;
exports.TextUpperCase = (0, styled_components_1.default)(carbonio_design_system_1.Text) `
	text-transform: capitalize;
`;
const LabelFactory = ({ selected, label, open, focus }) => (react_1.default.createElement(exports.ColorContainer, { orientation: "horizontal", width: "fill", crossAlignment: "center", mainAlignment: "space-between", borderRadius: "half", background: "gray5", padding: {
        all: 'small'
    } },
    react_1.default.createElement(carbonio_design_system_1.Row, { width: "100%", takeAvailableSpace: true, mainAlignment: "space-between" },
        react_1.default.createElement(carbonio_design_system_1.Row, { orientation: "vertical", crossAlignment: "flex-start", mainAlignment: "flex-start", padding: { left: 'small' } },
            react_1.default.createElement(carbonio_design_system_1.Text, { size: "small", color: open || focus ? 'primary' : 'secondary' }, label),
            react_1.default.createElement(exports.TextUpperCase, null, selected[0].label)),
        react_1.default.createElement(carbonio_design_system_1.Padding, { right: "small" },
            react_1.default.createElement(Square, { "$color": utils_1.ZIMBRA_STANDARD_COLORS[parseInt(selected[0].value, 10)].hex }))),
    react_1.default.createElement(carbonio_design_system_1.Icon, { size: "large", icon: open ? 'ChevronUpOutline' : 'ChevronDownOutline', color: open || focus ? 'primary' : 'secondary', style: { alignSelf: 'center' } })));
const ColorSelect = ({ onChange, defaultColor = 0, label }) => {
    const [t] = (0, react_i18next_1.useTranslation)();
    const colors = (0, react_1.useMemo)(() => utils_1.ZIMBRA_STANDARD_COLORS.map((el, index) => {
        const colorLabel = t(`colors.${el.zLabel}`, el.zLabel);
        return {
            label: colorLabel,
            value: index.toString(),
            customComponent: (react_1.default.createElement(carbonio_design_system_1.Container, { width: "100%", mainAlignment: "space-between", orientation: "horizontal", height: "fit" },
                react_1.default.createElement(carbonio_design_system_1.Padding, { left: "small" },
                    react_1.default.createElement(exports.TextUpperCase, null, colorLabel)),
                react_1.default.createElement(Square, { "$color": el.hex })))
        };
    }), [t]);
    const defaultSelection = (0, react_1.useMemo)(() => colors[defaultColor], [colors, defaultColor]);
    return (react_1.default.createElement(carbonio_design_system_1.Select, { label: label, onChange: onChange, items: colors, defaultSelection: defaultSelection, LabelFactory: LabelFactory, "data-testid": "color-select" }));
};
exports.ColorSelect = ColorSelect;
//# sourceMappingURL=color-select.js.map