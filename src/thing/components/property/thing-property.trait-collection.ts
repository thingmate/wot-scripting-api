import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IThingValue } from '../../types/thing-value.type';
import { IThingPropertyObserveTrait } from './traits/observe/thing-property-observe.trait';
import { IThingPropertyReadTrait } from './traits/read/thing-property-read.trait';
import { IThingPropertyWriteTrait } from './traits/write/thing-property-write.trait';

export interface IThingProperty<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> extends // traits
  IThingPropertyReadTrait<GValue>,
  IThingPropertyWriteTrait<GValue>,
  IThingPropertyObserveTrait<GValue>
//
{

}

export interface IGenericThingProperty extends // traits
  IThingPropertyReadTrait<IThingValue>,
  IThingPropertyWriteTrait<any>,
  IThingPropertyObserveTrait<IThingValue>
//
{

}
