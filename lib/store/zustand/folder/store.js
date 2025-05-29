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
exports.useFolderStore = void 0;
const immer_1 = __importDefault(require("immer"));
const zustand_1 = require("zustand");
const worker_1 = require("../../../worker");
// extra currying as suggested in https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#basic-usage
exports.useFolderStore = (0, zustand_1.create)()((set) => ({
    folders: {},
    linksIdMap: {},
    searches: {},
    updateFolder: (id, opt) => {
        set((0, immer_1.default)((state) => {
            if (state?.folders?.[id]) {
                state.folders[id] = {
                    ...state.folders[id],
                    ...opt
                };
            }
        }));
    }
}));
worker_1.folderWorker.onmessage = ({ data }) => {
    exports.useFolderStore.setState(data);
};
//# sourceMappingURL=store.js.map