import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IAsyncValueOptionalObserveTrait } from './traits/observe/async-value.observe.trait';
import { IAsyncValueReadTrait } from './traits/read/async-value.read.trait';
import { IAsyncValueOptionalWriteTrait } from './traits/write/async-value.write.trait';

export interface IAsyncValue<GValue extends IAsyncTaskConstraint<GValue>> extends //
  IAsyncValueReadTrait<GValue>,
  IAsyncValueOptionalWriteTrait<GValue>,
  IAsyncValueOptionalObserveTrait<GValue>
  //
{

}

export type IGenericAsyncValue = IAsyncValue<any>;

