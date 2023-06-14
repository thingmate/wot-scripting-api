import { IThingPropertyDescription } from '../../../thing/property/thing-property-init-options.type';

export const COLOR_THING_PROPERTY_TD = {
  type: 'object',
  properties: {
    r: {
      title: 'red',
      type: 'number',
    },
    g: {
      title: 'green',
      type: 'number',
    },
    b: {
      title: 'blue',
      type: 'number',
    },
    c: {
      title: 'blue',
      type: 'number',
    },
    w: {
      title: 'blue',
      type: 'number',
    },
  },
} satisfies IThingPropertyDescription;

export const HAVING_COLOR_THING_PROPERTY_TD = {
  color: COLOR_THING_PROPERTY_TD,
};
