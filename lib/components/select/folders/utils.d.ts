import { AccordionItemType } from '@zextras/carbonio-design-system';
import { Folder } from '../../../types';
export declare function flattenAndFilterFoldersWithCap(folders: Array<Folder>, search: string, limit: number, filterFolders?: ((folder: Folder) => boolean) | undefined): Array<Folder>;
export declare const getFolderIconColor: (f: Folder | AccordionItemType) => string;
export declare const getFolderIconName: (folder: Folder | AccordionItemType) => string | null;
type GetSystemFolderProps = {
    folderId?: string;
    folderName: string;
};
export declare const getSystemFolderTranslatedName: ({ folderName }: GetSystemFolderProps) => string;
export declare const getFolderTranslatedName: ({ folderId, folderName }: GetSystemFolderProps) => string;
export {};
