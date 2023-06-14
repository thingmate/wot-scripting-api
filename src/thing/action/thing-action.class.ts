import { Abortable, AsyncTask, IAsyncTaskConstraint, IAsyncTaskInput } from '@lirx/async-task';
import { ActionElement } from 'wot-thing-description-types';
import { IThingEventDescription } from '../event/thing-event.class';
import { IThingValue } from '../types/thing-value.type';
import { IThingActionInvokeFunction } from './invoke/thing-action-invoke-function.type';

export type IThingActionDescription = Partial<ActionElement>;

export interface IThingActionInitOptions<GIn extends IThingValue, GOut extends IAsyncTaskConstraint<GOut, IThingValue>> {
  description?: IThingActionDescription;
  invoke: IThingActionInvokeFunction<GIn, GOut>;
}

export class ThingAction<GIn extends IThingValue, GOut extends IAsyncTaskConstraint<GOut, IThingValue>> {
  readonly #description: IThingEventDescription;
  readonly #invoke: IThingActionInvokeFunction<GIn, GOut>;

  constructor(
    {
      description = {},
      invoke,
    }: IThingActionInitOptions<GIn, GOut>,
  ) {
    this.#description = description;
    this.#invoke = invoke;
  }

  get description(): IThingActionDescription {
    return this.#description;
  }

  invoke(
    value: GIn,
    abortable: Abortable,
  ): AsyncTask<GOut> {
    return AsyncTask.fromFactory((abortable: Abortable): IAsyncTaskInput<GOut> => {
      return this.#invoke(value, abortable);
    }, abortable);
  }
}

export type IGenericThingAction = ThingAction<any, any>;
