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
exports.DeleteTagModal = void 0;
const react_1 = __importStar(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const react_i18next_1 = require("react-i18next");
const tags_1 = require("../../soap/tags");
const modal_footer_1 = require("../modals/modal-footer");
const modal_header_1 = require("../modals/modal-header");
const DeleteTagModal = ({ onClose, tag }) => {
    const [t] = (0, react_i18next_1.useTranslation)();
    const createSnackbar = (0, carbonio_design_system_1.useSnackbar)();
    const title = (0, react_1.useMemo)(() => t('label.delete_tag_name', {
        name: tag?.name,
        defaultValue: 'Delete "{{name}}" tag'
    }), [tag?.name, t]);
    const onConfirm = (0, react_1.useCallback)(() => {
        if (tag)
            (0, tags_1.deleteTag)(tag?.id).then((res) => {
                if (res.action) {
                    createSnackbar({
                        key: `delete-tag`,
                        replace: true,
                        severity: 'success',
                        label: t('messages.snackbar.tag_deleted', {
                            name: tag?.name,
                            defaultValue: '{{name}} Tag deleted successfully'
                        }),
                        autoHideTimeout: 3000,
                        hideButton: true
                    });
                }
                onClose();
            });
    }, [createSnackbar, onClose, t, tag]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(modal_header_1.ModalHeader, { onClose: onClose, title: title }),
        react_1.default.createElement(carbonio_design_system_1.Container, { padding: { horizontal: 'large' } },
            react_1.default.createElement(carbonio_design_system_1.Text, null, t('message.delete_tag_message1', {
                name: tag?.name,
                defaultValue: `Are you sure to delete "{{name}}" Tag?`
            })),
            react_1.default.createElement(carbonio_design_system_1.Text, { overflow: "break-word", style: { textAlign: 'center' } }, t('message.delete_tag_message2', 'Once deleted, it will be removed from every item marked with it.'))),
        react_1.default.createElement(modal_footer_1.ModalFooter, { onConfirm: onConfirm, label: t('label.delete', 'Delete'), disabled: false, color: "error" })));
};
exports.DeleteTagModal = DeleteTagModal;
//# sourceMappingURL=delete-tag-modal.js.map