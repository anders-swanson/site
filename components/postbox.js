import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import { CapitalizeWords } from '../lib/common'
import {useState} from 'react';
import { Matches } from '../lib/search'
import Search from './search'

export default function PostBox({ posts, heading }) {
    const [search, setSearch] = useState('')
    const headingUpper = CapitalizeWords(heading)

    const filteredPosts = search.length === 0 ? posts : Matches(search, posts)

    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Search
          search={search}
          setSearch={setSearch}
        />
        <div style={{display: "flex"}}>
            <h2 className={utilStyles.headingLg}>{headingUpper}</h2>            
        </div>
        <hr/>
        <div className={utilStyles.postBox}>
          {filteredPosts.map(({ ...item }) => (
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
