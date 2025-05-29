import failOnConsole from 'jest-fail-on-console';
import { SetupServer } from 'msw/node';
/**
 * Returns the default configuration for jest failOnConsole setting
 */
export declare const getFailOnConsoleDefaultConfig: () => failOnConsole.InitOptions;
/**
 * Default logic to execute before all the tests
 */
type DefaultBeforeAllTestsProps = {
    onUnhandledRequest: 'warn' | 'error';
};
export declare const defaultBeforeAllTests: ({ onUnhandledRequest }?: DefaultBeforeAllTestsProps) => void;
/**
 * Default logic to execute before each tests
 */
export declare const defaultBeforeEachTest: () => void;
/**
 * Default logic to execute after each tests
 */
export declare const defaultAfterEachTest: () => void;
/**
 * Default logic to execute after all the tests
 */
export declare const defaultAfterAllTests: () => void;
export declare const getSetupServer: () => SetupServer;
export {};
