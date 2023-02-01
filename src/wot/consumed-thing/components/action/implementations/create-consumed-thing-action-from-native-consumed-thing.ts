import { IPromise, makePromiseAbortable, promiseResolve } from '@lirx/promise';
import { ActionElement } from 'wot-thing-description-types';
import { ConsumedThing, DataSchemaValue, InteractionOutput, ThingDescription } from 'wot-typescript-definitions';
import { IConsumedThingAction } from '../comsumed-thing-action.trait-collection';
import { IConsumedThingActionInvokeOptions } from '../traits/invoke/consumed-thing-action-invoke.function-definition';

// https://www.w3.org/TR/2018/WD-wot-scripting-api-20181129/#dom-thingaction

export function createConsumedThingActionFromNativeConsumedThing<GIn extends DataSchemaValue, GOut extends DataSchemaValue>(
  thing: ConsumedThing,
  name: string,
): IConsumedThingAction<GIn, GOut> {

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

  const invoke = (
    value?: GIn,
    options?: IConsumedThingActionInvokeOptions,
  ): IPromise<GOut> => {
    return makePromiseAbortable<InteractionOutput | undefined>(thing.invokeAction(name, value, options), options)
      .then((interactionOutput: InteractionOutput | undefined): IPromise<GOut> => {
        return makePromiseAbortable<GOut>(
          (interactionOutput === void 0)
            ? promiseResolve<GOut>(null as any)
            : interactionOutput.value() as IPromise<GOut>,
          options,
        );
      });
  };

  return {
    getName,
    getDescription,
    invoke,
  };
}
