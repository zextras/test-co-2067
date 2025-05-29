export declare const FOLDER_VIEW: FolderViewType;
type FolderViewType = {
    search_folder: 'search folder';
    tag: 'tag';
    conversation: 'conversation';
    message: 'message';
    contact: 'contact';
    document: 'document';
    appointment: 'appointment';
    virtual_conversation: 'virtual conversation';
    remote_folder: 'remote folder';
    wiki: 'wiki';
    task: 'task';
    chat: 'chat';
};
export declare enum TagsActionsType {
    NEW = "new",
    DELETE = "delete",
    EDIT = "edit",
    Apply = "apply"
}
export declare const DRAG_DATA_TYPE: {
    readonly MESSAGE: "message";
    readonly CONVERSATION: "conversation";
    readonly FOLDER: "folder";
    readonly CONTACT: "contact";
};
export declare const ZIMBRA_STANDARD_COLORS: {
    zValue: number;
    hex: string;
    zLabel: string;
}[];
export declare enum JSNS {
    ACCOUNT = "urn:zimbraAccount",
    ADMIN = "urn:zimbraAdmin",
    MAIL = "urn:zimbraMail",
    ALL = "urn:zimbra",
    SYNC = "urn:zimbraSync"
}
export declare const ROOT_NAME = "USER_ROOT";
export {};
