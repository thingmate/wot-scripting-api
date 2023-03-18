import { IConsumedThingActionGetNameFunction } from './consumed-thing-action-get-name.function-definition';

export interface IConsumedThingActionGetNameTrait<GName extends string> {
  getName: IConsumedThingActionGetNameFunction<GName>;
}
