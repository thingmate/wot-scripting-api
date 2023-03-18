import { IConsumedThingEventGetNameFunction } from './consumed-thing-event-get-name.function-definition';

export interface IConsumedThingEventGetNameTrait<GName extends string> {
  getName: IConsumedThingEventGetNameFunction<GName>;
}
