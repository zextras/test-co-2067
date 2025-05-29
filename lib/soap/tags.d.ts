import { ZimbraRequest } from '../types';
import { Tag } from '../types/tags';
export type CreateTagRequest = ZimbraRequest & {
    tag: Omit<Tag, 'id'>;
};
export type CreateTagResponse = ZimbraRequest & {
    tag: [Tag];
};
export type TagActionRequest = ZimbraRequest & {
    action: {
        op: 'rename' | 'color' | 'delete' | 'update';
        id: string;
        name?: string;
        color?: number;
        rgb?: string;
    };
};
export type TagActionResponse = {
    action: {
        op: string;
        id: string;
    };
};
export declare const createTag: (tag: Omit<Tag, "id">) => Promise<CreateTagResponse>;
export declare const deleteTag: (id: string) => Promise<TagActionResponse>;
export declare const renameTag: (id: string, name: string) => Promise<TagActionResponse>;
export declare const changeTagColor: (id: string, color: string | number) => Promise<TagActionResponse>;
