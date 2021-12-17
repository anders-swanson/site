import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Burger from './burger'

export const title = `Lauren's Big Adventure`
const name = title
const defaultHeaderImage = "/images/profile.jpg"



export default function Layout({ children, home, headerImage, headerText}) {
  let img = headerImage ? headerImage : defaultHeaderImage
  let txt = headerText ? headerText : name
  return (
    <>
    <Burger/>
    <img 
      src={img}
      className={utilStyles.headerImage}
    />
    
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/flower.jpg" />        
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
