import { IThingConfigActions } from '../../../thing/types/thing-actions-config.type';
import { IConsumedThingGetActionFunction } from './consumed-thing-get-action.function-definition';

export interface IConsumedThingGetActionTrait<GConfig extends IThingConfigActions> {
  getAction: IConsumedThingGetActionFunction<GConfig>;
}
