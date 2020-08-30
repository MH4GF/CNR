import React from "react";

import { Post } from "../interfaces";
import Link from "next/link";

type Props = {
  data: Post;
};

const PostListItem = ({ data }: Props): React.ReactElement => {
  return (
    <div>
      <Link href="/posts/[id]" as={`/posts/${data.fields.slug}`}>
        <a>
          {data.fields.slug}: {data.fields.title}
        </a>
      </Link>
    </div>
  );
};

export default PostListItem;
