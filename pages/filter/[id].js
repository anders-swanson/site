
import Layout from "../../components/layout";
import PostBox from "../../components/postbox";
import { Tags, Posts } from "../../lib/metadata";

export default function Post({ id, posts, tags }) {
    return (
        <Layout headerImage="/images/cover.jpeg">
            <PostBox posts={posts} heading={id}/>
        </Layout>
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
    const posts = Posts().filter((post) => {
        return post["tags"].includes(params.id)
    })
    return {
        props: {
            id: params.id,
            posts: posts
        }
    }
}
