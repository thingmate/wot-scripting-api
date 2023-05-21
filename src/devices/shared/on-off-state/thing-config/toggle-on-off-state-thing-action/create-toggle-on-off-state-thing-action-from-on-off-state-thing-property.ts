import { Abortable, AsyncTask } from '@lirx/async-task';
import { ThingAction } from '../../../../../thing/action/thing-action.class';
import { getOppositeOnOffState } from '../../get-opposite-on-off-state';
import { IOnOffState } from '../../on-off-state.type';
import { IOnOffStateThingProperty } from '../on-off-state-thing-property.type';
import { IToggleOnOffStateThingAction } from './toggle-on-off-state-thing-action.type';

export function createToggleOnOffStateThingActionFromOnOffStateThingProperty(
  stateProperty: IOnOffStateThingProperty,
): IToggleOnOffStateThingAction {
  const invoke = (
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

  return new ThingAction<IOnOffState | null, IOnOffState>({
    invoke,
  });
}
