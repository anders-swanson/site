import Layout from "../../../components/layout";
import { Pages, Posts } from "../../../lib/metadata";
import FeaturedPost from "../../../components/featuredpost"

export default function Post({ id, posts }) {
  return (
    <Layout allPostsData={posts} idx={id} description={`Do you like exploring the outdoors? Join us as we share recent hiking trips, camping suggestions, and backcountry guides.`}>
      <br />
      <FeaturedPost post={false} />
      <br/>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: Pages(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = Posts();
  return {
    props: {
      id: params.id,
      posts: posts,
    },
  };
}
