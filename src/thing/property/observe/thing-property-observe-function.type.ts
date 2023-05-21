import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IThingValue } from '../../types/thing-value.type';

// export interface IThingPropertyObserveFunctionOptionsShared {
//   observeReadWrite?: boolean;
//   readCurrentValue?: boolean;
// }
//
// export interface IThingPropertyObserveFunctionOptionsWithoutReadLoopFallback extends IThingPropertyObserveFunctionOptionsShared {
//   refreshTime?: number;
//   useReadLoopFallback?: false;
// }
//
// export interface IThingPropertyObserveFunctionOptionsWithReadLoopFallback extends IThingPropertyObserveFunctionOptionsShared {
//   refreshTime: number;
//   useReadLoopFallback: true;
// }
//
// export type IThingPropertyObserveFunctionOptions =
//   | IThingPropertyObserveFunctionOptionsWithoutReadLoopFallback
//   | IThingPropertyObserveFunctionOptionsWithReadLoopFallback
//   ;

export interface IThingPropertyObserveFunctionOptions {
  refreshTime?: number;
  useReadLoopFallback?: boolean;
  observeReadWrite?: boolean;
  readCurrentValue?: boolean;
}

export interface IThingPropertyObserveFunctionOptionsNormalized {
  refreshTime: number;
}

export interface IThingPropertyObserveFunction<GValue extends IThingValue> {
  (
    options: IThingPropertyObserveFunctionOptionsNormalized,
  ): IPushSourceWithBackPressure<GValue>;
}
