import { Abortable, AsyncTask, IAsyncTaskConstraint, IAsyncTaskInput, optionalAbortableOptionsToAbortable } from '@lirx/async-task';
import { createMulticastSource } from '@lirx/core';
import { PropertyElement } from 'wot-thing-description-types';
import { DataSchemaValue, ThingDescription } from 'wot-typescript-definitions';
import { IConsumedThingObserver } from '../../traits/consumed-thing/components/observer/consumed-thing-observer.trait-collection';
import { IConsumedThingProperty } from '../../traits/consumed-thing/components/property/consumed-thing-property.trait-collection';
import {
  IConsumedThingPropertyObserveOptions,
} from '../../traits/consumed-thing/components/property/traits/observe/consumed-thing-property-observe.function-definition';
import {
  IConsumedThingPropertyReadOptions,
} from '../../traits/consumed-thing/components/property/traits/read/consumed-thing-property-read.function-definition';
import {
  IConsumedThingPropertyWriteOptions,
} from '../../traits/consumed-thing/components/property/traits/write/consumed-thing-property-write.function-definition';
import { IExposedThingProperty } from '../../traits/exposed-thing/components/property/esposed-thing-property.trait-collection';
import {
  IExposedThingPropertyOnObserveFunctionHandler,
  IExposedThingPropertyOnObserveFunctionHandlerOptions,
} from '../../traits/exposed-thing/components/property/traits/on-observe/exposed-thing-property-on-observe.function-definition';
import {
  IExposedThingPropertyOnReadFunctionHandler,
  IExposedThingPropertyOnReadFunctionHandlerOptions,
} from '../../traits/exposed-thing/components/property/traits/on-read/exposed-thing-property-on-read.function-definition';
import {
  IExposedThingPropertyOnUnobserveFunctionHandler,
  IExposedThingPropertyOnUnobserveFunctionHandlerOptions,
} from '../../traits/exposed-thing/components/property/traits/on-unobserve/exposed-thing-property-on-unobserve.function-definition';
import {
  IExposedThingPropertyOnWriteFunctionHandler,
  IExposedThingPropertyOnWriteFunctionHandlerOptions,
} from '../../traits/exposed-thing/components/property/traits/on-write/exposed-thing-property-on-write.function-definition';
import { createConsumedThingObserver } from '../shared/consumed-thing/components/observer/create-consumed-thing-observer';

export type ILinkedExposedAndConsumedThingsProperties<GName extends string, GValue extends IAsyncTaskConstraint<GValue, DataSchemaValue>> = [
  IExposedThingProperty<GName, GValue>,
  IConsumedThingProperty<GName, GValue>,
];

export type IGenericLinkedExposedAndConsumedThingsProperties = ILinkedExposedAndConsumedThingsProperties<string, DataSchemaValue>;

