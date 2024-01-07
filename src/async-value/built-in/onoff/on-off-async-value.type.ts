import { IOnOff } from './type/on-off.type';
import { IHavingAsyncValue } from '../../types/having-async-value.type';
import { IAsyncValue } from '../../async-value.type';

export const OnOffAsyncValueName = 'onoff';

export type IOnOffAsyncValueName = typeof OnOffAsyncValueName;
export type IOnOffAsyncValueValue = IOnOff;

export type IOnOffAsyncValue = IAsyncValue<IOnOffAsyncValueValue>;
export type IHavingOnOffAsyncValue = IHavingAsyncValue<IOnOffAsyncValueName, IOnOffAsyncValue>;

