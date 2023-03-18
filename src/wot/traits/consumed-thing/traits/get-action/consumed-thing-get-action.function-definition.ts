import { InferThingActionNames, IThingConfigActions } from '../../../thing/types/thing-actions-config.type';
import { InferConsumedThingActionFromName } from '../../types/infer-consumed-thing-action-from-name.type';

export interface IConsumedThingGetActionFunction<GConfig extends IThingConfigActions> {
  <GName extends InferThingActionNames<GConfig>>(
    name: GName,
  ): InferConsumedThingActionFromName<GConfig, GName>;
}
