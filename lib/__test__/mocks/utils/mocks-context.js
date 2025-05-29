"use strict";
/*
 * SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomIdentities = exports.getRandomIdentity = exports.generateDefaultContext = exports.updateMocksContext = exports.setMocksContext = exports.getMocksContext = void 0;
const faker_1 = require("@faker-js/faker");
const lodash_1 = require("lodash");
const fakeAccounts_1 = require("../accounts/fakeAccounts");
/**
 * Number of alias identities to generate
 */
const DEFAULT_ALIASES_IDENTITIES_COUNT = 2;
/**
 * Number of accounts on which the current user has the "sendAs" right
 */
const DEFAULT_SENDAS_IDENTITIES_COUNT = 1;
/**
 * Number of accounts on which the current user has the "sendOnBehalfOf" right
 */
const DEFAULT_SENDONBEHALF_IDENTITIES_COUNT = 1;
/**
 * Number of accounts on which the current user has the "view free/busy status" right
 */
const DEFAULT_VIEWFREEBUSY_IDENTITIES_COUNT = 2;
/**
 * Number of accounts to create and to use for mock grants
 */
const DEFAULT_OTHER_USERS_COUNT = 10;
/**
 * Indicates if the signatures should be generated
 */
const DEFAULT_GENERATE_SIGNATURES = true;
/**
 * Generate a signature
 */
const generateSignature = () => {
    const title = faker_1.faker.person.jobTitle();
    return {
        name: title,
        id: faker_1.faker.string.uuid(),
        label: title,
        description: title,
        content: [
            {
                type: 'text/html',
                _content: `<div>${title}</div>\n<div><span style="color: #ff0000;"><em>${faker_1.faker.person.jobType()}</em></span></div>\n<div>&nbsp;</div>`
            }
        ]
    };
};
/**
 * Generates a default context with consistent random data
 * @param params
 */
const generateDefaultContext = ({ aliasIdentitiesCount = DEFAULT_ALIASES_IDENTITIES_COUNT, sendAsIdentitiesCount = DEFAULT_SENDAS_IDENTITIES_COUNT, sendOnBehalfIdentitiesCount = DEFAULT_SENDONBEHALF_IDENTITIES_COUNT, viewFreeBusyIdentitiesCount = DEFAULT_VIEWFREEBUSY_IDENTITIES_COUNT, generateSignatures = DEFAULT_GENERATE_SIGNATURES, otherUsersIdentitiesCount = DEFAULT_OTHER_USERS_COUNT }) => {
    const primary = (0, fakeAccounts_1.createFakeIdentity)();
    const aliases = (0, lodash_1.times)(aliasIdentitiesCount, () => (0, fakeAccounts_1.createFakeIdentity)());
    return {
        identities: {
            primary: {
                identity: primary,
                userRootId: faker_1.faker.string.uuid(),
                ...(generateSignatures && {
                    signatures: {
                        newEmailSignature: generateSignature(),
                        forwardReplySignature: generateSignature()
                    }
                })
            },
            aliases: aliases.map((alias) => ({
                identity: alias,
                ...(generateSignatures && {
                    signatures: {
                        newEmailSignature: generateSignature(),
                        forwardReplySignature: generateSignature()
                    }
                })
            })),
            sendAs: (0, lodash_1.times)(sendAsIdentitiesCount, () => ({
                identity: (0, fakeAccounts_1.createFakeIdentity)(),
                userRootId: faker_1.faker.string.uuid(),
                ...(generateSignatures && {
                    signatures: {
                        newEmailSignature: generateSignature(),
                        forwardReplySignature: generateSignature()
                    }
                })
            })),
            sendOnBehalf: (0, lodash_1.times)(sendOnBehalfIdentitiesCount, () => ({
                identity: (0, fakeAccounts_1.createFakeIdentity)(),
                userRootId: faker_1.faker.string.uuid(),
                ...(generateSignatures && {
                    signatures: {
                        newEmailSignature: generateSignature(),
                        forwardReplySignature: generateSignature()
                    }
                })
            }))
        },
        aliasAddresses: aliases.map((alias) => alias.email),
        viewFreeBusyIdentities: (0, lodash_1.times)(viewFreeBusyIdentitiesCount, () => (0, fakeAccounts_1.createFakeIdentity)()),
        otherUsersIdentities: (0, lodash_1.times)(otherUsersIdentitiesCount, () => (0, fakeAccounts_1.createFakeIdentity)())
    };
};
exports.generateDefaultContext = generateDefaultContext;
// The current context, preset with random data
let context = generateDefaultContext({});
// Set custom values for the part of the context
const updateMocksContext = (customContext) => (0, lodash_1.merge)(context, customContext);
exports.updateMocksContext = updateMocksContext;
// Set custom values for the part of the context
const setMocksContext = (customContext) => {
    context = (0, lodash_1.cloneDeep)(customContext);
};
exports.setMocksContext = setMocksContext;
// Return a copy of the current context
const getMocksContext = () => (0, lodash_1.cloneDeep)(context);
exports.getMocksContext = getMocksContext;
/**
 * Returns an identity randomly picked from the given identities array.
 * If the identities array is undefined or empty, undefined is returned
 * @param identities
 */
const getRandomIdentity = (identities) => {
    if (!identities || !identities.length) {
        return undefined;
    }
    return identities[(0, lodash_1.floor)(Math.random() * identities.length)];
};
exports.getRandomIdentity = getRandomIdentity;
/**
 * Returns an identity randomly picked from the given identities array.
 * If the identities array is undefined or empty, undefined is returned
 * @param identities
 */
const getRandomIdentities = (identities, count) => {
    if (!identities || !identities.length) {
        return [];
    }
    const shuffledIdentities = faker_1.faker.helpers.shuffle(identities);
    return shuffledIdentities.filter((identity, index) => index < count);
};
exports.getRandomIdentities = getRandomIdentities;
//# sourceMappingURL=mocks-context.js.map