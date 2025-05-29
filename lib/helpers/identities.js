"use strict";
/*
 * SPDX-FileCopyrightText: 2024 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdentityDescription = exports.getIdentitiesDescriptors = void 0;
exports.getSharedAccounts = getSharedAccounts;
exports.getDefaultAccount = getDefaultAccount;
exports.getOrderedAccountIds = getOrderedAccountIds;
const carbonio_shell_ui_1 = require("@zextras/carbonio-shell-ui");
const lodash_1 = require("lodash");
const get_share_info_1 = require("../soap/get-share-info");
function getSharedAccounts() {
    return (0, get_share_info_1.getShareInfoRequest)().then((res) => {
        const sharedAccounts = [];
        if (res?.folders) {
            const sharedRootFolders = (0, lodash_1.filter)(res.folders, ['folderId', 1]);
            sharedRootFolders.forEach((account) => {
                if (account.ownerId && account.ownerEmail) {
                    sharedAccounts.push({ id: account.ownerId, address: account.ownerEmail });
                }
            });
        }
        return sharedAccounts;
    });
}
function getDefaultAccount() {
    const account = (0, carbonio_shell_ui_1.getUserAccount)();
    if (!account) {
        return undefined;
    }
    return { id: account.id, address: account.name };
}
async function getOrderedAccountIds(priorityAccountAddress) {
    const sharedAccounts = await getSharedAccounts();
    const defaultAccount = getDefaultAccount();
    const finalList = defaultAccount ? [defaultAccount].concat(...sharedAccounts) : sharedAccounts;
    const sortedList = (0, lodash_1.sortBy)(finalList, (item) => item.address === priorityAccountAddress ? 0 : 1);
    return (0, lodash_1.map)(sortedList, (item) => item.id);
}
/**
 * The name of the primary identity
 */
const PRIMARY_IDENTITY_NAME = 'DEFAULT';
const NO_ACCOUNT_NAME = 'No account';
/**
 * The type of the identities whose address does not match with any of the available addresses
 */
const UNKNOWN_IDENTITY_DEFAULT_TYPE = 'alias';
/**
 * Returns the list of all the available addresses for the account and their type
 */
const getAvailableAddresses = () => {
    const account = (0, carbonio_shell_ui_1.getUserAccount)();
    const settings = (0, carbonio_shell_ui_1.getUserSettings)();
    const result = [];
    // Adds the email address of the primary account
    result.push({
        address: account?.name ?? NO_ACCOUNT_NAME,
        type: 'primary',
        ownerAccount: account?.name ?? NO_ACCOUNT_NAME
    });
    // Adds all the aliases
    if (settings.attrs.zimbraMailAlias) {
        if ((0, lodash_1.isArray)(settings.attrs.zimbraMailAlias)) {
            result.push(...settings.attrs.zimbraMailAlias.map((alias) => ({
                address: alias,
                type: 'alias',
                ownerAccount: account?.name ?? NO_ACCOUNT_NAME
            })));
        }
        else {
            result.push({
                address: settings.attrs.zimbraMailAlias,
                type: 'alias',
                ownerAccount: account?.name ?? NO_ACCOUNT_NAME
            });
        }
    }
    // Adds the email addresses of all the delegation accounts
    if (account?.rights?.targets) {
        account.rights.targets.forEach((target) => {
            if (target.target && (target.right === 'sendAs' || target.right === 'sendOnBehalfOf')) {
                target.target.forEach((user) => {
                    if (user.type === 'account' && user.email) {
                        user.email.forEach((email) => {
                            result.push({
                                address: email.addr,
                                type: 'delegation',
                                right: target.right,
                                ownerAccount: email.addr
                            });
                        });
                    }
                });
            }
        });
    }
    return result;
};
/**
 *
 * @param identities
 */
const sortIdentities = (identities) => {
    const allIdentities = [...identities];
    const defaultIdentity = (0, lodash_1.remove)(allIdentities, (identity) => identity.name === PRIMARY_IDENTITY_NAME);
    return [...defaultIdentity, ...allIdentities];
};
/**
 * @param email
 * @param rights
 */
