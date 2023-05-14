import { Abortable, AsyncTask, IAsyncTaskConstraint, IAsyncTaskInput } from '@lirx/async-task';
import { IThingValue } from '../types/thing-value.type';
import { IThingActionInvokeFunction } from './invoke/thing-action-invoke-function.type';

export interface IThingActionInitOptions<GIn extends IThingValue, GOut extends IAsyncTaskConstraint<GOut, IThingValue>> {
  invoke: IThingActionInvokeFunction<GIn, GOut>;
}

export class ThingAction<GIn extends IThingValue, GOut extends IAsyncTaskConstraint<GOut, IThingValue>> {
  readonly #invoke: IThingActionInvokeFunction<GIn, GOut>;

  constructor(
    {
      invoke,
    }: IThingActionInitOptions<GIn, GOut>,
  ) {
    this.#invoke = invoke;
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
