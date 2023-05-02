import Layout from "../components/layout";
import { Posts } from "../lib/metadata";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import React from "react";
import FeaturedPost from "../components/featuredpost";
import styles from "../components/index.module.css";
import IsWindowSize from "../lib/use_window_size";

export default function Home({ posts }) {
  const windowSize = IsWindowSize(1200);

  return (
    <Layout
      home
      allPostsData={posts}
      description={`Do you like exploring the outdoors? Join us as we share recent hiking trips, camping suggestions, and backcountry guides.`}
    >
      <div className={`${utilStyles.flexGapContainer} ${styles.container}`}>
        {(windowSize && (
          <Image
            src="/cover-wide.jpg"
            alt="Trails and Trekking"
            width={1205}
            height={602}
          />
        )) || (
          <Image
            src="/cover.jpg"
            alt="Trails and Trekking"
            width={799}
            height={533}
          />
        )}

        <div className={styles.overlayText}>{`TRAILS & TREKKING`}</div>
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
