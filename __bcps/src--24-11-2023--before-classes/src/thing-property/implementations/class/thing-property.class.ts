import { IAsyncTaskConstraint, Abortable, AsyncTask } from '@lirx/async-task';
import { IThingProperty } from '../../thing-property.type';

export abstract class ThingProperty<GValue extends IAsyncTaskConstraint<GValue>> implements IThingProperty<GValue> {
  protected constructor() {
  }

  abstract read(
    abortable: Abortable,
  ): AsyncTask<GValue>;

  abstract write(
    value: GValue,
    abortable: Abortable,
  ): AsyncTask<void>;
}


