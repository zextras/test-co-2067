type FakeIdentity = {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    fullName: string;
};
type GetMockedAccountItemType = {
    identity1?: FakeIdentity & {
        _attrs?: Record<string, string>;
    };
    identity2?: FakeIdentity & {
        _attrs?: Record<string, string>;
    };
    identity3?: FakeIdentity & {
        _attrs?: Record<string, string>;
    };
};
declare const createFakeIdentity: () => FakeIdentity;
/**
 *
 */
declare const getMockedAccountItem: (context?: GetMockedAccountItemType) => any;
export { type FakeIdentity, createFakeIdentity, getMockedAccountItem };
