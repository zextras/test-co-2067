import type { Folder, Folders, LinkFolder, PopulateFoldersStoreOptions } from '../../../types/folder';
import { FakeIdentity } from '../accounts/fakeAccounts';
/**
 *
 * @param parentId
 * @param parentUuid
 * @param ownerContextIdentity
 */
export declare const generateFolderLink: (parentId: string, parentUuid: string, ownerIdentity: FakeIdentity) => LinkFolder;
export declare const generateFolder: (model?: Partial<Folder & {
    oname: string;
}>) => Folder;
/**
 * Generate a semi-fixed folders structure mock
 * TODO make it more flexible
 */
export declare const generateFolders: ({ view, noSharedAccounts, customFolders }?: PopulateFoldersStoreOptions) => Folders;
