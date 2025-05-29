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
exports.SidebarAccordionMui = void 0;
const react_1 = __importStar(require("react"));
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const material_1 = require("@mui/material");
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const theme_mui_1 = require("../../theme/theme-mui");
const handle_message_1 = require("../../worker/handle-message");
const SidebarAccordionMui = ({ accordions, folderId, localStorageName, AccordionCustomComponent, setSelectedFolder, buttonFindShares, initialExpanded }) => {
    const [openIds, setOpenIds] = (0, carbonio_shell_ui_1.useLocalStorage)(localStorageName, initialExpanded ?? []);
    const sidebarRef = (0, react_1.useRef)(null);
    const onClick = (0, react_1.useCallback)(({ accordion, expanded }) => {
        if (expanded) {
            setOpenIds((state) => state.includes(accordion.id) ? state : [...state, accordion.id]);
        }
        else {
            setOpenIds((state) => state.filter((id) => id !== accordion.id));
        }
    }, [setOpenIds]);
    return (react_1.default.createElement(material_1.Container, { ref: sidebarRef, disableGutters: true }, accordions.map((accordion) => accordion.id === 'find_shares' ? (buttonFindShares) : (react_1.default.createElement(material_1.Accordion, { disableGutters: true, slotProps: { transition: { unmountOnExit: true } }, expanded: openIds.includes(accordion.id), key: accordion.id },
        react_1.default.createElement(material_1.AccordionSummary, { onClick: () => {
                setSelectedFolder?.(accordion.id);
            }, expandIcon: accordion?.children?.length > 0 &&
                !(0, handle_message_1.hasId)(accordion, 'all') && (react_1.default.createElement(ExpandMore_1.default, { color: "primary", onClick: (e) => {
                    e.preventDefault();
                    onClick({ accordion, expanded: !openIds.includes(accordion.id) });
                } })), "aria-controls": "panel1a-content", id: accordion.id, sx: {
                backgroundColor: accordion.id === folderId
                    ? theme_mui_1.theme.palette.highlight.hover
                    : theme_mui_1.theme.palette.gray5.regular,
                '&:hover': {
                    backgroundColor: accordion.id === folderId
                        ? theme_mui_1.theme.palette.highlight.active
                        : theme_mui_1.theme.palette.gray5.hover
                }
            } },
            react_1.default.createElement(AccordionCustomComponent, { item: accordion })),
        accordion?.children?.length > 0 && (react_1.default.createElement(material_1.AccordionDetails, null,
            react_1.default.createElement(exports.SidebarAccordionMui, { accordions: accordion.children, folderId: folderId, key: accordion.id, localStorageName: localStorageName, AccordionCustomComponent: AccordionCustomComponent, setSelectedFolder: setSelectedFolder, buttonFindShares: buttonFindShares, initialExpanded: initialExpanded }))))))));
};
exports.SidebarAccordionMui = SidebarAccordionMui;
//# sourceMappingURL=sidebar-accordion-mui.js.map