import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import { Posts, Tags } from "../lib/metadata";
import { CapitalizeWords } from "../lib/common";
import { FilterTag } from "../lib/post_filter";

const imgSizing = 100

export default function Index({ posts, tags }) {
    return (
        <Layout>
            {tags.map(({ params }) => (
                <section
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
                            <div style={{'marginRight': '10px'}}>
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

                            <div>
                                <div style={{'fontSize': '16px'}} className={utilStyles.lightText}>
                                    <Date dateString={item.date} />
                                </div>
                            </div>
                        </div>
                        <br/>
                    </>
                    ))}
                    </div>

                </section>
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    return {
        props: {
            posts: Posts(),
            tags: Tags(),
        }
    }
}