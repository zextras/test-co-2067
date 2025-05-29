"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = getErrorMessage;
const soap_api_error_1 = require("../soap/errors/soap-api-error");
function getErrorMessage(error, t) {
    if (error instanceof soap_api_error_1.SoapApiError) {
        return error.getLocalizedMessage(t);
    }
    return t('label.error_try_again', 'Something went wrong, please try again');
}
//# sourceMappingURL=errors.js.map