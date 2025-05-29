"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoapApiError = void 0;
class SoapApiError extends Error {
    fault;
    constructor(fault) {
        super(fault.Reason.Text);
        this.fault = fault;
    }
}
exports.SoapApiError = SoapApiError;
//# sourceMappingURL=soap-api-error.js.map