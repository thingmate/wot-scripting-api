import { InferThingActionNames, IThingConfigActions } from '../../../thing/types/thing-actions-config.type';
import { InferExposedThingActionFromName } from '../../types/infer-exposed-thing-action-from-name.type';

export interface IExposedThingGetActionFunction<GConfig extends IThingConfigActions> {
  <GName extends InferThingActionNames<GConfig>>(
    name: GName,
  ): InferExposedThingActionFromName<GConfig, GName>;
}
