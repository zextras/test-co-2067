import { Folder } from '../../../types';
/**
 * calculate the sorting criteria for a given folder
 * system folders are placed before user folders
 * the trash folder is always the last one
 * @param folder
 * @returns the sorting criteria
 */
export declare const getSortCriteria: (folder: Folder) => string;
/**
 * recursively sort the children of a folder according to a given sort function
 * @param children
 * @param sortFunction
 * @returns the sorted children
 */
export declare const sortFolders: ({ children, sortFunction }: {
    children: Folder[];
    sortFunction: (folder: Folder) => number | string;
}) => Folder[];
/**
 * sorts the children of the useRootsArray hook according to the specified sort function
 * @returns the sorted children
 */
export declare const useFolders: () => Array<Folder>;
/**
 * sorts the children of the getRootsArray hook according to the specified sort function
 * @returns the sorted children
 */
export declare const getFolders: () => Array<Folder>;
