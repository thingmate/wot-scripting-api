import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingEventEmitTrait } from './traits/emit/exposed-thing-event-emit.trait';
import { IExposedThingEventGetDescriptionTrait } from './traits/get-description/exposed-thing-event-get-description.trait';
import { IExposedThingEventGetNameTrait } from './traits/get-name/exposed-thing-event-get-name.trait';
import { IExposedThingEventOnSubscribeTrait } from './traits/on-subscribe/exposed-thing-event-on-subscribe.trait';
import { IExposedThingEventOnUnsubscribeTrait } from './traits/on-unsubscribe/exposed-thing-event-on-unsubscribe.trait';

export interface IExposedThingEvent<GName extends string, GValue extends DataSchemaValue> extends // traits
  IExposedThingEventGetNameTrait<GName>,
  IExposedThingEventGetDescriptionTrait,
  IExposedThingEventEmitTrait<GValue>,
  IExposedThingEventOnSubscribeTrait<GValue>,
  IExposedThingEventOnUnsubscribeTrait<GValue>
//
{

}

export type IGenericExposedThingEvent = IExposedThingEvent<string, DataSchemaValue>;
