import React from 'react';
import { Folder } from '../../../types';
type FlatFoldersProps = {
    rootFolders: Array<Folder>;
    searchString: string;
    selectedFolderId?: string;
    onFolderSelected?: (folder: Folder) => void;
    allowRootSelection?: boolean;
    filterChildren?: (folder: Folder) => boolean;
};
export declare const FlatFolders: ({ rootFolders, searchString, onFolderSelected, selectedFolderId, allowRootSelection, filterChildren }: FlatFoldersProps) => React.JSX.Element;
export {};
