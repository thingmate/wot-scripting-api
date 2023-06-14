import { IThingInitOptions, Thing } from '../../../thing/thing.class';
import { ISmartPlugConfig } from './smart-plug-config.type';
import { SMART_PLUG_TD } from './smart-plug-td.constant';

export class SmartPlugThing extends Thing<ISmartPlugConfig> {
  constructor(
    {
      description = SMART_PLUG_TD,
      ...options
    }: IThingInitOptions<ISmartPlugConfig>,
  ) {
    super({
      description,
      ...options,
    });
  }
}
