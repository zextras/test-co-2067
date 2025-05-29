import { ErrorSoapBodyResponse, SuccessSoapResponse } from '@zextras/carbonio-shell-ui';
export declare const buildSoapResponse: <T>(responseData: Record<string, T>) => SuccessSoapResponse<T>;
export declare const buildSoapErrorResponseBody: ({ code, detailCode, reason, trace }?: {
    code?: string;
    detailCode?: string;
    reason?: string;
    trace?: string;
}) => ErrorSoapBodyResponse;
