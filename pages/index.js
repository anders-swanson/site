import Head from 'next/head'
import Layout, { title } from '../components/layout'
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
      postsHeading="Posts"
    />
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
