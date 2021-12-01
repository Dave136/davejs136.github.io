export const getImageUrl = (name: string) =>
  new URL(`/images/${name}.svg`, import.meta.url).href;
