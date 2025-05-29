"use strict";
/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalFooter = void 0;
const react_1 = __importStar(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const react_i18next_1 = require("react-i18next");
const ModalFooter = ({ mainAlignment = 'center', crossAlignment = 'center', onConfirm, label, secondaryAction, secondaryLabel, primaryBtnType = 'default', secondaryBtnType = 'default', disabled, secondaryDisabled, background = 'primary', secondarybackground, color = 'primary', secondaryColor = 'secondary', size = 'medium', showDivider = true, tooltip, secondaryTooltip, paddingTop = 'medium', additionalAction, additionalBtnType = 'outlined', additionalColor = 'secondary', additionalLabel, primaryButtonIcon }) => {
    const [t] = (0, react_i18next_1.useTranslation)();
    const cancelLabel = (0, react_1.useMemo)(() => t('label.cancel', 'cancel'), [t]);
    const secondaryTypeAndColor = (0, react_1.useMemo)(() => {
        if (secondaryBtnType === 'ghost') {
            return { type: secondaryBtnType, color: secondaryColor };
        }
        if (secondaryBtnType === 'default') {
            return {
                type: secondaryBtnType,
                backgroundColor: secondaryColor || secondarybackground
            };
        }
        return {
            type: secondaryBtnType,
            backgroundColor: secondarybackground,
            labelColor: secondaryColor
        };
    }, [secondaryBtnType, secondaryColor, secondarybackground]);
    const primaryTypeAndColor = (0, react_1.useMemo)(() => {
        if (primaryBtnType === 'ghost') {
            return { type: primaryBtnType, color };
        }
        if (primaryBtnType === 'default') {
            return { type: primaryBtnType, backgroundColor: color || background };
        }
        return { type: primaryBtnType, backgroundColor: background, labelColor: color };
    }, [background, color, primaryBtnType]);
    return (react_1.default.createElement(carbonio_design_system_1.Container, { mainAlignment: mainAlignment, crossAlignment: crossAlignment, padding: {
            top: paddingTop
        } },
        showDivider && (react_1.default.createElement(carbonio_design_system_1.Container, { padding: { top: 'small', bottom: 'small' }, mainAlignment: "center", crossAlignment: "flex-start", orientation: "horizontal", height: "fit" },
            react_1.default.createElement(carbonio_design_system_1.Divider, null))),
        react_1.default.createElement(carbonio_design_system_1.Container, { orientation: "horizontal", mainAlignment: "space-between" },
            additionalAction && (react_1.default.createElement(carbonio_design_system_1.Container, { orientation: "horizontal", width: "fit" },
                react_1.default.createElement(carbonio_design_system_1.Button, { color: additionalColor, type: additionalBtnType, onClick: additionalAction, label: additionalLabel ?? cancelLabel, size: size }),
                react_1.default.createElement(carbonio_design_system_1.Padding, { horizontal: "extrasmall" }))),
            react_1.default.createElement(carbonio_design_system_1.Container, { padding: { top: 'small', bottom: 'small' }, mainAlignment: "flex-end", crossAlignment: "flex-start", orientation: "horizontal", height: "fit" },
                secondaryAction && (react_1.default.createElement(carbonio_design_system_1.Padding, { right: "small", vertical: "small" }, secondaryTooltip ? (react_1.default.createElement(carbonio_design_system_1.Tooltip, { label: secondaryTooltip, placement: "top", maxWidth: "fit" },
                    react_1.default.createElement(carbonio_design_system_1.Button, { ...secondaryTypeAndColor, onClick: secondaryAction, label: secondaryLabel ?? cancelLabel, disabled: secondaryDisabled, size: size }))) : (react_1.default.createElement(carbonio_design_system_1.Button, { ...secondaryTypeAndColor, onClick: secondaryAction, label: secondaryLabel ?? cancelLabel, disabled: secondaryDisabled, size: size })))),
                react_1.default.createElement(carbonio_design_system_1.Padding, { vertical: "small" }, tooltip ? (react_1.default.createElement(carbonio_design_system_1.Tooltip, { label: tooltip, placement: "top", maxWidth: "fit" },
                    react_1.default.createElement(carbonio_design_system_1.Button, { size: size, onClick: onConfirm, label: label, disabled: disabled, icon: primaryButtonIcon, iconPlacement: "left", ...primaryTypeAndColor }))) : (react_1.default.createElement(carbonio_design_system_1.Button, { size: size, onClick: onConfirm, label: label, disabled: disabled, icon: primaryButtonIcon, iconPlacement: "left", ...primaryTypeAndColor })))))));
};
exports.ModalFooter = ModalFooter;
//# sourceMappingURL=modal-footer.js.map