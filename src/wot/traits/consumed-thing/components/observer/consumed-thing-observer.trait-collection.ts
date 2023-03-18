import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingObserverIsActiveTrait } from './traits/is-active/consumed-thing-observer-is-active.trait';
import { IConsumedThingObserverOnErrorTrait } from './traits/on-error/consumed-thing-observer-on-error.trait';
import { IConsumedThingObserverOnValueTrait } from './traits/on-value/consumed-thing-observer-on-value.trait';
import { IConsumedThingObserverStopTrait } from './traits/stop/consumed-thing-observer-stop.trait';
import { IConsumedThingObserverToAsyncIterableTrait } from './traits/to-async-iterable/consumed-thing-observer-to-async-iterable.trait';
import { IConsumedThingObserverToObservableTrait } from './traits/to-observable/consumed-thing-observer-to-observable.trait';

export interface IConsumedThingObserver<GValue extends DataSchemaValue> extends // traits
  IConsumedThingObserverOnValueTrait<GValue>,
  IConsumedThingObserverOnErrorTrait,
  IConsumedThingObserverIsActiveTrait,
  IConsumedThingObserverStopTrait,
  IConsumedThingObserverToObservableTrait<GValue>,
  IConsumedThingObserverToAsyncIterableTrait<GValue>
//
{

}
