import { IThingConfigActions } from '../../../thing/types/thing-actions-config.type';
import { IExposedThingGetActionFunction } from './exposed-thing-get-action.function-definition';

export interface IExposedThingGetActionTrait<GConfig extends IThingConfigActions> {
  getAction: IExposedThingGetActionFunction<GConfig>;
}
