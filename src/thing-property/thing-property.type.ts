import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IAsyncValue } from '../async-value/async-value.type';

export type IThingProperty<GValue extends IAsyncTaskConstraint<GValue>> = IAsyncValue<GValue>;

export type IGenericThingProperty = IThingProperty<any>;
