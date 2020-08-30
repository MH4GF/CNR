// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

import { Sys } from "contentful";

export type Post = Readonly<{
  sys: Sys;
  fields: PostFields;
}>;

export type PostFields = Readonly<{
  title: string;
  headerImage: HeaderImage;
  body: string;
  slug: string;
}>;

export type HeaderImage = Readonly<{
  sys: Sys;
  fields: HeaderImageFields;
}>;

export type HeaderImageFields = Readonly<{
  title: string;
  file: File;
}>;

export type File = Readonly<{
  url: string;
}>;
