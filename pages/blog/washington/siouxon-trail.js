import Link from "next/link"
import Image from "next/image"
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Slider from "../../../components/slider"
import { ImagePathBuilder } from "../../../lib/common"

//+metadata
let metadata = {
    "title": "Siouxon Creek Trail",
    "desc": "",
    "date": "2021-11-28",
    "image": "/images/washington/souixon-trail/falls1.jpg",
    "tags": ["hiking", "waterfall"]
}

const image = ImagePathBuilder('/images/washington/souixon-trail')
const trailhead = 'https://www.google.com/maps/place/Lower+Souixon+Trail+Parking/@45.9477672,-122.226288,14.08z/data=!4m12!1m6!3m5!1s0x54942b51083d9eb1:0xae0d2a45bb6c5d62!2sSiouxon+Creek+Trailhead!8m2!3d45.946644!4d-122.1774154!3m4!1s0x54942cc3dc0b270f:0xbf9497bd565d4d3b!8m2!3d45.9406036!4d-122.2294643'

export default function Post() {
    return (        
        <Layout headerImage={metadata.image} headerText={metadata.title}>            
            <div className={utilStyles.flexWrapContainer}>                
                <div style={{'width': '500px'}}>
                    <Link href={trailhead}>Siouxon creek trailhead</Link>{` is located in south-western Washington, a few miles south of highway
                    503 near Mount St. Helens. The access road is closed after the lower trailhead due to the 2020 Big Hollow fire, and
                    may be closed at a gate 1/2 mile before the lower trailhead during the winder - 
                    along the trail you'll find sections of forest recovering from the 2020 burn.`}
                    <br/><br/>
                    {`About two miles in, there is a washout on a side creek that requires ankle-deep fording during the rainy season. You'll pass 
                    the closed upper trailhead after around three miles, and will start to have a better view of Siouxon creek as the trail draws 
                    closer to the water.`}
                    <br/><br/>
                    With the recent rainfall, the waterfalls were flowing hard. More falls can be found further along the trail,
                    but as daylight was running out we decided to turn back. We ended up hiking 15.24 miles with 2,195 feet of 
                    elevation gain.
                </div>
                <Slider
                    slides={[
                        image('burn1.jpg'),
                        image('burn2.MOV'),
                        image('burn3.jpg'),
                        image('washout.MOV'),
                        image('washout-reverse.MOV'),
                        image('f1.MOV'),
                        image('f2.MOV'),
                        image('f3.MOV')
                    ]}
                /> 
            </div>
            <hr/>
            <div className={utilStyles.flexContainer}>
                <Image
                    height={400}
                    width={400}
                    alt='chanterelle'
                    src={image('chanterelle.jpg')}
                />
                <Image
                    height={400}
                    width={400}
                    alt='falls'
                    src={image('falls2.jpg')}
                />
                <Image
                    height={400}
                    width={400}
                    alt='lobster'
                    src={image('lobster.jpg')}
                />
            </div>
        </Layout>
    )
}