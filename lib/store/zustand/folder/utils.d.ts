import { Folders } from '../../../types/folder';
import type { Folder, FolderView, TreeNode } from '../../../types/folder';
export declare const isNestedInTrash: (item: {
    absFolderPath?: string;
}) => boolean;
export declare const isTrashOrNestedInIt: (item: {
    id: string;
    absFolderPath?: string;
}) => boolean;
export declare const folderViewFilter: (v: FolderView) => (deep?: boolean) => (f: Folder) => boolean;
export declare const filterNodes: <T>(children: TreeNode<T>[], f: (deep?: boolean) => (i: TreeNode<T>) => boolean, sortFunction?: (i: TreeNode<T>) => number | string, deep?: boolean) => TreeNode<T>[];
type MapNodesOptions<T, U> = {
    mapFunction: (i: TreeNode<T>) => U;
    filterFunction: (deep?: boolean) => (i: TreeNode<T>) => boolean;
    recursionKey: keyof U;
    sortFunction: (i: TreeNode<T>) => number | string;
    deep: boolean;
};
export declare const mapNodes: <T, U>(children: TreeNode<T>[], { mapFunction, filterFunction, recursionKey, sortFunction, deep }: MapNodesOptions<T, U>) => U[];
/**
 * Recursive function that returns a flat map of the children folders
 * @param children
 */
export declare const getFlatChildrenFolders: (children: Array<Folder>) => Folders;
export {};
