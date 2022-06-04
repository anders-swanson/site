import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Slider from "../../../components/slider"
import Link from 'next/link'
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "Goblin Valley",
    "date": "2020-11-06",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLXWrT94NWtCKzcXwflU9Xa-DQI9zNvmaRyFTI2QprcDklAXjG8MTkrjrpeMsW1NTWc5joii5dg2oJJRJhHf8Sqk5oFp_Ge9pX35yeiMlqwNyfYOgUmHT1ZhPHuTfDcgVWrn6YDt-ZsFhUUnlebuOQ7U=s1067-no?authuser=0",
    "tags": ["hiking", "national park"]
}

const subText = '7.91 miles, 1,191 feet gain'
const trailhead = 'https://www.google.com/maps/place/Goblin+Overlook/@38.5670356,-110.705913,16.54z/data=!4m13!1m7!3m6!1s0x8749a2b4c60051bb:0x3d0ce33fdda3dbb6!2sGoblin+Valley+Rd,+Utah!3b1!8m2!3d38.6080852!4d-110.6837684!3m4!1s0x8749bd7b2b723b91:0xcc4f51d8ca254352!8m2!3d38.564315!4d-110.7036055'
const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLU0oZlBijhdrx4_ZI-twDykZLBDgLXxIF9fVT6IO5ylp2QuQbVp0ADeqneJ4FST1HyLFkVd35d963j5BQu9PmTpU3KVZe6ETAOIkPt1w9lbHV-IZH3XaUC5ddDjvZrg3LXVPM4-rlUYV35R85EQhl5_=w1920-h952-no?authuser=0'
const threesisters = 'https://lh3.googleusercontent.com/pw/AM-JKLWm0Gi37hqKJJc-UJDM06B36GDD3Kf4BmCp3ysqk3iYc1pXDUbkimNAcpZmBsfkNt6fhqc03bq6pNq8YuuYe7DTCV7uQEH9zXoIUnVgdRmB2AjqiNH78_BPo_lC6dvb8RNUCwfk_JUq8NT9Fw9Opybb=w1423-h1067-no?authuser=0'
const gob1 = 'https://lh3.googleusercontent.com/pw/AM-JKLWm0Gi37hqKJJc-UJDM06B36GDD3Kf4BmCp3ysqk3iYc1pXDUbkimNAcpZmBsfkNt6fhqc03bq6pNq8YuuYe7DTCV7uQEH9zXoIUnVgdRmB2AjqiNH78_BPo_lC6dvb8RNUCwfk_JUq8NT9Fw9Opybb=w1423-h1067-no?authuser=0'
const gob2 = 'https://lh3.googleusercontent.com/pw/AM-JKLVgam4xCcyMrcWWTqQZwY5IFUrLAWOJ7V112xbFYUo3yvrrW4TLo-l4NyN4gX03GFK0b1h_CAJnFjuUdmdAPLvMJbkM9CO1Mkmukh6iWgd1Tkvu206I4IQYZhFeIzw0ACcl_ZOU0DX9N9N0OxfY9AnE=w1423-h1067-no?authuser=0'
const gob3 = 'https://lh3.googleusercontent.com/pw/AM-JKLVOYH4J7XEhdnokuCOj-tNna8e-tpaFWIJFonUSTMwjYsa8aUlYTnSv_e0QsjUD3gvlzhvLjjjAxlaar_Q25NobZzg01PGONLjsoXEsTYHcM3PfyxMpurNAn1k7UOxZW4fxSZS6mYgouMajF7ExoW59=w1423-h1067-no?authuser=0'
const gob4 = 'https://lh3.googleusercontent.com/pw/AM-JKLWvz7sY-m-ofxwKV-FwKmGdLbsl6R0yszg4v8RtT52R4hwJvD4j5kOwYxNqkEmIQt-dwp9HaXUlp-20w8MMEQL8AZKmmknB3Q_Akec57TlYRSzT--Bz7uLDLIJdB_QxT7BjBsZSrYLJQ6JkRDf2Hu-C=w801-h1067-no?authuser=0'
const lair = 'https://lh3.googleusercontent.com/pw/AM-JKLWOqSsYYcgBcPglpEfla2visQc4c-T4XA5ZfGq808N8yaWv39v08Vfgs9qhk6F25oITzDlcjsBWslhwHOz8omtfbsNtkquY_cLZF0QvB7dSs1j9m3iui3gOrrJO3BJCrO2ooNfDfFZ5mprky0EWJz0J=w801-h1067-no?authuser=0'


export default function Post() {
    return (
        <Layout
            headerImage={cover}
            headerText={metadata.title}
            subText={subText}
            description={`Unique rock formations in a valley that feels like another planet.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    <Link href={trailhead}>Goblin Valley</Link>{` is a state park in Utah ($20 entry fee for day use), containing
                    unique sandstone formations that may or may not look like Goblins. The main defined trail from the parking lot
                    loops around the back of the valley, and leads to a couple of caves known as the lair of the goblin. These caves
                    are definitely interesting, but the main attraction is exploring the sandstone formations in the valley itself.
                    There's no official trail in the valley, but a multitude of social trails and offshoots. You can wander as you see
                    fit - exploring up side canyons and washes. If you climb the central feature of the valley, a grey stone hill, you
                    are granted a sweeping view of the goblins.`}                                           
                </div>
                <Image
                        alt='three sisters'
                        height={400}
                        width={600}
                        src={threesisters}
                />
                <div className={utilStyles.textBlock}>                
                    If you are thinking about making the trip to Goblin Valley - do it. This place is seriously amazing and has some of
                    the most unique and accessible sandstone formations around.
                    <br/><br/>
                    {`Camping at the state park is available for a fee, but you can drive a bit further down the road away from the
                    highway to dispersed camp sites (there's a few areas with dispersed sites along the road). These dispersed campgrounds are
                    unimproved.`}
                    <br/><br/>
                    {`If you want to continue to explore the area, there are several slot canyons a couple miles from Goblin Valley.`}
                </div>
                <Image
                        alt='goblins'
                        height={400}
                        width={600}
                        src={gob1}
                />
                <div className={utilStyles.textBlock}>
                   
                </div>
            </div>
            <div className={utilStyles.flexWrapContainer}>
                <Slider
                    width="1200px"
                    height="800px"
                    slides={[
                        cover,
                        gob2,
                        gob3
                    ]}
                /> 
            </div>
            
            <hr/>
            <div className={utilStyles.flexWrapContainer}>
                    A goblin in its lair. Hanging from goblin noses not recommended.
            </div>
            <div className={utilStyles.flexWrapContainer}>
                    <Image
                        alt='goblin in its lair'
                        height={600}
                        width={450}
                        src={lair}
                   />
                   <Image
                        alt='goblin nose'
                        height={600}
                        width={450}
                        src={gob4}
                   />
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="national park"
            />
        </Layout>
    )
}
