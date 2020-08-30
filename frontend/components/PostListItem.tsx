import React from 'react'

import { Post } from '../interfaces'

type Props = {
  data: Post
}

const PostListItem = ({ data }: Props) => (
  <div className="container">
    <a href={data.url}>
      <img alt={data.alt} src={data.image} />
    </a>
    <div className="text">
      <h2>{data.title}</h2>
      <h4>{data.date}</h4>
    </div>
    <style jsx>{`
        .container {
          cursor: pointer;
          height: 453px;
          margin-bottom: 48px;
        }
        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        .text {
          margin-top: -160px;
          padding: 24px;
          position: absolute;
        }
        h2 {
          color: black;
          font-size: 24px;
          margin-bottom: 0;
        }
        h4 {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          font-weight: 500;
          margin-top: 8px;
        }
      `}</style>
  </div>
)

export default PostListItem
