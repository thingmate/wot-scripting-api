import { Abortable, AsyncTask } from '@lirx/async-task';
import { IThingValue } from '../../../../types/thing-value.type';

export interface IThingPropertyWriteFunction<GValue extends IThingValue> {
  (
    value: GValue,
    abortable: Abortable,
  ): AsyncTask<void>;
}
