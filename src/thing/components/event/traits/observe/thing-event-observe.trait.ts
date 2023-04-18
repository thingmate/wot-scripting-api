import { IThingValue } from '../../../../types/thing-value.type';
import { IThingEventObserveFunction } from './thing-event-observe.function-definition';

export interface IThingEventObserveTrait<GValue extends IThingValue> {
  observe: IThingEventObserveFunction<GValue>;
}
