import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingPropertyGetDescriptionTrait } from './traits/get-description/consumed-thing-property-get-description.trait';
import { IConsumedThingPropertyGetNameTrait } from './traits/get-name/consumed-thing-property-get-name.trait';
import { IConsumedThingPropertyObserveTrait } from './traits/observe/consumed-thing-property-observe.trait';
import { IConsumedThingPropertyReadTrait } from './traits/read/consumed-thing-property-read.trait';
import { IConsumedThingPropertyWriteTrait } from './traits/write/consumed-thing-property-write.trait';

export interface IConsumedThingProperty<GValue extends DataSchemaValue> extends // traits
  IConsumedThingPropertyGetNameTrait,
  IConsumedThingPropertyGetDescriptionTrait,
  IConsumedThingPropertyReadTrait<GValue>,
  IConsumedThingPropertyWriteTrait<GValue>,
  IConsumedThingPropertyObserveTrait<GValue>
//
{

}
