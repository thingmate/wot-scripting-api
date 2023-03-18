import { AsyncTask, IAsyncTaskConstraint, IOptionalAbortableOptions } from '@lirx/async-task';
import { InteractionOptions } from 'wot-typescript-definitions';
import { IThingActionInType, IThingActionOutType } from '../../../../../thing/types/thing-actions-config.type';

export interface IConsumedThingActionInvokeOptions extends InteractionOptions, IOptionalAbortableOptions {
}

export interface IConsumedThingActionInvokeFunction<GIn extends IThingActionInType, GOut extends IAsyncTaskConstraint<GOut, IThingActionOutType>> {
  (
    value: GIn,
    options?: IConsumedThingActionInvokeOptions,
  ): AsyncTask<GOut>;
}
