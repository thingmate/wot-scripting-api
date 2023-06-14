import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IPushSourceWithBackPressure } from '@lirx/stream';
import { EventElement } from 'wot-thing-description-types';
import { IThingValue } from '../types/thing-value.type';
import { IThingEventObserveFunction } from './observe/thing-event-observe-function.type';

export type IThingEventDescription = Partial<EventElement>;

export interface IThingEventInitOptions<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> {
  description?: IThingEventDescription;
  observe: IThingEventObserveFunction<GValue>;
}

export class ThingEvent<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> {
  readonly #description: IThingEventDescription;
  readonly #observe: IThingEventObserveFunction<GValue>;

  constructor(
    {
      description = {},
      observe,
    }: IThingEventInitOptions<GValue>,
  ) {
    this.#description = description;
    this.#observe = observe;
  }

  get description(): IThingEventDescription {
    return this.#description;
  }

  observe(): IPushSourceWithBackPressure<GValue> {
    return this.#observe();
  }
}

export type IGenericThingEvent = ThingEvent<any>;
