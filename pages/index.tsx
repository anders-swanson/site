import Layout from "../components/layout";
import { Posts } from "../lib/metadata";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import React from "react";
import FeaturedPost from "../components/featuredpost";

export default function Home({ posts }) {
  return (
    <Layout
      home
      allPostsData={posts}
      postsHeading="Recent Posts"
      description={`Do you like exploring the outdoors? Join us as we share recent hiking trips, camping suggestions, and backcountry guides.`}
    >
      <div className={utilStyles.flexGapContainer}>
        <Image
          src="/cover.png"
          alt="Trails and Trekking"
          width={800}
          height={400}
        />
      </div>
      <br />
      <FeaturedPost post={false} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = Posts();
  return {
    props: {
      posts,
    },
  };
}
