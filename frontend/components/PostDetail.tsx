import * as React from "react";

import { Post } from "../interfaces";

type Props = {
  item: Post;
};

const ListDetail = ({ item: post }: Props) => {
  const imgSrc: string = "https:" + post.fields.headerImage.fields.file.url;
  return (
    <div>
      <h1>Detail for {post.fields.title}</h1>
      <img alt={post.fields.headerImage.fields.title} src={imgSrc} />
    </div>
  );
};

export default ListDetail;
