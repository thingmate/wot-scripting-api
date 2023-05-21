import { ThingProperty } from '../../../../thing/property/thing-property.class';
import { IColorMode } from '../color-mode.type';

export type IColorThingProperty = ThingProperty<IColorMode>;

export interface IHavingColorThingProperty {
  color: IColorThingProperty;
}

export const COLOR_THING_PROPERTY_TD = {
  color: {
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
    },
  },
};
