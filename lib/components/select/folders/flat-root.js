"use strict";
/*
 * SPDX-FileCopyrightText: 2025 Zextras <https://www.zextras.com>
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatRoot = void 0;
const react_1 = __importStar(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const styled_components_1 = __importDefault(require("styled-components"));
const flat_folder_1 = require("./flat-folder");
const folders_1 = require("../../../constants/folders");
const FOLDER_ROW_HEIGHT = '2.6rem';
const CustomListItem = (0, styled_components_1.default)(carbonio_design_system_1.ListItem).attrs({
    background: 'gray6',
    activeBackground: 'highlight',
    selectedBackground: 'gray5'
}) ``;
const CustomContainer = (0, styled_components_1.default)(carbonio_design_system_1.Container) `
	&:hover {
		background-color: ${({ theme, $active }) => $active ? theme.palette.highlight.active : theme.palette.gray6.hover};
	}
`;
const FlatRoot = ({ folder, childrenFolders, isOpen = false, onFolderSelected, onOpenStatusChange, selectedFolderId, allowRootSelection }) => {
    const [open, setOpen] = (0, react_1.useState)(isOpen);
    const account = (0, carbonio_shell_ui_1.useUserAccount)();
    const rootLabel = folder.id === folders_1.FOLDERS.USER_ROOT ? account.name : folder.name;
    const toggleOpen = (0, react_1.useCallback)((e) => {
        e.stopPropagation();
        setOpen((op) => {
            onOpenStatusChange && onOpenStatusChange(!op);
            return !op;
        });
    }, [onOpenStatusChange]);
    const onClick = (0, react_1.useCallback)((e) => {
        e.stopPropagation();
        if (!open) {
            setOpen(true);
        }
        if (!allowRootSelection) {
            return;
        }
        onFolderSelected?.(folder);
    }, [open, allowRootSelection, onFolderSelected, folder]);
    return (react_1.default.createElement(carbonio_design_system_1.Row, { width: "fill", style: {
            cursor: 'pointer'
        } },
        react_1.default.createElement(CustomContainer, { orientation: "horizontal", width: "fill", height: "fit", mainAlignment: "space-between", padding: 'small', onClick: onClick, "data-testid": `folder-flat-root-${folder.id}`, background: selectedFolderId === folder.id ? 'highlight.active' : 'gray6', "$active": selectedFolderId === folder.id },
            react_1.default.createElement(carbonio_design_system_1.Container, { orientation: "horizontal", width: "fill", mainAlignment: "flex-start" },
                react_1.default.createElement(carbonio_design_system_1.Padding, { horizontal: "small" },
                    react_1.default.createElement(carbonio_design_system_1.Avatar, { label: rootLabel, size: "medium" })),
                react_1.default.createElement(carbonio_design_system_1.Tooltip, { label: rootLabel, placement: "right", maxWidth: "100%" },
                    react_1.default.createElement(carbonio_design_system_1.Text, null, rootLabel))),
            react_1.default.createElement(carbonio_design_system_1.Padding, { right: "small" },
                react_1.default.createElement(carbonio_design_system_1.IconButton, { customSize: { iconSize: 'large', paddingSize: 0 }, onClick: toggleOpen, icon: open ? 'ChevronUp' : 'ChevronDown' }))),
        react_1.default.createElement(carbonio_design_system_1.Collapse, { crossSize: "100%", orientation: "vertical", open: open, disableTransition: false },
            react_1.default.createElement(carbonio_design_system_1.List, null, childrenFolders.map((childFolder) => (react_1.default.createElement(CustomListItem, { key: childFolder.id, selected: selectedFolderId === childFolder.id, active: selectedFolderId === childFolder.id }, (visible) => visible ? (react_1.default.createElement(flat_folder_1.FlatFolder, { "data-testid": `folder-flat-item-${childFolder.id}`, folder: childFolder, onFolderSelected: onFolderSelected })) : (react_1.default.createElement("div", { style: { height: `${FOLDER_ROW_HEIGHT}` } })))))))));
};
exports.FlatRoot = FlatRoot;
//# sourceMappingURL=flat-root.js.map