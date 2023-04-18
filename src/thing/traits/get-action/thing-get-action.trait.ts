import { IThingConfigActions } from './thing-actions-config.type';
import { IThingGetActionFunction } from './thing-get-action.function-definition';

export interface IThingGetActionTrait<GConfig extends IThingConfigActions> {
  getAction: IThingGetActionFunction<GConfig>;
}
