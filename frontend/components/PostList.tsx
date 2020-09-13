import * as React from "react";
import PostListItem from "./Post/List/Item";
import { Post } from "../interfaces";

type Props = {
  items: Post[];
};

const PostList = ({ items }: Props): React.ReactElement => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.fields.title}>
          <PostListItem data={item} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
