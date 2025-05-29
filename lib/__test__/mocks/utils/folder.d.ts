import { FolderView } from '../../../types/folder';
type RandomInRange = {
    min?: number;
    max?: number;
};
export declare const getRandomInRange: ({ min, max }?: RandomInRange) => number;
export declare const getRandomFolderFlags: (view?: FolderView) => string;
export {};
