import * as React from "react";

import { Post } from "../interfaces";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type Props = {
  item: Post;
};

const PostDetail = ({ item: post }: Props) => {
  const imgSrc: string = "https:" + post.fields.headerImage.fields.file.url;

  return (
    <div>
      <h1>Detail for {post.fields.title}</h1>
      <img alt={post.fields.headerImage.fields.title} src={imgSrc} />
      {documentToReactComponents(post.fields.body)}
    </div>
  );
};

export default PostDetail;
