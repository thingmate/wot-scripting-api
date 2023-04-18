import { IThingValue } from '../../../../../types/thing-value.type';
import { IThingPropertyObserveUsingReadLoopFunction } from './thing-property-observe.using-read-loop.function-definition';

export interface IThingPropertyObserveUsingReadLoopTrait<GValue extends IThingValue> {
  observe: IThingPropertyObserveUsingReadLoopFunction<GValue>;
}
