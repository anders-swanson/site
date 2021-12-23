import Head from 'next/head'
import Layout, { title } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { Posts } from '../lib/metadata'

export default function Home({ allPostsData }) {
  return (
    <Layout
      home
      headerImage="/images/cover.jpeg"
      allPostsData={allPostsData}
      postsHeading="Recent Posts"
    >
      <Head>
        <title>{title}</title>
      </Head>
      <section className={utilStyles.headingMd}/>
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
