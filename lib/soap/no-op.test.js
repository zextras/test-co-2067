"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const faker_1 = require("@faker-js/faker");
const no_op_1 = require("./no-op");
const create_api_interceptor_1 = require("../__test__/mocks/network/msw/create-api-interceptor");
const soap_1 = require("../__test__/mocks/utils/soap");
describe('NoOp', () => {
    it('should raise an error if the API returns a fault', async () => {
        const reason = faker_1.faker.word.preposition(8);
        const response = (0, soap_1.buildSoapErrorResponseBody)({ reason });
        (0, create_api_interceptor_1.createSoapAPIInterceptor)('NoOp', response);
        await expect(no_op_1.NoOp).rejects.toThrowError(reason);
    });
    it('should resolve if the API returns success', () => {
        (0, create_api_interceptor_1.createSoapAPIInterceptor)('NoOp');
        expect(no_op_1.NoOp).not.toThrow();
    });
});
//# sourceMappingURL=no-op.test.js.map