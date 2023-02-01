import { IPromiseLikeOrValue } from '@lirx/promise';
import { PropertyElement } from 'wot-thing-description-types';
import {
  DataSchemaValue,
  ExposedThing,
  InteractionInput,
  InteractionOptions,
  InteractionOutput,
  ThingDescription,
} from 'wot-typescript-definitions';
import { IExposedThingProperty } from '../esposed-thing-property.trait-collection';
import { IExposedThingPropertyOnObserveFunctionHandler } from '../traits/on-observe/exposed-thing-property-on-observe.function-definition';
import { IExposedThingPropertyOnReadFunctionHandler } from '../traits/on-read/exposed-thing-property-on-read.function-definition';
import {
  IExposedThingPropertyOnUnobserveFunctionHandler,
} from '../traits/on-unobserve/exposed-thing-property-on-unobserve.function-definition';
import { IExposedThingPropertyOnWriteFunctionHandler } from '../traits/on-write/exposed-thing-property-on-write.function-definition';

// https://www.w3.org/TR/2018/WD-wot-scripting-api-20181129/#dom-thingproperty

export function createExposedThingPropertyFromNativeExposedThing<GValue extends DataSchemaValue>(
  thing: ExposedThing,
  name: string,
): IExposedThingProperty<GValue> {

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

  const getName = (): string => {
    return name;
  };

  const getDescription = (): PropertyElement => {
    return propertyElement;
  };

  const onRead = (
    handler: IExposedThingPropertyOnReadFunctionHandler<GValue>,
  ): void => {
    thing.setPropertyReadHandler(name, (options?: InteractionOptions): Promise<InteractionInput> => {
      return new Promise<InteractionInput>((
        resolve: (value: IPromiseLikeOrValue<InteractionInput>) => void,
      ): void => {
        resolve(handler(options));
      });
    });
  };

  const onWrite = (
    handler: IExposedThingPropertyOnWriteFunctionHandler<GValue>,
  ): void => {
    // TODO support options for automatic emitChange ?
    thing.setPropertyWriteHandler(name, (value: InteractionOutput, options?: InteractionOptions): Promise<void> => {
      return value.value()
        .then((value: DataSchemaValue): IPromiseLikeOrValue<void> => {
          return handler(value as GValue, options);
        });
    });
  };

  const onObserve = (
    handler: IExposedThingPropertyOnObserveFunctionHandler<GValue>,
  ): void => {
    thing.setPropertyObserveHandler(name, (options?: InteractionOptions): Promise<InteractionInput> => {
      return new Promise<InteractionInput>((
        resolve: (value: IPromiseLikeOrValue<InteractionInput>) => void,
      ): void => {
        resolve(handler(options) as InteractionInput);
      });
    });
  };

  const onUnobserve = (
    handler: IExposedThingPropertyOnUnobserveFunctionHandler<GValue>,
  ): void => {
    thing.setPropertyUnobserveHandler(name, (options?: InteractionOptions): Promise<InteractionInput> => {
      return new Promise<InteractionInput>((
        resolve: (value: IPromiseLikeOrValue<InteractionInput>) => void,
      ): void => {
        resolve(handler(options) as InteractionInput);
      });
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
