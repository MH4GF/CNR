import * as React from "react";

import { Post } from "../interfaces";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";

type Props = {
  item: Post;
};

const Img = styled.img`
  max-width: 100vw;
`

const PostDetail = ({ item: post }: Props) => {
  const imgSrc: string = "https:" + post.fields.headerImage.fields.file.url;

  return (
    <div>
      <h1>Detail for {post.fields.title}</h1>
      <Img
        alt={post.fields.headerImage.fields.title}
        src={imgSrc}
      />
      {documentToReactComponents(post.fields.body)}
    </div>
  );
};

export default PostDetail;
