"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSoapRoot = exports.getAccountSoapRoot = exports.generateSoapSystemFolder = exports.generateSoapLink = exports.generateSoapCustomChild = exports.getRandomView = exports.getUniqueID = exports.BASE_FOLDER_CALENDAR_ARGS = void 0;
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const faker_1 = require("@faker-js/faker");
const lodash_1 = require("lodash");
const folders_1 = require("../../../constants/folders");
const mocks_context_1 = require("../utils/mocks-context");
let luuid = '';
const ids = [];
const names = [];
exports.BASE_FOLDER_CALENDAR_ARGS = {
    id: '10',
    name: 'Calendar',
    absFolderPath: `/Calendar`,
    l: '1',
    view: 'appointment'
};
const getUniqueID = (min, max) => {
    const id = faker_1.faker.number.int({ min: min ?? 200, max: max ?? 99999 });
    if (ids.includes(id)) {
        return (0, exports.getUniqueID)();
    }
    ids.push(id);
    return `${id}`;
};
exports.getUniqueID = getUniqueID;
const getUniqueName = () => {
    const name = faker_1.faker.word.noun();
    if (names.includes(name)) {
        return getUniqueName();
    }
    names.push(name);
    return name;
};
const getRandomView = () => {
    const views = ['search folder', 'message', 'contact', 'appointment'];
    const randomNumber = faker_1.faker.number.int({ min: 0, max: views.length });
    return views[randomNumber];
};
exports.getRandomView = getRandomView;
/** Generate a random soap custom child given a parent of type BaseFolder | SoapLink
 * @param parent
 * */
const generateSoapCustomChild = (parent) => {
    const parentIsSoapLink = 'owner' in parent;
    const id = parentIsSoapLink ? `${parent.uuid}:${(0, exports.getUniqueID)()}` : (0, exports.getUniqueID)();
    const name = getUniqueName();
    return {
        id,
        uuid: faker_1.faker.string.uuid(),
        deletable: true,
        name,
        absFolderPath: `${parent && parent.absFolderPath === '/' ? '' : parent.absFolderPath}/${name}`,
        l: parent.id,
        luuid,
        f: '',
        recursive: true,
        color: faker_1.faker.number.int({ min: 1, max: 7 }),
        u: faker_1.faker.number.int({ min: 0, max: 5 }),
        view: parent?.view ?? (0, exports.getRandomView)(),
        rev: 1,
        ms: faker_1.faker.number.int({ min: 1, max: 99999 }),
        webOfflineSyncDays: 30,
        activesyncdisabled: false,
        n: faker_1.faker.number.int({ min: 1, max: 99999 }),
        s: faker_1.faker.number.int({ min: 1, max: 99999 }),
        i4ms: faker_1.faker.number.int({ min: 1, max: 99999 }),
        i4next: faker_1.faker.number.int({ min: 1, max: 99999 }),
        ...(parentIsSoapLink ? { perm: 'rwidxc' } : {}),
        acl: {
            grant: []
        }
    };
};
exports.generateSoapCustomChild = generateSoapCustomChild;
/** Generate a random soap link given a parent of type SoapLink or BaseFolder
 * @param parent
 * */
const generateSoapLink = (parent) => {
    const link = (0, exports.generateSoapCustomChild)(parent);
    return {
        ...link,
        perm: 'r',
        broken: false,
        owner: faker_1.faker.internet.email(),
        rid: `${faker_1.faker.number.int({ min: 300, max: 900 })}`,
        ruuid: faker_1.faker.string.uuid(),
        zid: faker_1.faker.string.uuid(),
        reminder: false
    };
};
exports.generateSoapLink = generateSoapLink;
const generateSoapNodes = (parent, max, isLink, traverse) => {
    const childrenNumber = faker_1.faker.number.int({ min: 0, max });
    const hasChildren = childrenNumber > 0;
    if (hasChildren) {
        return (0, lodash_1.map)(Array.from({ length: childrenNumber }), () => {
            const child = isLink
                ? (0, exports.generateSoapLink)(parent)
                : (0, exports.generateSoapCustomChild)(parent);
            if (isLink && !traverse) {
                return child;
            }
            return {
                ...child,
                link: generateSoapNodes(child, max - 1, true, traverse),
                folder: generateSoapNodes(child, max - 1, false, traverse)
            };
        });
    }
    return [];
};
/** Generate a customizable soap system folder of BaseFolder type
 * @param id
 * @param name
 * @param absFolderPath
 * @param l
 * @param view
 * */
