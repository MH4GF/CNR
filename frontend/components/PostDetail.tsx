import * as React from "react";

import { Post } from "../interfaces";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";
import Title from "./Post/Title";

type Props = {
  item: Post;
};

const Img = styled.img`
  max-width: 80vw;
  position: relative;
  left: 50%;
  margin-left: -40vw;
`;

const PostDetail = ({ item: post }: Props) => {
  const imgSrc: string = "https:" + post.fields.headerImage.fields.file.url;

  return (
    <div>
      <Img alt={post.fields.headerImage.fields.title} src={imgSrc} />
      <Title
        title={post.fields.title}
        href="/posts/[id]"
        as={`/posts/${post.fields.slug}`}
      />
      {documentToReactComponents(post.fields.body)}
    </div>
  );
};

export default PostDetail;
