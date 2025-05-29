import React, { PropsWithChildren, ReactElement } from 'react';
import { ByRoleMatcher, ByRoleOptions, GetAllBy, queries, queryHelpers, render, RenderOptions, Screen, within as rtlWithin, renderHook, RenderHookOptions } from '@testing-library/react';
import userEvent, { UserEvent as RTLUserEvent } from '@testing-library/user-event';
import { MemoryRouterProps, RouteProps } from 'react-router-dom';
import { Store } from 'redux';
type ByRoleWithIconOptions = ByRoleOptions & {
    icon: string | RegExp;
};
declare const queriesExtended: {
    queryByRoleWithIcon: queryHelpers.QueryBy<[ByRoleMatcher, ByRoleWithIconOptions]>;
    getAllByRoleWithIcon: GetAllBy<[ByRoleMatcher, ByRoleWithIconOptions]>;
    getByRoleWithIcon: queryHelpers.GetBy<[ByRoleMatcher, ByRoleWithIconOptions]>;
    findAllByRoleWithIcon: queryHelpers.FindAllBy<[ByRoleMatcher, ByRoleWithIconOptions]>;
    findByRoleWithIcon: queryHelpers.FindBy<[ByRoleMatcher, ByRoleWithIconOptions]>;
    getByLabelText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.GetByText<T>>;
    getAllByLabelText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.AllByText<T>>;
    queryByLabelText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.QueryByText<T>>;
    queryAllByLabelText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.AllByText<T>>;
    findByLabelText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindByText<T>>;
    findAllByLabelText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindAllByText<T>>;
    getByPlaceholderText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.GetByBoundAttribute<T>>;
    getAllByPlaceholderText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    queryByPlaceholderText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.QueryByBoundAttribute<T>>;
    queryAllByPlaceholderText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    findByPlaceholderText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindByBoundAttribute<T>>;
    findAllByPlaceholderText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindAllByBoundAttribute<T>>;
    getByText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.GetByText<T>>;
    getAllByText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.AllByText<T>>;
    queryByText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.QueryByText<T>>;
    queryAllByText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.AllByText<T>>;
    findByText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindByText<T>>;
    findAllByText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindAllByText<T>>;
    getByAltText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.GetByBoundAttribute<T>>;
    getAllByAltText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    queryByAltText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.QueryByBoundAttribute<T>>;
    queryAllByAltText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    findByAltText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindByBoundAttribute<T>>;
    findAllByAltText<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindAllByBoundAttribute<T>>;
    getByTitle<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.GetByBoundAttribute<T>>;
    getAllByTitle<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    queryByTitle<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.QueryByBoundAttribute<T>>;
    queryAllByTitle<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    findByTitle<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindByBoundAttribute<T>>;
    findAllByTitle<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindAllByBoundAttribute<T>>;
    getByDisplayValue<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.GetByBoundAttribute<T>>;
    getAllByDisplayValue<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    queryByDisplayValue<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.QueryByBoundAttribute<T>>;
    queryAllByDisplayValue<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    findByDisplayValue<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindByBoundAttribute<T>>;
    findAllByDisplayValue<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindAllByBoundAttribute<T>>;
    getByRole<T extends HTMLElement = HTMLElement>(container: HTMLElement, role: ByRoleMatcher, options?: ByRoleOptions | undefined): ReturnType<queries.GetByRole<T>>;
    getAllByRole<T extends HTMLElement = HTMLElement>(container: HTMLElement, role: ByRoleMatcher, options?: ByRoleOptions | undefined): ReturnType<queries.AllByRole<T>>;
    queryByRole<T extends HTMLElement = HTMLElement>(container: HTMLElement, role: ByRoleMatcher, options?: ByRoleOptions | undefined): ReturnType<queries.QueryByRole<T>>;
    queryAllByRole<T extends HTMLElement = HTMLElement>(container: HTMLElement, role: ByRoleMatcher, options?: ByRoleOptions | undefined): ReturnType<queries.AllByRole<T>>;
    findByRole<T extends HTMLElement = HTMLElement>(container: HTMLElement, role: ByRoleMatcher, options?: ByRoleOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindByRole<T>>;
    findAllByRole<T extends HTMLElement = HTMLElement>(container: HTMLElement, role: ByRoleMatcher, options?: ByRoleOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindAllByRole<T>>;
    getByTestId<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.GetByBoundAttribute<T>>;
    getAllByTestId<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    queryByTestId<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.QueryByBoundAttribute<T>>;
    queryAllByTestId<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    findByTestId<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindByBoundAttribute<T>>;
    findAllByTestId<T extends HTMLElement = HTMLElement>(container: HTMLElement, id: import("@testing-library/react").Matcher, options?: import("@testing-library/react").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react").waitForOptions | undefined): ReturnType<queries.FindAllByBoundAttribute<T>>;
};
export declare function within(element: Parameters<typeof rtlWithin<typeof queriesExtended>>[0]): ReturnType<typeof rtlWithin<typeof queriesExtended>>;
export declare const screen: Screen<typeof queriesExtended>;
interface ProvidersWrapperProps {
    store?: Store;
    initialEntries?: MemoryRouterProps['initialEntries'];
    path?: RouteProps['path'];
}
export declare const ProvidersWrapper: ({ children, store, initialEntries, path }: PropsWithChildren<ProvidersWrapperProps>) => React.JSX.Element;
export type CustomRenderOptions = Omit<RenderOptions, 'queries' | 'wrapper'> & ProvidersWrapperProps;
type SetupOptions = {
    renderOptions?: CustomRenderOptions;
    setupOptions?: Parameters<(typeof userEvent)['setup']>[0];
} & ProvidersWrapperProps;
export type UserEvent = ReturnType<(typeof userEvent)['setup']> & {
    readonly rightClick: (target: Element) => Promise<void>;
};
export declare function setupTest(ui: ReactElement, { setupOptions, ...customRenderOptions }?: SetupOptions): {
    user: UserEvent;
} & ReturnType<typeof render>;
type SetupHookOptions<TProps extends unknown[]> = {
    initialProps?: RenderHookOptions<TProps>['initialProps'];
    setupOptions?: Parameters<(typeof userEvent)['setup']>[0];
} & ProvidersWrapperProps;
type SetupHookReturnType<TResult, TProps> = ReturnType<typeof renderHook<TResult, TProps>> & {
    user: RTLUserEvent;
};
export declare function setupHook<TProps extends unknown[], TResult>(hook: (...args: TProps) => TResult, { initialProps, setupOptions, ...providersProps }?: SetupHookOptions<TProps>): SetupHookReturnType<TResult, TProps>;
export declare function makeListItemsVisible(): void;
export declare function triggerLoadMore(): void;
export {};
