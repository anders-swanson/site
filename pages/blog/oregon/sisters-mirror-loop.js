import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import { ImagePathBuilder, CentralCascadesWildernessPermit } from "../../../lib/common"
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Sister's Mirror Loop",
    "desc": "",
    "date": "2021-06-19",
    "image": "/images/oregon/sisters-mirror-loop/thumbnail.jpg",
    "tags": ["backpacking", "lakes"]
}

const subText = '18.61 miles, 2,011 feet gain, 1 night'
const image = ImagePathBuilder('/images/oregon/sisters-mirror-loop')
const trailhead = 'https://www.google.com/maps/place/Quinn+Meadow+Horse+Camp/@43.9975329,-121.7890709,17z/data=!3m1!4b1!4m5!3m4!1s0x54b8abda495b57bb:0xab653de931fb5259!8m2!3d43.9975291!4d-121.7868822'
const sistersMirror = 'https://www.google.com/maps/place/Quinn+Meadow+Horse+Camp/@43.9975329,-121.7890709,17z/data=!3m1!4b1!4m5!3m4!1s0x54b8abda495b57bb:0xab653de931fb5259!8m2!3d43.9975291!4d-121.7868822'

export default function Post() {
    return (
        <Layout headerImage={image('cover.jpg')} headerText={metadata.title} subText={subText}>
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    Starting at the <Link href={trailhead}>Quinn Meadows Horse Camp</Link>, we completed a one-night backpacking
                    loop of <Link href={sistersMirror}>{`Sister's Mirror Lake`}</Link>{`. On the way up we passed Horse lake, and took the
                    Red Hill trail to Sister's Mirror. About three miles from the Mirror Lakes area, the trail was completely lost under
                    snow, and we relied on GPS to reach to the lake, trail blazes were not visible. On second day, we took the Mirror
                    Lakes trail back towards Quinn Meadows, there was hardpack snow almost the entire way to the trailhead.`}
                    <br/>
                    If you are thinking of doing this loop before melt out, consider bringing a GPS, spikes, and a topo-trail map.
                    Route-finding would be difficult to impossible without these items.
                </div>
                <Image
                        alt='trail'
                        height={450}
                        width={600}
                        src={image('log.jpg')}
                />
                <div className={utilStyles.textBlock}>
                    {`We camped on the shore of Sister's Mirror lake, in the Mirror Lakes area near South Sister. There's a huge amount of
                    lakes in this area, and you could easily spend a day wandering between them. The lakes range in size from tiny ponds to 
                    average-sized lakes like Sister's Mirror.
                    The area is popular for day hikers and backpackers, but due to the snowpack in mid-June, we saw only one other couple 
                    camping.`}
                    <br/><br/>
                    Please note that the <Link href={CentralCascadesWildernessPermit}>Central Cascades Wilderness</Link> is a permitted
                    entry zone. The trailheads used in this trip are limited for overnight use.
                </div>
                <Image
                        alt='silhouette'
                        height={450}
                        width={600}
                        src={image('silhouette.jpg')}
                />
                <div style={{'width': '1200px'}}>
                    While not required, bringing your floaty is recommended. The water might be a bit cold in June!
                </div>
                <Image
                        alt='floating'
                        height={800}
                        width={1200}
                        src={image('floaty.jpg')}
                />
            </div>
            <hr/>
            <div className={utilStyles.flexWrapContainer}>
               <Image
                    height={450}
                    width={300}
                    alt='tent'
                    src={image('tent.jpg')}
                />
                <Image
                    height={450}
                    width={600}
                    alt='lake'
                    src={image('lake.jpg')}
                />
                <Image
                    height={600}
                    width={900}
                    alt='mirror'
                    src={image('mirror.jpg')}
                />
            </div>
        </Layout>
    )
}
