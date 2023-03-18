import { IExposedThingEventGetNameFunction } from './exposed-thing-event-get-name.function-definition';

export interface IExposedThingEventGetNameTrait<GName extends string> {
  getName: IExposedThingEventGetNameFunction<GName>;
}
