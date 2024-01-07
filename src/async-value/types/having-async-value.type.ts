import { IGenericAsyncValue } from '../async-value.type';

export type IHavingAsyncValue<GName extends string, GAsyncValue extends IGenericAsyncValue> = {
  readonly [GKey in GName]: GAsyncValue;
}
