import { SoapFault } from '@zextras/carbonio-shell-ui';
import { TFunction } from 'i18next';
export declare abstract class SoapApiError extends Error {
    protected fault: SoapFault;
    constructor(fault: SoapFault);
    abstract getLocalizedMessage(t: TFunction): string;
}
