import Layout from "../components/layout";
import { Posts } from "../lib/metadata";
import FeaturedPost from "../components/featuredpost";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import React from "react";

export default function Home({ posts, featuredPost }) {
  return (
    <Layout
      home
      allPostsData={posts}
      postsHeading="Recent Posts"
      description={`Do you like exploring the outdoors? Join us as we share recent hiking trips, camping suggestions, and backcountry guides.`}
      ogImage="/images/cover.jpeg"
    >
      <div className={utilStyles.flexGapContainer}>
        <Image src="/cover.png" width={800} height={400} />
      </div>
      <br />
      <FeaturedPost post={featuredPost} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = Posts();
  const featuredPost = posts.shift();
  return {
    props: {
      posts,
      featuredPost,
    },
  };
}
