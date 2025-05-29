import { ResFolder } from '../utils';
export type GetShareInfoRequest = {
    _jsns: string;
    includeSelf: number;
};
export type GetShareInfoResponse = {
    _jsns: string;
    share: Array<ResFolder>;
};
export declare const getShareInfoRequest: () => Promise<{
    isFulfilled: boolean;
    folders: Array<ResFolder>;
}>;
