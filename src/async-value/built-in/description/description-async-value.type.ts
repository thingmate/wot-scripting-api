import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IAsyncValue } from '../../async-value.type';

export const DescriptionAsyncValueName = 'description';

export type IDescriptionAsyncValueName = typeof DescriptionAsyncValueName;

export type IDescriptionAsyncValue<GDescription extends IAsyncTaskConstraint<GDescription, object>> = IAsyncValue<GDescription>;
export type IHavingDescriptionAsyncValue<GDescription extends IAsyncTaskConstraint<GDescription, object>> = {
  [GKey in IDescriptionAsyncValueName]: IAsyncValue<GDescription>;
};

