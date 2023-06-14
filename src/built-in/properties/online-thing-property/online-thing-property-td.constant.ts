import { IThingPropertyDescription } from '../../../thing/property/thing-property-init-options.type';

export const ONLINE_THING_PROPERTY_TD = {
  type: 'boolean',
  readOnly: true,
} satisfies IThingPropertyDescription;

export const HAVING_ONLINE_THING_PROPERTY_TD = {
  online: ONLINE_THING_PROPERTY_TD,
};
