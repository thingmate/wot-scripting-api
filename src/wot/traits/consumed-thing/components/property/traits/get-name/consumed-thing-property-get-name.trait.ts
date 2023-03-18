import { IConsumedThingPropertyGetNameFunction } from './consumed-thing-property-get-name.function-definition';

export interface IConsumedThingPropertyGetNameTrait<GName extends string> {
  getName: IConsumedThingPropertyGetNameFunction<GName>;
}
