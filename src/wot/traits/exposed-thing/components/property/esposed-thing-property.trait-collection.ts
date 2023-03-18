import { IAsyncTaskConstraint } from '@lirx/async-task';
import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingPropertyEmitChangeTrait } from './traits/emit-change/exposed-thing-property-emit-change.trait';
import { IExposedThingPropertyGetDescriptionTrait } from './traits/get-description/exposed-thing-property-get-description.trait';
import { IExposedThingPropertyGetNameTrait } from './traits/get-name/exposed-thing-property-get-name.trait';
import { IExposedThingPropertyOnObserveTrait } from './traits/on-observe/exposed-thing-property-on-observe.trait';
import { IExposedThingPropertyOnReadTrait } from './traits/on-read/exposed-thing-property-on-read.trait';
import { IExposedThingPropertyOnUnobserveTrait } from './traits/on-unobserve/exposed-thing-property-on-unobserve.trait';
import { IExposedThingPropertyOnWriteTrait } from './traits/on-write/exposed-thing-property-on-write.trait';

export interface IExposedThingProperty<GName extends string, GValue extends IAsyncTaskConstraint<GValue, DataSchemaValue>> extends // traits
  IExposedThingPropertyGetNameTrait<GName>,
  IExposedThingPropertyGetDescriptionTrait,
  IExposedThingPropertyOnReadTrait<GValue>,
  IExposedThingPropertyOnWriteTrait<GValue>,
  IExposedThingPropertyOnObserveTrait<GValue>,
  IExposedThingPropertyOnUnobserveTrait<GValue>,
  IExposedThingPropertyEmitChangeTrait<GValue>
//
{

}

export type IGenericExposedThingProperty = IExposedThingProperty<string, DataSchemaValue>;
