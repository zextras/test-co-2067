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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoldersAccordion = void 0;
const react_1 = __importStar(require("react"));
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const material_1 = require("@mui/material");
const lodash_1 = require("lodash");
const folders_1 = require("../../../constants/folders");
const theme_mui_1 = require("../../../theme/theme-mui");
const handle_message_1 = require("../../../worker/handle-message");
const FoldersAccordion = ({ folders, onFolderSelected, FolderAccordionCustomComponent, selectedFolderId, disabledFolderIds, filterChildren }) => {
    const filteredFolders = folders.map((root) => ({
        ...root,
        children: (0, lodash_1.filter)(root.children, filterChildren)
    }));
    const [openIds, setOpenIds] = (0, react_1.useState)([folders_1.FOLDERS.USER_ROOT]);
    const handleExpandFolderClick = (folderId, callback) => callback((state) => state.includes(folderId) ? state.filter((id) => id !== folderId) : [...state, folderId]);
    return (react_1.default.createElement(material_1.Container, { disableGutters: true, "data-testid": 'accordion-folders-selector' }, filteredFolders.map((folder) => (react_1.default.createElement(material_1.Accordion, { disableGutters: true, slotProps: { transition: { unmountOnExit: true } }, expanded: openIds.includes(folder.id), key: folder.id },
        react_1.default.createElement(material_1.AccordionSummary, { "data-testid": `folder-accordion-item-${folder.id}`, onClick: (e) => {
                if (disabledFolderIds?.includes(folder.id)) {
                    e.preventDefault();
                    return;
                }
                onFolderSelected?.(folder);
            }, expandIcon: folder?.children?.length > 0 &&
                !(0, handle_message_1.hasId)(folder, 'all') && (react_1.default.createElement(ExpandMore_1.default, { color: "primary", onClick: (e) => {
                    e.preventDefault();
                    handleExpandFolderClick(folder.id, setOpenIds);
                } })), "aria-controls": "panel1a-content", id: folder.id, sx: {
                margin: 0,
                backgroundColor: folder.id === selectedFolderId
                    ? theme_mui_1.theme.palette.highlight.hover
                    : theme_mui_1.theme.palette.gray6.regular,
                '&:hover': {
                    backgroundColor: folder.id === selectedFolderId
                        ? theme_mui_1.theme.palette.highlight.active
                        : theme_mui_1.theme.palette.gray6.hover
                }
            } },
            react_1.default.createElement(FolderAccordionCustomComponent, { folder: folder })),
        folder?.children?.length > 0 && (react_1.default.createElement(material_1.AccordionDetails, null,
            react_1.default.createElement(exports.FoldersAccordion, { folders: folder.children, selectedFolderId: selectedFolderId, key: folder.id, disabledFolderIds: disabledFolderIds, FolderAccordionCustomComponent: FolderAccordionCustomComponent, onFolderSelected: onFolderSelected, filterChildren: filterChildren }))))))));
};
exports.FoldersAccordion = FoldersAccordion;
//# sourceMappingURL=folders-accordion.js.map