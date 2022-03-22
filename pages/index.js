import Layout from '../components/layout'
import Link from 'next/link'
import { Posts } from '../lib/metadata'
import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout
      home
      headerImage="/images/cover.jpeg"
      allPostsData={allPostsData}
      postsHeading="Recent Posts"
    >
      <div className={utilStyles.centered}>
        {`Welcome to Lauren's Big Adventure! You'll find pages about hiking, camping, and the outdoors here.`}
      </div>
      <div className={utilStyles.centered}>
        <Link href='/about'>{` Read More...`}</Link>
      </div>
      
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
