import type { ThingDescription } from 'wot-typescript-definitions';

export function fetchTD(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<ThingDescription> {
  return fetch(
    input,
    init,
  )
    .then((response: Response): Promise<ThingDescription> => {
      return response.json();
    });
}
