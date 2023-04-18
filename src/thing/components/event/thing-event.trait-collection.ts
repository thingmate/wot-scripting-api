import { IThingValue } from '../../types/thing-value.type';
import { IThingEventObserveTrait } from './traits/observe/thing-event-observe.trait';

export interface IThingEvent<GValue extends IThingValue> extends // traits
  IThingEventObserveTrait<GValue>
//
{

}

export type IGenericThingEvent = IThingEvent<IThingValue>;
