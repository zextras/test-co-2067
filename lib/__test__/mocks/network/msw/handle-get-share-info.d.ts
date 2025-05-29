import { HttpResponseResolver } from 'msw';
export declare const getMSWShareInfo: (context?: any) => any;
export declare const getEmptyMSWShareInfoResponse: () => {
    Header: {
        context: {
            session: {
                id: number;
                _content: number;
            };
        };
    };
    Body: {
        GetShareInfoResponse: {
            share: any[];
            _jsns: string;
        };
    };
};
export declare const handleGetShareInfoRequest: HttpResponseResolver<never, any>;
export declare const handleEmptyGetShareInfoRequest: HttpResponseResolver<never, any>;
