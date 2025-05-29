import type { Folder } from '../types/folder';
export type ResFolder = Folder & Partial<{
    folderId: string;
    folderPath: string;
    folderUuid: string;
    granteeId: string;
    granteeName: string;
    granteeType: string;
    mid: string;
    ownerEmail: string;
    ownerId: string;
    ownerName: string;
    rights: string;
    view: string;
}>;
