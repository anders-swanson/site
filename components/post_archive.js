import Image from "next/image";
import Link from "next/link";
import utilStyles from '../styles/utils.module.css'
import styles from './postbox.module.css'
import { CapitalizeWords } from "../lib/common";
import { FilterTag } from "../lib/post_filter";
import { Matches } from "../lib/search";


const imgSizing = 100

export default function Archive({ posts, tags, search }) {
    posts = search.length === 0 ? posts : Matches(search, posts)

    return (
        <>
        {tags.map(({ params }) => (
            <section
                key={params.id}
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <div style={{display: "flex"}}>
                    <h2 className={utilStyles.headingLg}>
                        {CapitalizeWords(params.id)}
                    </h2>            
                </div>
                <hr/>
                <div>
            {FilterTag(posts, params.id).map(({ ...item }) => (
                <>
                    <div style={{'display': 'flex'}}>
                        <div style={{
                            'display': 'block',
                            'marginRight': '10px',
                            }}>
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
                        </div>

                        <div style={{
                            'width': '300px',
                        }}>
                            <Link href={`/blog${item.id}`} className={styles.postLink}>
                                <a style={{'fontSize': '18px'}}>{item.title}</a>
                            </Link>
                            <div className={styles.description}>
                                <Link style={{'color': 'black'}} href={`/blog${item.id}`}>{item.preview}</Link>
                            </div>
                        </div>
                    </div>
                    <br/>
                </>
                ))}
                </div>
            </section>
        ))}
        </>
    )
}
