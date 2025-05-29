import { DefaultBodyType, RequestHandler } from 'msw';
export interface CarbonioMailboxRestGenericRequest {
    Body: any;
}
export interface CarbonioMailboxRestGenericResponse {
    Body: any;
    Header: any;
}
export type CarbonioMailboxRestHandlerRequest<T> = DefaultBodyType & {
    Body: Record<string, T>;
};
export declare const getRestHandlers: () => Array<RequestHandler>;
export declare const registerRestHandler: (...handler: Array<RequestHandler>) => void;
