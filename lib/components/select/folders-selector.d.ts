import { ReactElement } from 'react';
import type { FolderSelectorItem, OnChangeSelect } from '../../types/select';
type FolderSelectorProps = {
    defaultFolderId: string;
    onChange: OnChangeSelect;
    label?: string;
    folderItems: FolderSelectorItem[];
    disabled?: boolean;
};
export declare const FoldersSelector: ({ defaultFolderId, onChange, label, folderItems, disabled }: FolderSelectorProps) => ReactElement | null;
export {};
