import { Abortable, AsyncTask } from '@lirx/async-task';
import { IThingValue } from '../../types/thing-value.type';
import { IThingPropertyWriteFunction } from './thing-property-write-function.type';

export interface ICreateReadonlyThingPropertyWriteFunctionOptions {
  name?: string;
}


export function createReadonlyThingPropertyWriteFunction<GValue extends IThingValue>(
  {
    name,
  }: ICreateReadonlyThingPropertyWriteFunctionOptions = {},
): IThingPropertyWriteFunction<GValue> {
  return (
    value: GValue,
    abortable: Abortable,
  ): AsyncTask<void> => {
    return AsyncTask.error(new Error(`The property${name ? ` '${name}'` : ''} is readonly.`), abortable);
  };
}