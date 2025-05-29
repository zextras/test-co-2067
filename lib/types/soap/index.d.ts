export type SoapFolderAction = {
    op: string;
    id: string;
    l?: string;
    recursive?: boolean;
    name?: string;
    color?: number;
    f?: string;
    zid?: string;
};
export type ZimbraRequest = {
    _jsns: 'urn:zimbraMail';
};
