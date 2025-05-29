"use strict";
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiWrapper = apiWrapper;
async function apiWrapper(promise) {
    return Promise.allSettled([promise]).then(async ([result]) => {
        if (result.status === 'fulfilled') {
            const responseBody = await result.value.text();
            return responseBody ? { data: JSON.parse(responseBody) } : { data: {} };
        }
        return { error: result.reason };
    });
}
//# sourceMappingURL=api-wrapper.js.map