type CreateFakeFileParams = {
    content?: string;
    name?: string;
    mimeType?: string;
};
export declare const createFakeFile: ({ content, name, mimeType }?: CreateFakeFileParams) => File;
export {};
