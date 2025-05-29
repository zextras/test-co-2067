"use strict";
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppI18n = getAppI18n;
const i18next_1 = __importDefault(require("i18next"));
function getAppI18n() {
    const newI18n = i18next_1.default.createInstance();
    newI18n
        // init i18next
        // for all options read: https://www.i18next.com/overview/configuration-options
        .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        },
        resources: { en: { translation: {} } }
    });
    return newI18n;
}
//# sourceMappingURL=i18n-test-factory.js.map