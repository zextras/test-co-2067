import { TFunction } from 'i18next';
import { IdentityDescriptor } from '../types/identities';
type AccountItem = {
    id: string;
    address: string;
};
export declare function getSharedAccounts(): Promise<Array<AccountItem>>;
export declare function getDefaultAccount(): AccountItem | undefined;
export declare function getOrderedAccountIds(priorityAccountAddress?: string): Promise<Array<string>>;
/**
 * Returns the list of all the identities for the account. For each identity a type
 * is give, by matching the email address with all the available addresses, or by
 * setting a default one if the address does not match any of the available addresses.
 *
 * The function returns also an identity for each account for which the user is a delegate
 * (sendAs or sendOnBehalfOf) if there is no an already existing identity
 */
export declare const getIdentitiesDescriptors: () => Array<IdentityDescriptor>;
/**
 *
 * @param identity
 * @param t
 */
export declare const getIdentityDescription: (identity: IdentityDescriptor, t: TFunction) => string | null;
export {};
