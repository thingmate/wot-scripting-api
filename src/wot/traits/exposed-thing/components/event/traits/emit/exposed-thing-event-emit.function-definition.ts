import { DataSchemaValue } from 'wot-typescript-definitions';

export interface IExposedThingEventEmitFunction<GValue extends DataSchemaValue> {
  (
    value: GValue,
  ): void;
}
