import { ThingProperty } from '../../../../thing/property/thing-property.class';
import { IOnOffState } from '../on-off-state.type';

export type IOnOffStateThingProperty = ThingProperty<IOnOffState>;

export interface IHavingOnOffStateThingProperty {
  state: IOnOffStateThingProperty;
}

export const ON_OFF_STATE_THING_PROPERTY_TD = {
  state: {
    enum: ['on', 'off'],
  },
};
