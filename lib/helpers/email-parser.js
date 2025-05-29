"use strict";
/* eslint-disable @typescript-eslint/no-use-before-define */
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEmail = parseEmail;
exports.isValidEmail = isValidEmail;
function parseEmail(input) {
    const extracted = extractEmail(input);
    return isValidEmail(extracted) ? extracted : undefined;
}
function isValidEmail(email) {
    // eslint-disable-next-line max-len, prettier/prettier, no-useless-escape
    const validEmailRegex = /^(?!\.)[\p{L}\p{N}.+_\-]+@[\p{L}\p{N}.+-]+\.[\p{L}\p{N}]{2,}$/u;
    return validEmailRegex.test(String(email).toLowerCase());
}
function extractEmail(input) {
    const trimmedInput = input.trim();
    const caputured = /.*<(.*)>/.exec(trimmedInput);
    if (caputured && caputured.length > 1) {
        return caputured[1].trim();
    }
    return trimmedInput;
}
//# sourceMappingURL=email-parser.js.map