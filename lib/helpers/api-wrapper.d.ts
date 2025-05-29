type ErrorResponse<K> = {
    error: K;
};
type DataResponse<T> = {
    data: T;
};
export declare function apiWrapper<T, K>(promise: Promise<Response>): Promise<DataResponse<T> | ErrorResponse<K>>;
export {};
