"use strict";
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFolders = exports.generateFolder = exports.generateFolderLink = void 0;
const faker_1 = require("@faker-js/faker");
const folders_1 = require("../../../constants/folders");
const mocks_context_1 = require("../utils/mocks-context");
let userFolderIdSequence = 100;
const getNextFolderId = (zid) => {
    userFolderIdSequence += 1;
    if (zid) {
        return `${zid}:${userFolderIdSequence}`;
    }
    return `${userFolderIdSequence}`;
};
/**
 * Traverse the folder hierarchy and set (byref) the reference to folder's parent
 * @param folder
 * @param parent
 */
const fillReferenceToParent = (folder, parent) => {
    // eslint-disable-next-line no-param-reassign
    folder.parent = parent?.id;
    folder.children.forEach((child) => {
        fillReferenceToParent(child, folder);
    });
};
/**
 * Recursive function that returns a flat map of the children folders
 * @param children
 */
const getFlatChildren = (children) => {
    let destination = {};
    children.forEach((child) => {
        destination[child.id] = child;
        if (child.children) {
            destination = { ...destination, ...getFlatChildren(child.children) };
        }
    });
    return destination;
};
/**
 * TODO extends with Calendars and Contacts folders
 * @param contextIdentity
 */
const generateSharedAccountSystemFolders = (contextIdentity) => {
    if (!contextIdentity) {
        return [];
    }
    return [
        {
            id: `${contextIdentity.identity.id}:${folders_1.FOLDERS.INBOX}`,
            uuid: faker_1.faker.string.uuid(),
            name: 'Inbox',
            absFolderPath: '/Inbox',
            l: `${contextIdentity.identity.id}:${folders_1.FOLDERS.USER_ROOT}`,
            luuid: contextIdentity.userRootId,
            checked: false,
            f: 'ui',
            u: 37,
            view: 'message',
            rev: 1,
            ms: 2633,
            n: 889,
            s: 174031840,
            i4ms: 33663,
            i4next: 17222,
            activesyncdisabled: false,
            webOfflineSyncDays: 30,
            recursive: false,
            deletable: false,
            acl: {
                grant: []
            },
            isLink: false,
            children: [],
            parent: undefined,
            depth: 1
        },
        {
            id: `${contextIdentity.identity.id}:${folders_1.FOLDERS.SPAM}`,
            uuid: faker_1.faker.string.uuid(),
            name: 'Junk',
            absFolderPath: '/Junk',
            l: `${contextIdentity.identity.id}:${folders_1.FOLDERS.USER_ROOT}`,
            luuid: contextIdentity.userRootId,
            checked: false,
            view: 'message',
            rev: 1,
            ms: 1,
            n: 1,
            s: 10815,
            i4ms: 33396,
            i4next: 17084,
            activesyncdisabled: false,
            webOfflineSyncDays: 0,
            recursive: false,
            deletable: false,
            isLink: false,
            children: [],
            parent: undefined,
            depth: 1
        },
        {
            id: `${contextIdentity.identity.id}:${folders_1.FOLDERS.SENT}`,
            uuid: faker_1.faker.string.uuid(),
            name: 'Sent',
            absFolderPath: '/Sent',
            l: `${contextIdentity.identity.id}:${folders_1.FOLDERS.USER_ROOT}`,
            luuid: contextIdentity.userRootId,
            checked: false,
            view: 'message',
            rev: 1,
            ms: 1,
            n: 313,
            s: 61983538,
            i4ms: 33637,
            i4next: 17208,
            activesyncdisabled: false,
            webOfflineSyncDays: 30,
            recursive: false,
            deletable: false,
            isLink: false,
            children: [],
            parent: undefined,
            depth: 1
        },
        {
            id: `${contextIdentity.identity.id}:${folders_1.FOLDERS.TRASH}`,
            uuid: faker_1.faker.string.uuid(),
            name: 'Trash',
            absFolderPath: '/Trash',
            l: `${contextIdentity.identity.id}:${folders_1.FOLDERS.USER_ROOT}`,
            luuid: contextIdentity.userRootId,
            checked: false,
            rev: 1,
            ms: 28502,
            n: 16,
            s: 319017,
            i4ms: 33653,
            i4next: 17212,
            activesyncdisabled: false,
            webOfflineSyncDays: 30,
            recursive: false,
            deletable: false,
            isLink: false,
            children: [],
            parent: undefined,
            depth: 1
        },
        {
            id: `${contextIdentity.identity.id}:${folders_1.FOLDERS.DRAFTS}`,
            uuid: faker_1.faker.string.uuid(),
            name: 'Drafts',
            absFolderPath: '/Drafts',
            l: `${contextIdentity.identity.id}:${folders_1.FOLDERS.USER_ROOT}`,
            luuid: contextIdentity.userRootId,
            checked: false,
            view: 'message',
            rev: 1,
            ms: 1,
            n: 13,
            s: 19366,
            i4ms: 33653,
            i4next: 17212,
            activesyncdisabled: false,
            webOfflineSyncDays: 30,
            recursive: false,
            deletable: false,
            isLink: false,
            children: [],
            parent: undefined,
            depth: 1
        }
    ];
};
/**
 *
 * @param parentId
 * @param parentUuid
 * @param ownerContextIdentity
 */
