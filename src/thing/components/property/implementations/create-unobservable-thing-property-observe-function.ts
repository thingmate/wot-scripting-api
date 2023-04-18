import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IThingValue } from '../../../types/thing-value.type';
import { IThingPropertyObserveFunction } from '../traits/observe/thing-property-observe.function-definition';

export interface ICreateUnobservableThingPropertyObserveFunctionOptions {
  name: string;
}

export function createUnobservableThingPropertyObserveFunction<GValue extends IThingValue>(
  {
    name,
  }: ICreateUnobservableThingPropertyObserveFunctionOptions,
): IThingPropertyObserveFunction<GValue> {
  return (): IPushSourceWithBackPressure<GValue> => {
    throw new Error(`The property '${name}' is not observable`);
  };
}
