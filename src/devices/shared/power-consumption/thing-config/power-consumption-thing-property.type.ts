import { ThingProperty } from '../../../../thing/property/thing-property.class';
import { IPowerConsumption } from '../power-consumption.type';

export type IPowerConsumptionThingProperty = ThingProperty<IPowerConsumption>;

export interface IHavingPowerConsumptionThingProperty {
  consumption: IPowerConsumptionThingProperty;
}

export const POWER_CONSUMPTION_THING_PROPERTY_TD = {
  consumption: {
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
  },
};
