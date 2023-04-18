import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IThingValue } from '../../../../../types/thing-value.type';
import { IThingPropertyObserveFunctionOptions } from '../thing-property-observe.function-definition';


export interface IThingPropertyObserveUsingReadLoopFunction<GValue extends IThingValue> {
  (
    options?: IThingPropertyObserveFunctionOptions,
  ): IPushSourceWithBackPressure<GValue>;
}
