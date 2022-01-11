import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Slider from "../../../components/slider"
import { ImagePathBuilder } from "../../../lib/common"
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Dalles Mountain Loop + Stacker Butte",
    "desc": "",
    "date": "2021-04-25",
    "image": "/images/oregon/dalles-mountain/thumbnail.jpg",
    "tags": ["hiking", "wildflowers"]
}

//8.01	1,322.00
//4.95	1,230.00

const subText = '13 miles, 1,600 feet gain'
const image = ImagePathBuilder('/images/oregon/dalles-mountain')
const trailhead = 'https://www.google.com/maps/place/Crawford+Oaks+Trailhead/@45.6558713,-121.0971517,14.08z/data=!4m12!1m6!3m5!1s0x549621be76f4f723:0xe92aeaedd990341!2sColumbia+Hills+Historical+State+Park!8m2!3d45.642663!4d-121.1055748!3m4!1s0x549621c64b70bb85:0xed2a853923a2b8ff!8m2!3d45.6571086!4d-121.0862031'
const stackerButte = 'https://www.google.com/maps/place/Stacker+Butte+Trailhead/@45.6780985,-121.0911704,14.67z/data=!4m5!3m4!1s0x5496234deae70d3d:0xe04b8a4d61444b0f!8m2!3d45.6949542!4d-121.0925934'

export default function Post() {
    return (
        <Layout headerImage={image('cover.jpg')} headerText={metadata.title} subText={subText}>
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    We began the Dalles Mountain loop at the <Link href={trailhead}>Crawford Oaks Trailhead</Link>, looped back to the
                    trailhead, and then drove a short distance to the <Link href={stackerButte}>Stacker Butte Trailhead</Link>{`.
                    It's around 8 miles to complete the Crawford Oaks loop (more if you take all the side trails), and approximately 5
                    miles to hike up to Stacker Butte and back. Both can be completed in the same day, if you are up for it.`}
                    <br/><br/>
                    {`It's strongly recommended to visit the Dalles Mountain Ranch during the spring wildflower bloom. The peak bloom varies
                    every year with the weather, usually occurring around early May.`}
                </div>
                <Image
                        alt='trail'
                        height={450}
                        width={300}
                        src={image('trail-with-flowers.jpg')}
                />
                <div className={utilStyles.textBlock}>
                    {`During the peak bloom, the rolling hills around the ranch will be covered in yellow Balsamroot. A variety of
                    other flowers contribute to the bloom, including lupine, fleabane, and blanket flower. A the high point of the
                    Crawford Oaks loop, there is an alternate parking lot, and the historic ranch. Most people park here to view 
                    the wildflowers.`}
                    <br/><br/>
                    {`If you decide to continue up to Stacker Butte, you'll be rewarding with views of the eastern Columbia River gorge,
                    and even more wildflowers. When flowers are blooming at the Rancher, they're usually just budding at the top of 
                    Stacker Butte, due to the elevation change.`}
                </div>
                <Image
                        alt='trail'
                        height={450}
                        width={300}
                        src={image('balsamroot.jpg')}
                />
                <div style={{'width': '1200px'}}>
                    {`A favorite photo spot near the ranch is an abandoned, rusted out old car among the wildflowers. We didn't find it, 
                    but a lot of people I talked to seemed to be searching for it.`}
                </div>
                <Image
                        alt='fence with flowers'
                        height={800}
                        width={1200}
                        src={image('fence.jpg')}
                />
            </div>
            <hr/>
            <Slider
                height={800}
                width={1200}
                slides={[
                    image('s1.jpg'),
                    image('s2.jpg'),
                    image('s3.jpg'),
                    image('s4.jpg')
                ]}
            /> 

        </Layout>
    )
}
