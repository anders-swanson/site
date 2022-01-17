import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import { ImagePathBuilder } from "../../../lib/common"
import Slider from "../../../components/slider"
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Fairlyland Loop + Queen's Garden",
    "desc": "",
    "date": "2020-11-09",
    "image": "/images/utah/fairyland-loop/thumbnail.jpg",
    "tags": ["hiking"]
}

const subText = '13.52 miles, 2,464 feet gain'
const image = ImagePathBuilder('/images/utah/fairyland-loop')
const trailhead = 'https://www.google.com/maps/place/Fairyland+Loop+Trail/@37.6489936,-112.1489393,17.29z/data=!4m5!3m4!1s0x873568d683d50bf7:0xfa8d2eaaafebdff4!8m2!3d37.6495899!4d-112.1475292'

export default function Post() {
    return (
        <Layout headerImage={image('cover.jpg')} headerText={metadata.title} subText={subText} headerColor={`black`}>
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    The Fairyland loop starts at <Link href={trailhead}>Fairyland Point</Link>{` in Bryce Canyon 
                    National Park. The loop trail itself is around 8 miles, but we added on the Queen's garden loop
                    near the end to extend the trail. This is a great trail to see Bryce's hoodoo rock
                    formations, rim views, and natural bridges.`}
                    <br/><br/>
                    {`Because of the cold weather and snow (6" had fallen the night before, and the high was 23F), 
                    there weren't too many other groups on the trail.
                    If you're thinking of hiking this after it snows, bring microspikes or crampons, there are multiple places
                    where the trail can get steep and icy.`}
                </div>
                <Slider
                        height={400}
                        width={600}
                        slides={[
                            image('rim.jpg'),
                            image('rim2.jpg')
                        ]}
                />
                <div style={{'width': '1200px', 'display': 'flex'}}>                
                   {`I can't comment on how this trail is during warmer weather, but it is absolutely amazing in the snow.
                   The snow adds a beautiful layer of texture on the rock formations, which are already impressive in their
                   own right.`}
                </div>
            </div>             
            <div className={utilStyles.flexWrapContainer}>
                    <Image
                        alt='tunnel'
                        height={450}
                        width={600}
                        src={image('tunnel.jpg')}
                   />
                   <Image
                        alt='tunnel 2'
                        height={450}
                        width={600}
                        src={image('tunnel2.jpg')}
                   />
                   <Image
                        alt='tunnel 2'
                        height={950}
                        width={1200}
                        src={image('thors-hammer.jpg')}
                   />
                   <Slider
                    width="1200px"
                    height="800px"
                    slides={[
                        image('twin-bridges.jpg'),
                        image('snow-hoodoo.jpg'),
                        image('tower-bridge.jpg')
                    ]}
                /> 
            </div>
        </Layout>
    )
}
