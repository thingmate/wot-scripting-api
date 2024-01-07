import { IPushSourceWithBackPressure } from '@lirx/stream';

export type IAsyncValueObserveFunction<GValue> = IPushSourceWithBackPressure<GValue>;
