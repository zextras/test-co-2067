"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateFoldersStore = void 0;
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const lodash_1 = require("lodash");
const store_1 = require("../../../store/zustand/folder/store");
const utils_1 = require("../../../worker/utils");
const folders_generator_1 = require("../folders/folders-generator");
/**
 * Initialize the folder's store with roots and folders provided by
 * the mocks generators
 */
const populateFoldersStore = ({ view, noSharedAccounts, customFolders } = {}) => {
    const folders = (0, folders_generator_1.generateFolders)({
        view,
        noSharedAccounts,
        customFolders
    });
    const links = (0, lodash_1.filter)((0, lodash_1.values)(folders), ['isLink', true]);
    const linksIdMap = links.reduce((result, link) => {
        const key = (0, utils_1.getLinkIdMapKey)(link);
        if (!key) {
            return result;
        }
        return { ...result, [key]: link.id };
    }, {});
    const initialStoreState = {
        linksIdMap,
        folders,
        searches: {},
        updateFolder: jest.fn()
    };
    store_1.useFolderStore.setState(initialStoreState, true);
};
exports.populateFoldersStore = populateFoldersStore;
//# sourceMappingURL=folders.js.map