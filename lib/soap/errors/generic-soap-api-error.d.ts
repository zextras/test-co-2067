import { TFunction } from 'i18next';
import { SoapApiError } from './soap-api-error';
/**
 * Implements a generic API error which can be used when no specific error is available
 */
export declare class GenericSoapApiError extends SoapApiError {
    /**
     * Returns the generic localized message for the error
     * @param t - The translation function
     * @returns The localized message
     */
    getLocalizedMessage(t: TFunction): string;
}
