import Head from 'next/head'
import Layout, { title } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { Posts } from '../lib/metadata'
import PostBox from '../components/postbox'

export default function Home({ allPostsData }) {
  return (
    <Layout 
      home
      headerImage="/images/cover.jpeg"
    >
      <Head>
        <title>{title}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      </section>
      <PostBox posts={allPostsData} heading="Recent Posts"/>
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