export function createLinkedExposedAndConsumedThingsProperties<GName extends string, GValue extends IAsyncTaskConstraint<GValue, DataSchemaValue>>(
  td: ThingDescription,
  name: GName,
): ILinkedExposedAndConsumedThingsProperties<GName, GValue> {

  let propertyElement: PropertyElement;

  if (td.properties === void 0) {
    throw new Error(`Missing td.properties`);
  }

  if (td.properties[name] === void 0) {
    throw new Error(`Missing td.properties[${name}]`);
  } else {
    propertyElement = td.properties[name];
  }

  const getName = (): GName => {
    return name;
  };

  const getDescription = (): PropertyElement => {
    return propertyElement;
  };

  let _onReadHandler: IExposedThingPropertyOnReadFunctionHandler<GValue> = (
    options: IExposedThingPropertyOnReadFunctionHandlerOptions<GValue>,
  ): IAsyncTaskInput<GValue> => {
    return AsyncTask.error(
      new Error(`No handler for read`),
      optionalAbortableOptionsToAbortable(options),
    );
  };

  let _onWriteHandler: IExposedThingPropertyOnWriteFunctionHandler<GValue> = (
    value: GValue,
    options: IExposedThingPropertyOnWriteFunctionHandlerOptions<GValue>,
  ): IAsyncTaskInput<void> => {
    return AsyncTask.error(
      new Error(`No handler for write`),
      optionalAbortableOptionsToAbortable(options),
    );
  };

  let _onObserveHandler: IExposedThingPropertyOnObserveFunctionHandler<GValue> = (
    options: IExposedThingPropertyOnObserveFunctionHandlerOptions<GValue>,
  ): IAsyncTaskInput<void> => {
    return AsyncTask.success(
      void 0,
      optionalAbortableOptionsToAbortable(options),
    );
  };

  let _onUnobserveHandler: IExposedThingPropertyOnUnobserveFunctionHandler<GValue> = (
    options: IExposedThingPropertyOnUnobserveFunctionHandlerOptions<GValue>,
  ): IAsyncTaskInput<void> => {
    return AsyncTask.success(
      void 0,
      optionalAbortableOptionsToAbortable(options),
    );
  };

  const {
    emit: $value,
    subscribe: value$,
  } = createMulticastSource<GValue>();

  const {
    emit: $error,
    subscribe: error$,
  } = createMulticastSource<any>();

  const createExposedThingProperty = (): IExposedThingProperty<GName, GValue> => {
    const onRead = (
      handler: IExposedThingPropertyOnReadFunctionHandler<GValue>,
    ): void => {
      _onReadHandler = handler;
    };

    const onWrite = (
      handler: IExposedThingPropertyOnWriteFunctionHandler<GValue>,
    ): void => {
      _onWriteHandler = handler;
    };

    const onObserve = (
      handler: IExposedThingPropertyOnObserveFunctionHandler<GValue>,
    ): void => {
      _onObserveHandler = handler;
    };

    const onUnobserve = (
      handler: IExposedThingPropertyOnUnobserveFunctionHandler<GValue>,
    ): void => {
      _onUnobserveHandler = handler;
    };

    const emitChange = (
      value?: GValue,
    ): void => {
      if (value === void 0) {
        AsyncTask.fromFactory(
          (abortable: Abortable): IAsyncTaskInput<GValue> => {
            return _onReadHandler({
              abortable,
            });
          },
          Abortable.never,
        )
          .then(
            $value,
            $error,
          );
      } else {
        $value(value);
      }
    };

    return {
      getName,
      getDescription,
      onRead,
      onWrite,
      onObserve,
      onUnobserve,
      emitChange,
    };
  };

  const createConsumedThingProperty = (): IConsumedThingProperty<GName, GValue> => {
    const read = (
      {
        abortable = Abortable.never,
        ...options
      }: IConsumedThingPropertyReadOptions = {},
    ): AsyncTask<GValue> => {
      return AsyncTask.fromFactory<GValue>(
        (abortable: Abortable): IAsyncTaskInput<GValue> => {
          return _onReadHandler({
            ...options,
            abortable,
          });
        },
        abortable,
      );
    };

    const write = (
      value: GValue,
      {
        abortable = Abortable.never,
        ...options
      }: IConsumedThingPropertyWriteOptions = {},
    ): AsyncTask<void> => {
      return AsyncTask.fromFactory<void>(
        (abortable: Abortable): IAsyncTaskInput<void> => {
          return _onWriteHandler(value, {
            ...options,
            abortable,
          });
        },
        abortable,
      );
    };

    const observe = (
      options?: IConsumedThingPropertyObserveOptions,
    ): AsyncTask<IConsumedThingObserver<GValue>> => {
      return AsyncTask.fromFactory<IConsumedThingObserver<GValue>>(
        (): IConsumedThingObserver<GValue> => {
          return createConsumedThingObserver({
            value$,
            error$,
          });
        },
        optionalAbortableOptionsToAbortable(options),
      );
    };

    return {
      getName,
      getDescription,
      read,
      write,
      observe,
    };
  };

  return [
    createExposedThingProperty(),
    createConsumedThingProperty(),
  ];
}
