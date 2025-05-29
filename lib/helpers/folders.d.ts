import type { Folder, Folders } from '../types/folder';
type FolderIdType = {
    zid: string | null;
    id: string | null;
};
/**
 * Parse the given folder id and returns on object with the composing parts of the folder id
 * @param folderId
 */
export declare const getFolderIdParts: (folderId: string) => FolderIdType;
/**
 * Get the account name of the owner of the given folder, if the owner is an
 * "other" account, different from the primary account of the current user.
 * If the owner is the primary account then <code>null</code> is returned
 * @param folderId
 * @param folderRoots
 */
export declare const getFolderOtherOwnerAccountName: (folderId: string, folderRoots: Folders) => string | null;
/**
 * Returns the account name of the owner of the folder, based on the folder id
 * @param folderId
 * @param folderRoots
 */
export declare const getFolderOwnerAccountName: (folderId: string, folderRoots: Folders) => string;
/**
 * Tells if a folder with the given id is a spam folder
 * @param folderId
 * @param folderType
 */
export declare const isA: (folderId: string, folderType: keyof Folders) => boolean;
/**
 * Tells if a folder with the given id is the default account root folder
 * @param folderId
 */
export declare const isDefaultAccountRoot: (folderId: string) => boolean;
/**
 * Tells if a folder with the given id is a root folder
 * @param folderId
 */
export declare const isRoot: (folderId: string) => boolean;
/**
 * Tells if the given folder is a link to a folder shared by another user
 * @param folder
 */
export declare const isLink: (folder: Folder) => boolean;
/**
 * Tells if a folder is a folder of a shared account
 * @param folderId
 */
export declare function isSharedAccountFolder(folderId: string): boolean;
/**
 * Tells if a folder is a system one
 * @param folderId
 */
export declare const isSystemFolder: (folderId: string) => boolean;
/**
 * Tells if a folder is a trashed folder
 * @param folder
 * @param folderId
 */
export declare const isTrashed: ({ folder, folderId }: {
    folder?: Folder;
    folderId?: string;
}) => boolean;
/**
 * Tells if a folder with the given id is a trash folder
 * @param folderId
 */
export declare const isTrash: (folderId: string) => boolean;
/**
 * Tells if the current user has read permission on the given folder/link
 * @param folder
 */
export declare const isReadAllowed: (folder: Folder) => boolean;
/**
 * Tells if the current user has write permission on the given folder/link
 * @param folder
 */
export declare const isWriteAllowed: (folder: Folder) => boolean;
/**
 * Tells if the current user has insertion permission on the given folder/link
 * @param folder
 */
export declare const isInsertAllowed: (folder: Folder) => boolean;
/**
 * Tells if the current user has subfolder creation permission on the given folder/link
 * @param folder
 */
export declare const isCreateAllowed: (folder: Folder) => boolean;
/**
 * Tells if the current user has deletion permission on the given folder/link
 * @param folder
 */
export declare const isDeleteAllowed: (folder: Folder) => boolean;
/**
 * Tells if the current user has administration permission on the given folder/link
 * @param folder
 */
export declare const isAdministerAllowed: (folder: Folder) => boolean;
export {};
