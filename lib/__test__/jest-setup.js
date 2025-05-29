"use strict";
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSetupServer = exports.defaultAfterAllTests = exports.defaultAfterEachTest = exports.defaultBeforeEachTest = exports.defaultBeforeAllTests = exports.getFailOnConsoleDefaultConfig = void 0;
const lodash_1 = require("lodash");
const node_1 = require("msw/node");
const handlers_1 = require("./mocks/network/msw/handlers");
let server;
/**
 * Returns the default configuration for jest failOnConsole setting
 */
const getFailOnConsoleDefaultConfig = () => ({
    shouldFailOnError: true,
    shouldFailOnWarn: true
});
exports.getFailOnConsoleDefaultConfig = getFailOnConsoleDefaultConfig;
const defaultBeforeAllTests = ({ onUnhandledRequest } = { onUnhandledRequest: 'warn' }) => {
    // Do not useFakeTimers with `whatwg-fetch` if using mocked server
    // https://github.com/mswjs/msw/issues/448
    // mock a simplified Intersection Observer
    Object.defineProperty(window, 'IntersectionObserver', {
        writable: true,
        value: jest.fn(function intersectionObserverMock(callback, options) {
            return {
                thresholds: options.threshold,
                root: options.root,
                rootMargin: options.rootMargin,
                observe: jest.fn(),
                unobserve: jest.fn(),
                disconnect: jest.fn()
            };
        })
    });
    server?.close();
    server = (0, node_1.setupServer)(...(0, handlers_1.getRestHandlers)());
    server.listen({ onUnhandledRequest });
};
exports.defaultBeforeAllTests = defaultBeforeAllTests;
class Worker {
    url;
    onmessage;
    constructor(stringUrl) {
        this.url = stringUrl;
        this.onmessage = lodash_1.noop;
    }
    postMessage(msg) {
        this.onmessage(msg);
    }
}
Object.defineProperty(window, 'Worker', {
    writable: true,
    value: Worker
});
/**
 * Default logic to execute before each tests
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultBeforeEachTest = () => { };
exports.defaultBeforeEachTest = defaultBeforeEachTest;
/**
 * Default logic to execute after each tests
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultAfterEachTest = () => {
    jest.clearAllTimers();
};
exports.defaultAfterEachTest = defaultAfterEachTest;
/**
 * Default logic to execute after all the tests
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultAfterAllTests = () => {
    server.resetHandlers();
    server.close();
};
exports.defaultAfterAllTests = defaultAfterAllTests;
const getSetupServer = () => server;
exports.getSetupServer = getSetupServer;
window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
}));
//# sourceMappingURL=jest-setup.js.map