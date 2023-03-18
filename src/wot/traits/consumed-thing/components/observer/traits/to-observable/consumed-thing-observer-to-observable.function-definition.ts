import { IDefaultNotificationsUnion, IObservable } from '@lirx/core';
import { DataSchemaValue } from 'wot-typescript-definitions';

export interface IConsumedThingObserverToObservableFunctionOptions {
  stopOnUnsubscribe?: boolean;
}

export type IConsumedThingObserverNotifications<GValue extends DataSchemaValue> = IDefaultNotificationsUnion<GValue>;

export interface IConsumedThingObserverToObservableFunction<GValue extends DataSchemaValue> {
  (
    options?: IConsumedThingObserverToObservableFunctionOptions,
  ): IObservable<IConsumedThingObserverNotifications<GValue>>;
}
