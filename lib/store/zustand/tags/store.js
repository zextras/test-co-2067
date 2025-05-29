"use strict";
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTagStore = void 0;
const zustand_1 = require("zustand");
const worker_1 = require("../../../worker");
// extra currying as suggested in https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#basic-usage
exports.useTagStore = (0, zustand_1.create)()(() => ({
    tags: {}
}));
worker_1.tagsWorker.onmessage = ({ data }) => {
    exports.useTagStore.setState(data);
};
//# sourceMappingURL=store.js.map