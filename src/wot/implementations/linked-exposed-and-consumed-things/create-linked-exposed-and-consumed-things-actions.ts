import { Abortable, AsyncTask, IAsyncTaskConstraint, IAsyncTaskInput, optionalAbortableOptionsToAbortable } from '@lirx/async-task';
import { ActionElement } from 'wot-thing-description-types';
import { ThingDescription } from 'wot-typescript-definitions';
import { IConsumedThingAction } from '../../traits/consumed-thing/components/action/consumed-thing-action.trait-collection';
import {
  IConsumedThingActionInvokeOptions,
} from '../../traits/consumed-thing/components/action/traits/invoke/consumed-thing-action-invoke.function-definition';
import { IExposedThingAction } from '../../traits/exposed-thing/components/action/exposed-thing-action.trait-collection';
import {
  IExposedThingActionOnInvokeFunctionHandler,
  IExposedThingActionOnInvokeFunctionHandlerOptions,
} from '../../traits/exposed-thing/components/action/traits/on-invoke/exposed-thing-action-on-invoke.function-definition';
import { IThingActionInType, IThingActionOutType } from '../../traits/thing/types/thing-actions-config.type';

export type ILinkedExposedAndConsumedThingsActions<GName extends string, GIn extends IThingActionInType, GOut extends IAsyncTaskConstraint<GOut, IThingActionOutType>> = [
  IExposedThingAction<GName, GIn, GOut>,
  IConsumedThingAction<GName, GIn, GOut>,
];

export type IGenericLinkedExposedAndConsumedThingsActions = ILinkedExposedAndConsumedThingsActions<string, IThingActionInType, IThingActionOutType>;

export function createLinkedExposedAndConsumedThingsActions<GName extends string, GIn extends IThingActionInType, GOut extends IAsyncTaskConstraint<GOut, IThingActionOutType>>(
  td: ThingDescription,
  name: GName,
): ILinkedExposedAndConsumedThingsActions<GName, GIn, GOut> {

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

  let _onInvokeHandler: IExposedThingActionOnInvokeFunctionHandler<GIn, GOut> = (
    value: GIn,
    options: IExposedThingActionOnInvokeFunctionHandlerOptions,
  ): IAsyncTaskInput<GOut> => {
    return AsyncTask.error(
      new Error(`No handler for invoke`),
      optionalAbortableOptionsToAbortable(options),
    );
  };

  const createExposedThingAction = (): IExposedThingAction<GName, GIn, GOut> => {
    const onInvoke = (
      handler: IExposedThingActionOnInvokeFunctionHandler<GIn, GOut>,
    ): void => {
      _onInvokeHandler = handler;
    };

    return {
      getName,
      getDescription,
      onInvoke,
    };
  };

  const createConsumedThingAction = (): IConsumedThingAction<GName, GIn, GOut> => {
    const invoke = (
      value?: GIn,
      {
        abortable = Abortable.never,
        ...options
      }: IConsumedThingActionInvokeOptions = {},
    ): AsyncTask<GOut> => {
      return AsyncTask.fromFactory<GOut>(
        (abortable: Abortable): IAsyncTaskInput<GOut> => {
          return _onInvokeHandler(value as GIn, {
            ...options,
            abortable,
          }) as IAsyncTaskInput<GOut>;
        },
        abortable,
      );
    };

    return {
      getName,
      getDescription,
      invoke,
    };
  };

  return [
    createExposedThingAction(),
    createConsumedThingAction(),
  ];
}
