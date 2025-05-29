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
exports.FoldersSelector = void 0;
/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = __importStar(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const lodash_1 = require("lodash");
const color_select_1 = require("./color-select");
const select_label_factory_1 = require("./select-label-factory");
const folders_1 = require("../../constants/folders");
const hooks_1 = require("../../store/zustand/folder/hooks");
const FolderNameRender = ({ folder }) => {
    const root = (0, hooks_1.useRoot)(folder.value ?? '');
    return (react_1.default.createElement(carbonio_design_system_1.Row, { wrap: 'nowrap' },
        react_1.default.createElement(carbonio_design_system_1.Padding, { right: "small" },
            react_1.default.createElement(select_label_factory_1.Square, { "$color": folder.color })),
        react_1.default.createElement(color_select_1.TextUpperCase, null, folder.label),
        react_1.default.createElement(carbonio_design_system_1.Row, { takeAvailableSpace: true }, root && root.id !== folders_1.FOLDERS.USER_ROOT && (react_1.default.createElement(carbonio_design_system_1.Padding, { left: "small", style: { overflow: 'hidden' } },
            react_1.default.createElement(color_select_1.TextUpperCase, { color: 'gray1' }, `(${root.name})`))))));
};
const FoldersSelector = ({ defaultFolderId, onChange, label, folderItems, disabled }) => {
    const items = (0, react_1.useMemo)(() => (0, lodash_1.map)(folderItems, (item) => ({
        label: item.label,
        value: item.value,
        color: item.color,
        customComponent: react_1.default.createElement(FolderNameRender, { folder: item })
    })), [folderItems]);
    const defaultFolderSelection = (0, react_1.useMemo)(() => {
        const defaultFold = (0, lodash_1.find)(items, ['value', defaultFolderId]);
        const defaultFolder = {
            value: defaultFold?.value ?? items?.[0]?.value,
            label: defaultFold?.label ?? items?.[0]?.label,
            color: defaultFold?.color ?? items?.[0]?.color
        };
        return (0, lodash_1.find)(items, ['value', defaultFolderId]) ?? defaultFolder;
    }, [items, defaultFolderId]);
    const onSelectedFolderChange = (0, react_1.useCallback)((id) => onChange(id), [onChange]);
    return items && defaultFolderSelection ? (react_1.default.createElement(carbonio_design_system_1.Select, { label: label, onChange: onSelectedFolderChange, items: items, defaultSelection: defaultFolderSelection, disablePortal: true, disabled: disabled, LabelFactory: select_label_factory_1.FolderSelectorLabelFactory })) : null;
};
exports.FoldersSelector = FoldersSelector;
//# sourceMappingURL=folders-selector.js.map