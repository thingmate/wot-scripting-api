import { AsyncTask, optionalAbortableOptionsToAbortable } from '@lirx/async-task';
import {
  createErrorNotification,
  createMulticastSource,
  createNextNotification,
  IObservable,
  IObserver,
  IUnsubscribeOfObservable,
  mapObservable,
  merge,
  shareObservable,
  STATIC_COMPLETE_NOTIFICATION,
  takeUntilObservable,
  toAsyncIterable,
} from '@lirx/core';
import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingObserver } from '../../../../../traits/consumed-thing/components/observer/consumed-thing-observer.trait-collection';
import {
  IConsumedThingObserverStopOptions,
} from '../../../../../traits/consumed-thing/components/observer/traits/stop/consumed-thing-observer-stop.function-definition';
import {
  IConsumedThingObserverNotifications,
  IConsumedThingObserverToObservableFunctionOptions,
} from '../../../../../traits/consumed-thing/components/observer/traits/to-observable/consumed-thing-observer-to-observable.function-definition';

export interface ICreateConsumedThingObserverOptions<GValue extends DataSchemaValue> {
  value$: IObservable<GValue>;
  error$: IObservable<any>;
}

export function createConsumedThingObserver<GValue extends DataSchemaValue>(
  {
    value$,
    error$,
  }: ICreateConsumedThingObserverOptions<GValue>,
): IConsumedThingObserver<GValue> {
  let _isActive: boolean = true;

  const {
    emit: $stop,
    subscribe: stop$,
  } = createMulticastSource<void>();

  const _value$ = takeUntilObservable(value$, stop$);
  const _error$ = takeUntilObservable(error$, stop$);

  const _nextNotification$ = mapObservable(_value$, createNextNotification);
  const _errorNotification$ = mapObservable(_error$, createErrorNotification);
  const _completeNotification$ = mapObservable(stop$, () => STATIC_COMPLETE_NOTIFICATION);

  const observable$ = shareObservable(
    merge([
      _nextNotification$,
      _errorNotification$,
      _completeNotification$,
    ]),
  );

  const isActive = (): boolean => {
    return _isActive;
  };

  const _stop = (): void => {
    if (_isActive) {
      _isActive = false;
      $stop();
    }
  };

  const stop = (
    options?: IConsumedThingObserverStopOptions,
  ): AsyncTask<void> => {
    return AsyncTask.fromFactory<void>(
      _stop,
      optionalAbortableOptionsToAbortable(options),
    );
  };

  const toObservable = (
    {
      stopOnUnsubscribe = false,
    }: IConsumedThingObserverToObservableFunctionOptions = {},
  ): IObservable<IConsumedThingObserverNotifications<GValue>> => {
    if (stopOnUnsubscribe) {
      return (emit: IObserver<IConsumedThingObserverNotifications<GValue>>): IUnsubscribeOfObservable => {
        let running: boolean = true;

        const unsubscribe = observable$(emit);

        return (): void => {
          if (running) {
            running = false;
            unsubscribe();
            _stop();
          }
        };
      };
    } else {
      return observable$;
    }
  };

  const _toAsyncIterable = (): AsyncIterableIterator<GValue> => {
    return toAsyncIterable<GValue>(observable$);
  };

  return {
    onValue: value$,
    onError: error$,
    isActive,
    stop,
    toObservable,
    [Symbol.asyncIterator]: _toAsyncIterable,
  };
}
