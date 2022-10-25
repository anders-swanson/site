import Image from "next/image";
import Link from "next/link";
import utilStyles from '../styles/utils.module.css'
import styles from './postbox.module.css'
import archiveStyles from './post_archive.module.css'
import { CapitalizeWords } from "../lib/common";
import { FilterTag } from "../lib/post_filter";
import { useState } from "react";


const imgSizing = 100

export default function Archive({ posts, tags }) {
    const [isTagVisible, setIsTagVisible] = useState(Array(tags.length).fill(true))

    const onClickHeader = (idx) => {
        const isTagVisibleCopy = [...isTagVisible]
        isTagVisibleCopy[idx] = !isTagVisibleCopy[idx]
        setIsTagVisible(isTagVisibleCopy)
    }

    return (
        <div>
        {tags.map(({ params }, idx) => (
            <section
                key={params.id}
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <div style={{display: "flex"}}>
                    <button
                        key={idx}
                        className={archiveStyles.collapseButton}
                        onClick={() => onClickHeader(idx)}
                    >
                        {getCollapseSymbol(isTagVisible[idx])}{' ' + CapitalizeWords(params.id)}
                    </button>           
                </div>
                <hr/>
                <div style={{
                    visibility: isTagVisible[idx] ? "visible" : "hidden",
                    height: isTagVisible[idx] ? "100%" : "0px"
                }}>
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
        </div>
    )
}

function getCollapseSymbol(collapsed) {
    if (collapsed) {
        return <Image src='/down-arrow.svg' height={15} width={15} alt='down arrow'/>
    }
    return <Image src='/right-arrow.svg' height={15} width={15} alt='right arrow'/>
}
