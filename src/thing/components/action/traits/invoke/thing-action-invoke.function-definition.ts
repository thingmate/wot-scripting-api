import { Abortable, AsyncTask, IAsyncTaskConstraint } from '@lirx/async-task';
import { IThingValue } from '../../../../types/thing-value.type';

export interface IThingActionInvokeFunction<GIn extends IThingValue, GOut extends IAsyncTaskConstraint<GOut, IThingValue>> {
  (
    value: GIn,
    abortable: Abortable,
  ): AsyncTask<GOut>;
}
