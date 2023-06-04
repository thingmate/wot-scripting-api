import { Abortable, AsyncTask } from '@lirx/async-task';
import { IThingActionInvokeFunction } from '../../../../thing/action/invoke/thing-action-invoke-function.type';
import { getOppositeOnOffState } from '../../../shared/on-off-state/functions/get-opposite-on-off-state';
import { IOnOffState } from '../../../shared/on-off-state/on-off-state.type';
import { IOnOffStateThingProperty } from '../../../properties/on-off-state-thing-property/on-off-state-thing-property.type';

export function createToggleOnOffStateThingActionInvokeFunctionFromOnOffStateThingProperty(
  stateProperty: IOnOffStateThingProperty,
): IThingActionInvokeFunction<IOnOffState | null, IOnOffState> {
  return (
    value: IOnOffState | null,
    abortable: Abortable,
  ): AsyncTask<IOnOffState> => {
    const getState = (
      abortable: Abortable,
    ): AsyncTask<IOnOffState> => {
      return (value === null)
        ? stateProperty.read(abortable)
          .successful(getOppositeOnOffState)
        : AsyncTask.success(value, abortable);
    };

    return getState(abortable)
      .successful((state: IOnOffState, abortable: Abortable): AsyncTask<IOnOffState> => {
        return stateProperty.write(state, abortable)
          .successful((): IOnOffState => {
            return state;
          });
      });
  };
}
