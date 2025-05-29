"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericSoapApiError = void 0;
const soap_api_error_1 = require("./soap-api-error");
/**
 * Implements a generic API error which can be used when no specific error is available
 */
class GenericSoapApiError extends soap_api_error_1.SoapApiError {
    /**
     * Returns the generic localized message for the error
     * @param t - The translation function
     * @returns The localized message
     */
    // eslint-disable-next-line class-methods-use-this
    getLocalizedMessage(t) {
        return t('label.error_try_again', 'Something went wrong, please try again');
    }
}
exports.GenericSoapApiError = GenericSoapApiError;
//# sourceMappingURL=generic-soap-api-error.js.map