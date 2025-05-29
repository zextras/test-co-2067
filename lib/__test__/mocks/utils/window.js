"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockWindowLocation = void 0;
/*
 * SPDX-FileCopyrightText: 2025 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const mockWindowLocation = (location) => {
    Object.defineProperty(window, 'location', {
        value: {
            ...window.location,
            ...location
        },
        writable: true
    });
};
exports.mockWindowLocation = mockWindowLocation;
//# sourceMappingURL=window.js.map