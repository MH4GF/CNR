import * as React from "react";

import { Post } from "../interfaces";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Node } from "@contentful/rich-text-types";
import styled from "styled-components";
import Title from "./Post/Title";
import { ReactNode } from "react";
import media from "styled-media-query";

type Props = {
  item: Post;
};

const Container = styled.div`
  margin-bottom: 5rem;
`;

const Img = styled.img`
  max-width: 80vw;
  position: relative;
  left: 50%;
  margin-left: -40vw;
  margin-top: 2rem;
  margin-bottom: 2rem;

  ${media.lessThan("medium")`
    max-width: 100vw;
    margin-left: -50vw;
  `}
`;

const Heading1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

const Heading2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const Heading3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 0.5rem;
`;

const Hr = styled.div`
  width: 20vw;
  border: solid 1px #3c3c3c;
  margin: 4rem auto;
`;

const options: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: function embeddedAssetContent(
      node: Node
    ): ReactNode {
      return <Img src={"https:" + node.data.target.fields.file.url} />;
    },
    [BLOCKS.HEADING_1]: function heading1Content(
      _: Node,
      children: ReactNode
    ): ReactNode {
      return <Heading1>{children}</Heading1>;
    },
    [BLOCKS.HEADING_2]: function heading2Content(
      _: Node,
      children: ReactNode
    ): ReactNode {
      return <Heading2>{children}</Heading2>;
    },
    [BLOCKS.HEADING_3]: function heaeding3Content(
      _: Node,
      children: ReactNode
    ): ReactNode {
      return <Heading3>{children}</Heading3>;
    },
    [BLOCKS.PARAGRAPH]: function paragraphContent(
      _: Node,
      children: ReactNode
    ): ReactNode {
      return <Paragraph>{children}</Paragraph>;
    },
    [BLOCKS.HR]: function hrContent(): ReactNode {
      return <Hr />;
    },
  },
};

const PostDetail = ({ item: post }: Props) => {
  const imgSrc: string = "https:" + post.fields.headerImage.fields.file.url;

  return (
    <Container>
      <Img alt={post.fields.headerImage.fields.title} src={imgSrc} />
      <Title
        title={post.fields.title}
        href="/posts/[id]"
        as={`/posts/${post.fields.slug}`}
        date={post.sys.createdAt}
      />
      {documentToReactComponents(post.fields.body, options)}
    </Container>
  );
};

export default PostDetail;
