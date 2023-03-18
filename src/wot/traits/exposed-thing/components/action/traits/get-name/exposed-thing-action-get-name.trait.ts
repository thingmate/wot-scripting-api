import { IExposedThingActionGetNameFunction } from './exposed-thing-action-get-name.function-definition';

export interface IExposedThingActionGetNameTrait<GName extends string> {
  getName: IExposedThingActionGetNameFunction<GName>;
}
