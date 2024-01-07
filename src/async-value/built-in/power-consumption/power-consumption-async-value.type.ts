import { IPowerConsumption } from './type/power-consumption.type';
import { IHavingAsyncValue } from '../../types/having-async-value.type';
import { IAsyncValue } from '../../async-value.type';

export const PowerConsumptionAsyncValueName = 'powerConsumption';

export type IPowerConsumptionAsyncValueName = typeof PowerConsumptionAsyncValueName;
export type IPowerConsumptionAsyncValueValue = IPowerConsumption;

export type IPowerConsumptionAsyncValue = IAsyncValue<IPowerConsumptionAsyncValueValue>;
export type IHavingPowerConsumptionAsyncValue = IHavingAsyncValue<IPowerConsumptionAsyncValueName, IPowerConsumptionAsyncValue>;
