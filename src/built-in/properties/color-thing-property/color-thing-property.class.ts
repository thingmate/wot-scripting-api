import { IThingPropertyInitOptions } from '../../../thing/property/thing-property-init-options.type';
import { ThingProperty } from '../../../thing/property/thing-property.class';
import { IRGBCW } from '../../shared/color/rgb-cw.type';
import { COLOR_THING_PROPERTY_TD } from './color-thing-property-td.constant';

export class ColorThingProperty extends ThingProperty<IRGBCW> {
  constructor(
    {
      description = COLOR_THING_PROPERTY_TD,
      ...options
    }: IThingPropertyInitOptions<IRGBCW>,
  ) {
    super({
      description,
      ...options,
    });
  }
}
