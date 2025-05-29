"use strict";
/*
 * SPDX-FileCopyrightText: 2025 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusIcon = void 0;
const react_1 = __importDefault(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const i18next_1 = require("i18next");
const RowWithIcon = (icon, color, tooltipText) => (react_1.default.createElement(carbonio_design_system_1.Padding, { left: "small" },
    react_1.default.createElement(carbonio_design_system_1.Tooltip, { placement: "right", label: tooltipText },
        react_1.default.createElement(carbonio_design_system_1.Row, null,
            react_1.default.createElement(carbonio_design_system_1.Icon, { icon: icon, color: color, size: "medium" })))));
const StatusIcon = ({ folder }) => {
    if (folder.acl?.grant) {
        const tooltipText = (0, i18next_1.t)('tooltip.folder_sharing_status', {
            count: folder.acl.grant.length,
            defaultValue_one: 'Shared with {{count}} person',
            defaultValue: 'Shared with {{count}} people'
        });
        return RowWithIcon('Shared', 'shared', tooltipText);
    }
    if (folder.isLink) {
        const tooltipText = (0, i18next_1.t)('tooltip.folder_linked_status', 'Linked to me');
        return RowWithIcon('Linked', 'linked', tooltipText);
    }
    return react_1.default.createElement(react_1.default.Fragment, null);
};
exports.StatusIcon = StatusIcon;
//# sourceMappingURL=status-icon.js.map