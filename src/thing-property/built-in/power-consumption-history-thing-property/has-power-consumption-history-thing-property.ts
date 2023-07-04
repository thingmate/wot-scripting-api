import { hasThingProperty } from '../../functions/has-thing-property';
import { IHavingPowerConsumptionHistoryThingProperty } from './having-power-consumption-history-thing-property.type';

export function hasPowerConsumptionHistoryThingProperty(
  input: object,
): input is IHavingPowerConsumptionHistoryThingProperty {
  return hasThingProperty(input, 'consumptionHistory');
}
