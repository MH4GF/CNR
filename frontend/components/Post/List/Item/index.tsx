import React from "react";

import { Post } from "../../../../interfaces";
import Title from "../../Title";

type Props = {
  data: Post;
};

const PostListItem = ({ data }: Props): React.ReactElement => {
  return (
    <Title
      title={data.fields.title}
      href="/posts/[id]"
      as={`/posts/${data.fields.slug}`}
    />
  );
};

export default PostListItem;
