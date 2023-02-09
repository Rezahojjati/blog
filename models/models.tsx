import * as Contentful from "contentful";
import { Document } from "@contentful/rich-text-types";

export type PostProps = {
  image?: Contentful.Asset;
  title: Contentful.EntryFields.Text;
  body: Document;
  author?: Contentful.EntryFields.Text;
  createdAt: Contentful.EntryFields.Date;
  slug: Contentful.EntryFields.Text;
  reflectionQuestions: Document;
  habitsToExplore: Document;
  relatedResources: Document;
  relatedResourcesNonMembers: Document;
};

export type BlogHomeProps = {
  title: string;
  active: string;
  description: string;
  length: number;
  blogs: PostProps[];
};

export type SEOProps = {
  title: string;
  description: string;
  active: string;
  blogs: PostProps[];
};

export type NavProps = {
  activeItem?: "home" | "posts" | "contact";
  blogs: PostProps[];
};

export type HeaderProps = {
  title: string;
  description: string;
  linkUrl: string;
};

export type FooterProps = {
  author: string | undefined;
  createdAt: string;
};

export type HeadingProps = {
  heading: string;
};

export type RichTextProps = {
  body: Document;
};

export type ResourcesPRops = {
  tittle: string;
  body: Document;
};
