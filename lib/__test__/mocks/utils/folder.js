"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomFolderFlags = exports.getRandomInRange = void 0;
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const faker_1 = require("@faker-js/faker");
const getRandomInRange = ({ min = 1, max = 3 } = {}) => faker_1.faker.number.int({ max, min });
exports.getRandomInRange = getRandomInRange;
const getRandomFolderFlags = (view) => {
    const hasFlags = faker_1.faker.datatype.boolean();
    if (hasFlags) {
        const flags = ['~', 'o', 'y', 'i', '*', 'b'];
        if (view === 'appointment') {
            // adding 'checked' flag only for appointment view
            flags.push('#');
        }
        const index = (0, exports.getRandomInRange)({ min: 0, max: flags.length - 1 });
        return flags[index];
    }
    return '';
};
exports.getRandomFolderFlags = getRandomFolderFlags;
//# sourceMappingURL=folder.js.map