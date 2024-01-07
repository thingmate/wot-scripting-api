import { IPowerConsumptionHistory } from './type/power-consumption-history.type';
import { IHavingAsyncValue } from '../../types/having-async-value.type';
import { IAsyncValue } from '../../async-value.type';

export const PowerConsumptionHistoryAsyncValueName = 'powerConsumptionHistory';

export type IPowerConsumptionHistoryAsyncValueName = typeof PowerConsumptionHistoryAsyncValueName;
export type IPowerConsumptionHistoryAsyncValueValue = readonly IPowerConsumptionHistory[];

export type IPowerConsumptionHistoryAsyncValue = IAsyncValue<IPowerConsumptionHistoryAsyncValueValue>;
export type IHavingPowerConsumptionHistoryAsyncValue = IHavingAsyncValue<IPowerConsumptionHistoryAsyncValueName, IPowerConsumptionHistoryAsyncValue>;

