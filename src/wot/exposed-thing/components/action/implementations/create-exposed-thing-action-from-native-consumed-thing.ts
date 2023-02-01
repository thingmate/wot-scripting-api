import { IPromiseLikeOrValue } from '@lirx/promise';
import { ActionElement } from 'wot-thing-description-types';
import {
  DataSchemaValue,
  ExposedThing,
  InteractionInput,
  InteractionOptions,
  InteractionOutput,
  ThingDescription,
} from 'wot-typescript-definitions';
import { IExposedThingAction } from '../exposed-thing-action.trait-collection';
import { IExposedThingActionOnInvokeFunctionHandler } from '../traits/on-invoke/exposed-thing-action-on-invoke.function-definition';

export function createExposedThingActionFromNativeExposedThing<GIn extends DataSchemaValue, GOut extends DataSchemaValue>(
  thing: ExposedThing,
  name: string,
): IExposedThingAction<GIn, GOut> {

  const td: ThingDescription = thing.getThingDescription();

  let actionElement: ActionElement;

  if (td.actions === void 0) {
    throw new Error(`Missing td.actions`);
  }

  if (td.actions[name] === void 0) {
    throw new Error(`Missing td.actions[${name}]`);
  } else {
    actionElement = td.actions[name];
  }

  const getName = (): string => {
    return name;
  };

  const getDescription = (): ActionElement => {
    return actionElement;
  };

  const onInvoke = (
    handler: IExposedThingActionOnInvokeFunctionHandler<GIn, GOut>,
  ): void => {
    thing.setActionHandler(name, (params: InteractionOutput, options?: InteractionOptions): Promise<InteractionInput | undefined> => {
      return params.value()
        .then((value: DataSchemaValue): IPromiseLikeOrValue<InteractionInput> => {
          return handler(value as GIn, options) as InteractionInput;
        });
    });
  };

  return {
    getName,
    getDescription,
    onInvoke,
  };
}
