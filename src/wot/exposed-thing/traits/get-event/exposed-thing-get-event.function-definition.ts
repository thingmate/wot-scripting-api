import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingEvent } from '../../components/event/exposed-thing-event.trait-collection';

export interface IExposedThingGetEventFunction {
  <GValue extends DataSchemaValue>(
    name: string,
  ): IExposedThingEvent<GValue>;
}
