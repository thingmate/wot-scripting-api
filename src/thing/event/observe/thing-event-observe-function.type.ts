import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IThingValue } from '../../types/thing-value.type';

export interface IThingEventObserveFunction<GValue extends IThingValue> {
  (): IPushSourceWithBackPressure<GValue>;
}
