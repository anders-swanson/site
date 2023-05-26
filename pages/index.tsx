import Layout from "../components/layout";
import { Posts } from "../lib/metadata";
import utilStyles from "../styles/utils.module.css";
import React from "react";
import FeaturedPost from "../components/featuredpost";
import styles from "../components/index.module.css";

export default function Home({ posts }) {
  return (
    <Layout
      home
      allPostsData={posts}
      description={`Do you like exploring the outdoors? Join us as we share recent hiking trips, camping suggestions, and backcountry guides.`}
    >
      <div className={`${utilStyles.flexGapContainer} ${styles.container}`}>
        <div className={styles.cover_image}>
          <div className={styles.text}>{`TRAILS & TREKKING`}</div>
        </div>
      </div>
      <br />
      <FeaturedPost post={false} />
      <br />
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
