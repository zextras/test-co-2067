import React from 'react';
import { Folder } from '../../../types';
type FolderAccordionProps = {
    folders: Array<Folder>;
    onFolderSelected: (arg: Folder) => void;
    selectedFolderId?: string;
    disabledFolderIds?: Array<string>;
    FolderAccordionCustomComponent: React.FC<{
        folder: Folder;
    }>;
    filterChildren?: (folder: Folder) => boolean;
};
export declare const FoldersAccordion: ({ folders, onFolderSelected, FolderAccordionCustomComponent, selectedFolderId, disabledFolderIds, filterChildren }: FolderAccordionProps) => React.JSX.Element;
export {};
