import { ThingProperty } from '../../../../thing/property/thing-property.class';
import { IPowerConsumptionHistory } from '../power-consumption-history.type';

export type IPowerConsumptionHistoryThingProperty = ThingProperty<IPowerConsumptionHistory[]>;

export interface IHavingPowerConsumptionHistoryThingProperty {
  consumptionHistory: IPowerConsumptionHistoryThingProperty;
}

export const POWER_CONSUMPTION_HISTORY_THING_PROPERTY_TD = {
  consumptionHistory: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        power: {
          type: 'number',
          unit: 'W',
        },
        start: {
          title: 'start date as timestamp in ms',
          type: 'number',
          unit: 'ms',
        },
        end: {
          title: 'end date as timestamp in ms',
          type: 'number',
          unit: 'ms',
        },
      },
    },
    readOnly: true,
  },
};
