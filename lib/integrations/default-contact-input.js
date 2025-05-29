"use strict";
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultContactInput = void 0;
const react_1 = __importDefault(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const constants_1 = require("./constants");
const email_parser_1 = require("../helpers/email-parser");
const DefaultContactInput = ({ onChange, defaultValue, 
// The following props are not used in this component, but are passed to the ChipInput component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
dragAndDropEnabled: _dragAndDropEnabled, 
// The following props are not used in this component, but are passed to the ChipInput component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
orderedAccountIds: _orderedAccountIds, ...rest }) => {
    const internalOnChange = (items) => {
        onChange?.(items);
    };
    const internalOnAdd = (email) => {
        if (typeof email === 'string') {
            const validEmail = (0, email_parser_1.parseEmail)(email);
            const finalEmail = validEmail ?? email;
            return {
                id: finalEmail,
                label: finalEmail,
                value: {
                    id: finalEmail,
                    email,
                    type: constants_1.CONTACT_TYPES.CONTACT
                },
                error: !validEmail
            };
        }
        throw new Error('no value');
    };
    return (react_1.default.createElement(carbonio_design_system_1.ChipInput, { ...rest, pasteSeparators: [',', ';', '\n'], createChipOnPaste: true, defaultValue: defaultValue, separators: [
            { code: 'Enter', ctrlKey: false },
            { code: 'NumpadEnter', ctrlKey: false },
            { key: ',', ctrlKey: false },
            { key: ';', ctrlKey: false }
        ], onChange: internalOnChange, onAdd: internalOnAdd }));
};
exports.DefaultContactInput = DefaultContactInput;
//# sourceMappingURL=default-contact-input.js.map