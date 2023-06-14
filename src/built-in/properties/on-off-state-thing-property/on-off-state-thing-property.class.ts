import { IThingPropertyInitOptions } from '../../../thing/property/thing-property-init-options.type';
import { ThingProperty } from '../../../thing/property/thing-property.class';
import { IOnOffState } from '../../shared/on-off-state/on-off-state.type';
import { ON_OFF_STATE_THING_PROPERTY_TD } from './on-off-state-thing-property-td.constant';

export class OnOffStateThingProperty extends ThingProperty<IOnOffState> {
  constructor(
    {
      description = ON_OFF_STATE_THING_PROPERTY_TD,
      ...options
    }: IThingPropertyInitOptions<IOnOffState>,
  ) {
    super({
      description,
      ...options,
    });
  }
}
