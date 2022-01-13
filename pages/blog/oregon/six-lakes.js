import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import { ImagePathBuilder } from "../../../lib/common"
import Link from 'next/link'
import Video from '../../../components/video'

//+metadata
let metadata = {
    "title": "Six Lakes Loop",
    "desc": "",
    "date": "2021-06-26",
    "image": "/images/oregon/six-lakes/thumbnail.jpg",
    "tags": ["backpacking", "lakes"]
}

const subText = '20.87 miles, 2,218 feet gain, 1 night'
const image = ImagePathBuilder('/images/oregon/six-lakes')
const trailhead = 'https://www.google.com/maps/place/Six+Lakes+Trailhead/@43.9511829,-121.7962771,14.67z/data=!4m5!3m4!1s0x54b8a971aa2baa5f:0x7aa495dccceb6d66!8m2!3d43.9531277!4d-121.8009068'

export default function Post() {
    return (
        <Layout headerImage={image('cover.jpg')} headerText={metadata.title} subText={subText}>
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    We backpacked this loop over one night from the <Link href={trailhead}>Six Lakes Trailhead</Link>, camping
                    at Mink lake, the largest lake in the Six Lakes basin. There are countless lakes of varying size here, some
                     with designated trails, others that require bushwhacking. Most of the lakes are worth visiting, some have 
                    fingerling trout, and absolutely <b>all</b> of them will be swarming with mosquitos until mid-late summer. I
                    think we counted 15 lakes during our trip.
                    <br/><br/>
                    {`Overall, it was difficult to enjoy this trip due to one overriding factor: This place is infested with the worst
                    mosquitos I have encountered, anywhere, anytime. We're talking thick clouds of mosquitos that follow you day and night,
                    requiring regular dousings of DEET to prevent being completely devoured. Thankfully, the mosquitos didn't come 
                    near the our campsite at Mink lake, but there were omnipresent at all other locations of the trail.`}
                </div>
                <Image
                        alt='campsite'
                        height={450}
                        width={300}
                        src={image('campsite.jpg')}
                />
                <div className={utilStyles.textBlock}>
                    {`After camping at Mink Lake we booked it back to the trailhead, shortening our loop at avoid to get back to the car
                    quicker. I don't think we stopped on the way back except to re-apply DEET.`}
                    <br/><br/>
                    {`I recommend visiting in late summer or early fall, before snowfall closes down the Cascade Lakes highway. You might
                    have better luck with the mosquitos then. Aside from that, the lakes are beautiful, good for swimming, and you'll enjoy 
                    relative solitude out here. Being in the Three Sisters Wilderness, a permit is required for overnight travel.`}
                </div>
                <Video
                    height={450}
                    width={300}
                    src={image('i1.MOV')}
                />                
            </div>
            <div className={utilStyles.flexWrapContainer}>
                {`Day 1: 11.89 miles, Day 2: 8.98 miles.`}
            </div>
            <hr/>
            <div className={utilStyles.flexWrapContainer}>
                <Image
                        alt='mink lake'
                        height={450}
                        width={300}
                        src={image('mink-lake.jpg')}
                />
                <Image
                    height={450}
                    width={300}
                    alt='wilderness'
                    src={image('i2.jpg')}
                />
                <Image
                    height={450}
                    width={300}
                    alt='wilderness'
                    src={image('i3.jpg')}
                />
                <Image
                    height={600}
                    width={900}
                    alt='lake'
                    src={image('i4.jpg')}
                />
            </div>
        </Layout>
    )
}
