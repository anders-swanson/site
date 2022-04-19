import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Burger from './burger'
import PostBox from './postbox'
import Search from './search'
import { useState, useEffect } from 'react'
import { CapitalizeWords } from '../lib/common'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-218901111-1');

export const title = `Lauren's Big Adventure`
const name = title
const defaultHeaderImage = "/images/cover.jpeg"
const maxScroll = 5
const defaultHeaderColor = 'white'

export default function Layout({ children, home, allPostsData, postsHeading, headerImage, ogImage, headerText, subText, description, headerColor}) {
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

  // track page views with google analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <>
    <Head>
      <title>{headerText ? headerText : title}</title>
      <link rel="icon" href="logo.jpg" />
      <meta name="og:title" content={headerText ? headerText : title}/>
      <meta name="og:image" content={ogImage ? ogImage : defaultHeaderImage}/>
      <meta name="og:description" content={description ? description : title}/>
      <meta name="twitter:card" content={description ? description : title}/>
      <meta name="keywords" content="hiking, backpacking, oregon"/>


      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"/> 
    </Head>
    <Burger/>
    {isVisible && (
      <div>
        <Search
          search={search}
          setSearch={setSearch}
        />
      </div>
    )}
    <img
      alt=""
      src={img}
      className={utilStyles.headerImage}
    />
    
    <div className={styles.container}>
      {isVisible && (
        <div className={styles.fixedText}>
          <h1 className={styles.headerText} style={{ 'color': color }}>{CapitalizeWords(txt)}</h1>
          <h1 className={styles.statsText} style={{ 'color': color }}>{stxt}</h1>
        </div>
      )}
      <main>{children}</main>
      {allPostsData && (
        <>
          <PostBox
            posts={allPostsData}
            search={search}
            heading={postsHeading}
          />
        </>
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
