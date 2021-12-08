import Head from 'next/head'
import Image from 'next/image'
import Layout, { title } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedMetadata } from '../lib/posts'
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
        <ul className={utilStyles.list}>
        {allPostsData.map(({ ...item }) => (
            <li key={item.id}>
              <div className={utilStyles.listItem}>
                <Link href={`/blog/${item.id}`}>
                  <a>
                    <Image         
                      src={item.image} className={utilStyles.borderRounded}
                      height={144}
                      width={144}
                    />
                  </a>                                 
                </Link>
                
                <div className={utilStyles.listItemText}>
                  <Link href={`/blog/${item.id}`}>
                    <a>{item.title}</a>
                  </Link>
                  <br/>
                  <small>                  
                    {item.desc}
                  </small> 
                  <br/>
                  <small className={utilStyles.lightText}>
                    <Date dateString={item.date} />
                  </small>
                  <br/>
                  {item.tags.map((t) => (
                    <button className={utilStyles.tagButton}>
                      {t}
                    </button>
                  ))}
                </div>                
              </div>                       
            </li>
          ))}
        </ul>
      </section>
    </Layout>
      
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedMetadata()
  return {
    props: {
      allPostsData
    }
  }
}
