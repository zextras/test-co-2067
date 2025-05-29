"use strict";
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
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
exports.EDIT_ACTION = exports.generateMockContactInputItem = void 0;
exports.mockContactInput = mockContactInput;
const react_1 = __importStar(require("react"));
const constants_1 = require("../../../integrations/constants");
const default_contact_input_1 = require("../../../integrations/default-contact-input");
const contactInput = __importStar(require("../../../integrations/hooks"));
function generateMockedContactInput(valueToAdd) {
    function MockedContactInput({ onChange, defaultValue, dragAndDropEnabled: _dragAndDropEnabled, orderedAccountIds: _orderedAccountIds, ...rest }) {
        const onInputChange = (0, react_1.useCallback)(() => {
            valueToAdd && onChange?.([...defaultValue, { ...valueToAdd }]);
        }, [defaultValue, onChange]);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(default_contact_input_1.DefaultContactInput, { ...rest, defaultValue: defaultValue, onChange: onInputChange }),
            react_1.default.createElement("label", { "data-testid": "mockedContactValue" }, JSON.stringify(defaultValue))));
    }
    return MockedContactInput;
}
function mockContactInput({ valueToAdd } = {}) {
    jest
        .spyOn(contactInput, 'useContactInput')
        .mockReturnValue(generateMockedContactInput(valueToAdd));
}
const generateMockContactInputItem = () => ({
    id: '1',
    label: 'Whatever',
    value: {
        id: '1',
        email: 'test@test.com',
        type: constants_1.CONTACT_TYPES.CONTACT
    }
});
exports.generateMockContactInputItem = generateMockContactInputItem;
exports.EDIT_ACTION = {
    icon: 'EditOutline',
    id: constants_1.EDIT_ACTION_ID,
    label: 'Edit',
    type: 'button',
    onClick: jest.fn()
};
//# sourceMappingURL=mock-contact-input.js.map