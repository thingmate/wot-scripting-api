export interface IUrlRewriter {
  (
    url: string,
  ): string;
}

export const NO_URL_REWRITE: IUrlRewriter = (
  url: string,
): string => {
  return url;
}
