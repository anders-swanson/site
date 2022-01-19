import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Burger from './burger'
import PostBox from './postbox'
import Search from './search'
import { useState, useEffect } from 'react'
import { CapitalizeWords } from '../lib/common'

export const title = `Lauren's Big Adventure`
const name = title
const defaultHeaderImage = "/images/cover.jpeg"
const maxScroll = 125
const defaultHeaderColor = 'white'

export default function Layout({ children, home, allPostsData, postsHeading, headerImage, headerText, subText, headerColor}) {
  let img = headerImage ? headerImage : defaultHeaderImage
  let txt = headerText ? headerText : name
  let stxt = subText ? subText : ""
  let color = headerColor ? headerColor : defaultHeaderColor
  // State for the search box
  const [search, setSearch] = useState('')
  // State for the scroll effect
  const [isVisible, setVisible] = useState(true)

  // set isVisible property to false if the viewport is past maxScroll pixels
  const onScroll = () => {
    const currentScroll = document.body.scrollTop || document.documentElement.scrollTop
    if (currentScroll > maxScroll) {
      isVisible && setVisible(false)
    } else {
      setVisible(true)
    }
  }

  // use the scroll effect
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
        window.removeEventListener("scroll", onScroll)
    }
  })

  return (
    <>
    <Head>
      <title>{headerText ? headerText : title}</title>
    </Head>
    {isVisible && (
      <div >
        <Burger/>
        <Search
          search={search}
          setSearch={setSearch}
        />
      </div>
    )

    }
    <img
      alt=""
      src={img}
      className={utilStyles.headerImage}
    />
    
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="logo.jpg" />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {isVisible && (
        <>
          <h1 className={styles.headerText} style={{ 'color': color }}>{CapitalizeWords(txt)}</h1>
          <h1 className={styles.statsText} style={{ 'color': color }}>{stxt}</h1>
        </>
      )}
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
