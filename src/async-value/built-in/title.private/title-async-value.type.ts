import { IHavingAsyncValue } from '../../types/having-async-value.type';
import { IAsyncValue } from '../../async-value.type';

export const TitleAsyncValueName = 'title';

export type ITitleAsyncValueName = typeof TitleAsyncValueName;
export type ITitleAsyncValueValue = string;

export type ITitleAsyncValue = IAsyncValue<ITitleAsyncValueValue>;
export type IHavingTitleAsyncValue = IHavingAsyncValue<ITitleAsyncValueName, ITitleAsyncValue>;

