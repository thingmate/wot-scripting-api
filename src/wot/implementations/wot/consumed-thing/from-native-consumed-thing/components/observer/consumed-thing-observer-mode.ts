export type IConsumedThingObserverMode =
  | 'property'
  | 'event'
  ;

export function consumedThingObserverModeToMethodeName(
  mode: IConsumedThingObserverMode,
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
