import Layout from '../components/layout'
import { Posts } from '../lib/metadata'

export default function Home({ allPostsData }) {
  return (
    <Layout
      home
      headerImage="/images/cover.jpeg"
      allPostsData={allPostsData}
      postsHeading="Recent Posts"
    >
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = Posts()
  return {
    props: {
      allPostsData
    }
  }
}