const generateSoapSystemFolder = ({ id, name, absFolderPath, l, view }) => ({
    id,
    uuid: faker_1.faker.string.uuid(),
    deletable: false,
    name,
    absFolderPath,
    l,
    luuid,
    f: 'i',
    color: faker_1.faker.number.int({ min: 0, max: 7 }),
    u: faker_1.faker.number.int({ min: 0, max: 5 }),
    view: view ?? (0, exports.getRandomView)(),
    rev: 1,
    recursive: true,
    ms: faker_1.faker.number.int({ min: 1, max: 99999 }),
    webOfflineSyncDays: 30,
    activesyncdisabled: false,
    n: faker_1.faker.number.int({ min: 1, max: 99999 }),
    s: faker_1.faker.number.int({ min: 1, max: 99999 }),
    i4ms: faker_1.faker.number.int({ min: 1, max: 99999 }),
    i4next: faker_1.faker.number.int({ min: 1, max: 99999 }),
    acl: {
        grant: []
    }
});
exports.generateSoapSystemFolder = generateSoapSystemFolder;
const generateSoapInboxFolder = (parent, traverse, isPrimaryAccount) => {
    const inbox = (0, exports.generateSoapSystemFolder)({
        id: isPrimaryAccount ? '2' : `${luuid}:2`,
        name: 'Inbox',
        absFolderPath: `${parent.absFolderPath === '/' ? '' : parent.absFolderPath}/Inbox`,
        l: isPrimaryAccount ? '1' : `${luuid}:1`,
        view: 'message'
    });
    // refs: SHELL-118
    // todo: BaseFolder color type inside shell is still wrong. Wait for a fix before removing this ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return {
        ...inbox,
        folder: generateSoapNodes(inbox, 3, false, traverse),
        link: generateSoapNodes(inbox, 2, true, traverse)
    };
};
const generateSoapCalendarFolder = (parent, traverse) => {
    const inbox = (0, exports.generateSoapSystemFolder)(exports.BASE_FOLDER_CALENDAR_ARGS);
    // refs: SHELL-118
    // todo: BaseFolder color type inside shell is still wrong. Wait for a fix before removing this ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return {
        ...inbox,
        folder: generateSoapNodes(inbox, 3, false, traverse),
        link: generateSoapNodes(inbox, 2, true, traverse)
    };
};
const generateSoapSystemFolders = (parent, traverse, isPrimaryAccount) => {
    const inbox = generateSoapInboxFolder(parent, traverse, isPrimaryAccount);
    const calendar = generateSoapCalendarFolder(parent, traverse);
    return [inbox, calendar];
};
/** Generate an account root of BaseFolder type
 * @param isPrimaryAccount
 * */
const getAccountSoapRoot = (isPrimaryAccount) => ({
    id: isPrimaryAccount ? '1' : `${luuid}:1`,
    uuid: faker_1.faker.string.uuid(),
    deletable: false,
    recursive: true,
    name: isPrimaryAccount ? folders_1.FOLDERS.USER_ROOT : faker_1.faker.string.alpha(10),
    ...(isPrimaryAccount ? { oname: folders_1.FOLDERS.USER_ROOT } : {}),
    absFolderPath: '/',
    ...(isPrimaryAccount ? { l: '1' } : {}),
    luuid,
    f: 'i',
    rev: 1,
    ms: faker_1.faker.number.int({ min: 1, max: 99999 }),
    webOfflineSyncDays: 0,
    activesyncdisabled: false,
    n: 1,
    s: 0,
    i4ms: faker_1.faker.number.int({ min: 1, max: 99999 }),
    i4next: faker_1.faker.number.int({ min: 1, max: 99999 }),
    ...(isPrimaryAccount
        ? {
            acl: {
                grant: []
            }
        }
        : {})
});
exports.getAccountSoapRoot = getAccountSoapRoot;
const generateAccountSoapRoot = (traverse, isPrimaryAccount) => {
    const mainAccountSoapRoot = (0, exports.getAccountSoapRoot)(isPrimaryAccount);
    const soapSystemFolders = generateSoapSystemFolders(mainAccountSoapRoot, traverse, isPrimaryAccount);
    const customSoapChildren = generateSoapNodes(mainAccountSoapRoot, 3, false, traverse);
    const folder = [...soapSystemFolders, ...(0, lodash_1.orderBy)(customSoapChildren, 'id', 'asc')];
    const link = generateSoapNodes(mainAccountSoapRoot, 3, true, traverse);
    // refs: SHELL-118
    // todo: BaseFolder color type inside shell is still wrong. Wait for a fix before removing this ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return {
        ...mainAccountSoapRoot,
        folder,
        link
    };
};
/** Generate a random soap root of SoapFolder type
 * @param traverse
 * @param isPrimaryAccount
 * @param id
 * */
const generateSoapRoot = (traverse, isPrimaryAccount, id) => {
    const { identities } = (0, mocks_context_1.getMocksContext)();
    luuid = isPrimaryAccount ? identities.primary.userRootId : id;
    return generateAccountSoapRoot(traverse, isPrimaryAccount);
};
exports.generateSoapRoot = generateSoapRoot;
//# sourceMappingURL=soap-roots-generator.js.map