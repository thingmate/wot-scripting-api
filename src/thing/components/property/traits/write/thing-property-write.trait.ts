import { IThingValue } from '../../../../types/thing-value.type';
import { IThingPropertyWriteFunction } from './thing-property-write.function-definition';

export interface IThingPropertyWriteTrait<GValue extends IThingValue> {
  write: IThingPropertyWriteFunction<GValue>;
}
