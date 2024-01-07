import { IRGBCW } from './type/rgb-cw.type';
import { IHavingAsyncValue } from '../../types/having-async-value.type';
import { IAsyncValue } from '../../async-value.type';

export const ColorAsyncValueName = 'color';

export type IColorAsyncValueName = typeof ColorAsyncValueName;
export type IColorAsyncValueValue = IRGBCW;

export type IColorAsyncValue = IAsyncValue<IColorAsyncValueValue>;
export type IHavingColorAsyncValue = IHavingAsyncValue<IColorAsyncValueName, IColorAsyncValue>;

