import { ISmartPlugConsumptionHistory } from './smart-plug-consumption-history.type';
import { ISmartPlugConsumption } from './smart-plug-consumption.type';
import { ISmartPlugState } from './smart-plug-state/smart-plug-state.type';

export interface ISmartPlugConfig {
  properties: {
    state: ISmartPlugState;
    consumption: ISmartPlugConsumption;
    consumptionHistory: ISmartPlugConsumptionHistory[];
  };
  actions: {
    toggle: [ISmartPlugState | undefined, ISmartPlugState],
  };
}

