"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticBreadcrumbs = void 0;
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = __importDefault(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const StaticBreadcrumbs = ({ crumbs, size = 'large', tooltipLabel }) => {
    const crumbsCount = crumbs.length;
    const tooltip = tooltipLabel ?? crumbs.reduce((result, crumb) => `${result}/${crumb.label}`, '');
    const firstCrumb = crumbs[0];
    const restCrumbs = crumbs.slice(1);
    return (react_1.default.createElement(carbonio_design_system_1.Tooltip, { label: tooltip },
        react_1.default.createElement(carbonio_design_system_1.Row, { mainAlignment: "flex-start", wrap: "nowrap", width: "fill" },
            react_1.default.createElement(carbonio_design_system_1.Container, { width: "fit", mainAlignment: "flex-start", padding: { left: 'small', right: 'extrasmall' } },
                react_1.default.createElement(carbonio_design_system_1.Text, { size: size, color: crumbsCount === 1 ? 'text' : 'secondary' }, firstCrumb?.label ?? '')),
            react_1.default.createElement(carbonio_design_system_1.Row, { mainAlignment: "flex-start", maxWidth: "70%" },
                react_1.default.createElement(carbonio_design_system_1.Breadcrumbs, { crumbs: restCrumbs, dropdownProps: { disabled: true } })))));
};
exports.StaticBreadcrumbs = StaticBreadcrumbs;
//# sourceMappingURL=static-breadcrumbs.js.map