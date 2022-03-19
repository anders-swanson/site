import Link from "next/link"
import Image from "next/image"
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Slider from "../../../components/slider"
import { rawData } from "../../../lib/common"
import RelatedPosts from "../../../components/related_posts"

//+metadata
let metadata = {
    "title": "Siouxon Creek Trail",
    "date": "2021-11-28",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLXGmSLxR_PLkzmOxphgROXQYNAxjXtjD9Hl-n0Ph3gMeNHcBlq7NkW_mioJoitYBnUHWYS3Sb2Y6PAWLJ4pGBa9-xAcgo5zwIjVPIbyydmGj8JGgUEaRUHqvnBnDkhvhkkB0d3rVA5LmwDQ1dlnBtR_=w801-h1067-no?authuser=0",
    "tags": ["hiking", "waterfall"]
}


const trailhead = 'https://www.google.com/maps/place/Lower+Souixon+Trail+Parking/@45.9477672,-122.226288,14.08z/data=!4m12!1m6!3m5!1s0x54942b51083d9eb1:0xae0d2a45bb6c5d62!2sSiouxon+Creek+Trailhead!8m2!3d45.946644!4d-122.1774154!3m4!1s0x54942cc3dc0b270f:0xbf9497bd565d4d3b!8m2!3d45.9406036!4d-122.2294643'
const subText = '15.25 miles, 2,915 feet gain'

const burn1 = 'https://lh3.googleusercontent.com/pw/AM-JKLXYdKIYKzgRfy8Vie1af9Nm_jbLL9dKSYIWKMk7vaDK17gxeof4fqlZpKyroWPsrKfevlNKh6Xb8k3ftl6j46vTn07sn9DGSHrybqReMJzE3oPlF6OSdgGe0LPAwlFC1uMmOCCjNXy3qfp9It4P2tLS=w1423-h1067-no?authuser=0'
const burn3 = 'https://lh3.googleusercontent.com/pw/AM-JKLXY_SuGswjCuDI9-FTbT15u-Gkx60ibwL7IKIkAtgZoZz1WHaYUyYgRP03CvHEZ3LhSOhISTZ0G64E5zKv3wi3mVlGsI1lYcO7bqlIEW8vwYwP3K4AoitiXuk9blRnoF49cPe0xRHGBbLfWtxAjAL7u=w801-h1067-no?authuser=0'
const chanterelle = 'https://lh3.googleusercontent.com/pw/AM-JKLWKb290kyiOGYHOyPsO7q9Lv4sdBRpohJNfdghBTBxZem-w8rZqQJ4Uh8axFIL2j-2fuQls03dPlmxqLfOo2DJYuHz-4ckq1p5o1_oENPPA96mBEvvtD4MOlfMHCNDTpuncrM8KNYHbbnObr6jH-bAk=w801-h1067-no?authuser=0'
const lobster = 'https://lh3.googleusercontent.com/pw/AM-JKLVegy4pqaiRkoHCQndPzI-x-c_8ofqiQpd8u7RtevDe0c5YjCJe145Nsc5wMHanQLJCFrcbK_etKLjEThbckVkFgRMyIdr7kronG23RACLjg893V5g79d9riuoaTxiTVuyudIWf9p87JtJ2PZQWHnao=w801-h1067-no?authuser=0'
const falls2 = 'https://lh3.googleusercontent.com/pw/AM-JKLXAVZGbjPCyU30ifygza2qrF-W9UTiTwLrmK0xVpePEuFz2lnCJk6Nx439a630ZoJjG1PNVyKq1cPf9T7rvIth3Y8vVNNzTEeTVrXYhamku9QbFbc6PYdlr8SAHSCV8hzM7N5a60XEnroVgvd_dS71x=w801-h1067-no?authuser=0'


export default function Post() {
    return (        
        <Layout headerImage={metadata.image} headerText={metadata.title} subText={subText}>            
            <div className={utilStyles.flexWrapContainer}>                
                <div className={utilStyles.textBlock}>
                    The <Link href={trailhead}>Siouxon creek trailhead</Link>{` is located in southwestern Washington, a few miles south of highway
                    503 near Mount St. Helens. This is good hike to view waterfalls, but you'll have to walk pretty far: the access road has been
                    closed after the lower trailhead due to the 2020 Big Hollow fire, and may be closed at a gate 1/2 mile before the lower trailhead during the winter. 
                    Along the trail you'll find sections of forest recovering from the 2020 burn, and there may be unexpected obstacles (washouts, downed trees, etc.).`}
                    <br/><br/>
                    {`About two miles in, there is a washout on a side creek that requires ankle-deep fording during the rainy season. You'll pass 
                    the closed upper trailhead after around three miles, and will start to have a better view of Siouxon creek as the trail draws 
                    closer to the water.`}
                    <br/><br/>
                    Just before our visit, there had been heavy rainfall, so the waterfalls were flowing hard. There are more falls to be found further up the trail,
                    but as daylight was running out we decided to turn back. We ended up hiking 15.24 miles with 2,195 feet of 
                    elevation gain. If you decide to hike the full length of the trail, it looks to be around 24 miles.
                </div>
                <Slider
                    slides={[
                        rawData('f2.mp4'),
                        rawData('f1.mp4'),
                        rawData('f3.mp4'),
                        rawData('washout.mp4'),
                        rawData('washout-reverse.mp4'),
                        burn1,
                        rawData('burn2.mp4'),
                        burn3
                    ]}
                /> 
            </div>
            <hr/>
            <div className={utilStyles.flexContainer}>
                We were able to find wild, edible mushrooms growing beside the trail. Pictured below are Golden Chanterelles and a Lobster mushroom.
            </div>
            <div className={utilStyles.flexContainer}>
                <Image
                    height={400}
                    width={400}
                    alt='chanterelle'
                    src={chanterelle}
                />
                <Image
                    height={400}
                    width={400}
                    alt='falls'
                    src={falls2}
                />
                <Image
                    height={400}
                    width={400}
                    alt='lobster'
                    src={lobster}
                />
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="waterfall"
            />
        </Layout>
    )
}
