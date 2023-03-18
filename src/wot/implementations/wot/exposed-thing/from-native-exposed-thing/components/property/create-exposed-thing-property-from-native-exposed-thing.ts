import { Abortable, AsyncTask, IAsyncTaskConstraint, IAsyncTaskInput } from '@lirx/async-task';
import { PropertyElement } from 'wot-thing-description-types';
import {
  DataSchemaValue,
  ExposedThing,
  InteractionInput,
  InteractionOptions,
  InteractionOutput,
  ThingDescription,
} from 'wot-typescript-definitions';
import { IExposedThingProperty } from '../../../../../../traits/exposed-thing/components/property/esposed-thing-property.trait-collection';
import {
  IExposedThingPropertyOnObserveFunctionHandler,
} from '../../../../../../traits/exposed-thing/components/property/traits/on-observe/exposed-thing-property-on-observe.function-definition';
import {
  IExposedThingPropertyOnReadFunctionHandler,
} from '../../../../../../traits/exposed-thing/components/property/traits/on-read/exposed-thing-property-on-read.function-definition';
import {
  IExposedThingPropertyOnUnobserveFunctionHandler,
} from '../../../../../../traits/exposed-thing/components/property/traits/on-unobserve/exposed-thing-property-on-unobserve.function-definition';
import {
  IExposedThingPropertyOnWriteFunctionHandler,
} from '../../../../../../traits/exposed-thing/components/property/traits/on-write/exposed-thing-property-on-write.function-definition';

// https://www.w3.org/TR/2018/WD-wot-scripting-api-20181129/#dom-thingproperty

export function createExposedThingPropertyFromNativeExposedThing<GName extends string, GValue extends IAsyncTaskConstraint<GValue, DataSchemaValue>>(
  thing: ExposedThing,
  name: GName,
): IExposedThingProperty<GName, GValue> {

  const td: ThingDescription = thing.getThingDescription();

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

  const onRead = (
    handler: IExposedThingPropertyOnReadFunctionHandler<GValue>,
  ): void => {
    thing.setPropertyReadHandler(
      name,
      (
        options?: InteractionOptions,
      ): Promise<InteractionInput> => {
        return AsyncTask.fromFactory(
          (
            abortable: Abortable,
          ): IAsyncTaskInput<InteractionInput> => {
            return handler({
              ...options,
              abortable,
            });
          },
          Abortable.never,
        )
          .toPromise();
      },
    );
  };

  const onWrite = (
    handler: IExposedThingPropertyOnWriteFunctionHandler<GValue>,
  ): void => {
    // TODO support options for automatic emitChange ?
    thing.setPropertyWriteHandler(
      name,
      (
        value: InteractionOutput,
        options?: InteractionOptions,
      ): Promise<void> => {
        return value.value()
          .then((
            value: DataSchemaValue,
          ): Promise<void> => {
            return AsyncTask.fromFactory(
              (
                abortable: Abortable,
              ): IAsyncTaskInput<void> => {
                return handler(
                  value as GValue,
                  {
                    ...options,
                    abortable,
                  },
                );
              },
              Abortable.never,
            )
              .toPromise();
          });
      });
  };

  const onObserve = (
    handler: IExposedThingPropertyOnObserveFunctionHandler<GValue>,
  ): void => {
    thing.setPropertyObserveHandler(
      name,
      (
        options?: InteractionOptions,
      ): Promise<InteractionInput> => {
        return AsyncTask.fromFactory(
          (
            abortable: Abortable,
          ): IAsyncTaskInput<InteractionInput> => {
            return handler({
              ...options,
              abortable,
            }) as IAsyncTaskInput<InteractionInput>;
          },
          Abortable.never,
        )
          .toPromise();
      });
  };

  const onUnobserve = (
    handler: IExposedThingPropertyOnUnobserveFunctionHandler<GValue>,
  ): void => {
    thing.setPropertyUnobserveHandler(
      name,
      (
        options?: InteractionOptions,
      ): Promise<InteractionInput> => {
        return AsyncTask.fromFactory(
          (
            abortable: Abortable,
          ): IAsyncTaskInput<InteractionInput> => {
            return handler({
              ...options,
              abortable,
            }) as IAsyncTaskInput<InteractionInput>;
          },
          Abortable.never,
        )
          .toPromise();
      });
  };

  const emitChange = (): void => {
    thing.emitPropertyChange(name);
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
}
