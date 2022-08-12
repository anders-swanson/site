import utilStyles from '../styles/utils.module.css'
import styles from './postbox.module.css'
import { CapitalizeWords } from '../lib/common'
import { useState } from 'react'
import Post from './post'
import config from '../lib/config'

const imgSizing = 280
const selectedStyles = {'fontWeight': 'bold', 'textDecoration': 'underline', 'color': 'black'}

export default function PostBox({ posts, heading, postBoxClass, perPage }) {
    const pbClass = postBoxClass ? postBoxClass : styles.postBox
    const headingUpper = CapitalizeWords(heading)
    const itemsPerPage = perPage ? perPage : config.itemsPerPage
    const pages = [...Array(Math.ceil(posts.length / itemsPerPage)).keys()]
    const [idx, setIdx] = useState(0)
    const items = posts.slice(idx * itemsPerPage, (idx * itemsPerPage) + itemsPerPage)

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
        <br/><br/>
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
