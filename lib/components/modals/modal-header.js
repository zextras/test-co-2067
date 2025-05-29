"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalHeader = void 0;
/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = __importDefault(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const ModalHeader = ({ title, onClose, showCloseIcon = true }) => (react_1.default.createElement(carbonio_design_system_1.Container, { mainAlignment: "space-between", width: "100%" },
    react_1.default.createElement(carbonio_design_system_1.Row, { takeAvailableSpace: true, mainAlignment: "space-between", width: "100%" },
        react_1.default.createElement(carbonio_design_system_1.Row, { width: "calc(100% - 1.5rem)", takeAvailableSpace: true, mainAlignment: "flex-start" },
            react_1.default.createElement(carbonio_design_system_1.Text, { weight: "bold", size: "large" }, title)),
        onClose && showCloseIcon && (react_1.default.createElement(carbonio_design_system_1.Row, { mainAlignment: "flex-start" },
            react_1.default.createElement(carbonio_design_system_1.IconButton, { size: "medium", style: { padding: 0, margin: 0 }, onClick: onClose, icon: "CloseOutline" })))),
    react_1.default.createElement(carbonio_design_system_1.Padding, { top: "medium" }),
    react_1.default.createElement(carbonio_design_system_1.Divider, null),
    react_1.default.createElement(carbonio_design_system_1.Padding, { bottom: "medium" })));
exports.ModalHeader = ModalHeader;
//# sourceMappingURL=modal-header.js.map