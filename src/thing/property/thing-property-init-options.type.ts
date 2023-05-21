import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IThingValue } from '../types/thing-value.type';
import { IThingPropertyObserveFunction } from './observe/thing-property-observe-function.type';
import { IThingPropertyReadFunction } from './read/thing-property-read-function.type';
import { IThingPropertyWriteFunction } from './write/thing-property-write-function.type';

export interface IThingPropertyInitOptionsShared<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> {
  read: IThingPropertyReadFunction<GValue>;
  write?: IThingPropertyWriteFunction<GValue>;
}

export interface IThingPropertyInitOptionsWithObserve<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> extends IThingPropertyInitOptionsShared<GValue> {
  observe: IThingPropertyObserveFunction<GValue>;
  minObserveRefreshTime?: number;
}

export interface IThingPropertyInitOptionsWithoutObserve<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> extends IThingPropertyInitOptionsShared<GValue> {
  observe?: undefined;
  minObserveRefreshTime: number;
}

export type IThingPropertyInitOptions<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> =
  | IThingPropertyInitOptionsWithObserve<GValue>
  | IThingPropertyInitOptionsWithoutObserve<GValue>
  ;
