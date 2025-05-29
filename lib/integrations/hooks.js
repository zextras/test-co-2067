"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContactInput = void 0;
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const default_contact_input_1 = require("./default-contact-input");
const useContactInput = () => {
    const [ContactInput, integrationAvailable] = (0, carbonio_shell_ui_1.useIntegratedComponent)('contact-input');
    if (integrationAvailable) {
        return ContactInput;
    }
    return default_contact_input_1.DefaultContactInput;
};
exports.useContactInput = useContactInput;
//# sourceMappingURL=hooks.js.map