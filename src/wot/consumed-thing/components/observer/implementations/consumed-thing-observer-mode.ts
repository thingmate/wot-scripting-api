import { IConsumedThingObservableMode } from '../../../helpers/create-consumed-thing-observable';

export type IConsumedThingObserverMode =
  | 'property'
  | 'event'
  ;

export function consumedThingObserverModeToMethodeName(
  mode: IConsumedThingObservableMode,
): string {
  switch (mode) {
    case 'property':
      return 'observeProperty';
    case 'event':
      return 'subscribeEvent';
    default:
      throw new TypeError(`Invalid mode: ${mode}`);
  }
}
