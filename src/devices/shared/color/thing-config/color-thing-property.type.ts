import { ThingProperty } from '../../../../thing/property/thing-property.class';
import { IColor } from '../color.type';

export type IColorThingProperty = ThingProperty<IColor>;

export interface IHavingColorThingProperty {
  color: IColorThingProperty;
}

export const COLOR_THING_PROPERTY_TD = {
  color: {
    type: 'object',
    properties: {
      h: {
        title: 'hue',
        type: 'number',
      },
      s: {
        title: 'saturation',
        type: 'number',
      },
      l: {
        title: 'brightness',
        type: 'number',
      },
    },
  },
};
