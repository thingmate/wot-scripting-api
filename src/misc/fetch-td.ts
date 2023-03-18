import { Abortable, asyncFetchJSON, AsyncTask, IAsyncFetchRequestInit } from '@lirx/async-task';
import type { ThingDescription } from 'wot-typescript-definitions';

export function fetchTD(
  input: RequestInfo | URL,
  init: IAsyncFetchRequestInit,
  abortable: Abortable,
): AsyncTask<ThingDescription> {
  return asyncFetchJSON<ThingDescription>(
    input,
    init,
    abortable,
  );
}
