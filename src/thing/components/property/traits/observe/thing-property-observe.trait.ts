import { IThingValue } from '../../../../types/thing-value.type';
import { IThingPropertyObserveFunction } from './thing-property-observe.function-definition';

export interface IThingPropertyObserveTrait<GValue extends IThingValue> {
  observe: IThingPropertyObserveFunction<GValue>;
}
