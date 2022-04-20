import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Slider from "../../../components/slider"
import { ImagePathBuilder } from "../../../lib/common"
import Link from 'next/link'
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "Chambers Lake Basin",
    "date": "2021-08-14",
    "image": "/images/oregon/chambers-lakes/thumbnail.jpg",
    "tags": ["hiking", "lakes", "sisters"]
}

const subText = '19 miles, 3,000 feet gain'
const image = ImagePathBuilder('/images/oregon/chambers-lakes')
const trailhead = 'https://www.google.com/maps/place/Pole+Creek+Trailhead/@44.1654537,-121.6780256,13.5z/data=!4m5!3m4!1s0x54bf4eac86a455b1:0x76d76eaa0fbae2a6!8m2!3d44.187451!4d-121.6998804'

export default function Post() {
    return (
        <Layout
            headerImage={image('cover.jpg')}
            headerText={metadata.title}
            subText={subText}
            description={`Basin lakes in the Three Sisters high country.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    The hike to Chambers Lake Basin starts at the <Link href={trailhead}>Pole Creek Trailhead</Link>{`, in the Three Sisters Wilderness.
                    Lucky for you (and us), the Pole Creek Trailhead does not require a permit for day hikers, but only for overnight use.
                    From the trailhead, you'll be hiking through an exposed, dry burn for several miles, until you
                    are within a mile of Camp Lake. There a couple creek crossings along the way, if you need water.`}
                    <br/><br/>
                    {`After the North Fork Whychus creek crossing, there's a short side trail to Demaris Lake, a reflective lake with
                    a view of South Sister. Don't feel too bad if you skip this one, as the views are better around Camp Lake.`}                   
                </div>
                <Image
                        alt='demaris lake'
                        height={450}
                        width={600}
                        src={image('demaris.jpg')}
                />
                <div className={utilStyles.textBlock}>
                    {`It'll take you about 8 miles to reach Camp Lake - along the way you'll get panoramic views of the Three Sisters.
                    Smoke from summer wildfires (unfortunately a common occurence in recent years) created a fine haze the day
                    I was hiking, and gave the mountains an ethereal look.`}
                    <br/><br/>
                    {`Camp Lake has (surprise, surprise!) a few campsites to pick from. These are all unimproved, backcountry campsites. If you do
                    intend to camp here, remember that a permit is required for overnight use in the Three Sisters Wilderness. It's an
                    gorgeous spot to camp, and you'll allow yourself more time to explore.`}
                </div>
                <Slider
                    height={450}
                    width={600}
                    slides={[
                        image('s1.jpg'),
                        image('s2.jpg'),
                        image('s3.jpg')
                    ]}
                />
                <div>
                    {`Looking up at South Sister from Camp Lake. Due to the hot summer we had, there's less snow than usual for this time
                    of year.`}
                </div>
                <Image
                        alt='camp lake'
                        height={800}
                        width={1200}
                        src={image('camp-lake.jpg')}
                />
                <div className={utilStyles.textBlock}>
                    {`If you decide to continue on from Camp Lake, consider bringing GPS and a topo-trail map. The trails from this point
                    are not maintained, and in some areas do not exist at all. If you want to fully explore the basin, be prepared to add
                    approximately 3-5 miles to your round-trip, accompanied by steep climbing on rocks/scree.`}
                    <br/><br/>
                    {`Hiking up the ridge towards South Sister brings you to Sapphire and Turquoise lakes. These lakes get their color from
                    glacial silt suspended in the water column, which reflects the light to create brilliant blue hues. Chambers Lake itself can 
                    be reached by heading towards the saddle between South Sister and Middle Sister. There's not much a trail here, but
                    the alpine area is open and easy to navigate.`}
                </div>
                <Slider
                    height={450}
                    width={600}
                    slides={[
                        image('ss1.jpg'),
                        image('ss2.jpg'),
                        image('ss3.jpg')
                    ]}
                />
            </div>
            <div>
                {`I definitely recommend camping up here, but it's a struggle to snag one of the extremely limited permits.
                As a day hike, I didn't have enough time to fully traverse the basin. Hiking the saddle has incredible (so I've heard) views, 
                more so on a clear day.`}
            </div>
            <Image
                    alt='camp lake 2'
                    height={800}
                    width={1200}
                    src={image('camp-lake-2.jpg')}
            />
            <RelatedPosts
                metadata={metadata}
                tag="sisters"
            />
        </Layout>
    )
}
