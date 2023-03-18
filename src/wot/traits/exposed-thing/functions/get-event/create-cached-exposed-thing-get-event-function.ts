import { IThingConfig } from '../../../thing/types/thing-config.type';
import { InferThingEventNames } from '../../../thing/types/thing-events-config.type';
import { IGenericExposedThingEvent } from '../../components/event/exposed-thing-event.trait-collection';
import { IExposedThingGetEventFunction } from '../../traits/get-event/exposed-thing-get-event.function-definition';
import { InferExposedThingEventFromName } from '../../types/infer-exposed-thing-event-from-name.type';

export function createCachedExposedThingGetEventFunction<GConfig extends IThingConfig>(
  getEvent: IExposedThingGetEventFunction<GConfig>,
): IExposedThingGetEventFunction<GConfig> {
  const events = new Map<string, IGenericExposedThingEvent>();
  return <GName extends InferThingEventNames<GConfig>>(
    name: GName,
  ): InferExposedThingEventFromName<GConfig, GName> => {
    let event: InferExposedThingEventFromName<GConfig, GName> | undefined = events.get(name) as InferExposedThingEventFromName<GConfig, GName> | undefined;
    if (event === void 0) {
      event = getEvent<GName>(name);
      events.set(name, event as any);
    }
    return event;
  };
}
