import Layout from '../components/layout'
import Link from 'next/link'
import { Posts } from '../lib/metadata'
import utilStyles from '../styles/utils.module.css'
import Post from '../components/post'

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
      <div className={utilStyles.centered}>
      <div className={utilStyles.flexGapContainer} style={{'maxWidth': '600px'}}>
        <div>
          {`Welcome to Trails and Trekking! You'll find pages about hiking, camping, and the outdoors here. While you're here, check out our
          featured post, `}<Link href={`/blog${featuredPost.id}`}>{featuredPost.title}</Link>{`.`}
        </div>
        <br/>
        <div>
          <Post item={featuredPost} imgSizing={800}/>
        </div>
      </div>

      </div>

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
