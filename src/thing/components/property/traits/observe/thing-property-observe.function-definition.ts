import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IThingValue } from '../../../../types/thing-value.type';

export interface IThingPropertyObserveFunctionOptions {
  refreshTime?: number;
}

export interface IThingPropertyObserveFunction<GValue extends IThingValue> {
  (
    options?: IThingPropertyObserveFunctionOptions,
  ): IPushSourceWithBackPressure<GValue>;
}
