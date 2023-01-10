import Layout from "../../../components/layout";
import { Pages, Posts } from "../../../lib/metadata";
import _const from "../../../lib/const";

export default function Post({ id, posts }) {
  return (
    <Layout
      headerImage={_const.noHeader}
      allPostsData={posts}
      idx={id}
      postsHeading="Recent Posts"
    ></Layout>
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
  posts.shift();
  return {
    props: {
      id: params.id,
      posts: posts,
    },
  };
}
