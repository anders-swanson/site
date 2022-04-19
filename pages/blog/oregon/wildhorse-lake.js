import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Link from 'next/link'
import Image from 'next/image'
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "Wildhorse Lake",
    "date": "2022-04-14",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLVh8DGmfxmPRACCPXJGASupjnMLPgNwdNzXlRYh6SyOiQTxknXNTT9ALfUekgx6ZQK8-HwScUe5XJikupggIjXO8-wNlTg2KaaZnSHrBI5f-yXWqbzDZEjGBVHKe1w1Zsp9pw89eC__MT7d2BVg9whm=w1069-h1067-no?authuser=0",
    "tags": ["hiking", "lakes", "steens"]
}

const trailhead = 'https://www.google.com/maps/place/Steens+Summit+Trailhead/@42.6351922,-118.587701,16.13z/data=!4m13!1m7!3m6!1s0x54b6a356f7124c99:0x1d8a60efd02e6802!2sWildhorse+Lake+Trail,+Oregon+97721!3b1!8m2!3d42.6358412!4d-118.5831428!3m4!1s0x54b6a4ab7263132d:0xca9321d335ba4b88!8m2!3d42.6414093!4d-118.5796356'
const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLXuI7u_VPi6zxULb2Yl8XbJ-Xs-rbg0tcbxraaSkxuO_1eESAjmXtzB6zy6t3hbJMiJhXi-YwAxusyYuKjz-Vj12Faop04a0gTmKEmqSzNtK4BCFffrpnqBFS1PfN-NO6JXhsvvssxlfSzCtPjJdzlO=w1423-h1067-no?authuser=0'

export default function Post() {
    return (
        <Layout
            headerImage={cover}
            headerText={metadata.title}
            subText={`3 miles out and back`}
            description={`Alpine Lake hike in remote SE Oregon.`}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`Drive far enough into southeastern oregon, and the sprawling sagebrush desert eventually transforms into the pristine Steens Mountain Wilderness. Towering
                    canyons carved by ancient glaciers rise towards a 50-mile fault block mountain that tops out at 9,800 feet.`}
                    <br/><br/>
                    {`Nestled beneath the summit of Steens Mountain is Wildhorse Lake, a picturesque cirque lake that can be accessed by a 
                    3 mile out-and-back from the `}<Link href={trailhead}> Summit trailhead</Link>{`. The descent to the lake is steep,
                    and may be hazardous at the top depending on any remaining snow (snow typically holds out here until July).`}
                    <br/><br/>
                    {`Climbing down to the lake, you'll pass some interesting slab-like rock formations as the trail winds its way through meadows. 
                    Follow the trail to and around the lake - at the far side of the lake is a beautiful view down Wildhorse creek canyon, out to the 
                    Alvord Desert.`}
                    <br/>
                    {`Consider doing the Steens Summit trail while you're here, it's a 1 mile walk from the trailhead and is definitely worth doing.`}
                </div>
                <Image
                    height={750}
                    width={1000}
                    src='https://lh3.googleusercontent.com/pw/AM-JKLX7BM5SetzbN-Ogj7d1BXNYsMQ55ED7Cq3fgTrbLnmBxWyH9rlquLMd9j16vAZhxRFbt3b4jkzFgHyYNSwju5Q2Os3yxAqjE7c_UUYA-r4M7xQks4JE850B8UOITgSUlaS0AlCYwYZ0W1JKArx-mNYu=w1423-h1067-no?authuser=0'
                />
                <div>
                    {`To get to the trailhead, you'll take the Steens Mountain Scienic Byway from Frenchglen (a tiny town, though it does have a gas station). The Byway
                    is an exceptionally well graded gravel road that traverses the wilderness, passing the summit trail and many other recreation points.`}
                    <br/><br/>
                    {`The road is closed seasonally, but usually opens by June or July. If you're unsure of its status, check with the Burns BLM office for conditions.
                    There are serveral campgrounds along the Byway, all of which use a walkup reservation system. I've never had trouble finding a campsite here, 
                    even on a busy holiday weekend. Traffic in general is pretty light, though you will see other people.`}
                </div>
                <Image
                    height={750}
                    width={1000}
                    src='https://lh3.googleusercontent.com/pw/AM-JKLURFzVd6PqbRfon6gyycGM9nz2OXKRkdw7YD8Qe7yTgvucRki-QkK9NjOvu50Qgx8F8G6qvAzW5k5o-z3mEvNS_26ScMG0D2w2n9PdCPt3NuxJ7m_wAX-Ksa4iIY81yR1gYmC8mUyPL59zOtmRsuxWl=w1423-h1067-no?authuser=0'
                />
                <div>
                    {`Also in the area is the Big Indian/Little Blizten Gorge hikes. These can be hiked in a loop (extremely difficult/backpackable), or individually. I recommend the 
                    Little Blizten Gorge, check out our `}<Link href='/blog/oregon/little-blitzen'>post</Link>{` on it if you're considering the hike.`}
                    <br/><br/>
                    {`If you're not looking for more hiking, Kieger Gorge overlook offers a nice spot to pull out and get some views, or you can check out the ruins of Riddle Brothers Ranch
                    on the south side of the Byway. The Ranch is a historic area seasonally staffed by volunteers, who live on the site.`}
                    <br/><br/>
                    {`If you're up for driving a little farther, you could head out to the Alvord Desert, or `}
                    <Link href='/blog/oregon/willow-creek'>Willow Creek Hotsprings</Link>{` southeast of Fields. Both are gorgeous, remote, and unique areas.`}
                </div>
                <Image
                    height={550}
                    width={1000}
                    src='https://lh3.googleusercontent.com/pw/AM-JKLVitSGVlYhZE8z-eH4aaU3Pt2I-co10hx4eSPlebffxdWAK8lopCbB-845u7oAqSsC_45HHWI83cT7ERHoZj2QsVnAMs7c2O-n86Gf0pHbgnLqIAR_8ws83Txx95Zd3yR-pzui_k2JXbXUpdGnT6_rO=w1334-h750-no?authuser=0'
                />
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="steens"
            />
        </Layout>
    )
}
