"use strict";
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAPIInterceptor = exports.createSoapAPIInterceptor = void 0;
const msw_1 = require("msw");
const jest_setup_1 = require("../../../jest-setup");
const createSoapAPIInterceptor = (apiAction, response) => new Promise((resolve, reject) => {
    (0, jest_setup_1.getSetupServer)().use(msw_1.http.post(`/service/soap/${apiAction}Request`, async ({ request }) => {
        if (!request) {
            reject(new Error('Empty request'));
            return msw_1.HttpResponse.json({}, {
                status: 500,
                statusText: 'Empty request'
            });
        }
        const reqActionParamWrapper = `${apiAction}Request`;
        const requestContent = await request.json();
        const params = requestContent?.Body?.[reqActionParamWrapper];
        resolve(params);
        return msw_1.HttpResponse.json({
            Body: {
                [`${apiAction}Response`]: response || {}
            }
        });
    }));
});
exports.createSoapAPIInterceptor = createSoapAPIInterceptor;
const createAPIInterceptor = (method, url, response) => {
    let calledTimes = 0;
    const requests = [];
    (0, jest_setup_1.getSetupServer)().use(msw_1.http[method](url, async ({ request }) => {
        calledTimes += 1;
        requests.push(request);
        return response;
    }));
    return {
        getLastRequest: () => requests[requests.length - 1],
        getCalledTimes: () => calledTimes
    };
};
exports.createAPIInterceptor = createAPIInterceptor;
//# sourceMappingURL=create-api-interceptor.js.map