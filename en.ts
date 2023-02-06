import {
  CONTENTFUL_ENV,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
} from "./config";
import * as contentful from "contentful";

export const client = contentful.createClient({
  space: "qhdh9sklg8qf",
  accessToken: "po50xhtRQFkeTbtQ7qfauADzXL1mM-wDUD0WBsVM",
  environment: CONTENTFUL_ENV,
});
