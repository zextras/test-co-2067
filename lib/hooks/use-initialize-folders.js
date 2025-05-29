"use strict";
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
exports.useInitializeFolders = void 0;
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const react_1 = __importStar(require("react"));
const carbonio_design_system_1 = require("@zextras/carbonio-design-system");
const lodash_1 = require("lodash");
const folder_initialization_error_modal_1 = require("../components/modals/folder-initialization-error-modal");
const get_folder_1 = require("../soap/get-folder");
const get_share_info_1 = require("../soap/get-share-info");
const worker_1 = require("../worker");
const getFoldersByAccounts = async (sharedAccounts, view) => Promise.all((0, lodash_1.map)(sharedAccounts, async ({ ownerEmail }) => {
    const response = await (0, get_folder_1.getFolderRequest)({ view }, ownerEmail);
    if (response?.folder?.length) {
        return {
            ...response.folder[0],
            oname: response.folder[0].name,
            owner: ownerEmail,
            name: ownerEmail
        };
    }
    return response;
}));
const useInitializeFolders = (view) => {
    const isLoading = (0, react_1.useRef)(false);
    const { createModal, closeModal } = (0, carbonio_design_system_1.useModal)();
    const fetchFolders = (0, react_1.useCallback)(async () => {
        Promise.all([(0, get_folder_1.getFolderRequest)({ view }), (0, get_share_info_1.getShareInfoRequest)()])
            .then(async ([getFolderResponse, getShareInfoResponse]) => {
            isLoading.current = true;
            if (getShareInfoResponse.folders) {
                const sharedAccounts = (0, lodash_1.filter)(getShareInfoResponse.folders, ['folderId', 1]);
                const filteredLinks = (0, lodash_1.reject)(getFolderResponse.folder[0].link, ['rid', 1]);
                const folders = sharedAccounts.length
                    ? [
                        {
                            ...getFolderResponse.folder[0],
                            link: filteredLinks
                        },
                        ...(await getFoldersByAccounts(sharedAccounts, view))
                    ]
                    : [
                        {
                            ...getFolderResponse.folder[0],
                            link: filteredLinks
                        }
                    ];
                worker_1.folderWorker.postMessage({
                    op: 'refresh',
                    currentView: view,
                    folder: folders ?? []
                });
            }
            else {
                worker_1.folderWorker.postMessage({
                    op: 'refresh',
                    currentView: view,
                    folder: getFolderResponse.folder ?? []
                });
            }
        })
            .catch(() => {
            const id = 'error-initialize-modal';
            createModal({
                id,
                children: react_1.default.createElement(folder_initialization_error_modal_1.FolderInitializationErrorModal, { onClose: () => closeModal(id) })
            }, true);
        })
            .finally(() => {
            isLoading.current = false;
        });
    }, [closeModal, createModal, view]);
    (0, react_1.useEffect)(() => {
        if (!isLoading.current && view) {
            fetchFolders();
        }
    }, [fetchFolders, view]);
};
exports.useInitializeFolders = useInitializeFolders;
//# sourceMappingURL=use-initialize-folders.js.map