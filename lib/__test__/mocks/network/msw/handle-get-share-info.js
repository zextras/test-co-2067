"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEmptyGetShareInfoRequest = exports.handleGetShareInfoRequest = exports.getEmptyMSWShareInfoResponse = exports.getMSWShareInfo = void 0;
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const faker_1 = require("@faker-js/faker");
const lodash_1 = require("lodash");
const msw_1 = require("msw");
const soap_roots_generator_1 = require("../../folders/soap-roots-generator");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
const getMSWShareInfo = (context) => {
    const firstName = faker_1.faker.person.firstName();
    const lastName = faker_1.faker.person.lastName();
    const ownerEmail = faker_1.faker.internet.email({ firstName, lastName });
    const fakeMid = faker_1.faker.number.int();
    const fakeId = faker_1.faker.number.int();
    return {
        ownerId: faker_1.faker.string.uuid(),
        ownerEmail,
        ownerName: `${firstName} ${lastName}`,
        folderId: fakeId,
        folderUuid: faker_1.faker.string.uuid(),
        folderPath: '/',
        view: (0, soap_roots_generator_1.getRandomView)(),
        rights: 'rwidx',
        granteeType: 'grp',
        granteeId: faker_1.faker.string.uuid(),
        granteeName: `_grp_rw_${ownerEmail}`,
        mid: `${fakeMid}`,
        ...(context ?? {})
    };
};
exports.getMSWShareInfo = getMSWShareInfo;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
const getShareInfoResponse = () => {
    const sharedAccount = (0, exports.getMSWShareInfo)({
        folderId: 1,
        rights: 'rwidx',
        view: 'unknown',
        granteeType: 'grp'
    });
    const randomLength = faker_1.faker.number.int({ min: 50, max: 200 });
    const randomShares = [
        sharedAccount,
        ...(0, lodash_1.map)(Array.from({ length: randomLength }), () => (0, exports.getMSWShareInfo)())
    ];
    return {
        Header: {
            context: {
                session: {
                    id: faker_1.faker.number.int({ min: 1, max: 999999 }),
                    _content: faker_1.faker.number.int({ min: 1, max: 999999 })
                }
            }
        },
        Body: {
            GetShareInfoResponse: {
                share: randomShares,
                _jsns: 'urn:zimbraAccount'
            }
        }
    };
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
const getEmptyShareInfoResponse = () => ({
    Header: {
        context: {
            session: {
                id: faker_1.faker.number.int({ min: 1, max: 999999 }),
                _content: faker_1.faker.number.int({ min: 1, max: 999999 })
            }
        }
    },
    Body: {
        GetShareInfoResponse: {
            share: [],
            _jsns: 'urn:zimbraAccount'
        }
    }
});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
const getEmptyMSWShareInfoResponse = () => {
    const randomLength = faker_1.faker.number.int({ min: 50, max: 200 });
    const randomShares = (0, lodash_1.map)(Array.from({ length: randomLength }), exports.getMSWShareInfo);
    return {
        Header: {
            context: {
                session: {
                    id: faker_1.faker.number.int({ min: 1, max: 999999 }),
                    _content: faker_1.faker.number.int({ min: 1, max: 999999 })
                }
            }
        },
        Body: {
            GetShareInfoResponse: {
                share: randomShares,
                _jsns: 'urn:zimbraAccount'
            }
        }
    };
};
exports.getEmptyMSWShareInfoResponse = getEmptyMSWShareInfoResponse;
const handleGetShareInfoRequest = async ({ request }) => msw_1.HttpResponse.json(getShareInfoResponse());
exports.handleGetShareInfoRequest = handleGetShareInfoRequest;
const handleEmptyGetShareInfoRequest = async ({ request }) => msw_1.HttpResponse.json(getEmptyShareInfoResponse());
exports.handleEmptyGetShareInfoRequest = handleEmptyGetShareInfoRequest;
//# sourceMappingURL=handle-get-share-info.js.map