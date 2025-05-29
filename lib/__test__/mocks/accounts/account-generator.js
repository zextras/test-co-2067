"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccount = void 0;
const default_account_1 = require("./default-account");
/**
 * Generate an account with the customAccount if pass otherwise retunr default Account
 */
const generateAccount = (customAccount) => {
    const defaultAcc = (0, default_account_1.defaultAccount)();
    return customAccount ?? defaultAcc;
};
exports.generateAccount = generateAccount;
//# sourceMappingURL=account-generator.js.map