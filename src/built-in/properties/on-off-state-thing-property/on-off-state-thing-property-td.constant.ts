import { IThingPropertyDescription } from '../../../thing/property/thing-property-init-options.type';

export const ON_OFF_STATE_THING_PROPERTY_TD = {
  state: {
    enum: ['on', 'off'],
  },
} satisfies IThingPropertyDescription;

export const HAVING_ON_OFF_STATE_THING_PROPERTY_TD = {
  state: ON_OFF_STATE_THING_PROPERTY_TD,
};
