import { IThingConfig } from '../../../thing/types/thing-config.type';
import { InferThingEventNames } from '../../../thing/types/thing-events-config.type';
import { IGenericConsumedThingEvent } from '../../components/event/consumed-thing-event.trait-collection';
import { IConsumedThingGetEventFunction } from '../../traits/get-event/consumed-thing-get-event.function-definition';
import { InferConsumedThingEventFromName } from '../../types/infer-consumed-thing-event-from-name.type';

export function createCachedConsumedThingGetEventFunction<GConfig extends IThingConfig>(
  getEvent: IConsumedThingGetEventFunction<GConfig>,
): IConsumedThingGetEventFunction<GConfig> {
  const events = new Map<string, IGenericConsumedThingEvent>();
  return <GName extends InferThingEventNames<GConfig>>(
    name: GName,
  ): InferConsumedThingEventFromName<GConfig, GName> => {
    let event: InferConsumedThingEventFromName<GConfig, GName> | undefined = events.get(name) as InferConsumedThingEventFromName<GConfig, GName> | undefined;
    if (event === void 0) {
      event = getEvent<GName>(name);
      events.set(name, event);
    }
    return event;
  };
}
