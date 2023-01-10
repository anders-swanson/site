import Layout from "../components/layout";
import { Posts } from "../lib/metadata";
import FeaturedPost from "../components/featuredpost";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function Home({ posts, featuredPost }) {
  return (
    <Layout
      home
      headerImage="/images/cover.jpeg"
      allPostsData={posts}
      postsHeading="Recent Posts"
      description={`Do you like exploring the outdoors? Join us as we share recent hiking trips, camping suggestions, and backcountry guides.`}
      ogImage="/images/cover.jpeg"
    >
      <div className={utilStyles.flexGapContainer}>
        <Image
          src="https://lh3.googleusercontent.com/pw/AL9nZEWt1IXz-Pf-KlWIEGhhhvAzIRqEwt8d1j2FSXtnwjfEI6DxY_w-zUi79-hFIb_FH4pUUXKbSN6W9w9PUAkSk2BnJGRt48WcoRn3gVmfjlD6HE7OBLaRzsYhgDfYGRfrQMXp2R7xgOv_a6YnHKdpNXyd=w800-h535-no?authuser=0"
          width={800}
          height={535}
        />
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
