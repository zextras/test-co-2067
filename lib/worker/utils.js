"use strict";
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLinkIdMapKey = void 0;
/**
 *
 * @param link
 */
const getLinkIdMapKey = (link) => {
    if (!link) {
        return null;
    }
    if (!link.rid || !link.zid) {
        return null;
    }
    return `${link.zid}:${link.rid}`;
};
exports.getLinkIdMapKey = getLinkIdMapKey;
//# sourceMappingURL=utils.js.map