import type { SoapNotify, useRefresh } from '@zextras/carbonio-shell-ui';
export type SyncNotifyMessage = {
    op: 'notify';
    notify: SoapNotify;
};
export type SyncRefreshMessage = ReturnType<typeof useRefresh> & {
    op: 'refresh';
};
export type SyncMessage = SyncNotifyMessage | SyncRefreshMessage;
export type WorkerMessage<T> = {
    data: SyncMessage & T;
};
