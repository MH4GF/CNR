import * as React from 'react'
import PostListItem from './PostListItem'
import { Post } from '../interfaces'

type Props = {
  items: Post[]
}

const PostList = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.title}>
          <PostListItem data={item} />
        </li>
      ))}
    </ul>
  )
}

export default PostList
