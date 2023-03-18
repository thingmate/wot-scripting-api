import { Abortable, AsyncTask, IAsyncTaskConstraint, IAsyncTaskInput } from '@lirx/async-task';
import { ActionElement } from 'wot-thing-description-types';
import {
  DataSchemaValue,
  ExposedThing,
  InteractionInput,
  InteractionOptions,
  InteractionOutput,
  ThingDescription,
} from 'wot-typescript-definitions';
import { IExposedThingAction } from '../../../../../../traits/exposed-thing/components/action/exposed-thing-action.trait-collection';
import {
  IExposedThingActionOnInvokeFunctionHandler,
} from '../../../../../../traits/exposed-thing/components/action/traits/on-invoke/exposed-thing-action-on-invoke.function-definition';
import { IThingActionInType, IThingActionOutType } from '../../../../../../traits/thing/types/thing-actions-config.type';

export function createExposedThingActionFromNativeExposedThing<GName extends string, GIn extends IThingActionInType, GOut extends IAsyncTaskConstraint<GOut, IThingActionOutType>>(
  thing: ExposedThing,
  name: GName,
): IExposedThingAction<GName, GIn, GOut> {

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

  const onInvoke = (
    handler: IExposedThingActionOnInvokeFunctionHandler<GIn, GOut>,
  ): void => {
    thing.setActionHandler(
      name,
      (
        params: InteractionOutput,
        options?: InteractionOptions,
      ): Promise<InteractionInput | undefined> => {
        return params.value()
          .then((
            value: DataSchemaValue,
          ): Promise<InteractionInput | undefined> => {
            return AsyncTask.fromFactory(
              (
                abortable: Abortable,
              ): IAsyncTaskInput<InteractionInput | undefined> => {
                return handler(
                  value as GIn,
                  {
                    ...options,
                    abortable,
                  },
                );
              },
              Abortable.never,
            )
              .toPromise();
          });
      });
  };

  return {
    getName,
    getDescription,
    onInvoke,
  };
}
