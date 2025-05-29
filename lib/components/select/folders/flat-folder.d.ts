import React from 'react';
import { Folder } from '../../../types';
export type FlaFolderProps = {
    folder: Folder;
    selected?: boolean;
    onFolderSelected?: (arg: Folder) => void;
};
export declare const FlatFolder: ({ folder, onFolderSelected, ...rest }: FlaFolderProps) => React.JSX.Element;
