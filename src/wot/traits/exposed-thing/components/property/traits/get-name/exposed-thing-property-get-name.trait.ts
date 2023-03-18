import { IExposedThingPropertyGetNameFunction } from './exposed-thing-property-get-name.function-definition';

export interface IExposedThingPropertyGetNameTrait<GName extends string> {
  getName: IExposedThingPropertyGetNameFunction<GName>;
}
