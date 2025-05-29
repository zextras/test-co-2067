import React, { ComponentType, ReactElement, SyntheticEvent } from 'react';
import { AccordionItemType, ModalProps } from '@zextras/carbonio-design-system';
import { Dictionary } from 'lodash';
import { ResFolder } from '../../utils';
import type { Folder } from '../folder';
import { ItemType } from '../tags';
export type ActionType = {
    id: string;
    label: string;
    icon: string;
    click: (ev: React.SyntheticEvent) => void;
    type?: string;
    primary?: boolean;
    group?: string;
    disabled?: boolean;
    [key: string]: unknown;
};
export type Contact = {
    middleName: string;
    firstName: string;
    email: {
        email: {
            mail: string;
        };
    };
    address: string;
};
export type SidebarProps = {
    expanded: boolean;
};
export type SidebarCustomItem = {
    item: {
        id: string;
        label: string;
        open: boolean;
        items: Array<Folder>;
        ownerName: string;
        ownerId: string;
        checked: boolean;
        folderId: string;
        setLinks: (arg: any) => void;
        links: Folder[];
        CustomComponent: ComponentType<{
            item: AccordionItemType;
        }> | undefined;
    };
};
export type ShareModalProps = {
    folders: Array<ResFolder>;
    onClose: () => void;
    goBack?: () => void;
};
export type SharedObject = {
    id: string;
    label: string;
    open: boolean;
    items: [];
    ownerName: string;
    ownerId: string;
    checked: boolean;
    folderId: string;
    setLinks: (links: Array<SharedObject>) => void;
    links: Array<SharedObject>;
    CustomComponent: any;
    of?: string;
    name?: string;
};
export type GroupedShare = Dictionary<SharedObject[]>;
export type EditPermissionsModalProps = ModalProps & {
    editMode?: boolean;
};
export type FolderActionsProps = {
    id: string;
    icon: string;
    label: string;
    click: (e: SyntheticEvent<HTMLElement> | KeyboardEvent) => void;
    disabled?: boolean;
};
export type DragEnterAction = undefined | {
    success: false;
};
export type OnDropActionProps<T = DataProps> = {
    event: React.DragEvent;
    type: string | undefined;
    data: T;
};
export type DeleteTagModalPropsType = {
    onClose: () => void;
    tag?: {
        CustomComponent?: ComponentType;
        active: boolean;
        color?: number;
        id: string;
        label: string;
        name: string;
        open: boolean;
    };
};
export type CreateUpdateTagModalPropType = {
    onClose: () => void;
    editMode?: boolean;
    tag?: ItemType;
};
export type ShareRevokeModalType = {
    folder: Folder;
    onClose?: () => void;
    grant: any;
    goBack: () => void;
};
export type RetentionPoliciesProps = {
    showPolicy: boolean;
    setShowPolicy: (arg: boolean) => void;
    emptyRtnValue: boolean;
    setEmptyRtnValue: (arg: boolean) => void;
    dsblMsgRet: boolean;
    setDsblMsgRet: (arg: boolean) => void;
    rtnValue: string | number;
    setRtnValue: (arg: string | number) => void;
    retentionPeriod: Array<{
        label: string;
        value: string;
    }>;
    rtnYear: string | null;
    setRtnYear: (arg: string | null) => void;
    dsblMsgDis: boolean;
    setDsblMsgDis: (arg: boolean) => void;
    emptyDisValue: boolean;
    setEmptyDisValue: (arg: boolean) => void;
    purgeValue: number | string;
    setPurgeValue: (arg: string) => void;
    dspYear: string | null;
    setDspYear: (arg: string | null) => void;
    rtnRange: string;
    dspRange: string;
};
export type SidebarAccordionProps = {
    accordions: Array<Folder>;
    folderId: string;
    localStorageName: string;
    AccordionCustomComponent: ComponentType<{
        item: Folder;
    }>;
    setSelectedFolder?: (folderId: string) => void;
    buttonFindShares?: ReactElement;
    initialExpanded?: string[];
};
export type DataProps = {
    id: string;
    date: number;
    messages: [
        {
            id: string;
            parent: string;
            date: number;
        }
    ];
    participants: [
        {
            type: string;
            address: string;
            name: string;
            fullName: string;
        },
        {
            type: string;
            address: string;
            name: string;
        }
    ];
    subject: string;
    fragment: string;
    read: false;
    hasAttachment: false;
    flagged: false;
    urgent: false;
    parentFolderId: string;
    selectedIDs: Array<string>;
    deselectAll?: () => void;
};
