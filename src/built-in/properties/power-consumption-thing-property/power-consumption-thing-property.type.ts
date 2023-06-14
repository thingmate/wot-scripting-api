import { IThingPropertyDescription, IThingPropertyInitOptions } from '../../../thing/property/thing-property-init-options.type';
import { ThingProperty } from '../../../thing/property/thing-property.class';
import { IPowerConsumption } from '../../shared/power-consumption/power-consumption.type';

// TODO split
export type IPowerConsumptionThingProperty = ThingProperty<IPowerConsumption>;

export class PowerConsumptionThingProperty extends ThingProperty<IPowerConsumption> {
  constructor(
    {
      description = POWER_CONSUMPTION_THING_PROPERTY_TD,
      ...options
    }: IThingPropertyInitOptions<IPowerConsumption>,
  ) {
    super({
      description,
      ...options,
    });
  }
}

export interface IHavingPowerConsumptionThingProperty {
  consumption: IPowerConsumptionThingProperty;
}

export const POWER_CONSUMPTION_THING_PROPERTY_TD = {
  type: 'object',
  properties: {
    current: {
      type: 'number',
      unit: 'A',
    },
    voltage: {
      type: 'number',
      unit: 'V',
    },
    power: {
      type: 'number',
      unit: 'W',
    },
  },
  readOnly: true,
} satisfies IThingPropertyDescription;

export const HAVING_POWER_CONSUMPTION_THING_PROPERTY_TD = {
  consumption: POWER_CONSUMPTION_THING_PROPERTY_TD,
};
