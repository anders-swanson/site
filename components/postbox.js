import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import { CapitalizeWords } from '../lib/common'

export default function PostBox({ posts, heading }) {
    const headingUpper = CapitalizeWords(heading)
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div style={{display: "flex"}}>
            <h2 className={utilStyles.headingLg}>{headingUpper}</h2>
        </div>
        <hr/>
        <div className={utilStyles.postBox}>
          {posts.map(({ ...item }) => (
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
    )
}