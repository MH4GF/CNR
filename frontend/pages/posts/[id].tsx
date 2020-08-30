import React from "react";
import { Post } from "../../interfaces";
import Layout from "../../components/Layout";
import PostDetail from "../../components/PostDetail";
import { GetStaticProps, GetStaticPaths } from "next";
import ContentfulClient from "../../utils/ContentfulClient";

type Props = {
  item?: Post;
  errors?: string;
};

const Item = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.fields.title : "Post Detail"
      } | Next.js + TypeScript Example`}
    >
      {item && <PostDetail item={item} />}
    </Layout>
  );
};

export default Item;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await new ContentfulClient().GetPosts().then((items) => {
    return items.map((item) => {
      return { params: { id: item.fields.slug } };
    });
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.id;
    const query = {
      content_type: "post",
      "fields.slug": slug,
    };
    const items = await new ContentfulClient().GetPosts(query);
    if (items.length === 0) {
      return { props: { errors: "not found" } };
    }
    return { props: { item: items[0] } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