const generateFolderLink = (parentId, parentUuid, ownerIdentity) => {
    const name = `${faker_1.faker.string.alpha(16)} of ${ownerIdentity.fullName}`;
    const result = {
        id: getNextFolderId(),
        uuid: faker_1.faker.string.uuid(),
        name: faker_1.faker.string.alpha(16),
        absFolderPath: `/${name}`,
        l: parentId,
        luuid: parentUuid,
        checked: false,
        view: 'message',
        rev: 36953,
        ms: 36953,
        n: 4,
        s: 104912,
        activesyncdisabled: false,
        webOfflineSyncDays: 0,
        perm: 'r',
        recursive: false,
        deletable: true,
        owner: ownerIdentity.email,
        zid: ownerIdentity.id,
        rid: getNextFolderId(),
        ruuid: faker_1.faker.string.uuid(),
        oname: name,
        reminder: false,
        broken: false,
        isLink: true,
        children: [],
        parent: '1',
        depth: 1
    };
    return result;
};
exports.generateFolderLink = generateFolderLink;
/**
 *
 * @param primaryContextIdentity
 * @param sharedContextIdentity
 */
const generateSharedAccountRoot = (primaryContextIdentity, sharedContextIdentity) => {
    const id = `${sharedContextIdentity.identity.id}:${folders_1.FOLDERS.USER_ROOT}`;
    return {
        [id]: {
            // absFolderPath: `/${sharedContextIdentity.identity.email}`,
            // acl: undefined,
            activesyncdisabled: false,
            broken: false,
            checked: false,
            children: generateSharedAccountSystemFolders(sharedContextIdentity),
            // color: undefined,
            deletable: false,
            depth: 1,
            // // f: '*',
            // // i4ms: undefined,
            // // i4n: undefined,
            // // i4next: undefined,
            // // i4u: undefined,
            // // id: `${(rootIdCounter = +1)}`,
            id,
            isLink: true,
            // luuid: primaryContextIdentity.userRootId,
            // md: undefined,
            // meta: undefined,
            // ms: 7037,
            // n: 0,
            name: sharedContextIdentity.identity.email,
            oname: 'USER_ROOT',
            owner: sharedContextIdentity.identity.email,
            // perm: 'rwidxc',
            recursive: false,
            reminder: false,
            parent: folders_1.FOLDERS.USER_ROOT,
            retentionPolicy: undefined,
            rev: 7036,
            rgb: undefined,
            rid: '1',
            ruuid: faker_1.faker.string.uuid(),
            s: 0,
            u: undefined,
            url: undefined,
            uuid: sharedContextIdentity.userRootId ?? '',
            // view: undefined,
            // webOfflineSyncDays: 0,
            zid: sharedContextIdentity.identity.id
        }
    };
};
/**
 *
 * @param primaryContextIdentity
 * @param sharedContextIdentities
 */
