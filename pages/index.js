import Layout from '../components/layout'
import { Posts } from '../lib/metadata'
import FeaturedPost from '../components/featuredpost'

export default function Home({ posts, featuredPost }) {
  return (
    <Layout
      home
      headerImage="/images/cover.jpeg"
      allPostsData={posts}
      postsHeading="Recent Posts"
      description={`Welcome to Trails and Trekking! You'll find pages about hiking, camping, and the outdoors here.`}
      ogImage="/images/cover.jpeg"
    >
      <FeaturedPost post={featuredPost}/>

    </Layout>
  )
}

export async function getStaticProps() {
  const posts = Posts()
  const featuredPost = posts.shift()
  return {
    props: {
      posts,
      featuredPost
    }
  }
}
