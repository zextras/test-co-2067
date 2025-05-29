import { DefaultBodyType, HttpResponse, StrictRequest } from 'msw';
export declare const createSoapAPIInterceptor: <RequestParamsType, ResponseType = never>(apiAction: string, response?: ResponseType) => Promise<RequestParamsType>;
export type APIInterceptor = {
    getLastRequest: () => StrictRequest<DefaultBodyType>;
    getCalledTimes: () => number;
};
export declare const createAPIInterceptor: (method: "get" | "post", url: string, response: HttpResponse) => APIInterceptor;
