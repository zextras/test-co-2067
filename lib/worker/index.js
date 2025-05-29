"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagsWorker = exports.folderWorker = void 0;
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
exports.folderWorker = new Worker(new URL('./folder', import.meta.url));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
exports.tagsWorker = new Worker(new URL('./tags', import.meta.url));
//# sourceMappingURL=index.js.map