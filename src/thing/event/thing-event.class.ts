import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IThingValue } from '../types/thing-value.type';
import { IThingEventObserveFunction } from './observe/thing-event-observe-function.type';

export interface IThingEventInitOptions<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> {
  observe: IThingEventObserveFunction<GValue>;
}

export class ThingEvent<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> {
  readonly #observe: IThingEventObserveFunction<GValue>;

  constructor(
    {
      observe,
    }: IThingEventInitOptions<GValue>,
  ) {
    this.#observe = observe;
  }

  observe(): IPushSourceWithBackPressure<GValue> {
    return this.#observe();
  }
}

export type IGenericThingEvent = ThingEvent<any>;
