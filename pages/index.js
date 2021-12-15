import Head from 'next/head'
import Image from 'next/image'
import Layout, { title } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Posts from '../lib/metadata'
import Link from 'next/link'
import Date from '../components/date'

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
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recent Posts</h2><hr></hr>
        <div className={utilStyles.postBox}>
          {allPostsData.map(({ ...item }) => (
            <div>
              <Link href={`/blog/${item.id}`}>
                <a>
                  <Image         
                    src={item.image} className={utilStyles.borderRounded}
                    height={144}
                    width={144}
                  />
                </a>                                 
              </Link>
              <br/>
              <div className={utilStyles.tag}>
              {item.tags.map((t) => (
                <Link href={'/filter/' + t}>
                  {t}
                </Link>
                
              ))}  
              </div>                    
              <Link href={`/blog/${item.id}`} className={utilStyles.postLink}>
                <a>{item.title}</a>
              </Link>              
              <br/>              
              <small className={utilStyles.lightText}>
                <Date dateString={item.date} />
              </small>                                      
            </div>
          ))}
        </div>        
      </section>
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
