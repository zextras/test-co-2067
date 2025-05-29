"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFailedRequest = exports.handleGetFolderRequest = void 0;
/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const faker_1 = require("@faker-js/faker");
const lodash_1 = require("lodash");
const msw_1 = require("msw");
const soap_roots_generator_1 = require("../../folders/soap-roots-generator");
const folder_1 = require("../../utils/folder");
const mocks_context_1 = require("../../utils/mocks-context");
const _id = faker_1.faker.number.int({ min: 1, max: 99999 });
const isSystemFolder = () => _id > 0 && _id <= 20;
const name = faker_1.faker.word.noun();
const _view = 'appointment';
const defaultFolder = {
    id: `${_id}`,
    uuid: faker_1.faker.string.uuid(),
    deletable: !isSystemFolder,
    name,
    isLink: false,
    depth: 1,
    folder: [],
    recursive: false,
    absFolderPath: `/${name}`,
    l: '1',
    luuid: faker_1.faker.string.uuid(),
    f: (0, folder_1.getRandomFolderFlags)(_view),
    view: _view,
    rev: faker_1.faker.number.int({ min: 1, max: 99999 }),
    ms: faker_1.faker.number.int({ min: 1, max: 99999 }),
    webOfflineSyncDays: 0,
    activesyncdisabled: false,
    n: 1,
    s: 0,
    i4ms: faker_1.faker.number.int({ min: 1, max: 99999 }),
    i4next: faker_1.faker.number.int({ min: 1, max: 99999 })
};
const defaultFolders = [defaultFolder];
const defaultSuccessfulBody = {
    GetFolderResponse: {
        folder: defaultFolders,
        _jsns: 'urn:zimbraMail'
    }
};
const getDefaultFolderById = (id) => ({
    ...defaultFolder,
    id
});
const getSuccessfulBodyByView = (view, tr, context) => {
    const identity = (0, mocks_context_1.getMocksContext)().identities.primary.identity.email;
    const account = context.account._content;
    const luuid = context.session.id;
    const isPrimaryAccount = identity === account;
    if (tr) {
        const tree = (0, soap_roots_generator_1.generateSoapRoot)(true, isPrimaryAccount, luuid);
        const filteredByView = {
            ...tree,
            folder: (0, lodash_1.filter)(tree.folder, ['view', view]),
            link: (0, lodash_1.filter)(tree.link, ['view', view])
        };
        return {
            ...defaultSuccessfulBody,
            GetFolderResponse: {
                ...defaultSuccessfulBody.GetFolderResponse,
                folder: [filteredByView]
            }
        };
    }
    const tree = (0, soap_roots_generator_1.generateSoapRoot)(false, isPrimaryAccount, luuid);
    const filteredByView = {
        ...tree,
        folder: (0, lodash_1.filter)(tree.folder, ['view', view]),
        link: (0, lodash_1.filter)(tree.link, ['view', view])
    };
    return {
        ...defaultSuccessfulBody,
        GetFolderResponse: {
            ...defaultSuccessfulBody.GetFolderResponse,
            folder: [filteredByView]
        }
    };
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const getSuccessfulBody = (tr, context) => {
    const identity = (0, mocks_context_1.getMocksContext)().identities.primary.identity.email;
    const account = context.account._content;
    const luuid = context.session.id;
    const isPrimaryAccount = identity === account;
    const tree = (0, soap_roots_generator_1.generateSoapRoot)(!!tr, isPrimaryAccount, luuid);
    return {
        GetFolderResponse: {
            folder: [tree],
            _jsns: 'urn:zimbraMail'
        }
    };
};
// todo: update return type once soap return type is created
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const getSuccessfulBodyById = (id, tr, context) => {
    if (id === '1' && tr) {
        return getSuccessfulBody(tr, context);
    }
    return {
        ...defaultSuccessfulBody,
        GetFolderResponse: {
            ...defaultSuccessfulBody.GetFolderResponse,
            folder: [getDefaultFolderById(id)]
        }
    };
};
const getDefaultGetFolderResponse = ({ view, id, tr, context } = {}) => {
    if (view) {
        return getSuccessfulBodyByView(view, tr, context);
    }
    if (id) {
        return getSuccessfulBodyById(id, tr, context);
    }
    return getSuccessfulBody(tr, context);
};
const getFolderResponse = ({ id, view, tr, context } = {}) => ({
    Header: {
        context: {
            session: {
                id: faker_1.faker.number.int({ min: 1, max: 999999 }),
                _content: faker_1.faker.number.int({ min: 1, max: 999999 })
            }
        }
    },
    Body: getDefaultGetFolderResponse({ id, view, tr, context })
});
const handleGetFolderRequest = async ({ request }) => {
    const requestContent = await request.json();
    const { view, id, tr } = requestContent.Body.GetFolderRequest;
    const { context } = requestContent.Header;
    const response = getFolderResponse({ view, id, tr, context });
    return msw_1.HttpResponse.json(response);
};
exports.handleGetFolderRequest = handleGetFolderRequest;
const handleFailedRequest = async () => msw_1.HttpResponse.json({}, { type: 'error', status: 500, statusText: 'Failed' });
exports.handleFailedRequest = handleFailedRequest;
//# sourceMappingURL=handle-get-folder.js.map