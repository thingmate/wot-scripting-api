import { IThingPropertyInitOptions } from '../../../thing/property/thing-property-init-options.type';
import { ThingProperty } from '../../../thing/property/thing-property.class';
import { ONLINE_THING_PROPERTY_TD } from './online-thing-property-td.constant';

export class OnlineThingProperty extends ThingProperty<boolean> {
  constructor(
    {
      description = ONLINE_THING_PROPERTY_TD,
      ...options
    }: IThingPropertyInitOptions<boolean>,
  ) {
    super({
      description,
      ...options,
    });
  }
}
