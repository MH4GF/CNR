import React from 'react'
import { GetStaticProps } from "next";
import PostList from "../components/PostList";
import {Post} from "../interfaces";
import Layout from "../components/Layout";
import ContentfulClient from "../utils/ContentfulClient"

type Props = {
  items: Post[]
}

const HomePage = ({ items }: Props) => {
  return (
    <Layout>
      <PostList items={items}/>
    </Layout>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const entries = await ContentfulClient.getEntries<Post>()
  const items: Post[] = entries.items.map((entry) => { return entry.fields } )
  return { props: { items: items } }
}

export default HomePage