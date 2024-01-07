import { hasThingProperty } from '../../functions/has-thing-property';
import { IHavingPowerConsumptionThingProperty } from './having-power-consumption-thing-property.type';

export function hasPowerConsumptionThingProperty(
  input: object,
): input is IHavingPowerConsumptionThingProperty {
  return hasThingProperty(input, 'consumption');
}
