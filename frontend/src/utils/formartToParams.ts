export type QueryParams = Record<
  string,
  string | string[] | number | number[] | boolean | boolean[] | undefined
>;

function paramEntry(k: string, v: unknown) {
  if (typeof v === 'string') {
    return `${k}=${encodeURIComponent(v)}`;
  } else if (typeof v === 'number' || typeof v === 'boolean') {
    return `${k}=${JSON.stringify(v)}`;
  }
  return '';
}

export function toParams(object?: QueryParams): string {
  if (object) {
    return `?${Object.entries(object)
      .flatMap(([k, v]) => {
        if (v instanceof Array) {
          return v.map((v1) => paramEntry(k, v1));
        }
        return paramEntry(k, v);
      })
      .filter((v) => v)
      .join('&')}`;
  }
  return '';
}
