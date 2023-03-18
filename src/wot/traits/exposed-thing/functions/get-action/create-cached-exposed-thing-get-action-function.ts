import { InferThingActionNames } from '../../../thing/types/thing-actions-config.type';
import { IThingConfig } from '../../../thing/types/thing-config.type';
import { IGenericExposedThingAction } from '../../components/action/exposed-thing-action.trait-collection';
import { IExposedThingGetActionFunction } from '../../traits/get-action/exposed-thing-get-action.function-definition';
import { InferExposedThingActionFromName } from '../../types/infer-exposed-thing-action-from-name.type';

export function createCachedExposedThingGetActionFunction<GConfig extends IThingConfig>(
  getAction: IExposedThingGetActionFunction<GConfig>,
): IExposedThingGetActionFunction<GConfig> {
  const actions = new Map<string, IGenericExposedThingAction>();
  return <GName extends InferThingActionNames<GConfig>>(
    name: GName,
  ): InferExposedThingActionFromName<GConfig, GName> => {
    let action: InferExposedThingActionFromName<GConfig, GName> | undefined = actions.get(name) as InferExposedThingActionFromName<GConfig, GName> | undefined;
    if (action === void 0) {
      action = getAction<GName>(name);
      actions.set(name, action as any);
    }
    return action;
  };
}
