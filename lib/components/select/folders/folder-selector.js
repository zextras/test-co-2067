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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderSelector = void 0;
/* eslint-disable @typescript-eslint/no-use-before-define */
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const react_i18next_1 = require("react-i18next");
const flat_folders_1 = require("./flat-folders");
const folder_accordions_custom_component_1 = require("./folder-accordions-custom-component");
const folders_accordion_1 = require("./folders-accordion");
const hooks_1 = require("./hooks");
const folders_1 = require("../../../constants/folders");
const hooks_2 = require("../../../store/zustand/folder/hooks");
const theme_mui_1 = require("../../../theme/theme-mui");
const FolderSelector = ({ inputLabel, onNewFolderClick, selectedFolderId, onFolderSelected, allowRootSelection, showSharedAccounts, filterChildren }) => {
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const selectedFolder = selectedFolderId && (0, hooks_2.getFolder)(selectedFolderId);
    const folders = (0, hooks_1.useFolders)();
    const rootFolders = (0, react_1.useMemo)(() => (showSharedAccounts ? folders : folders.filter((root) => root.id === folders_1.FOLDERS.USER_ROOT)), [folders, showSharedAccounts]);
    const disabledFolderIdsSelection = allowRootSelection
        ? []
        : rootFolders.map((folder) => folder.id);
    const [t] = (0, react_i18next_1.useTranslation)();
    const inputName = selectedFolder ? selectedFolder.name : '';
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(carbonio_design_system_1.Input, { "data-testid": 'folder-name-filter', inputName: inputName, label: inputLabel ?? t('label.filter_folders', 'Filter folders'), backgroundColor: "gray5", value: inputValue, onChange: (e) => setInputValue(e.target.value) }),
        react_1.default.createElement(carbonio_design_system_1.Container, { style: { overflowY: 'auto', display: 'block' }, height: "fit", width: "fill", orientation: "vertical", mainAlignment: "flex-start", minHeight: "30vh", maxHeight: "60vh" }, inputValue.length > 0 ? (react_1.default.createElement(flat_folders_1.FlatFolders, { rootFolders: rootFolders, searchString: inputValue, onFolderSelected: onFolderSelected, selectedFolderId: selectedFolderId, allowRootSelection: allowRootSelection, filterChildren: filterChildren })) : (react_1.default.createElement(material_1.ThemeProvider, { theme: theme_mui_1.themeMui },
            react_1.default.createElement(carbonio_design_system_1.Padding, { vertical: "medium" }),
            react_1.default.createElement(folders_accordion_1.FoldersAccordion, { folders: rootFolders, onFolderSelected: onFolderSelected, selectedFolderId: selectedFolderId, disabledFolderIds: disabledFolderIdsSelection, FolderAccordionCustomComponent: folder_accordions_custom_component_1.FolderAccordionCustomComponent, filterChildren: filterChildren })))),
        onNewFolderClick && (react_1.default.createElement(carbonio_design_system_1.Container, { padding: { top: 'medium', bottom: 'medium' }, mainAlignment: "center", crossAlignment: "flex-start" },
            react_1.default.createElement(carbonio_design_system_1.Button, { type: "ghost", label: t('label.new_folder', 'New Folder'), color: "primary", onClick: onNewFolderClick })))));
};
exports.FolderSelector = FolderSelector;
//# sourceMappingURL=folder-selector.js.map