import { BaseFolder, FolderView, SoapFolder, SoapLink } from '../../../types/folder';
export declare const BASE_FOLDER_CALENDAR_ARGS: {
    id: string;
    name: string;
    absFolderPath: string;
    l: string;
    view: FolderView;
};
type SystemFolderRequiredType = {
    id: string;
    name: string;
    absFolderPath: string;
    l: string;
    view: FolderView;
};
export declare const getUniqueID: (min?: number, max?: number) => string;
export declare const getRandomView: () => FolderView;
/** Generate a random soap custom child given a parent of type BaseFolder | SoapLink
 * @param parent
 * */
export declare const generateSoapCustomChild: (parent: BaseFolder | SoapLink) => BaseFolder | SoapLink;
/** Generate a random soap link given a parent of type SoapLink or BaseFolder
 * @param parent
 * */
export declare const generateSoapLink: (parent: SoapLink | BaseFolder) => SoapLink;
/** Generate a customizable soap system folder of BaseFolder type
 * @param id
 * @param name
 * @param absFolderPath
 * @param l
 * @param view
 * */
export declare const generateSoapSystemFolder: ({ id, name, absFolderPath, l, view }: SystemFolderRequiredType) => BaseFolder;
/** Generate an account root of BaseFolder type
 * @param isPrimaryAccount
 * */
export declare const getAccountSoapRoot: (isPrimaryAccount: boolean) => BaseFolder;
/** Generate a random soap root of SoapFolder type
 * @param traverse
 * @param isPrimaryAccount
 * @param id
 * */
export declare const generateSoapRoot: (traverse: boolean, isPrimaryAccount: boolean, id: string) => SoapFolder;
export {};
