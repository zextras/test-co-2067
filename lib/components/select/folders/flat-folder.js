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
exports.FlatFolder = void 0;
const react_1 = __importStar(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const lodash_1 = require("lodash");
const utils_1 = require("./utils");
const folders_1 = require("../../../helpers/folders");
const static_breadcrumbs_1 = require("../../breadcrumbs/static-breadcrumbs");
/**
 * Process the absolute path of the given folder, removing
 * the leading slash
 *
 * @param folder
 * @return the array of the crumbs name of the path
 */
const getFolderAbsPathParts = (folder) => {
    if (!folder) {
        return [];
    }
    // Exception for root folders
    if ((0, folders_1.isRoot)(folder?.id)) {
        return [folder.name ?? ''];
    }
    const reg = /^\/?(.*)$/gm;
    const matches = reg.exec(folder.absFolderPath ?? '');
    if (!matches) {
        return [];
    }
    return matches[1].split('/');
};
const FlatFolder = ({ folder, onFolderSelected, ...rest }) => {
    const iconName = (0, utils_1.getFolderIconName)(folder);
    const iconColor = (0, utils_1.getFolderIconColor)(folder);
    const parts = getFolderAbsPathParts(folder);
    /*
     * Create the crumbs array and try to get the translations
     * for the first part which usually represent a system folder
     * for which a translated name is available
     */
    const crumbs = parts.map((part, index) => ({
        id: `${index} `,
        label: index === 0 ? (0, utils_1.getSystemFolderTranslatedName)({ folderName: part }) : part
    }));
    const selectionHandler = (0, react_1.useCallback)(() => onFolderSelected?.(folder) ?? lodash_1.noop, [onFolderSelected, folder]);
    return (react_1.default.createElement(carbonio_design_system_1.Container, { width: "fill", "main-alignment": "flex-start", orientation: "vertical", crossAlignment: "flex-start", padding: { top: 'small', right: 'small', bottom: 'small', left: 'extralarge' }, height: '2.6rem', onClick: selectionHandler, wrap: "nowrap", ...rest },
        react_1.default.createElement(carbonio_design_system_1.Row, { mainAlignment: "flex-start", wrap: "nowrap", width: "fill" },
            react_1.default.createElement(carbonio_design_system_1.Container, { width: "fit" },
                react_1.default.createElement(carbonio_design_system_1.Icon, { color: iconColor, icon: iconName ?? 'FolderOutline', size: "large" })),
            react_1.default.createElement(static_breadcrumbs_1.StaticBreadcrumbs, { crumbs: crumbs, size: "large" }))));
};
exports.FlatFolder = FlatFolder;
//# sourceMappingURL=flat-folder.js.map