const generateSharedAccountsRoot = (primaryContextIdentity, sharedContextIdentities) => {
    if (!primaryContextIdentity || !sharedContextIdentities || !sharedContextIdentities.length) {
        return {};
    }
    let result = {};
    sharedContextIdentities.forEach((sharedAccount) => {
        result = { ...result, ...generateSharedAccountRoot(primaryContextIdentity, sharedAccount) };
    });
    return result;
};
const generateFolder = (model = {}) => {
    const mockContext = (0, mocks_context_1.getMocksContext)();
    const rootUuid = mockContext.identities.primary.userRootId;
    const name = faker_1.faker.word.noun({ length: { min: 1, max: 2 } });
    return {
        id: model.id ?? getNextFolderId(),
        uuid: model.uuid ?? faker_1.faker.string.uuid(),
        name: model.name ?? name,
        absFolderPath: model.absFolderPath ?? `/${name}`,
        l: model.l ?? folders_1.FOLDERS.USER_ROOT,
        luuid: model.luuid ?? rootUuid,
        checked: model.checked ?? false,
        f: model.f ?? 'i',
        view: model.view ?? 'message',
        rev: model.rev ?? 1378,
        ms: model.ms ?? 12599,
        n: model.n ?? 0,
        s: model.s ?? 0,
        i4ms: model.i4ms ?? 1378,
        i4next: model.i4next ?? 684,
        activesyncdisabled: model.activesyncdisabled ?? false,
        webOfflineSyncDays: model.webOfflineSyncDays ?? 0,
        recursive: model.recursive ?? false,
        deletable: model.deletable ?? true,
        ...(model.oname && { oname: model.oname }),
        acl: model.acl ?? {
            grant: [
                {
                    zid: (0, mocks_context_1.getRandomIdentity)(mockContext.otherUsersIdentities)?.id ?? '',
                    gt: 'usr',
                    perm: 'r'
                }
            ]
        },
        isLink: model.isLink ?? false,
        children: model.children ?? [],
        parent: model.parent ?? undefined,
        depth: model.depth ?? 1,
        reminder: false,
        broken: false,
        ...(model.perm && { perm: model.perm })
    };
};
exports.generateFolder = generateFolder;
/**
 * Generate a semi-fixed folders structure mock
 * TODO make it more flexible
 */
