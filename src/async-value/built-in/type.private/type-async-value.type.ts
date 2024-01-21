import { IHavingAsyncValue } from '../../types/having-async-value.type';
import { IAsyncValue } from '../../async-value.type';

export const TypeAsyncValueName = 'type';

export type ITypeAsyncValueName = typeof TypeAsyncValueName;
export type ITypeAsyncValueValue = string;

export type ITypeAsyncValue = IAsyncValue<ITypeAsyncValueValue>;
export type IHavingTypeAsyncValue = IHavingAsyncValue<ITypeAsyncValueName, ITypeAsyncValue>;

