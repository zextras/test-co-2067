"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFakeFile = void 0;
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const faker_1 = require("@faker-js/faker");
const createFakeFile = ({ content = faker_1.faker.string.alphanumeric(faker_1.faker.number.int({ min: 1, max: 256 })), name = faker_1.faker.system.fileName(), mimeType = faker_1.faker.system.mimeType() } = {}) => new File([content], name, { type: mimeType });
exports.createFakeFile = createFakeFile;
//# sourceMappingURL=file.js.map