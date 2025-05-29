export type HistoryNavigation = {
    replaceHistory: (path: string) => void;
    pushHistory: (path: string) => void;
};
export declare const useHistoryNavigation: () => HistoryNavigation;
