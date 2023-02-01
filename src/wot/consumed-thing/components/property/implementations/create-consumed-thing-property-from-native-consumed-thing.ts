import { IPromise, makePromiseAbortable } from '@lirx/promise';
import { PropertyElement } from 'wot-thing-description-types';
import { ConsumedThing, DataSchemaValue, InteractionOutput, ThingDescription } from 'wot-typescript-definitions';
import { IConsumedThingObserver } from '../../observer/comsumed-thing-observer.trait-collection';
import {
  createConsumedThingObserverFromNativeConsumedThing,
} from '../../observer/implementations/create-consumed-thing-observer-from-native-consumed-thing';
import { IConsumedThingProperty } from '../comsumed-thing-property.trait-collection';
import { IConsumedThingPropertyObserveOptions } from '../traits/observe/consumed-thing-property-observe.function-definition';
import { IConsumedThingPropertyReadOptions } from '../traits/read/consumed-thing-property-read.function-definition';
import { IConsumedThingPropertyWriteOptions } from '../traits/write/consumed-thing-property-write.function-definition';

// https://www.w3.org/TR/2018/WD-wot-scripting-api-20181129/#dom-thingproperty

export function createConsumedThingPropertyFromNativeConsumedThing<GValue extends DataSchemaValue>(
  thing: ConsumedThing,
  name: string,
): IConsumedThingProperty<GValue> {

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

  const read = (
    options?: IConsumedThingPropertyReadOptions,
  ): IPromise<GValue> => {
    return makePromiseAbortable<InteractionOutput>(thing.readProperty(name, options), options)
      .then((interactionOutput: InteractionOutput): IPromise<GValue> => {
        return makePromiseAbortable<GValue>(interactionOutput.value() as IPromise<GValue>, options);
      });
  };

  // const readAsStream$$ = (
  //   options?: IAbortablePromiseOptions,
  // ): IObservable<IDefaultNotificationsUnion<GValue>> => {
  //   return fromPromiseFactorymakePromiseAbortable<InteractionOutput>(thing.readProperty(name), options)
  //     .then((interactionOutput: InteractionOutput): IPromise<GValue> => {
  //       return makePromiseAbortable<GValue>(interactionOutput.value() as IPromise<GValue>, options);
  //     });
  // };

  const write = (
    value: GValue,
    options?: IConsumedThingPropertyWriteOptions,
  ): IPromise<void> => {
    return makePromiseAbortable<void>(thing.writeProperty(name, value, options), options);
  };

  // TODO handle the case where we call again observe
  const observe = (
    options?: IConsumedThingPropertyObserveOptions,
  ): Promise<IConsumedThingObserver<GValue>> => {
    return createConsumedThingObserverFromNativeConsumedThing(
      thing,
      name,
      'property',
      options,
    );
  };

  return {
    getName,
    getDescription,
    read,
    write,
    observe,
  };
}
