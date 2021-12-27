import utilStyles from '../styles/utils.module.css'
import styles from './postbox.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import { CapitalizeWords } from '../lib/common'
import { Matches } from '../lib/search'

const imgSizing = 200

export default function PostBox({ posts, search, heading }) {    
    const headingUpper = CapitalizeWords(heading)
    const filteredPosts = search.length === 0 ? posts : Matches(search, posts)

    return (
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div style={{display: "flex"}}>
            <h2 className={utilStyles.headingLg}>{headingUpper}</h2>            
        </div>
        <hr/>
        <div className={styles.postBox}>
          {filteredPosts.map(({ ...item }) => (
            <div key={item.id} className={styles.post}>
              <Link href={`/blog${item.id}`}>
                <a>
                  <Image
                    alt={item.id}       
                    src={item.image}
                    className={utilStyles.borderRounded}
                    height={imgSizing}
                    width={imgSizing}
                  />
                </a>                                 
              </Link>
              <br/>
              <div className={styles.tag}>
              {item.tags.map((t) => (
                <Link
                  href={'/filter/' + t}
                  key={item.id}
                >
                  {t}
                </Link>
                
              ))}  
              </div>                    
              <Link href={`/blog${item.id}`} className={styles.postLink}>
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
