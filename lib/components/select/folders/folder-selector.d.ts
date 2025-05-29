import { ReactElement } from 'react';
import { Folder } from '../../../types';
export type FolderSelectorProps = {
    inputLabel?: string;
    onNewFolderClick?: () => void;
    selectedFolderId?: string;
    onFolderSelected: (arg: Folder) => void;
    showSharedAccounts: boolean;
    allowRootSelection: boolean;
    filterChildren?: (folder: Folder) => boolean;
};
export declare const FolderSelector: ({ inputLabel, onNewFolderClick, selectedFolderId, onFolderSelected, allowRootSelection, showSharedAccounts, filterChildren }: FolderSelectorProps) => ReactElement;
