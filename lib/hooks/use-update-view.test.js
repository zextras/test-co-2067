"use strict";
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const use_update_view_1 = require("./use-update-view");
const create_api_interceptor_1 = require("../__test__/mocks/network/msw/create-api-interceptor");
const test_setup_1 = require("../__test__/test-setup");
describe('useUpdateView', () => {
    it('should register a listener to the "updateView" event', () => {
        const addEventListener = jest.spyOn(window, 'addEventListener');
        (0, test_setup_1.setupHook)(use_update_view_1.useUpdateView);
        expect(addEventListener).toHaveBeenCalledWith('updateView', expect.anything());
    });
    it('should call the NoOp when the "updateView" event is triggered', async () => {
        const callWatcher = jest.fn();
        const apiInterceptor = (0, create_api_interceptor_1.createSoapAPIInterceptor)('NoOp').then(() => callWatcher());
        (0, test_setup_1.setupHook)(use_update_view_1.useUpdateView);
        (0, react_1.fireEvent)(window, new CustomEvent('updateView'));
        await apiInterceptor;
        expect(callWatcher).toHaveBeenCalled();
    });
    it('should unregister a listener to the "updateView" event', () => {
        const removeEventListener = jest.spyOn(window, 'removeEventListener');
        const { unmount } = (0, test_setup_1.setupHook)(use_update_view_1.useUpdateView);
        unmount();
        expect(removeEventListener).toHaveBeenCalledWith('updateView', expect.anything());
    });
});
//# sourceMappingURL=use-update-view.test.js.map