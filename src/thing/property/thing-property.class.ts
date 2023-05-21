import { Abortable, AsyncTask, IAsyncTaskConstraint, IAsyncTaskInput } from '@lirx/async-task';
import {
  createMulticastPushSinkAndSourceWithBackPressure,
  createPushSourceWithBackPressureFromAsyncTaskFactory,
  distinctPushPipeWithBackPressure,
  IPushSinkAndSourceWithBackPressure,
  IPushSourceWithBackPressure,
  mergePushSourceWithBackPressure,
} from '@lirx/stream';
import { IThingValue } from '../types/thing-value.type';
import { observeThingPropertyUsingReadLoop } from './observe/observe-thing-property-using-read-loop';
import { IThingPropertyObserveFunction, IThingPropertyObserveFunctionOptions } from './observe/thing-property-observe-function.type';
import { IThingPropertyReadFunction } from './read/thing-property-read-function.type';
import { IThingPropertyInitOptions } from './thing-property-init-options.type';
import { IThingPropertyWriteFunction } from './write/thing-property-write-function.type';

export class ThingProperty<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> {
  readonly #read: IThingPropertyReadFunction<GValue>;
  readonly #write: IThingPropertyWriteFunction<GValue> | undefined;
  readonly #observe: IThingPropertyObserveFunction<GValue> | undefined;
  readonly #minObserveRefreshTime: number;

  readonly #$value$: IPushSinkAndSourceWithBackPressure<GValue>;

  constructor(
    {
      read,
      write,
      observe,
      minObserveRefreshTime = 0,
    }: IThingPropertyInitOptions<GValue>,
  ) {
    this.#read = read;
    this.#write = write;
    this.#observe = observe;
    this.#minObserveRefreshTime = Math.max(minObserveRefreshTime, 0);
    this.#$value$ = createMulticastPushSinkAndSourceWithBackPressure<GValue>();
  }

  get writable(): boolean {
    return this.#write !== void 0;
  }

  get observable(): boolean {
    return this.#observe !== void 0;
  }

  get minObserveRefreshTime(): number {
    return this.#minObserveRefreshTime;
  }

  read(
    abortable: Abortable = Abortable.never,
  ): AsyncTask<GValue> {
    return AsyncTask.fromFactory((abortable: Abortable): IAsyncTaskInput<GValue> => {
      return this.#read(abortable);
    }, abortable)
      .successful((value: GValue, abortable: Abortable): AsyncTask<GValue> => {
        return this.#$value$.sink(value, abortable)
          .successful(() => value);
      });
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
    }, abortable)
      .successful((_, abortable: Abortable): AsyncTask<void> => {
        return this.#$value$.sink(value, abortable);
      });
  }

  observe(
    {
      refreshTime = this.#minObserveRefreshTime,
      useReadLoopFallback = true,
      observeReadWrite = true,
      readCurrentValue = true,
    }: IThingPropertyObserveFunctionOptions = {},
  ): IPushSourceWithBackPressure<GValue> {
    refreshTime = Math.max(refreshTime, this.#minObserveRefreshTime);

    const wrapSourceWithGetCurrentValue = (
      source: IPushSourceWithBackPressure<GValue>,
    ): IPushSourceWithBackPressure<GValue> => {
      return readCurrentValue
        ? mergePushSourceWithBackPressure([
          createPushSourceWithBackPressureFromAsyncTaskFactory(this.#read),
          source,
        ])
        : source;
    };

    const wrapSourceWithObserveReadWrite = (
      source: IPushSourceWithBackPressure<GValue>,
    ): IPushSourceWithBackPressure<GValue> => {
      return observeReadWrite
        ? mergePushSourceWithBackPressure([
          this.#$value$.source,
          source,
        ])
        : source;
    };

    const wrapSourceWithDistinctAndGetCurrentValue = (
      source: IPushSourceWithBackPressure<GValue>,
    ): IPushSourceWithBackPressure<GValue> => {
      return distinctPushPipeWithBackPressure(
        wrapSourceWithGetCurrentValue(
          source,
        ),
      );
    };

    const wrapSourceWithDistinctGetCurrentValueAndObserveReadWrite = (
      source: IPushSourceWithBackPressure<GValue>,
    ): IPushSourceWithBackPressure<GValue> => {
      return wrapSourceWithDistinctAndGetCurrentValue(
        wrapSourceWithObserveReadWrite(
          source,
        ),
      );
    };

    if (this.observable) {
      return wrapSourceWithDistinctGetCurrentValueAndObserveReadWrite(
        this.#observe!({
          refreshTime,
        }),
      );
    } else {
      if (useReadLoopFallback) {
        return wrapSourceWithDistinctGetCurrentValueAndObserveReadWrite(
          observeThingPropertyUsingReadLoop<GValue>({
            read: this.#read,
            refreshTime,
          }),
        );
      } else if (observeReadWrite) {
        return wrapSourceWithDistinctAndGetCurrentValue(
          this.#$value$.source,
        );
      } else {
        throw new Error(`The property is not observable.`);
      }
    }
  }
}

export type IGenericThingProperty = ThingProperty<any>;
