import {
  InferThingPropertyFromName,
  InferThingPropertyNames,
  IThingConfigProperties,
} from './thing-properties-config.type';

export interface IThingGetPropertyFunction<GConfig extends IThingConfigProperties> {
  <GName extends InferThingPropertyNames<GConfig>>(
    name: GName,
  ): InferThingPropertyFromName<GConfig, GName>;
}

