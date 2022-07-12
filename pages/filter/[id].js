
import Layout from "../../components/layout";
import { Tags, Posts } from "../../lib/metadata";
import { FilterTag } from "../../lib/post_filter";

export default function Post({ id, posts }) {
    return (
        <Layout
            headerImage="/images/cover.jpeg"
            allPostsData={posts}
            postsHeading={id}        
        />
    )
}

export async function getStaticPaths() {
    const paths = Tags()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    return {
        props: {
            id: params.id,
            posts: FilterTag(Posts(), params.id)
        }
    }
}
