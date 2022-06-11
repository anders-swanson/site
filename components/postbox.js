import utilStyles from '../styles/utils.module.css'
import styles from './postbox.module.css'
import { CapitalizeWords } from '../lib/common'
import { Matches } from '../lib/search'
import { useState } from 'react'
import Post from './post'

const imgSizing = 280
const itemsPerPage = 4
const selectedStyles = {'fontWeight': 'bold', 'textDecoration': 'underline', 'color': 'black'}

export default function PostBox({ posts, search, heading, postBoxClass }) {
    const pbClass = postBoxClass ? postBoxClass : styles.postBox
    const headingUpper = CapitalizeWords(heading)
    const filteredPosts = search.length === 0 ? posts : Matches(search, posts)
    const pages = [...Array(Math.ceil(filteredPosts.length / itemsPerPage)).keys()]
    const [idx, setIdx] = useState(0)
    const items = filteredPosts.slice(idx * itemsPerPage, (idx * itemsPerPage) + itemsPerPage)

    return (
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div style={{display: "flex"}}>
            <h2 className={utilStyles.headingLg}>{headingUpper}</h2>            
        </div>
        <hr/>
        <div className={pbClass}>
          {items.map(({ ...item }) => (
            <Post
              key={item.id}
              item={item}
              imgSizing={imgSizing}
            />
          ))}
        </div>
        <div className={styles.pageNums}>
          {pages.map((pageNum) => (
            <button 
              style={pageNum === idx ? selectedStyles : {}}
              onClick={() => setIdx(pageNum)}
              key={pageNum}
            >
              {pageNum+1}
            </button>
          ))}
          </div>  
      </section>
    )
}
