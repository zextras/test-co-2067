import { StateCreator, UseBoundStore, StoreApi } from 'zustand';
export declare const create: () => <S>(createState: StateCreator<S>) => UseBoundStore<StoreApi<S>>;
