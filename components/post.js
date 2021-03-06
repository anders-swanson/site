import utilStyles from '../styles/utils.module.css'
import styles from './postbox.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import { CapitalizeWords } from '../lib/common'

export default function Post({ item, imgSizing, postStyle }) {
    const blogLink = `/blog${item.id}`
    const styling = postStyle ? postStyle : styles.post

    return (
        <div className={styling}>
            <Link href={blogLink}>
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
                key={`${item.id}-${t}`}
                >
                {CapitalizeWords(t)}
                </Link>
                
            ))}  
            </div>                    
            <Link href={blogLink} className={styles.postLink}>
                <a style={{'fontSize': '18px'}}>{item.title}</a>
            </Link>              
            <br/>
            <div className={styles.description}>
                <Link style={{'color': 'black'}} href={blogLink}>{item.preview}</Link>
            </div>         
            <div style={{'fontSize': '16px'}} className={utilStyles.lightText}>
                <Date dateString={item.date} />
            </div>
        </div>
    )
}
