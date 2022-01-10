import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import { ImagePathBuilder } from "../../../lib/common"
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Little Blitzen Gorge",
    "desc": "",
    "date": "2021-07-04",
    "image": "/images/oregon/little-blitzen/thumbnail.jpg",
    "tags": ["hiking", "waterfall"]
}

const subText = '20.04 miles, 2,867 feet gain'
const image = ImagePathBuilder('/images/oregon/little-blitzen')
const trailhead = 'https://www.google.com/maps/@42.657206,-118.7285438,18.46z'

export default function Post() {
    return (
        <Layout headerImage={image('cover.jpg')} headerText={metadata.title} subText={subText}>
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    A small parking lot for the <Link href={trailhead}>trailhead</Link> is just before South Steens campground.
                    The Little Blitzen trail starts right across the road from the parking lot.
                    <br/><br/>
                    The Little Blitzen trail follows the Little Blitzen river through a U-shaped gorge for about ten miles, ending
                    at a former glacial headwall. There are numerous small waterfalls along the way, and many wildflowers depending
                    on the season.            
                </div>
                <Image
                        alt='gorge1'
                        height={400}
                        width={600}
                        src={image('gorge1.jpg')}
                />
                <div className={utilStyles.textBlock}>
                    {`We hiked the Little Blitzen as an out-and-back day hike, which results in about a 20 mile round-trip. There's 
                    plentiful water along the trail, and several flat places to camp. If you are adventurous, the Little Blitzen
                    can be hiked as a loop with the Big Indian trail. This involves climbing out the Little Blitzen gorge via a 
                    side trail, hiking along the Steens Mountain road for a few miles, and then scrambling down into Big Indian
                    gorge. I've heard this about a 24 mile hike or backpacking trip.`}
                    <br/><br/>
                    {`There's lots to do in the surrounding Steens Mountain area, so I suggest camping at the nearby South Steens
                    campground, or one of the other campgrouns on the Steens Mountain loop road. Fishing for rainbow and lahontan 
                    cutthrout trout is possible in almost any water body of the Steens.`}
                </div>
                <Image
                        alt='gorge3'
                        height={400}
                        width={600}
                        src={image('gorge3.jpg')}
                />
                <div className={utilStyles.textBlock}>
                   
                </div>
            </div>
            <hr/>
            <div className={utilStyles.flexWrapContainer}>
                <Image
                    height={800}
                    width={1200}
                    alt='gorge2'
                    src={image('gorge2.jpg')}
                />
                <Image
                    height={800}
                    width={1200}
                    alt='gorge4'
                    src={image('gorge4.jpg')}
                />
                <Image
                    height={800}
                    width={1200}
                    alt='gorge5'
                    src={image('gorge5.jpg')}
                />
            </div>
        </Layout>
    )
}