const generateFolders = ({ view, noSharedAccounts, customFolders } = {}) => {
    const mockContext = (0, mocks_context_1.getMocksContext)();
    const rootUuid = mockContext.identities.primary.userRootId;
    const inboxUuid = faker_1.faker.string.uuid();
    const trashUuid = faker_1.faker.string.uuid();
    const contactsUuid = faker_1.faker.string.uuid();
    const [calendarsRandomUser1, calendarsRandomUser2] = (0, mocks_context_1.getRandomIdentities)(mockContext.viewFreeBusyIdentities, 2);
    const [contactsRandomUser1, mailsRandomUser1] = (0, mocks_context_1.getRandomIdentities)(mockContext.otherUsersIdentities, 2);
    const links = [];
    const linkOwner = (0, mocks_context_1.getRandomIdentity)(mockContext.otherUsersIdentities);
    if (linkOwner) {
        links.push((0, exports.generateFolderLink)(folders_1.FOLDERS.INBOX, inboxUuid, linkOwner));
    }
    let roots = {
        [folders_1.FOLDERS.USER_ROOT]: {
            id: folders_1.FOLDERS.USER_ROOT,
            uuid: rootUuid,
            name: 'USER_ROOT',
            absFolderPath: '/',
            l: '11',
            luuid: '808e2306-ba25-42f8-9aac-67b3762db30c',
            checked: false,
            rev: 1,
            ms: 1,
            n: 0,
            s: 0,
            i4ms: 399,
            i4next: 300,
            activesyncdisabled: false,
            webOfflineSyncDays: 0,
            recursive: false,
            deletable: false,
            isLink: false,
            children: [
                ...(customFolders ?? []),
                {
                    id: getNextFolderId(),
                    uuid: faker_1.faker.string.uuid(),
                    name: 'blacklisted',
                    absFolderPath: '/blacklisted',
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    f: 'i',
                    view: 'contact',
                    rev: 1378,
                    ms: 12599,
                    n: 0,
                    s: 0,
                    i4ms: 1378,
                    i4next: 684,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 0,
                    recursive: false,
                    deletable: true,
                    acl: {
                        grant: [
                            {
                                zid: (0, mocks_context_1.getRandomIdentity)(mockContext.otherUsersIdentities)?.id ?? '',
                                gt: 'usr',
                                perm: 'r'
                            }
                        ]
                    },
                    isLink: false,
                    children: [],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: folders_1.FOLDERS.BRIEFCASE,
                    uuid: faker_1.faker.string.uuid(),
                    name: 'Briefcase',
                    absFolderPath: '/Briefcase',
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    view: 'document',
                    rev: 1,
                    ms: 1,
                    n: 1,
                    s: 12492,
                    i4ms: 18659,
                    i4next: 8949,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 0,
                    recursive: false,
                    deletable: false,
                    isLink: false,
                    children: [],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: folders_1.FOLDERS.CALENDAR,
                    uuid: faker_1.faker.string.uuid(),
                    name: 'Calendar',
                    absFolderPath: '/Calendar',
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: true,
                    f: 'b#i',
                    color: '6',
                    view: 'appointment',
                    rev: 1,
                    ms: 33272,
                    n: 159,
                    s: 0,
                    i4ms: 33640,
                    i4next: 17193,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 0,
                    recursive: false,
                    deletable: false,
                    acl: {
                        grant: [
                            {
                                zid: (0, mocks_context_1.getRandomIdentity)(mockContext.otherUsersIdentities)?.id ?? '',
                                gt: 'usr',
                                perm: 'r'
                            },
                            {
                                zid: (0, mocks_context_1.getRandomIdentity)(mockContext.otherUsersIdentities)?.id ?? '',
                                gt: 'usr',
                                perm: 'r'
                            }
                        ]
                    },
                    isLink: false,
                    children: [],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: folders_1.FOLDERS.CONTACTS,
                    uuid: contactsUuid,
                    name: 'Contacts',
                    absFolderPath: '/Contacts',
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    view: 'contact',
                    rev: 1,
                    ms: 1,
                    n: 6,
                    s: 0,
                    i4ms: 30800,
                    i4next: 3281,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 0,
                    recursive: false,
                    deletable: false,
                    isLink: false,
                    children: [
                        {
                            id: getNextFolderId(),
                            uuid: faker_1.faker.string.uuid(),
                            name: 'inner',
                            absFolderPath: '/Contacts/inner',
                            l: folders_1.FOLDERS.CONTACTS,
                            luuid: contactsUuid,
                            checked: false,
                            f: 'i',
                            view: 'contact',
                            rev: 1378,
                            ms: 12599,
                            n: 0,
                            s: 0,
                            i4ms: 1378,
                            i4next: 684,
                            activesyncdisabled: false,
                            webOfflineSyncDays: 0,
                            recursive: false,
                            deletable: true,
                            isLink: false,
                            children: [],
                            parent: undefined,
                            depth: 2
                        }
                    ],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: getNextFolderId(),
                    uuid: faker_1.faker.string.uuid(),
                    name: `Contacts addressbook of ${(0, mocks_context_1.getRandomIdentity)(mockContext.otherUsersIdentities)?.fullName}`,
                    absFolderPath: `/Contacts addressbook of ${(0, mocks_context_1.getRandomIdentity)(mockContext.otherUsersIdentities)?.fullName}`,
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    f: 'i',
                    view: 'contact',
                    rev: 1378,
                    ms: 12599,
                    n: 0,
                    s: 0,
                    i4ms: 1378,
                    i4next: 684,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 0,
                    recursive: false,
                    deletable: true,
                    isLink: true,
                    children: [],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: folders_1.FOLDERS.DRAFTS,
                    uuid: faker_1.faker.string.uuid(),
                    name: 'Drafts',
                    absFolderPath: '/Drafts',
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    view: 'message',
                    rev: 1,
                    ms: 1,
                    n: 13,
                    s: 19366,
                    i4ms: 33653,
                    i4next: 17212,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 30,
                    recursive: false,
                    deletable: false,
                    isLink: false,
                    children: [],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: folders_1.FOLDERS.AUTO_CONTACTS,
                    uuid: faker_1.faker.string.uuid(),
                    name: 'Emailed Contacts',
                    absFolderPath: '/Emailed Contacts',
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    view: 'contact',
                    rev: 1,
                    ms: 2455,
                    n: 20,
                    s: 0,
                    i4ms: 20920,
                    i4next: 10419,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 0,
                    recursive: false,
                    deletable: false,
                    isLink: false,
                    children: [],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: folders_1.FOLDERS.INBOX,
                    uuid: inboxUuid,
                    name: 'Inbox',
                    absFolderPath: '/Inbox',
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    f: 'ui',
                    u: 37,
                    view: 'message',
                    rev: 1,
                    ms: 2633,
                    n: 889,
                    s: 174031840,
                    i4ms: 33663,
                    i4next: 17222,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 30,
                    recursive: false,
                    deletable: false,
                    acl: {},
                    isLink: false,
                    children: [
                        {
                            id: getNextFolderId(),
                            uuid: faker_1.faker.string.uuid(),
                            name: 'Confluence',
                            absFolderPath: '/Inbox/Confluence',
                            l: folders_1.FOLDERS.INBOX,
                            luuid: inboxUuid,
                            checked: false,
                            f: 'u',
                            u: 25,
                            view: 'message',
                            rev: 27896,
                            ms: 27896,
                            n: 37,
                            s: 5550022,
                            i4ms: 33607,
                            i4next: 17183,
                            activesyncdisabled: false,
                            webOfflineSyncDays: 0,
                            recursive: false,
                            deletable: true,
                            isLink: false,
                            children: [],
                            parent: undefined,
                            depth: 2
                        },
                        {
                            id: getNextFolderId(),
                            uuid: faker_1.faker.string.uuid(),
                            name: 'GitHub',
                            absFolderPath: '/Inbox/GitHub',
                            l: folders_1.FOLDERS.INBOX,
                            luuid: inboxUuid,
                            checked: false,
                            view: 'message',
                            rev: 3217,
                            ms: 3217,
                            n: 251,
                            s: 1754530,
                            i4ms: 28153,
                            i4next: 4034,
                            activesyncdisabled: false,
                            webOfflineSyncDays: 0,
                            recursive: false,
                            deletable: true,
                            isLink: false,
                            children: [],
                            parent: undefined,
                            depth: 2
                        },
                        {
                            id: getNextFolderId(),
                            uuid: faker_1.faker.string.uuid(),
                            name: 'HR',
                            absFolderPath: '/Inbox/HR',
                            l: folders_1.FOLDERS.INBOX,
                            luuid: inboxUuid,
                            checked: false,
                            view: 'message',
                            rev: 18622,
                            ms: 18622,
                            n: 93,
                            s: 35627011,
                            i4ms: 33528,
                            i4next: 17161,
                            activesyncdisabled: false,
                            webOfflineSyncDays: 0,
                            recursive: false,
                            deletable: true,
                            isLink: false,
                            children: [],
                            parent: undefined,
                            depth: 2
                        },
                        {
                            id: getNextFolderId(),
                            uuid: faker_1.faker.string.uuid(),
                            name: 'Jenkins',
                            absFolderPath: '/Inbox/Jenkins',
                            l: folders_1.FOLDERS.INBOX,
                            luuid: inboxUuid,
                            checked: false,
                            f: 'u',
                            u: 9,
                            view: 'message',
                            rev: 2863,
                            ms: 10162,
                            n: 9,
                            s: 291992,
                            i4ms: 33660,
                            i4next: 17220,
                            activesyncdisabled: false,
                            webOfflineSyncDays: 0,
                            recursive: false,
                            deletable: true,
                            isLink: false,
                            children: [],
                            parent: undefined,
                            depth: 2
                        },
                        {
                            id: getNextFolderId(),
                            uuid: faker_1.faker.string.uuid(),
                            name: 'terzo livello',
                            absFolderPath: '/Inbox/terzo livello',
                            l: folders_1.FOLDERS.INBOX,
                            luuid: inboxUuid,
                            checked: false,
                            f: 'i',
                            view: 'message',
                            rev: 11453,
                            ms: 22118,
                            n: 0,
                            s: 0,
                            i4ms: 14123,
                            i4next: 6508,
                            activesyncdisabled: false,
                            webOfflineSyncDays: 0,
                            recursive: false,
                            deletable: true,
                            acl: {
                                grant: [
                                    {
                                        zid: (0, mocks_context_1.getRandomIdentity)(mockContext.otherUsersIdentities)?.id ?? '',
                                        gt: 'usr',
                                        perm: 'r'
                                    },
                                    {
                                        zid: (0, mocks_context_1.getRandomIdentity)(mockContext.otherUsersIdentities)?.id ?? '',
                                        gt: 'usr',
                                        perm: 'r'
                                    }
                                ]
                            },
                            isLink: false,
                            children: [],
                            parent: undefined,
                            depth: 2
                        },
                        ...links
                    ],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: folders_1.FOLDERS.SPAM,
                    uuid: faker_1.faker.string.uuid(),
                    name: 'Junk',
                    absFolderPath: '/Junk',
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    view: 'message',
                    rev: 1,
                    ms: 1,
                    n: 1,
                    s: 10815,
                    i4ms: 33396,
                    i4next: 17084,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 0,
                    recursive: false,
                    deletable: false,
                    isLink: false,
                    children: [],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: folders_1.FOLDERS.SENT,
                    uuid: faker_1.faker.string.uuid(),
                    name: 'Sent',
                    absFolderPath: '/Sent',
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    view: 'message',
                    rev: 1,
                    ms: 1,
                    n: 313,
                    s: 61983538,
                    i4ms: 33637,
                    i4next: 17208,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 30,
                    recursive: false,
                    deletable: false,
                    isLink: false,
                    children: [],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: folders_1.FOLDERS.TRASH,
                    uuid: faker_1.faker.string.uuid(),
                    name: 'Trash',
                    absFolderPath: '/Trash',
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    rev: 1,
                    ms: 28502,
                    n: 16,
                    s: 319017,
                    i4ms: 33653,
                    i4next: 17212,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 30,
                    recursive: false,
                    deletable: false,
                    isLink: false,
                    children: [
                        {
                            id: getNextFolderId(),
                            uuid: faker_1.faker.string.uuid(),
                            name: 'Trashed folder',
                            absFolderPath: '/Trash/Trashed folder',
                            l: folders_1.FOLDERS.TRASH,
                            luuid: trashUuid,
                            checked: false,
                            f: 'u',
                            u: 1,
                            view: 'message',
                            rev: 27896,
                            ms: 27896,
                            n: 37,
                            s: 5550022,
                            i4ms: 33607,
                            i4next: 17183,
                            activesyncdisabled: false,
                            webOfflineSyncDays: 0,
                            recursive: false,
                            deletable: true,
                            isLink: false,
                            children: [],
                            parent: undefined,
                            depth: 2
                        },
                        {
                            id: getNextFolderId(),
                            uuid: faker_1.faker.string.uuid(),
                            name: 'trashed address book',
                            absFolderPath: '/Trash/trashed address book',
                            l: folders_1.FOLDERS.TRASH,
                            luuid: trashUuid,
                            checked: false,
                            f: 'i',
                            view: 'contact',
                            rev: 1378,
                            ms: 12599,
                            n: 0,
                            s: 0,
                            i4ms: 1378,
                            i4next: 684,
                            activesyncdisabled: false,
                            webOfflineSyncDays: 0,
                            recursive: false,
                            deletable: true,
                            isLink: false,
                            children: [],
                            parent: undefined,
                            depth: 2
                        }
                    ],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: getNextFolderId(),
                    uuid: faker_1.faker.string.uuid(),
                    name: `${calendarsRandomUser1?.fullName}'s Calendar`,
                    absFolderPath: `/${calendarsRandomUser1?.fullName}'s Calendar`,
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    view: 'appointment',
                    rev: 25949,
                    ms: 25953,
                    n: 7353,
                    s: 28604595,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 0,
                    perm: 'r',
                    recursive: false,
                    rest: `https://${faker_1.faker.internet.domainName()}/home/${calendarsRandomUser1?.email}/Calendar`,
                    deletable: true,
                    owner: calendarsRandomUser1?.email,
                    zid: calendarsRandomUser1?.id,
                    rid: folders_1.FOLDERS.CALENDAR,
                    ruuid: faker_1.faker.string.uuid(),
                    oname: 'Calendar',
                    reminder: false,
                    broken: false,
                    isLink: true,
                    children: [],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: getNextFolderId(),
                    uuid: faker_1.faker.string.uuid(),
                    name: `${calendarsRandomUser2?.fullName}'s Calendar`,
                    absFolderPath: `/${calendarsRandomUser2?.fullName}'s Calendar`,
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    view: 'appointment',
                    rev: 24909,
                    ms: 25962,
                    n: 2177,
                    s: 82709085,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 0,
                    perm: 'r',
                    recursive: false,
                    rest: `https://${faker_1.faker.internet.domainName()}/home/${calendarsRandomUser2?.email}/Calendar`,
                    deletable: true,
                    owner: calendarsRandomUser2?.email,
                    zid: calendarsRandomUser2?.id,
                    rid: folders_1.FOLDERS.CALENDAR,
                    ruuid: faker_1.faker.string.uuid(),
                    oname: 'Calendar',
                    reminder: false,
                    broken: false,
                    isLink: true,
                    children: [],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: getNextFolderId(),
                    uuid: faker_1.faker.string.uuid(),
                    name: `${contactsRandomUser1?.fullName}'s Contacts`,
                    absFolderPath: `/${contactsRandomUser1?.fullName}'s Contacts`,
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    view: 'contact',
                    rev: 7038,
                    ms: 7038,
                    n: 0,
                    s: 0,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 0,
                    perm: 'rwidxc',
                    recursive: false,
                    rest: `https://${faker_1.faker.internet.domainName()}/home/${contactsRandomUser1?.email}/Contacts`,
                    deletable: true,
                    owner: contactsRandomUser1?.email,
                    zid: contactsRandomUser1?.id,
                    rid: folders_1.FOLDERS.CONTACTS,
                    ruuid: 'b86d7fbf-c9ef-42a0-96a2-72fc7bc9879b',
                    oname: 'Contacts',
                    reminder: false,
                    broken: false,
                    isLink: true,
                    children: [],
                    parent: undefined,
                    depth: 1
                },
                {
                    id: getNextFolderId(),
                    uuid: faker_1.faker.string.uuid(),
                    name: `folder of ${mailsRandomUser1?.fullName}`,
                    absFolderPath: `/folder of ${mailsRandomUser1?.fullName}`,
                    l: folders_1.FOLDERS.USER_ROOT,
                    luuid: rootUuid,
                    checked: false,
                    view: 'message',
                    rev: 36953,
                    ms: 36953,
                    activesyncdisabled: false,
                    webOfflineSyncDays: 0,
                    recursive: false,
                    deletable: true,
                    owner: mailsRandomUser1?.email,
                    zid: mailsRandomUser1?.id,
                    rid: 19564,
                    ruuid: 'a0a9d63b-e27e-48cb-8d9d-6f5ae0832ac3',
                    reminder: false,
                    broken: false,
                    isLink: true,
                    children: [],
                    parent: folders_1.FOLDERS.USER_ROOT,
                    depth: 1
                }
            ],
            parent: undefined,
            depth: 0
        },
        ...(!noSharedAccounts &&
            generateSharedAccountsRoot(mockContext.identities.primary, mockContext.identities.sendAs)),
        ...(!noSharedAccounts &&
            generateSharedAccountsRoot(mockContext.identities.primary, mockContext.identities.sendOnBehalf))
    };
    // Add any child folder to the first level
    roots = { ...roots, ...getFlatChildren(Object.values(roots)) };
    fillReferenceToParent(roots[folders_1.FOLDERS.USER_ROOT]);
    return roots;
};
exports.generateFolders = generateFolders;
//# sourceMappingURL=folders-generator.js.map