import { IObservable } from '@lirx/core';
import { DataSchemaValue } from 'wot-typescript-definitions';

export type IConsumedThingObserverOnValueFunction<GValue extends DataSchemaValue> = IObservable<GValue>;
