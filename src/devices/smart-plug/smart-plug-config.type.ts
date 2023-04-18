import { IThingAction } from '../../thing/components/action/thing-action.trait-collection';
import { IThingProperty } from '../../thing/components/property/thing-property.trait-collection';
import { ISmartPlugConsumptionHistory } from './smart-plug-consumption-history.type';
import { ISmartPlugConsumption } from './smart-plug-consumption.type';
import { ISmartPlugState } from './smart-plug-state/smart-plug-state.type';

export interface ISmartPlugConfig {
  properties: {
    state: IThingProperty<ISmartPlugState>;
    consumption: IThingProperty<ISmartPlugConsumption>;
    consumptionHistory: IThingProperty<ISmartPlugConsumptionHistory[]>;
  };
  actions: {
    toggle: IThingAction<ISmartPlugState | null, ISmartPlugState>,
  };
}

