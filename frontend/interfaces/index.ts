// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

import { Sys } from "contentful";

export type Post = Readonly<{
  sys: Sys;
  fields: Fields;
}>;

export type Fields = Readonly<{
  title: string;
  body: string;
  slug: string;
}>;

export type HeaderImage = Readonly<{
  title: string;
  file: File;
}>;

export type File = Readonly<{
  url: string;
}>;
