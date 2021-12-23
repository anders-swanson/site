import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Burger from './burger'
import PostBox from './postbox'
import Search from './search'
import {useState} from 'react'

export const title = `Lauren's Big Adventure`
const name = title
const defaultHeaderImage = "/images/cover.jpeg"

export default function Layout({ children, home, allPostsData, postsHeading, headerImage, headerText}) {
  let img = headerImage ? headerImage : defaultHeaderImage
  let txt = headerText ? headerText : name
  const [search, setSearch] = useState('')

  return (
    <>
    <div>
      <Burger/>
      <Search
        search={search}
        setSearch={setSearch}
      />
    </div>
    <img 
      src={img}
      className={utilStyles.headerImage}
    />
    
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="logo.jpg" />        
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {
          <>                      
            <h1 className={utilStyles.heading2Xl}>{txt}</h1>            
          </>
        }
      </header>
      <main>{children}</main>
      {allPostsData && (
        <PostBox
          posts={allPostsData}
          search={search}
          heading={postsHeading}
        />
      )}
      {!home && (      
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}      
    </div>
    </>
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
