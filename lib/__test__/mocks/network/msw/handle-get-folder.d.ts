import { ErrorSoapResponse, SoapHeader } from '@zextras/carbonio-shell-ui';
import { HttpResponseResolver } from 'msw';
import { FolderView } from '../../../../types/folder';
export declare const handleGetFolderRequest: HttpResponseResolver<never, {
    Body: {
        GetFolderRequest: {
            id?: string;
            view?: FolderView;
            tr?: number;
            context?: any;
        };
    };
    Header: SoapHeader;
}>;
export declare const handleFailedRequest: HttpResponseResolver<never, ErrorSoapResponse>;
