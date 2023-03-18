import { AsyncTask, IAsyncTaskConstraint, optionalAbortableOptionsToAbortable } from '@lirx/async-task';
import { PropertyElement } from 'wot-thing-description-types';
import { ConsumedThing, DataSchemaValue, InteractionOutput, ThingDescription } from 'wot-typescript-definitions';
import {
  IConsumedThingObserver,
} from '../../../../../../traits/consumed-thing/components/observer/consumed-thing-observer.trait-collection';
import {
  IConsumedThingProperty,
} from '../../../../../../traits/consumed-thing/components/property/consumed-thing-property.trait-collection';
import {
  IConsumedThingPropertyObserveOptions,
} from '../../../../../../traits/consumed-thing/components/property/traits/observe/consumed-thing-property-observe.function-definition';
import {
  IConsumedThingPropertyReadOptions,
} from '../../../../../../traits/consumed-thing/components/property/traits/read/consumed-thing-property-read.function-definition';
import {
  IConsumedThingPropertyWriteOptions,
} from '../../../../../../traits/consumed-thing/components/property/traits/write/consumed-thing-property-write.function-definition';
import { createConsumedThingObserverFromNativeConsumedThing } from '../observer/create-consumed-thing-observer-from-native-consumed-thing';

// https://www.w3.org/TR/2018/WD-wot-scripting-api-20181129/#dom-thingproperty

export function createConsumedThingPropertyFromNativeConsumedThing<GName extends string, GValue extends IAsyncTaskConstraint<GValue, DataSchemaValue>>(
  thing: ConsumedThing,
  name: GName,
): IConsumedThingProperty<GName, GValue> {

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

  const read = (
    options?: IConsumedThingPropertyReadOptions,
  ): AsyncTask<GValue> => {
    return AsyncTask.fromFactory<InteractionOutput>(
      () => thing.readProperty(name, options),
      optionalAbortableOptionsToAbortable(options),
    )
      .successful((
        interactionOutput: InteractionOutput,
      ): Promise<GValue> => {
        return interactionOutput.value() as Promise<GValue>;
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
  ): AsyncTask<void> => {
    return AsyncTask.fromFactory<void>(
      () => thing.writeProperty(name, value, options),
      optionalAbortableOptionsToAbortable(options),
    );
  };

  // TODO handle the case where we call again observe
  const observe = (
    options?: IConsumedThingPropertyObserveOptions,
  ): AsyncTask<IConsumedThingObserver<GValue>> => {
    return createConsumedThingObserverFromNativeConsumedThing<GValue>(
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
