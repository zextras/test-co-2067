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
exports.FolderAccordionCustomComponent = void 0;
/*
 * SPDX-FileCopyrightText: 2025 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = __importStar(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const styled_components_1 = __importDefault(require("styled-components"));
const status_icon_1 = require("./status-icon");
const utils_1 = require("./utils");
const folders_1 = require("../../../constants/folders");
const utils_2 = require("../../../constants/utils");
const FittedRow = (0, styled_components_1.default)(carbonio_design_system_1.Row) `
	max-width: calc(100% - (2 * ${({ theme }) => theme.sizes.padding.small}));
	height: 3rem;
`;
const FolderAccordionCustomComponent = ({ folder }) => {
    const accountName = (0, carbonio_shell_ui_1.useUserAccount)().name;
    const textProps = (0, react_1.useMemo)(() => ({
        size: 'small'
    }), []);
    const accordionItem = (0, react_1.useMemo)(() => ({
        ...folder,
        label: folder.id === folders_1.FOLDERS.USER_ROOT
            ? accountName
            : ((0, utils_1.getFolderTranslatedName)({ folderId: folder.id, folderName: folder.name }) ?? ''),
        icon: (0, utils_1.getFolderIconName)(folder) ?? undefined,
        iconColor: (0, utils_1.getFolderIconColor)(folder) ?? '',
        textProps
    }), [folder, accountName, textProps]);
    // hide folders where a share was provided and subsequently removed
    if (folder.isLink && folder.broken) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    const showAvatar = folder.id === folders_1.FOLDERS.USER_ROOT || (folder.isLink && folder.oname === utils_2.ROOT_NAME);
    return (react_1.default.createElement(FittedRow, null,
        showAvatar && (react_1.default.createElement(carbonio_design_system_1.Padding, { left: "small" },
            react_1.default.createElement(carbonio_design_system_1.Avatar, { label: accordionItem.label, colorLabel: accordionItem.iconColor, size: "medium" }))),
        react_1.default.createElement(carbonio_design_system_1.Tooltip, { label: accordionItem.label, placement: "right", maxWidth: "100%" },
            react_1.default.createElement(carbonio_design_system_1.AccordionItem, { "data-testid": `accordion-folder-item-${folder.id}`, item: accordionItem },
                react_1.default.createElement(status_icon_1.StatusIcon, { folder: folder })))));
};
exports.FolderAccordionCustomComponent = FolderAccordionCustomComponent;
//# sourceMappingURL=folder-accordions-custom-component.js.map