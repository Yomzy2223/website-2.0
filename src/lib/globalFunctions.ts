export const normalize = (text: string | number) =>
  text ? text?.toString()?.toLowerCase()?.trim() : undefined;
