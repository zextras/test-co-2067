import React from 'react';
import { type FlaFolderProps } from './flat-folder';
import { Folder } from '../../../types';
type FlatRootProps = FlaFolderProps & {
    childrenFolders: Array<Folder>;
    isOpen?: boolean;
    onOpenStatusChange?: (isOpen: boolean) => void;
    selectedFolderId?: string;
    allowRootSelection?: boolean;
};
export declare const FlatRoot: ({ folder, childrenFolders, isOpen, onFolderSelected, onOpenStatusChange, selectedFolderId, allowRootSelection }: FlatRootProps) => React.JSX.Element;
export {};
