"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRestHandler = exports.getRestHandlers = void 0;
const handlers = [];
const getRestHandlers = () => [...handlers];
exports.getRestHandlers = getRestHandlers;
const registerRestHandler = (...handler) => {
    handlers.push(...handler);
};
exports.registerRestHandler = registerRestHandler;
//# sourceMappingURL=handlers.js.map