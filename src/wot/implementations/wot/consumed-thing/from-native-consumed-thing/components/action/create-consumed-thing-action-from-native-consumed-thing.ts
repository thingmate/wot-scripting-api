import { Abortable, AsyncTask, IAsyncTaskConstraint, optionalAbortableOptionsToAbortable } from '@lirx/async-task';
import { ActionElement } from 'wot-thing-description-types';
import { ConsumedThing, InteractionOutput, ThingDescription } from 'wot-typescript-definitions';
import { IConsumedThingAction } from '../../../../../../traits/consumed-thing/components/action/consumed-thing-action.trait-collection';
import {
  IConsumedThingActionInvokeOptions,
} from '../../../../../../traits/consumed-thing/components/action/traits/invoke/consumed-thing-action-invoke.function-definition';
import { IThingActionInType, IThingActionOutType } from '../../../../../../traits/thing/types/thing-actions-config.type';

// https://www.w3.org/TR/2018/WD-wot-scripting-api-20181129/#dom-thingaction

export function createConsumedThingActionFromNativeConsumedThing<GName extends string, GIn extends IThingActionInType, GOut extends IAsyncTaskConstraint<GOut, IThingActionOutType>>(
  thing: ConsumedThing,
  name: GName,
): IConsumedThingAction<GName, GIn, GOut> {

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

  const getName = (): GName => {
    return name;
  };

  const getDescription = (): ActionElement => {
    return actionElement;
  };

  const invoke = (
    value: GIn,
    options?: IConsumedThingActionInvokeOptions,
  ): AsyncTask<GOut> => {
    return AsyncTask.fromFactory<InteractionOutput | undefined>(
      () => thing.invokeAction(name, value, options),
      optionalAbortableOptionsToAbortable(options),
    )
      .successful((
        interactionOutput: InteractionOutput | undefined,
        abortable: Abortable,
      ): AsyncTask<GOut> | GOut => {
        if (interactionOutput === void 0) {
          return void 0 as GOut;
        } else {
          return AsyncTask.fromFactory<GOut>(
            () => (interactionOutput.value() as Promise<GOut>),
            abortable,
          );
        }
      });
  };

  return {
    getName,
    getDescription,
    invoke,
  };
}
