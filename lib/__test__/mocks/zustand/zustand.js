"use strict";
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const react_1 = require("@testing-library/react");
const { create: actualCreate } = jest.requireActual('zustand');
// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set();
// when creating a store, we get its initial state, create a reset function and add it in the set
const create = () => (createState) => {
    const store = actualCreate(createState);
    const initialState = store.getState();
    storeResetFns.add(() => store.setState(initialState, true));
    return store;
};
exports.create = create;
// Reset all stores after each test run
beforeEach(() => {
    (0, react_1.act)(() => storeResetFns.forEach((resetFn) => resetFn()));
});
//# sourceMappingURL=zustand.js.map