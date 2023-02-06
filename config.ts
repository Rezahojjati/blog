type environment = "master" | "staging";
export const CONTENTFUL_ENV: environment = "master";
export const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID ?? "";
export const CONTENTFUL_ACCESS_TOKEN =
  process.env.CONTENTFUL_ACCESS_TOKEN ?? "";
