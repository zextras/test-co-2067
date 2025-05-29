"use strict";
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMessage = exports.handleFoldersMessages = exports.handleFolderNotify = exports.handleFolderDeleted = exports.handleFolderModified = exports.handleLinkCreated = exports.handleFolderCreated = exports.handleFolderRefresh = exports.processFolder = exports.processLink = exports.processSearch = exports.normalizeLink = exports.normalizeSearch = exports.normalize = exports.hasId = exports.testFolderIsChecked = exports.testUtils = void 0;
const utils_1 = require("./utils");
const IM_LOGS = '14';
const USER_ROOT = '1';
let folders = {};
const searches = {};
const linksIdMap = {};
// used to check if a newly created folder is being added to the correct store
let view;
exports.testUtils = {
    getFolders: () => folders,
    resetFolders: () => {
        folders = {};
    },
    setFolders: (data) => {
        folders = data;
    },
    setCurrentView: (current) => {
        view = current;
    },
    getCurrentView: () => view
};
const sortFoldersByName = (obj) => obj.sort((a, b) => {
    const aLowerName = a.name.toLowerCase();
    const bLowerName = b.name.toLowerCase();
    if (aLowerName < bLowerName) {
        return -1;
    }
    if (aLowerName > bLowerName) {
        return 1;
    }
    return 0;
});
const updateChildren = (folder, changes) => {
    if (changes.absFolderPath && folder.children.length) {
        folder.children.forEach((child) => {
            const childFolder = folders[child.id];
            if (changes.absFolderPath && childFolder.absFolderPath) {
                const paths = childFolder.absFolderPath.split('/').slice(2);
                childFolder.absFolderPath = `${changes.absFolderPath}/${paths.join('/')}`;
            }
            if (childFolder.children.length) {
                updateChildren(childFolder, changes);
            }
        });
    }
};
const testFolderIsChecked = ({ string }) => /#/.test(string || '');
exports.testFolderIsChecked = testFolderIsChecked;
const omit = ({ 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
link: _1, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
folder: _2, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
search: _3, ...obj }) => obj;
const hasId = (f, id) => f.id.split(':').includes(id);
exports.hasId = hasId;
const normalize = (f, p) => ({
    id: f.id,
    uuid: f.uuid,
    name: f.name,
    absFolderPath: f.absFolderPath,
    l: f.l,
    luuid: f.luuid,
    checked: (0, exports.testFolderIsChecked)({ string: f.f }),
    f: f.f,
    // the type defined in shell is not correct refs: SHELL-118
    // FIXME: remove the cast when the type will be fixed
    color: f.color || p?.color,
    rgb: f.rgb,
    u: f.u,
    i4u: f.i4u,
    view: f.view,
    rev: f.rev,
    ms: f.ms,
    md: f.md,
    n: f.n,
    i4n: f.i4n,
    s: f.s,
    i4ms: f.i4ms,
    i4next: f.i4next,
    url: f.url,
    activesyncdisabled: !!f.activesyncdisabled,
    webOfflineSyncDays: f.webOfflineSyncDays,
    perm: f.perm,
    recursive: !!f.recursive,
    rest: f.rest,
    deletable: !!f.deletable,
    meta: f.meta,
    acl: f.acl,
    retentionPolicy: f.retentionPolicy
});
exports.normalize = normalize;
const normalizeSearch = (s) => ({
    ...(0, exports.normalize)(s),
    query: s.query,
    sortBy: s.sortBy,
    types: s.types
});
exports.normalizeSearch = normalizeSearch;
const normalizeLink = (l, p) => ({
    ...(0, exports.normalize)(l, p),
    owner: l.owner,
    zid: l.zid,
    rid: l.rid,
    ruuid: l.ruuid,
    oname: l.oname,
    reminder: !!l.reminder,
    broken: !!l.broken
});
exports.normalizeLink = normalizeLink;
const processSearch = (soapSearch, parent) => {
    const search = {
        ...(0, exports.normalizeSearch)(soapSearch),
        parent: parent?.id,
        isLink: parent?.isLink
    };
    searches[search.id] = search;
};
exports.processSearch = processSearch;
const processLink = (soapLink, depth, parent) => {
    const link = {
        ...(0, exports.normalizeLink)(soapLink, parent),
        isLink: true,
        children: [],
        parent: parent?.id,
        depth
    };
    // eslint-disable-next-line no-param-reassign
    folders[soapLink.id] = link;
    // Get the zid:rid key of the link and add it to the links id map
    const linkIdMapKey = (0, utils_1.getLinkIdMapKey)(soapLink);
    linkIdMapKey && (linksIdMap[linkIdMapKey] = soapLink.id);
    soapLink?.folder?.forEach((f) => {
        if (!(0, exports.hasId)(f, IM_LOGS)) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            const child = (0, exports.processFolder)(f, depth + 1, link);
            link.children.push(child);
        }
    });
    soapLink?.link?.forEach((l) => {
        if (!(0, exports.hasId)(l, IM_LOGS)) {
            const child = (0, exports.processLink)(l, depth + 1, link);
            link.children.push(child);
        }
    });
    soapLink?.search?.forEach((s) => {
        (0, exports.processSearch)(s, link);
    });
    return link;
};
exports.processLink = processLink;
const processFolder = (soapFolder, depth, parent) => {
    const folder = {
        ...(0, exports.normalize)(soapFolder, parent),
        isLink: false,
        children: [],
        parent: parent?.id,
        depth
    };
    folders[soapFolder.id] = folder;
    soapFolder?.folder?.forEach((f) => {
        if (!(0, exports.hasId)(f, IM_LOGS)) {
            const child = (0, exports.processFolder)(f, depth + 1, folder);
            if (!(0, exports.hasId)(f, USER_ROOT)) {
                folder.children.push(child);
            }
        }
    });
    soapFolder?.link?.forEach((l) => {
        if (!(0, exports.hasId)(l, IM_LOGS)) {
            const child = (0, exports.processLink)(l, depth + 1, folder);
            if (!(0, exports.hasId)(l, USER_ROOT)) {
                folder.children.push(child);
            }
        }
    });
    soapFolder?.search?.forEach((s) => {
        (0, exports.processSearch)(s, folder);
    });
    return folder;
};
exports.processFolder = processFolder;
const handleFolderRefresh = (soapFolders, currentView) => {
    view = currentView;
    if (soapFolders.length > 1) {
        const sharedAccounts = soapFolders.slice(1);
        return [
            (0, exports.processFolder)(soapFolders[0], 0),
            ...sharedAccounts.map((folder) => (0, exports.processLink)(folder, 0))
        ];
    }
    return (0, exports.processFolder)(soapFolders[0], 0);
};
exports.handleFolderRefresh = handleFolderRefresh;
const handleFolderCreated = (created) => created.forEach((val) => {
    if (val.id && val.l && view && val.view === view) {
        const parent = folders[val.l];
        const folder = {
            ...(0, exports.normalize)(val, parent),
            isLink: false,
            children: [],
            parent: parent?.id,
            depth: parent && parent.depth !== undefined ? parent.depth + 1 : 0
        };
        folders[val.id] = folder;
        parent.children.push(folder);
        sortFoldersByName(parent.children);
    }
});
exports.handleFolderCreated = handleFolderCreated;
const handleLinkCreated = (created) => created.forEach((val) => {
    if (val.id && val.l && view && val.view === view) {
        const parent = folders[val.l];
        const folder = {
            ...(0, exports.normalizeLink)(val, parent),
            isLink: true,
            children: [],
            parent: parent?.id,
            depth: parent && parent.depth !== undefined ? parent.depth + 1 : 0
        };
        folders[val.id] = folder;
        parent.children.push(folder);
        sortFoldersByName(parent.children);
    }
});
exports.handleLinkCreated = handleLinkCreated;
function getKeyByValue(map, searchValue) {
    return Object.keys(map).find((key) => searchValue.id === `${map[key].zid}:${map[key].rid}`);
}
function folderIsSharedWithMe(folderId) {
    if (!folderId)
        return false;
    const folder = folders[folderId];
    if (folder?.parent) {
        return folderIsSharedWithMe(folder?.parent);
    }
    return folder?.name === 'USER_ROOT';
}
const handleFolderModified = (modified) => 
// the type defined in shell is not correct refs: SHELL-118
// FIXME: remove the ts-ignore when the type will be fixed
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
modified.forEach((val) => {
    if (!val.id)
        return;
    const mountPointId = val.id.includes(':') ? getKeyByValue(folders, val) : val.id;
    const parentMountPointId = getKeyByValue(folders, { id: val.l });
    const isSharedWithMe = folderIsSharedWithMe(mountPointId);
    const parentIsSharedWithMe = folderIsSharedWithMe(parentMountPointId);
    const parentFolderId = parentIsSharedWithMe && parentMountPointId ? parentMountPointId : val.l;
    const folderId = isSharedWithMe && mountPointId ? mountPointId : val.id;
    const folder = folderId ? folders[folderId] : null;
    if (folder) {
        Object.assign(folder, omit({ ...val, id: folderId }));
        updateChildren(folder, val);
        if (typeof val.f !== 'undefined') {
            folder.checked = (0, exports.testFolderIsChecked)({ string: val.f });
        }
        const oldParentId = folder.parent;
        if (oldParentId) {
            const oldParent = folders[oldParentId];
            if (oldParent) {
                if (!val.l) {
                    oldParent.children = oldParent.children.map((f) => (f.id !== val.id ? f : folder));
                }
                else {
                    const newParent = parentFolderId ? folders[parentFolderId] : null;
                    if (newParent) {
                        oldParent.children = oldParent.children.filter((f) => f.id !== folderId);
                        newParent.children.push(folder);
                        sortFoldersByName(newParent.children);
                        folder.parent = newParent.id;
                        folder.depth = newParent?.depth !== undefined ? newParent.depth + 1 : 0;
                    }
                }
            }
            folders[folderId] = folder;
        }
    }
});
exports.handleFolderModified = handleFolderModified;
const handleFolderDeleted = (deleted) => deleted.forEach((val) => {
    const folder = folders[val];
    if (folder) {
        if (folder.parent) {
            const parent = folders[folder.parent];
            parent.children = parent.children.filter((obj) => obj.id !== val);
        }
        delete folders[val];
        delete searches[val];
    }
});
exports.handleFolderDeleted = handleFolderDeleted;
const handleFolderNotify = (notify) => {
    (0, exports.handleFolderCreated)(notify.created?.folder ?? []);
    (0, exports.handleLinkCreated)(notify.created?.link ?? []);
    // the type defined in shell is not correct refs: SHELL-118
    // FIXME: remove the ts-ignore when the type will be fixed
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (0, exports.handleFolderModified)([...(notify.modified?.folder ?? []), ...(notify.modified?.link ?? [])]);
    (0, exports.handleFolderDeleted)(notify.deleted ?? []);
};
exports.handleFolderNotify = handleFolderNotify;
const handleFoldersMessages = ({ data }) => {
    if (data.op === 'refresh' && data.folder) {
        (0, exports.handleFolderRefresh)(data.folder, data.currentView);
    }
    if (data.op === 'notify') {
        (0, exports.handleFolderNotify)(data.notify);
    }
};
exports.handleFoldersMessages = handleFoldersMessages;
const handleMessage = ({ data }) => {
    (0, exports.handleFoldersMessages)({ data });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    postMessage({ folders, linksIdMap, searches });
};
exports.handleMessage = handleMessage;
//# sourceMappingURL=handle-message.js.map