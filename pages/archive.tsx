import React from "react";
import Layout from "../components/layout";
import Archive from "../components/post_archive";
import { Posts, Tags } from "../lib/metadata";

export default function ArchivePage({ posts }) {
  return (
    <Layout
      description={`Post Archive.`}
      ogImage="/cover.png"
      headerText="Archive"
      noHeader
    >
      <Archive posts={posts} tags={Tags()} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: Posts(),
    },
  };
}
