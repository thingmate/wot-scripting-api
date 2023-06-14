import { IThingPropertyDescription, IThingPropertyInitOptions } from '../../../thing/property/thing-property-init-options.type';
import { ThingProperty } from '../../../thing/property/thing-property.class';
import { IPowerConsumptionHistory } from '../../shared/power-consumption-history/power-consumption-history.type';

export type IPowerConsumptionHistoryThingProperty = ThingProperty<IPowerConsumptionHistory[]>;

export class PowerConsumptionHistoryThingProperty extends ThingProperty<IPowerConsumptionHistory[]> {
  constructor(
    {
      description = POWER_CONSUMPTION_HISTORY_THING_PROPERTY_TD,
      ...options
    }: IThingPropertyInitOptions<IPowerConsumptionHistory[]>,
  ) {
    super({
      description,
      ...options,
    });
  }
}

export interface IHavingPowerConsumptionHistoryThingProperty {
  consumptionHistory: IPowerConsumptionHistoryThingProperty;
}

export const POWER_CONSUMPTION_HISTORY_THING_PROPERTY_TD = {
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
} satisfies IThingPropertyDescription;

export const HAVING_POWER_CONSUMPTION_HISTORY_THING_PROPERTY_TD = {
  consumptionHistory: POWER_CONSUMPTION_HISTORY_THING_PROPERTY_TD,
};
