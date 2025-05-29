import type { Folder, Folders, LinkFolder, SearchFolder, Searches } from '../../../types';
/**
 * Returns the folder with given ID or undefined
 * @params id */
export declare const useFolder: (id: string) => Folder | undefined;
/**
 * Returns the folder with given ID or undefined
 * @params id */
export declare const getFolder: (id: string) => Folder | undefined;
/**
 * Returns a folders' map including roots and links. Each folder has its own tree structure included inside its children
 */
export declare const useFoldersMap: () => Folders;
/**
 * Returns a folders' map including roots and links. Each folder has its own tree structure included inside its children
 */
export declare const getFoldersMap: () => Folders;
/**
 * Returns a folders' array including only links. Each folder has its own tree structure included inside its children
 */
export declare const getLinksArray: (view?: string) => Array<LinkFolder>;
/**
 * Returns the root folder of the provided folderId or undefined
 * @params id
 * @returns the root folder or undefined
 * */
export declare const useRoot: (id: string) => Folder | undefined;
/**
 * Returns the root folder of the provided folderId or undefined
 * @params id
 * @returns the root folder or undefined
 * */
export declare const getRoot: (id: string) => Folder | undefined;
/**
 * Returns a roots' array. Each root has its own tree structure included inside its children
 */
export declare const useRootsArray: () => Array<Folder>;
/**
 * Returns a roots' array. Each root has its own tree structure included inside its children
 */
export declare const getRootsArray: () => Array<Folder>;
/**
 * Returns a roots' map. Each root has its own tree structure included inside its children
 */
export declare const useRootsMap: () => Record<string, Folder>;
/**
 * Returns a roots' map. Each root has its own tree structure included inside its children
 */
export declare const getRootsMap: () => Record<string, Folder>;
/**
 * Returns a root with given user ID.
 * @params userId
 */
export declare const useRootByUser: (userId: string) => Folder | SearchFolder | Record<string, never> | undefined;
/**
 * Returns a root with given user ID.
 * @params userId
 */
export declare const getRootByUser: (userId: string) => Folder | SearchFolder | Record<string, never> | undefined;
/**
 * Returns the root account id for a given folder
 * @param folder a Folder or LinkFolder
 * @returns the root account id or null if the folder is not a link or the root folder
 */
export declare function getRootAccountId(id: string): string | undefined;
/**
 * Return a flat array of folder that are children of the given root
 * @param rootId
 */
export declare const useFoldersMapByRoot: (rootId: string) => Folders;
/**
 * Return a flat array of folder that are children of the given root
 * @param rootId
 */
export declare const getFoldersArrayByRoot: (rootId: string) => Array<Folder>;
export declare const useSearchFolder: (id: string) => SearchFolder | undefined;
export declare const getSearchFolder: (id: string) => SearchFolder | undefined;
export declare const useSearchFolders: () => Searches;
export declare const getSearchFolders: () => Searches;
/**
 * Returns a callback function to update a specific folder.
 *
 * @returns callback function to update a specific folder
 */
export declare const useUpdateFolder: () => ((id: string, opt: Partial<Folder>) => void);
/**
 * Returns a callback function to update a specific folder.
 *
 * @returns callback function to update a specific folder
 */
export declare const getUpdateFolder: () => ((id: string, opt: Partial<Folder>) => void);
