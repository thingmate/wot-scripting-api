import { IHavingAsyncValue } from '../../types/having-async-value.type';
import { IAsyncValue } from '../../async-value.type';

export const OnlineAsyncValueName = 'online';

export type IOnlineAsyncValueName = typeof OnlineAsyncValueName;
export type IOnlineAsyncValueValue = boolean;

export type IOnlineAsyncValue = IAsyncValue<IOnlineAsyncValueValue>;
export type IHavingOnlineAsyncValue = IHavingAsyncValue<IOnlineAsyncValueName, IOnlineAsyncValue>;

