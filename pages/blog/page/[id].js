import Layout from "../../../components/layout"
import FeaturedPost from "../../../components/featuredpost"
import { Pages, Posts } from "../../../lib/metadata"

export default function Post({ id, posts, featuredPost }) {
    return (
        <Layout
            headerImage="/images/cover.jpeg"
            allPostsData={posts}
            idx={id}
            postsHeading="Recent Posts"
        >
            <FeaturedPost post={featuredPost}/>
        </Layout>
    )
}

export async function getStaticPaths() {
    return {
        paths: Pages(),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const posts = Posts()
    const featuredPost = posts.shift()
    return {
        props: {
            id: params.id,
            featuredPost: featuredPost,
            posts: posts,
        }
    }
}
