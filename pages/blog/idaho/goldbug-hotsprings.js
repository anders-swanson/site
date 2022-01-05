import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Slider from "../../../components/slider"
import { ImagePathBuilder } from "../../../lib/common"
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Goldbug Hot Springs",
    "desc": "",
    "date": "2021-09-05",
    "image": "/images/idaho/goldbug-hotsprings/cover.jpg",
    "tags": ["camping", "hot springs", "waterfall"]
}

const image = ImagePathBuilder('/images/idaho/goldbug-hotsprings')
const goldbug = 'https://www.google.com/maps/place/Goldbug+Hot+Springs+Trailhead/@44.9025503,-113.9459512,15z/data=!4m5!3m4!1s0x535820e9ac394b2d:0x47a4f614255ba06!8m2!3d44.8980974!4d-113.9569976'
const subText = '3.92 miles, 950 feet elevation gain'

export default function Post() {
    return (
        <Layout headerImage={metadata.image} headerText={metadata.title} subText={subText}> 
            <div className={utilStyles.flexWrapContainer}>
                <div style={{'width': '500px'}}>
                    <Link href={goldbug}>Goldbug hot springs</Link> is located in a steep canyon, with springs emerging from several sources towards the top.
                    The steepness of the canyon creates a cascade of hot springs into multiple pools, the water temperature varying 
                    depending on how far you are from the source. 
                    <br/><br/>
                    This spring is popular, and the trailhead is right off highway 93 on a residential street (the surrounding area
                    is remote and rural). Please be mindful of the landowners and park in designated spaces for the trailhead, and do
                    not leave any trash near the trailhead or the springs. The hike to the spring is about 2 miles up the canyon, 
                    gaining almost 900 feet of elevation along the way - be sure to bring plenty of water if the weather is hot. If 
                    you hike past the top of the springs, there are a few small campsites. Larger campsites can be found on the 
                    lower trail, but they are farther from the springs.
                    <br/><br/>
                    The topmost pool is heart-shaped, and offers a beautiful view down the canyon towards the Salmon river. Take plenty 
                    of time to explore the springs, soaking pools, and cascading hot waterfalls.
                </div>
                <Slider
                    slides={[
                        image('springs1.jpg'),
                        image('springs2.MOV'),
                        image('springs3.MOV'),
                        image('springs4.MOV')
                    ]}
                /> 
            </div>
            <hr/>
            <div className={utilStyles.flexContainer}>
                <Image
                    height={400}
                    width={1200}
                    alt='smoke mountains'
                    src={image('mountain.jpg')}
                />
            </div>
        </Layout>
    )
}