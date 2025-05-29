"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = require("@testing-library/react");
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const msw_1 = require("msw");
const use_initialize_folders_1 = require("./use-initialize-folders");
const jest_setup_1 = require("../__test__/jest-setup");
const handle_get_folder_1 = require("../__test__/mocks/network/msw/handle-get-folder");
const handle_get_share_info_1 = require("../__test__/mocks/network/msw/handle-get-share-info");
const test_setup_1 = require("../__test__/test-setup");
const store_1 = require("../store/zustand/folder/store");
const worker_1 = require("../worker");
jest.mock('@zextras/carbonio-design-system', () => ({
    ...jest.requireActual('@zextras/carbonio-design-system'),
    useModal: jest.fn()
}));
describe.each(['appointment', 'message', 'contact'])('with %s parameter', (view) => {
    test('it will call refresh', async () => {
        carbonio_design_system_1.useModal.mockImplementation(() => ({ createModal: jest.fn() }));
        const workerSpy = jest.spyOn(worker_1.folderWorker, 'postMessage');
        (0, jest_setup_1.getSetupServer)().use(msw_1.http.post('/service/soap/GetFolderRequest', handle_get_folder_1.handleGetFolderRequest));
        (0, jest_setup_1.getSetupServer)().use(msw_1.http.post('/service/soap/GetShareInfoRequest', handle_get_share_info_1.handleGetShareInfoRequest));
        await (0, react_1.waitFor)(() => (0, test_setup_1.setupHook)(use_initialize_folders_1.useInitializeFolders, { initialProps: [view] }));
        await (0, react_1.waitFor)(() => {
            expect(workerSpy).toHaveBeenCalled();
        });
        await (0, react_1.waitFor)(() => {
            expect(workerSpy).toHaveBeenCalledTimes(1);
        });
        await (0, react_1.waitFor)(() => {
            expect(workerSpy).not.toHaveBeenCalledWith(undefined);
        });
        await (0, react_1.waitFor)(() => {
            expect(workerSpy).toHaveBeenCalledWith(expect.objectContaining({ op: 'refresh', currentView: view, folder: expect.any(Object) }));
        });
    });
    test('it will open error-initialize-modal when GetFolderRequest fails', async () => {
        const createModalSpy = jest.fn();
        carbonio_design_system_1.useModal.mockImplementation(() => ({ createModal: createModalSpy }));
        const workerSpy = jest.spyOn(worker_1.folderWorker, 'postMessage');
        (0, jest_setup_1.getSetupServer)().use(msw_1.http.post('/service/soap/GetFolderRequest', handle_get_folder_1.handleFailedRequest));
        await (0, react_1.waitFor)(() => (0, test_setup_1.setupHook)(use_initialize_folders_1.useInitializeFolders, { initialProps: [view] }));
        await (0, react_1.waitFor)(() => {
            expect(workerSpy).toHaveBeenCalledTimes(0);
        });
        await (0, react_1.waitFor)(() => {
            expect(createModalSpy).toHaveBeenCalledWith(expect.objectContaining({ id: 'error-initialize-modal' }), true);
        });
    });
    test('it will open error-initialize-modal  when GetShareInfoRequest fails', async () => {
        const createModalSpy = jest.fn();
        carbonio_design_system_1.useModal.mockImplementation(() => ({ createModal: createModalSpy }));
        const workerSpy = jest.spyOn(worker_1.folderWorker, 'postMessage');
        (0, jest_setup_1.getSetupServer)().use(msw_1.http.post('/service/soap/GetFolderRequest', handle_get_folder_1.handleGetFolderRequest));
        (0, jest_setup_1.getSetupServer)().use(msw_1.http.post('/service/soap/GetShareInfoRequest', handle_get_folder_1.handleFailedRequest));
        (0, test_setup_1.setupHook)(use_initialize_folders_1.useInitializeFolders, { initialProps: [view] });
        await (0, react_1.waitFor)(() => {
            expect(workerSpy).toHaveBeenCalledTimes(0);
        });
        await (0, react_1.waitFor)(() => {
            expect(createModalSpy).toHaveBeenCalledWith(expect.objectContaining({ id: 'error-initialize-modal' }), true);
        });
    });
    it('should not open the error modal when getShareInfo returns an empty array', async () => {
        const createModalSpy = jest.fn();
        store_1.useFolderStore.setState({ folders: {} });
        (0, jest_setup_1.getSetupServer)().use(msw_1.http.post('/service/soap/GetFolderRequest', handle_get_folder_1.handleGetFolderRequest));
        (0, jest_setup_1.getSetupServer)().use(msw_1.http.post('/service/soap/GetShareInfoRequest', handle_get_share_info_1.handleEmptyGetShareInfoRequest));
        await (0, react_1.waitFor)(() => (0, test_setup_1.setupHook)(use_initialize_folders_1.useInitializeFolders, {
            initialProps: ['message']
        }));
        await (0, react_1.act)(async () => {
            await jest.advanceTimersToNextTimerAsync();
        });
        expect(createModalSpy).not.toHaveBeenCalled();
    });
    test('If multiple accounts are available they will be on the same level of the main account', async () => {
        store_1.useFolderStore.setState({ folders: {} });
        const workerSpy = jest.spyOn(worker_1.folderWorker, 'postMessage');
        (0, jest_setup_1.getSetupServer)().use(msw_1.http.post('/service/soap/GetFolderRequest', handle_get_folder_1.handleGetFolderRequest));
        (0, jest_setup_1.getSetupServer)().use(msw_1.http.post('/service/soap/GetShareInfoRequest', handle_get_share_info_1.handleGetShareInfoRequest));
        await (0, react_1.waitFor)(() => (0, test_setup_1.setupHook)(use_initialize_folders_1.useInitializeFolders, {
            initialProps: ['appointment']
        }));
        await (0, react_1.waitFor)(() => expect(workerSpy).toHaveBeenCalled());
        await (0, react_1.waitFor)(() => expect(workerSpy).toHaveBeenCalledTimes(1));
        await (0, react_1.waitFor)(() => expect(workerSpy).not.toHaveBeenCalledWith(undefined));
        await (0, react_1.waitFor)(() => expect(workerSpy).toHaveBeenCalledWith(expect.objectContaining({
            op: 'refresh',
            currentView: 'appointment',
            folder: expect.arrayContaining([
                // main account id
                expect.objectContaining({ id: '1' }),
                // shared account id
                expect.objectContaining({ id: expect.stringContaining(':1') })
            ])
        })));
    });
    test('If only main account is available postMessage will be called with an array with 1 item', async () => {
        store_1.useFolderStore.setState({ folders: {} });
        const workerSpy = jest.spyOn(worker_1.folderWorker, 'postMessage');
        (0, jest_setup_1.getSetupServer)().use(msw_1.http.post('/service/soap/GetFolderRequest', handle_get_folder_1.handleGetFolderRequest));
        (0, jest_setup_1.getSetupServer)().use(msw_1.http.post('/service/soap/GetShareInfoRequest', () => {
            const response = (0, handle_get_share_info_1.getEmptyMSWShareInfoResponse)();
            return msw_1.HttpResponse.json(response);
        }));
        await (0, react_1.waitFor)(() => (0, test_setup_1.setupHook)(use_initialize_folders_1.useInitializeFolders, {
            initialProps: ['appointment']
        }));
        await (0, react_1.waitFor)(() => expect(workerSpy).toHaveBeenCalled());
        await (0, react_1.waitFor)(() => expect(workerSpy).toHaveBeenCalledTimes(1));
        await (0, react_1.waitFor)(() => expect(workerSpy).not.toHaveBeenCalledWith(undefined));
        await (0, react_1.waitFor)(() => expect(workerSpy).toHaveBeenCalledWith(expect.objectContaining({
            op: 'refresh',
            currentView: 'appointment',
            folder: [expect.objectContaining({ id: '1' })]
        })));
    });
});
//# sourceMappingURL=use-initialize-folders.test.js.map