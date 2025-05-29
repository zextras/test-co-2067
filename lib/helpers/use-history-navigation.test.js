"use strict";
/*
 * SPDX-FileCopyrightText: 2025 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
const use_history_navigation_1 = require("./use-history-navigation");
const test_setup_1 = require("../__test__/test-setup");
describe('useHistoryNavigation', () => {
    it('should return an object with two functions', () => {
        const { result: { current: navigation } } = (0, test_setup_1.setupHook)(use_history_navigation_1.useHistoryNavigation);
        expect(navigation).toEqual({
            replaceHistory: expect.any(Function),
            pushHistory: expect.any(Function)
        });
    });
});
//# sourceMappingURL=use-history-navigation.test.js.map