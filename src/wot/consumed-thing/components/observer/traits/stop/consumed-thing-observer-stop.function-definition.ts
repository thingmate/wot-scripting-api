import { IAbortablePromiseOptions, IPromise } from '@lirx/promise';
import { InteractionOptions } from 'wot-typescript-definitions';

export interface IConsumedThingObserverStopOptions extends IAbortablePromiseOptions, InteractionOptions {

}

export interface IConsumedThingObserverStopFunction {
  (
    options?: IConsumedThingObserverStopOptions,
  ): IPromise<void>;
}
