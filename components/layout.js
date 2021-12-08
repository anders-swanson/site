import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const title = `Lauren's Big Adventure`
const name = title
const defaultHeaderImage = "/images/profile.jpg"


export default function Layout({ children, home, headerImage}) {
  let img = !headerImage ? defaultHeaderImage : headerImage
  return (
    <>
      <img 
        src={img}
        className={utilStyles.headerImage}
        />
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />        
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {
          <>                      
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
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
