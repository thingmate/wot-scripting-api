import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingEvent } from '../../components/event/comsumed-thing-event.trait-collection';

export interface IConsumedThingGetEventFunction {
  <GValue extends DataSchemaValue>(
    name: string,
  ): IConsumedThingEvent<GValue>;
}
