export interface IPowerConsumptionHistory {
  readonly power: number;
  readonly start: number; // start date as timestamp in ms
  readonly end: number; // end date as timestamp in ms
}
