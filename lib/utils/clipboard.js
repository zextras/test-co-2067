"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyToClipboard = void 0;
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const legacyFallback = (text) => {
    const textArea = window.parent.document.createElement('textarea');
    window.parent.document.body.appendChild(textArea);
    textArea.value = text;
    textArea.select();
    const success = window.parent.document.execCommand('copy');
    window.parent.document.body.removeChild(textArea);
    return new Promise((resolve, reject) => {
        success ? resolve() : reject();
    });
};
const copyToClipboard = (text) => {
    if (!window.parent.navigator.clipboard) {
        return legacyFallback(text);
    }
    return window.parent.navigator.clipboard.writeText(text);
};
exports.copyToClipboard = copyToClipboard;
//# sourceMappingURL=clipboard.js.map