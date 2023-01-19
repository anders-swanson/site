import Layout from "../../components/layout";
import config from "../../lib/config";
import { Tags, Posts } from "../../lib/metadata";
import { FilterTag } from "../../lib/post_filter";

export default function Post({ id, posts }) {
  return (
    <Layout
      headerText={id}
      noHeader
      allPostsData={posts}
      perPage={config.itemsPerFilterPage}
      postsHeading={`${id}: ${posts.length} posts`}
    />
  );
}

export async function getStaticPaths() {
  const paths = Tags();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
      posts: FilterTag(Posts(), params.id),
    },
  };
}
