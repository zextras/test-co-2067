"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSoapErrorResponseBody = exports.buildSoapResponse = void 0;
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const faker_1 = require("@faker-js/faker");
const buildSoapResponse = (responseData) => ({
    Header: {
        context: {}
    },
    Body: responseData
});
exports.buildSoapResponse = buildSoapResponse;
const buildSoapErrorResponseBody = ({ code = faker_1.faker.number.int().toString(), detailCode = faker_1.faker.word.noun().toUpperCase(), reason = faker_1.faker.word.preposition(), trace = faker_1.faker.word.preposition() } = {}) => ({
    Fault: {
        Detail: { Error: { Code: detailCode, Trace: trace } },
        Reason: { Text: reason },
        Code: {
            Value: code
        }
    }
});
exports.buildSoapErrorResponseBody = buildSoapErrorResponseBody;
//# sourceMappingURL=soap.js.map