const generateIdentityId = (email, rights) => email + rights;
/**
 * Returns the list of all the identities for the account. For each identity a type
 * is give, by matching the email address with all the available addresses, or by
 * setting a default one if the address does not match any of the available addresses.
 *
 * The function returns also an identity for each account for which the user is a delegate
 * (sendAs or sendOnBehalfOf) if there is no an already existing identity
 */
const getIdentitiesDescriptors = () => {
    const account = (0, carbonio_shell_ui_1.getUserAccount)();
    const identities = [];
    // Get the list of all the available email addresses for the account and their type
    const availableEmailAddresses = getAvailableAddresses();
    account?.identities?.identity &&
        sortIdentities(account.identities.identity)?.forEach((identity) => {
            const fromAddress = identity._attrs?.zimbraPrefFromAddress ?? '';
            const fromDisplay = identity._attrs?.zimbraPrefFromDisplay ?? '';
            // The receiving address for the primary identity is the account name
            const receivingAddress = identity.name === PRIMARY_IDENTITY_NAME ? account.name : fromAddress;
            // Find the first match between the identity receiving email address and the available email addresses
            const matchingReceivingAddress = availableEmailAddresses.find((availableAddress) => availableAddress.address === receivingAddress);
            const type = matchingReceivingAddress
                ? matchingReceivingAddress.type
                : UNKNOWN_IDENTITY_DEFAULT_TYPE;
            const right = type === 'delegation' && matchingReceivingAddress
                ? matchingReceivingAddress.right
                : undefined;
            identities.push({
                ownerAccount: matchingReceivingAddress?.ownerAccount ?? account.name,
                receivingAddress,
                id: identity._attrs?.zimbraPrefIdentityId ?? '',
                identityName: identity.name ?? '',
                identityDisplayName: identity._attrs?.zimbraPrefIdentityName ?? '',
                fromDisplay,
                fromAddress,
                type,
                right,
                defaultSignatureId: identity._attrs?.zimbraPrefDefaultSignatureId,
                forwardReplySignatureId: identity._attrs?.zimbraPrefForwardReplySignatureId
            });
        });
    const delegationAccounts = (0, lodash_1.filter)(account?.rights?.targets, (rts) => rts.right === 'sendAs' || rts.right === 'sendOnBehalfOf');
    const delegationIdentities = (0, lodash_1.flatten)((0, lodash_1.map)(delegationAccounts, (ele) => (0, lodash_1.map)(ele?.target, (item) => ({
        ownerAccount: item.email[0].addr ?? account?.name ?? NO_ACCOUNT_NAME,
        receivingAddress: item.email[0].addr,
        id: generateIdentityId(item.email[0].addr, ele.right),
        identityName: item.d,
        identityDisplayName: item.d,
        fromDisplay: item.d,
        fromAddress: item.email[0].addr,
        type: 'delegation',
        right: ele.right
    }))));
    const uniqueIdentityList = [...identities];
    if (delegationIdentities?.length) {
        (0, lodash_1.map)(delegationIdentities, (ele) => {
            const uniqIdentity = (0, lodash_1.findIndex)(identities, { fromAddress: ele.fromAddress });
            if (uniqIdentity < 0)
                uniqueIdentityList.push(ele);
        });
        return uniqueIdentityList;
    }
    return identities;
};
exports.getIdentitiesDescriptors = getIdentitiesDescriptors;
const getDefaultIdentity = () => (0, exports.getIdentitiesDescriptors)().reduce((result, identity) => identity.identityName === PRIMARY_IDENTITY_NAME ? identity : result);
/**
 *
 * @param identity
 * @param t
 */
const getIdentityDescription = (identity, t) => {
    if (!identity) {
        return null;
    }
    const defaultIdentity = getDefaultIdentity();
    return identity.right === 'sendOnBehalfOf'
        ? `${t('label.on_behalf_of', 'on behalf of', {
            accountName: defaultIdentity.fromDisplay ?? '',
            identity: identity.fromDisplay ?? identity.identityName,
            otherAccount: identity.fromAddress
        })}`
        : `${identity.identityName ?? ''} (${identity.fromDisplay ?? ''} <${identity.fromAddress}>)`;
};
exports.getIdentityDescription = getIdentityDescription;
//# sourceMappingURL=identities.js.map