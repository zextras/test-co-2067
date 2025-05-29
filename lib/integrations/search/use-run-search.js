"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRunSearchIntegration = void 0;
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const useRunSearchIntegration = () => {
    const [runSearchFn, isAvailable] = (0, carbonio_shell_ui_1.useIntegratedFunction)('search-run-search');
    return isAvailable ? runSearchFn : undefined;
};
exports.useRunSearchIntegration = useRunSearchIntegration;
//# sourceMappingURL=use-run-search.js.map