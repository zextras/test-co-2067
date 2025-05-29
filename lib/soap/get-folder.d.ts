import { FolderView } from '../types/folder';
export declare const getFolderRequest: ({ id, view }: {
    id?: string;
    view?: FolderView;
}, account?: string) => Promise<any>;
