export declare const noOp: () => void;
export declare const getSoapFetch: (app: string) => <Request, Response>(api: string, body: Request, otherAccount?: string) => Promise<Response>;
export declare const getXmlSoapFetch: (app: string) => <Request, Response>(api: string, body: Request, otherAccount?: string) => Promise<Response>;
