import * as React from "react";

import { Post } from "../interfaces";

type Props = {
  item: Post;
};

const ListDetail = ({ item: post }: Props) => (
  <div>
    <h1>Detail for {post.fields.title}</h1>
  </div>
);

export default ListDetail;
