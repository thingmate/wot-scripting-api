import { ThingProperty } from '../../../thing/property/thing-property.class';
import { IPowerConsumption } from '../../shared/power-consumption/power-consumption.type';

// TODO split
export type IPowerConsumptionThingProperty = ThingProperty<IPowerConsumption>;

export class PowerConsumptionThingProperty extends ThingProperty<IPowerConsumption> {

}

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
