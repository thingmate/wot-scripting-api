import { Abortable, AsyncTask, IAsyncTaskConstraint, IAsyncTaskInput } from '@lirx/async-task';
import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IThingValue } from '../types/thing-value.type';
import { createThingPropertyObserveUsingReadLoopFunction } from './observe/create-thing-property-observe-read-loop-function';
import { IThingPropertyObserveFunction, IThingPropertyObserveFunctionOptions } from './observe/thing-property-observe-function.type';
import { IThingPropertyReadFunction } from './read/thing-property-read-function.type';
import { IThingPropertyWriteFunction } from './write/thing-property-write-function.type';

export interface IThingPropertyInitOptions<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> {
  read: IThingPropertyReadFunction<GValue>;
  write?: IThingPropertyWriteFunction<GValue>;
  observe?: IThingPropertyObserveFunction<GValue>;
}



export class ThingProperty<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> {
  readonly #read: IThingPropertyReadFunction<GValue>;
  readonly #write: IThingPropertyWriteFunction<GValue> | undefined;
  readonly #observe: IThingPropertyObserveFunction<GValue>;

  constructor(
    {
      read,
      write,
      observe = createThingPropertyObserveUsingReadLoopFunction({ read, defaultRefreshTime: 60000 }),
    }: IThingPropertyInitOptions<GValue>,
  ) {
    this.#read = read;
    this.#write = write;
    this.#observe = observe;
  }

  get writable(): boolean {
    return this.#write !== void 0;
  }

  read(
    abortable: Abortable = Abortable.never,
  ): AsyncTask<GValue> {
    return AsyncTask.fromFactory((abortable: Abortable): IAsyncTaskInput<GValue> => {
      return this.#read(abortable);
    }, abortable);
  }

  write(
    value: GValue,
    abortable: Abortable = Abortable.never,
  ): AsyncTask<void> {
    return AsyncTask.fromFactory((abortable: Abortable): IAsyncTaskInput<void> => {
      if (this.writable) {
        return this.#write!(value, abortable);
      } else {
        throw new Error(`The property is not writable.`);
      }
    }, abortable);
  }

  observe(
    options?: IThingPropertyObserveFunctionOptions,
  ): IPushSourceWithBackPressure<GValue> {
    return this.#observe(options);
  }
}


export type IGenericThingProperty = ThingProperty<any>;
