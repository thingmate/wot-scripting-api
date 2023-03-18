import { AsyncTask, IOptionalAbortableOptions } from '@lirx/async-task';
import { InteractionOptions } from 'wot-typescript-definitions';

export interface IConsumedThingObserverStopOptions extends InteractionOptions, IOptionalAbortableOptions {
}

export interface IConsumedThingObserverStopFunction {
  (
    options?: IConsumedThingObserverStopOptions,
  ): AsyncTask<void>;
}
