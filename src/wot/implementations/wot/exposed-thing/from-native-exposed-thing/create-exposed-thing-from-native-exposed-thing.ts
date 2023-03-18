import { AsyncTask, optionalAbortableOptionsToAbortable } from '@lirx/async-task';
import { ExposedThing, ThingDescription } from 'wot-typescript-definitions';
import { IExposedThing } from '../../../../traits/exposed-thing/exposed-thing.trait-collection';
import {
  createCachedExposedThingGetActionFunction,
} from '../../../../traits/exposed-thing/functions/get-action/create-cached-exposed-thing-get-action-function';
import {
  createCachedExposedThingGetEventFunction,
} from '../../../../traits/exposed-thing/functions/get-event/create-cached-exposed-thing-get-event-function';
import {
  createCachedExposedThingGetPropertyFunction,
} from '../../../../traits/exposed-thing/functions/get-property/create-cached-exposed-thing-get-property-function';
import {
  IExposedThingExposeFunctionOptions,
} from '../../../../traits/exposed-thing/traits/expose/exposed-thing-expose.function-definition';
import { InferExposedThingActionFromName } from '../../../../traits/exposed-thing/types/infer-exposed-thing-action-from-name.type';
import { InferExposedThingEventFromName } from '../../../../traits/exposed-thing/types/infer-exposed-thing-event-from-name.type';
import { InferExposedThingPropertyFromName } from '../../../../traits/exposed-thing/types/infer-exposed-thing-property-from-name.type';

import {
  InferThingActionNames,
  InferThingActionValueInFromName,
  InferThingActionValueOutFromName,
} from '../../../../traits/thing/types/thing-actions-config.type';
import { IThingConfig } from '../../../../traits/thing/types/thing-config.type';
import { InferThingEventNames, InferThingEventValueFromName } from '../../../../traits/thing/types/thing-events-config.type';
import { InferThingPropertyNames, InferThingPropertyValueFromName } from '../../../../traits/thing/types/thing-properties-config.type';
import {
  createExposedThingActionFromNativeExposedThing,
} from './components/action/create-exposed-thing-action-from-native-consumed-thing';
import { createExposedThingEventFromNativeExposedThing } from './components/event/create-exposed-thing-event-from-native-consumed-thing';
import {
  createExposedThingPropertyFromNativeExposedThing,
} from './components/property/create-exposed-thing-property-from-native-exposed-thing';

export function createExposedThingFromNativeExposedThing<GConfig extends IThingConfig>(
  thing: ExposedThing,
): IExposedThing<GConfig> {
  const getDescription = (): ThingDescription => {
    return thing.getThingDescription();
  };

  const getProperty = <GName extends InferThingPropertyNames<GConfig>>(
    name: GName,
  ): InferExposedThingPropertyFromName<GConfig, GName> => {
    return createExposedThingPropertyFromNativeExposedThing<GName, InferThingPropertyValueFromName<GConfig, GName>>(thing, name);
  };

  const getAction = <GName extends InferThingActionNames<GConfig>>(
    name: GName,
  ): InferExposedThingActionFromName<GConfig, GName> => {
    return createExposedThingActionFromNativeExposedThing<GName, InferThingActionValueInFromName<GConfig, GName>, InferThingActionValueOutFromName<GConfig, GName>>(thing, name);
  };

  const getEvent = <GName extends InferThingEventNames<GConfig>>(
    name: GName,
  ): InferExposedThingEventFromName<GConfig, GName> => {
    return createExposedThingEventFromNativeExposedThing<GName, InferThingEventValueFromName<GConfig, GName>>(thing, name);
  };

  const expose = (
    options?: IExposedThingExposeFunctionOptions,
  ): AsyncTask<void> => {
    return AsyncTask.fromFactory(
      () => thing.expose(),
      optionalAbortableOptionsToAbortable(options),
    );
  };

  return {
    getDescription,
    getProperty: createCachedExposedThingGetPropertyFunction<GConfig>(getProperty),
    getAction: createCachedExposedThingGetActionFunction<GConfig>(getAction),
    getEvent: createCachedExposedThingGetEventFunction<GConfig>(getEvent),
    expose,
  };
}
