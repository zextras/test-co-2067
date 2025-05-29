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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatFolders = void 0;
const react_1 = __importStar(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const react_i18next_1 = require("react-i18next");
const flat_root_1 = require("./flat-root");
const utils_1 = require("./utils");
const FlatFolders = ({ rootFolders, searchString, onFolderSelected, selectedFolderId, allowRootSelection, filterChildren }) => {
    const [hasMoreResults, setHasMoreResults] = react_1.default.useState(false);
    const [t] = (0, react_i18next_1.useTranslation)();
    const flatFilteredFolders = (0, react_1.useMemo)(() => {
        let remaining = 100;
        return rootFolders
            .map((rootFolder) => {
            if (remaining <= 0) {
                return { ...rootFolder, children: [] };
            }
            const currentFolder = {
                ...rootFolder,
                name: (0, utils_1.getSystemFolderTranslatedName)({ folderName: rootFolder.name }),
                children: []
            };
            const children = (0, utils_1.flattenAndFilterFoldersWithCap)(rootFolder.children, searchString, remaining, filterChildren);
            remaining -= children.length;
            if (remaining <= 0) {
                setHasMoreResults(true);
            }
            else {
                setHasMoreResults(false);
            }
            return { ...currentFolder, children };
        })
            .filter((folder) => folder !== null);
    }, [filterChildren, rootFolders, searchString]);
    const hasMoreResultsWarningLabel = t('modal.messageFilteringList', 'Only the first 100 results are displayed. Narrow your search criteria to view the complete list.');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        hasMoreResults && (react_1.default.createElement(carbonio_design_system_1.Padding, { top: "small", bottom: "large" },
            react_1.default.createElement(carbonio_design_system_1.Row, { wrap: "nowrap", takeAvailableSpace: true, width: "fill" },
                react_1.default.createElement(carbonio_design_system_1.Text, { "data-testid": 'has-more-results', textAlign: "left", size: "small" }, hasMoreResultsWarningLabel)))),
        !hasMoreResults && react_1.default.createElement(carbonio_design_system_1.Padding, { vertical: "medium" }),
        react_1.default.createElement(carbonio_design_system_1.Container, { "data-testid": 'flat-folders-selector', orientation: 'vertical', style: { overflowY: 'auto' } }, flatFilteredFolders.map((folder) => (react_1.default.createElement(flat_root_1.FlatRoot, { key: folder.id, folder: folder, childrenFolders: folder.children, isOpen: true, onFolderSelected: onFolderSelected, selectedFolderId: selectedFolderId, allowRootSelection: allowRootSelection }))))));
};
exports.FlatFolders = FlatFolders;
//# sourceMappingURL=flat-folders.js.map