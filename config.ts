type environment = "master" | "staging";
export const CONTENTFUL_ENV: environment = "master";
export const CONTENTFUL_SPACE_ID =
  process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "";
export const CONTENTFUL_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? "";
