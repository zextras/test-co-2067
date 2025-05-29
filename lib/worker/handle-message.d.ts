import { SoapNotify } from '@zextras/carbonio-shell-ui';
import type { BaseFolder, Folder, FolderMessage, Folders, LinkFolder, LinkFolderFields, SearchFolderFields, SoapFolder, SoapLink, SoapSearchFolder, UserFolder } from '../types';
import { FolderView } from '../types';
export declare const testUtils: {
    getFolders: () => Folders;
    resetFolders: () => void;
    setFolders: (data: Folders) => void;
    setCurrentView: (current: FolderView) => void;
    getCurrentView: () => string | undefined;
};
export declare const testFolderIsChecked: ({ string }: {
    string: string | undefined;
}) => boolean;
export declare const hasId: (f: {
    id: string;
}, id: string) => boolean;
export declare const normalize: (f: SoapFolder, p?: Folder) => BaseFolder;
export declare const normalizeSearch: (s: SoapSearchFolder) => BaseFolder & SearchFolderFields;
export declare const normalizeLink: (l: SoapLink, p?: Folder) => BaseFolder & LinkFolderFields;
export declare const processSearch: (soapSearch: SoapSearchFolder, parent: Folder) => void;
export declare const processLink: (soapLink: SoapLink, depth: number, parent?: Folder) => LinkFolder;
export declare const processFolder: (soapFolder: SoapFolder, depth: number, parent?: Folder) => UserFolder;
export declare const handleFolderRefresh: (soapFolders: Array<SoapFolder>, currentView: FolderView) => UserFolder | Array<UserFolder>;
export declare const handleFolderCreated: (created: Array<SoapFolder>) => void;
export declare const handleLinkCreated: (created: Array<SoapLink>) => void;
export declare const handleFolderModified: (modified: Array<Partial<UserFolder>>) => void;
export declare const handleFolderDeleted: (deleted: string[]) => void;
export declare const handleFolderNotify: (notify: SoapNotify) => void;
export declare const handleFoldersMessages: ({ data }: FolderMessage) => void;
export declare const handleMessage: ({ data }: FolderMessage) => void;
