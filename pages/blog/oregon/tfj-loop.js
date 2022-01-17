import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import { ImagePathBuilder } from "../../../lib/common"
import Link from 'next/link'

//+metadata
let metadata = { 
    "title": "Three Fingered Jack Loop",
    "desc": "",
    "date": "2021-07-24",
    "image": "/images/oregon/tfj-loop/thumbnail.jpg",
    "tags": ["backpacking", "lakes"]
}

const subText = '35.68 miles, 4,623 feet gain, 1 night'
const image = ImagePathBuilder('/images/oregon/tfj-loop')
const trailhead = 'https://www.fs.usda.gov/recarea/deschutes/recreation/hiking/recarea/?recid=81745&actid=51'

export default function Post() {
    return (
        <Layout headerImage={image('cover.jpg')} headerText={metadata.title} subText={subText}>
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    We started our loop at the <Link href={trailhead}>Round Lake Trailhead</Link> in the Mt. Jefferson Wilderness. While there are
                    many access points to this loop, we happened to pick Round Lake because overnight permits were still
                    available.
                    <br/><br/>
                    {`It's not recommended to follow Google Maps to the trailhead, which will take you on a very rought road.
                    Our passenger car didn't have enough clearance for the boulders in the road, and we had to park about 2.5 miles from the 
                    trailhead, adding a total of 5 miles to the round trip. Instead, turn left onto NF-1210 off of Jack Lake Road, continuing on
                    NF-1210 for 5.8 miles. At Round Lake, turn right onto NF-600, driving a short distance to the trail marker
                    near the Round Lake Wilderness retreat. This route is longer, but much better graded.`}

                </div>
                <Image
                        alt='square lake'
                        height={450}
                        width={600}
                        src={image('square-lake.jpg')}
                />
                <div className={utilStyles.textBlock}>
                    {`We looped clock-wise around Three Fingered Jack, making detours for Summit lake and Canyon Creek meadows. Canyon Creek meadows
                    is a great spot for wildflowers, and close-up views to the east face of Three Fingered Jack. If you're willing to make the scramble,
                    you can also ascend to the summit at 7,844 ft.`}
                    <br/><br/>
                    {`As you make your way around the loop, you'll get panoramic views of the Mt. Jefferson wilderness, and on the south side, views
                    down to Mt. Washington and the Three Sisters. A large portion of the loop is through scrubby, open burn, and can be excruciatingly
                    hot on summer days. Thankfully the route is punctuated by a large amount of lakes and meadows,
                    and it is never too far to a water source.`}
                </div>
                <Image
                        alt='square lake with lauren'
                        height={450}
                        width={600}
                        src={image('square-lake2.jpg')}
                />
                <div className={utilStyles.flexWrapContainer}>
                    {`There are a lot of decent camping spots along the loop - we ended up camping at Wasco lake, which is popular with backpackers. 
                    All the camping areas along this route are primitive. The second day was a bit of a slog - we had much farther to hike than anticipated,
                    and the temperatures began creeping towards the ninties in the afternoon. By the time we made it back to the car, we were exhausted, 
                    dusty, and dead-tired from the heat, but thankful for our time in the beautiful Mt. Jefferson Wilderness.`}                                
                </div>
            </div>
            <hr/>
            <div className={utilStyles.flexWrapContainer}>
                <Image
                        alt='canyon creek meadows'
                        height={450}
                        width={600}
                        src={image('canyon-creek-meadows.jpg')}
                />
                <Image
                        alt='three fingered jack'
                        height={450}
                        width={600}
                        src={image('tfj.jpg')}
                />
                <Image
                        alt='Lauren Meadow'
                        height={800}
                        width={600}
                        src={image('lauren-meadow.jpg')}
                />
                <Image
                        alt='Lauren Meadow 2'
                        height={800}
                        width={600}
                        src={image('lauren-meadow-2.jpg')}
                />
            </div>
        </Layout>
    )
}
