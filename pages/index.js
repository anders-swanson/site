import Layout from '../components/layout'
import { Posts } from '../lib/metadata'
import ReactGA from 'react-ga';

// This enables google analytics
ReactGA.initialize('G-XKQY1855YQ');

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
