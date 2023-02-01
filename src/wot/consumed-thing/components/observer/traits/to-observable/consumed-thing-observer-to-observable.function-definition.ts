import { IDefaultNotificationsUnion, IObservable } from '@lirx/core';
import { DataSchemaValue } from 'wot-typescript-definitions';

export type IConsumedThingObserverNotifications<GValue extends DataSchemaValue> = IDefaultNotificationsUnion<GValue>;

export interface IConsumedThingObserverToObservableFunction<GValue extends DataSchemaValue> {
  (): IObservable<IConsumedThingObserverNotifications<GValue>>;
}
