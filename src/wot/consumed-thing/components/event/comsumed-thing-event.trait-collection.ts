import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingEventGetDescriptionTrait } from './traits/get-description/consumed-thing-event-get-description.trait';
import { IConsumedThingEventGetNameTrait } from './traits/get-name/consumed-thing-event-get-name.trait';
import { IConsumedThingEventObserveTrait } from './traits/observe/consumed-thing-event-observe.trait';

export interface IConsumedThingEvent<GValue extends DataSchemaValue> extends // traits
  IConsumedThingEventGetNameTrait,
  IConsumedThingEventGetDescriptionTrait,
  IConsumedThingEventObserveTrait<GValue>
//
{

}
