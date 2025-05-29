import { ComponentType } from 'react';
import { WorkerMessage } from '../workers';
export type FolderFields = {
    isLink: boolean;
    depth: number;
    parent?: string;
    children: Array<Folder>;
};
export type UserFolder = BaseFolder & FolderFields & {
    isLink: false;
};
export type LinkFolder = BaseFolder & FolderFields & LinkFolderFields & {
    isLink: true;
};
export type SearchFolder = BaseFolder & Pick<FolderFields, 'parent' | 'isLink'> & SearchFolderFields;
export type Folder = UserFolder | LinkFolder;
export type RootFolder = Folder & {
    uuid: undefined;
};
export type Folders = {
    [id: string]: Folder;
};
export type Searches = {
    [id: string]: SearchFolder;
};
export type LinksIdMap = {
    [id: string]: string;
};
export type FolderState = {
    folders: Folders;
    linksIdMap: LinksIdMap;
    searches: Searches;
    updateFolder: (id: string, opt: Partial<Folder>) => void;
};
export type FolderView = 'search folder' | 'tag' | 'conversation' | 'message' | 'contact' | 'document' | 'appointment' | 'virtual conversation' | 'remote folder' | 'wiki' | 'task' | 'chat';
export type Grant = {
    perm: string;
    gt: 'usr' | 'grp' | 'dom' | 'cos' | 'all' | 'guest' | 'key' | 'pub';
    zid?: string;
    expiry?: string;
    d?: string;
    pw?: string;
    key?: string;
};
export type BaseFolder = {
    id: string;
    uuid: string;
    name: string;
    absFolderPath?: string;
    l?: string;
    luuid?: string;
    f?: string;
    color?: number;
    rgb?: string;
    u?: number;
    i4u?: number;
    view?: FolderView;
    rev?: number;
    ms?: number;
    md?: number;
    n?: number;
    i4n?: number;
    s?: number;
    i4ms?: number;
    i4next?: number;
    url?: string;
    activesyncdisabled: boolean;
    webOfflineSyncDays?: number;
    perm?: string;
    recursive: boolean;
    rest?: string;
    deletable: boolean;
    meta?: Array<any>;
    acl?: {
        grant: Array<Grant>;
    };
    retentionPolicy?: any;
    checked?: boolean;
};
export type SoapLink = SoapFolder & LinkFolderFields;
export type SoapSearchFolder = SoapFolder & SearchFolderFields;
export type SoapFolder = BaseFolder & {
    folder?: Array<SoapFolder>;
    link?: Array<SoapLink>;
    search?: Array<SoapSearchFolder>;
};
export type LinkFolderFields = {
    owner?: string;
    zid?: string;
    rid?: string;
    ruuid?: string;
    oname?: string;
    reminder: boolean;
    broken: boolean;
};
export type SearchFolderFields = {
    query?: string;
    sortBy?: SortBy;
    types?: string;
};
export type SortBy = 'dateDesc' | 'dateAsc' | 'idDesc' | 'idAsc' | 'subjDesc' | 'subjAsc' | 'nameDesc' | 'nameAsc' | 'durDesc' | 'durAsc' | 'none' | 'taskDueAsc' | 'taskDueDesc' | 'taskStatusAsc' | 'taskStatusDesc' | 'taskPercCompletedAsc' | 'taskPercCompletedDesc' | 'rcptAsc' | 'rcptDesc' | 'readAsc' | 'readDesc';
export type AccordionFolder = {
    id: string;
    label: string;
    folder: Folder;
    CustomComponent: ComponentType<{
        folder: Folder;
    }>;
    items: Array<AccordionFolder>;
};
export type TreeNode<T> = T & {
    id: string;
    children: TreeNode<T>[];
    parent?: string;
};
export type PopulateFoldersStoreOptions = {
    view?: FolderView;
    noSharedAccounts?: boolean;
    customFolders?: Array<Folder>;
};
/**
 * Message to notify the worker of a folder change
 */
export type FolderMessage = WorkerMessage<Record<string, never>>;
