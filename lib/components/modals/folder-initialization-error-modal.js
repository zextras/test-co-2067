"use strict";
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
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
exports.FolderInitializationErrorModal = void 0;
const react_1 = __importStar(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const react_i18next_1 = require("react-i18next");
const modal_footer_1 = require("./modal-footer");
const modal_header_1 = require("./modal-header");
const FolderInitializationErrorModal = ({ onClose }) => {
    const [t] = (0, react_i18next_1.useTranslation)();
    const title = t('modal.initializeError.title', 'Oops!…Something went wrong');
    const body = t('modal.initializeError.content', 'Please reload the page or try again later');
    const onConfirmLabel = t('modal.initializeError.buttonConfirm', 'Reload');
    const onConfirm = (0, react_1.useCallback)(() => {
        window.location.reload();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(modal_header_1.ModalHeader, { onClose: onClose, title: title }),
        react_1.default.createElement(carbonio_design_system_1.Row, null,
            react_1.default.createElement(carbonio_design_system_1.Text, null, body)),
        react_1.default.createElement(modal_footer_1.ModalFooter, { onConfirm: onConfirm, label: onConfirmLabel, disabled: false })));
};
exports.FolderInitializationErrorModal = FolderInitializationErrorModal;
//# sourceMappingURL=folder-initialization-error-modal.js.map