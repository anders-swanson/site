import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import { rawData } from "../../../lib/common"
import Link from 'next/link'
import Video from '../../../components/video'
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "Mt. Defiance Winter Route",
    "date": "2022-03-05",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLUurR1iF-8zqOBfoQzGw8PMHNKTYAciJS09gTC2r--cchoXJ9To-ZXyjho6cEq8_Zpyu5_lDh6KskGe56fqeCDLADv9hF7FgneJnKD7Yvamkib6eT4Z2rU_kzk1LoKTzIzMLBIh7uKeXtdywLxcKPYt=s1067-no?authuser=0",
    "tags": ["hiking", "waterfall", "crg"]
}

const subText = '12 miles, 5,000 feet  gain'
const mtDefianceTrail = 'https://www.google.com/maps/place/Starvation+Creek+State+Park/@45.6870692,-121.6939233,17.62z/data=!4m13!1m7!3m6!1s0x5495e23b3e662c99:0xd79cd1335e924e6d!2sMt+Defiance!3b1!8m2!3d45.6484508!4d-121.7222975!3m4!1s0x54960a14f6e2eaf5:0x2b607d98939c269!8m2!3d45.6884615!4d-121.6903015'

const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLU8OaHn_0zXye3TfXdKN2sE3vZpAzwsslde45V-Ef7bJpCIVVDpHzKgwKChEkiFbmqPJgv4h6VTlpTpC6lFXQJ53fWWApDib6JW5sAZzZL_uUQWXASFVwwz3_jHjF6gu5wgXgfSEXQ5Jeo1S2NzE6SG=w801-h1067-no?authuser=0'
const img1 = 'https://lh3.googleusercontent.com/pw/AM-JKLWvyluz0LiXosvvepyGZLKKatmuOLAFx0XLywFKP-_d7ShBWIZoIpOs7aG9c6lSecSAlbpf1BoFV20esZVk-p79UsOoNxVjLSnFL2xAKlYDCya3koHTliB1ffJVi48hbYGlaqzWvFffZQiXerDbldyc=w801-h1067-no?authuser=0'
const img2 = 'https://lh3.googleusercontent.com/pw/AM-JKLU8OaHn_0zXye3TfXdKN2sE3vZpAzwsslde45V-Ef7bJpCIVVDpHzKgwKChEkiFbmqPJgv4h6VTlpTpC6lFXQJ53fWWApDib6JW5sAZzZL_uUQWXASFVwwz3_jHjF6gu5wgXgfSEXQ5Jeo1S2NzE6SG=w801-h1067-no?authuser=0'
const img3 = 'https://lh3.googleusercontent.com/pw/AM-JKLUYkB6TkGbyvpLgZQpIgt2EoGtM8k9nNnYjM2wIwxt1eDhT22sgbAb8cMKw283zEcB-KEIfO5KGddgKPottgORDU5DFOjPGjErfYOKrkBs769snwih1apFqpjkCdZgVehiPMfMmAHGA_gaelCip4pGX=w801-h1067-no?authuser=0'

export default function Post() {
    return (
        <Layout
            headerImage={cover}
            headerText={metadata.title}
            subText={subText}
            description={`Steep, snowy climb to the Columbia River Gorge's highest point.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    <Link href={mtDefianceTrail}>{`Mt. Defiance`}</Link>{` is a steep hike to the tallest ridge in the Columbia River Gorge, starting at
                    Starvation Creek State Park. This is a very strenuous hike, climbing around 5,000 feet in 6 miles - once the steepness starts, it doesn't stop
                    until you reach the radio tower on top. The summit has a decent view of the Hood River valley, and Mt. Hood. There are a few spots below the summit
                    where the trees open up, and you can see to the Columbia River Gorge below.`}
                    <br/><br/>
                    {`Before the climbing begins in earnest, you'll encounter 4 small to medium sized waterfalls. Starvation Creek falls is a 0.1 mile
                    paved side-trail from the parking lot, the other falls are along the main trail. One notable waterfall is Hole in the Wall falls, where water flows from
                    a tunnel in the basalt cliffs.`}                    
                    <div className={utilStyles.flexWrapContainer}>
                        <Video
                            src={rawData('IMG_3340.mp4')}
                            width={300}
                            height={450}
                        />
                        <Video
                            src={rawData('IMG_3341.mp4')}
                            width={300}
                            height={450}
                        />
                        <Video
                            src={rawData('IMG_3343.mp4')}
                            width={300}
                            height={450}
                        />
                    </div>
                    <br/><br/>
                    {`We hiked Mt. Defiance in January, when most of the trail was buried in snow. If you attempt this trail during the winter months, bring
                    a GPS, a map, and crampons/spikes, and be prepared to melt your quads and calves from the climbing.`}
                    <br/>
                    {`Because the snow was dense hardpack (it hadn't snowed much in the two weeks
                    prior to our hike), we ended up not needing snowshoes, and only used our spikes.
                    The snow got deeper as we climbed, reaching around 7-8 feet deep at the summit.`}
                    <br/>
                    {`Due to the deep snow and the elevation gain it ended up being a grueling hike, and we were absolutely exhausted by the time we half stumbled, half limped
                    back to the car.`}
                    <br/>
                    {`I'd recommend this winter hike to anyone adequately prepared, who is looking for a challenge.
                    Your best bet is to attempt it when the snow is not too fresh. If snow has recently fallen,
                    The grade of the trail will become to difficult, and potentially dangerous. If that doesn't sound appealing, you can always wait for summer!`}
                    <br/>
                </div>
                <Image
                    alt='1'
                    height='400px'
                    width='300px'
                    src={img1}
                />
                <Image
                    alt='2'
                    height='400px'
                    width='300px'
                    src={img2}
                />
                <Image
                    alt='3'
                    height='400px'
                    width='300px'
                    src={img3}
                />
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="crg"
            />
        </Layout>
    )
}
