import { InferThingActionNames } from '../../../thing/types/thing-actions-config.type';
import { IThingConfig } from '../../../thing/types/thing-config.type';
import { IGenericConsumedThingAction } from '../../components/action/consumed-thing-action.trait-collection';
import { IConsumedThingGetActionFunction } from '../../traits/get-action/consumed-thing-get-action.function-definition';
import { InferConsumedThingActionFromName } from '../../types/infer-consumed-thing-action-from-name.type';

export function createCachedConsumedThingGetActionFunction<GConfig extends IThingConfig>(
  getAction: IConsumedThingGetActionFunction<GConfig>,
): IConsumedThingGetActionFunction<GConfig> {
  const actions = new Map<string, IGenericConsumedThingAction>();
  return <GName extends InferThingActionNames<GConfig>>(
    name: GName,
  ): InferConsumedThingActionFromName<GConfig, GName> => {
    let action: InferConsumedThingActionFromName<GConfig, GName> | undefined = actions.get(name) as InferConsumedThingActionFromName<GConfig, GName> | undefined;
    if (action === void 0) {
      action = getAction<GName>(name);
      actions.set(name, action);
    }
    return action;
  };
}
