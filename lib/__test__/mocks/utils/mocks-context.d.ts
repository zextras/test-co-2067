import { FakeIdentity } from '../accounts/fakeAccounts';
type SignItemType = {
    name: string;
    id: string;
    description: string;
    label: string;
    content?: [
        {
            type: 'text/plain' | 'text/html';
            _content: string;
        }
    ];
};
type MocksContextIdentity = {
    identity: FakeIdentity;
    userRootId?: string;
    signatures?: {
        newEmailSignature: SignItemType;
        forwardReplySignature: SignItemType;
    };
};
type MocksContext = {
    identities: {
        primary: MocksContextIdentity;
        aliases: Array<MocksContextIdentity>;
        sendAs: Array<MocksContextIdentity>;
        sendOnBehalf: Array<MocksContextIdentity>;
    };
    aliasAddresses: Array<string>;
    viewFreeBusyIdentities: Array<FakeIdentity>;
    otherUsersIdentities: Array<FakeIdentity>;
};
type MocksContextGenerationParams = {
    aliasIdentitiesCount?: number;
    sendAsIdentitiesCount?: number;
    sendOnBehalfIdentitiesCount?: number;
    viewFreeBusyIdentitiesCount?: number;
    otherUsersIdentitiesCount?: number;
    generateSignatures?: boolean;
};
/**
 * Generates a default context with consistent random data
 * @param params
 */
declare const generateDefaultContext: ({ aliasIdentitiesCount, sendAsIdentitiesCount, sendOnBehalfIdentitiesCount, viewFreeBusyIdentitiesCount, generateSignatures, otherUsersIdentitiesCount }: MocksContextGenerationParams) => MocksContext;
declare const updateMocksContext: (customContext: Partial<MocksContext>) => MocksContext;
declare const setMocksContext: (customContext: MocksContext) => void;
declare const getMocksContext: () => MocksContext;
/**
 * Returns an identity randomly picked from the given identities array.
 * If the identities array is undefined or empty, undefined is returned
 * @param identities
 */
declare const getRandomIdentity: (identities: Array<FakeIdentity>) => FakeIdentity | undefined;
/**
 * Returns an identity randomly picked from the given identities array.
 * If the identities array is undefined or empty, undefined is returned
 * @param identities
 */
declare const getRandomIdentities: (identities: Array<FakeIdentity>, count: number) => Array<FakeIdentity>;
export { type MocksContext, type MocksContextIdentity, getMocksContext, setMocksContext, updateMocksContext, generateDefaultContext, getRandomIdentity, getRandomIdentities };
