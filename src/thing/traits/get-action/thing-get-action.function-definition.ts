import { InferThingActionFromName, InferThingActionNames, IThingConfigActions } from './thing-actions-config.type';

export interface IThingGetActionFunction<GConfig extends IThingConfigActions> {
  <GName extends InferThingActionNames<GConfig>>(
    name: GName,
  ): InferThingActionFromName<GConfig, GName>;
}
