export const searchQueryFromObject = (
  query: Record<string, string | number>
): string => {
  return Object.entries(query)
    .map((entry) => entry.join("="))
    .join("&");
};

export const searchParamsToObject = (
  params: URLSearchParams
): Record<string, string> => {
  const result: Record<string, string> = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
};

export const startCase = (str: string) => str[0].toUpperCase() + str.slice(1);
