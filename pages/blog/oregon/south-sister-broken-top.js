import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import { CentralCascadesWildernessPermit } from "../../../lib/common"
import Link from 'next/link'
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "South Sister and Broken Top",
    "date": "2022-02-16",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLVsPHZLCQ6GFBOEdf31vfWweo6ukyR7nZDQ_78JqFA6Z6AQug5x3npOH8xKinKvnOUNmAuoB8TDOhz_njb_iL4arlL9uKE6443Hwuxd9usjJ-MDpHnEVueOVGy6GTT7oc7wfBwcI5B2066fEvl4auYS=w1167-h1067-no?authuser=0",
    "tags": ["hiking", "lakes", "sisters"]
}

const toddCreekTrailhead = 'https://www.google.com/maps/place/Todd+Creek+Trailhead/@44.0225321,-121.6929359,15.67z/data=!4m9!1m2!2m1!1stodd+lake+trailhead!3m5!1s0x54b8ae80b44e1a51:0xf82d14931d1d584f!8m2!3d44.0234736!4d-121.6821181!15sChN0b2RkIGxha2UgdHJhaWxoZWFkWhUiE3RvZGQgbGFrZSB0cmFpbGhlYWSSAQtoaWtpbmdfYXJlYZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VRMmRFNWhTMFozRUFF'
const southSisterTrailhead = 'https://www.google.com/maps/place/Devils+Lake%2FSouth+Sister+Trailhead/@44.0334638,-121.7691587,17z/data=!3m1!4b1!4m5!3m4!1s0x54b8ac7b169ac463:0x70bf1d3c9f710b51!8m2!3d44.03346!4d-121.76697'

const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLWfdydnaR3vuqnHby0S-UDoJuoVltMtqvJ00gj409PObkhLq99TXtPsZsZiymwsdZTUnOGwQCHaVFqX1BpU_uhr3_je3XRlEERTNNe1_CqqeQc_Sa6NoI1SWeqqFFkhtq8aRL1S07gPAsr8CpyDsIUd=w1597-h1067-no?authuser=0'
const heartRock = 'https://lh3.googleusercontent.com/pw/AM-JKLWKYt6ipH_TYxJGG-cQi5Idb6U5Kf-rrFU4p4cgr_lamoajzPE0CVCs9804IwiY3QD91Ubk5TWsr0qBMJI4GHyzdkwdzvv1WA4Xkk3qBL_N8wL-LViwckMJi5vRh-YgGABpFkBWXaa-ISAoRbD4lKfX=w801-h1067-no?authuser=1'
const bendGlacier = 'https://lh3.googleusercontent.com/pw/AM-JKLVeewDw90rFw7BHRMoHFdNNLEhOGfoShjoRHS0hOjeKpZBdHLMkUDzFgQS7rl2xiDXUpMSyIbT6e7QXQojHBWfY9TbfXxZxw-JDkCKWXzdx1DG3HV0ci56ZeSeUkUUxzMwpkRKf5uH46Mz7Z-vgiPp6=w801-h1067-no?authuser=1'
const noNameLake = 'https://lh3.googleusercontent.com/pw/AM-JKLXQ8buCaS2QtJXoI9jy6nk_CjBeN2I5l99kACm_M0nDziR6FUR-5ofzjK10YUlzXPNlrF_TsFXVzbvP4I02BWd6O4sPPKTovf_wMMan5WBERXgzym0q6-W2_61jfsGU_ZmJB-8yMwqknZdRP03IbQbw=w1597-h1067-no?authuser=1'
const laurenSummit = 'https://lh3.googleusercontent.com/pw/AM-JKLXHMLS15QyADARXvB8DTVbvhZAh_Iqk69JjajLGU_DD7blDAHNJctd5MMSa6Ue9poUTgpFg8qqgwAbBO54YSFZB19GTKR9RSPZ5pQqAbddUd40XExQY26B-gaPDVTgtaZpsOduXpPdMCnPYvyafBf0p=w1423-h1067-no?authuser=1'
const teardropPool = 'https://lh3.googleusercontent.com/pw/AM-JKLWIxMEYAEEW7cTJjip3nSfhfVI761lROkjWC3CcxCFEnNqjzXBOYBI9D8XAu_kQEXobnHGSbX8GV_gwN6dfv6eJioV2TrmV77tA-a52VL24royqWzk7Fo6NB87z4jyE2C19GQNSDKyPQMS2S8i0yH7U=w1597-h1067-no?authuser=1'
const summitView = 'https://lh3.googleusercontent.com/pw/AM-JKLUD1AWWVFcr7OYY8LoingBXqwqcYKP_NdYF5mOnj0FX7zt5HUp2PAarYgmU97eqA_L7vaTv8TQNUEPd9Jd0e-Pt_vvZ8CkoA3Ngh9QXmjOKBtsIiOzd4tG42rZaLj4Qn246NDiwZX1jYkm_t4MP88QF=w1597-h1067-no?authuser=1'

export default function Post() {
    return (
        <Layout
            headerImage={cover}
            headerText={metadata.title}
            description={`How to summit two popular peaks in the Three Sisters Wilderness.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    {`South Sister and Broken Top are mountain peaks in Oregon's Three Sister's Wilderness, which are both accessible by day hikers.
                    South Sister is commonly summited via the `}<Link href={southSisterTrailhead}>{`Devil's Lake Trailhead`}</Link>{`, while Broken Top can be reached
                    from the Green Lakes, Todd Lake, Crater Ditch, or Broken Top trailheads.`}
                    <br/><br/>
                    {`Both hikes are popular, and you should check ahead `}<Link href={CentralCascadesWildernessPermit}>for permits</Link>{` if you intend to visit
                    within May through September. The Three Sisters area gets a considerable amount of snow through the winter, and you may encounter snow on the 
                    trail through July or even August at higher elevations. South Sister has an elevation of 10,363 feet, and Broken Top is at 9,117 feet. Both mountains
                    are home to glaciers, though the remaining glaciers have shrunk considerably in recent years.`}
                </div>
                <Image
                    alt='heart rock'
                    height='450px'
                    width='300px'
                    src={heartRock}
                />
                <Image
                    alt='no name lake'
                    height={500}
                    width={850}
                    src={noNameLake}
                />
                <div className={utilStyles.textBlock}>
                   {`We hiked Broken Top from the `}<Link href={toddCreekTrailhead}>Todd Lake trailhead</Link>{`, which was
                   about a 16 mile out-and-back. You'll climb through alpine meadows to reach No Name lake in a basin below the summit.
                   It's difficult to reach the summit from this side of the mountain, and a safer scramble can be found on the north side
                   via Green Lakes.`}
                   <br/><br/>
                   {`Broken Top has two glaciers, both of which can be seen on this hike. Crook glacier is nestled in a rocky pocket visible from the south,
                   and Bend glacier can be seen from the ridge above No Name Lake. The day we were on Broken Top, the ice on Bend glacier was actively moving
                   and cracking, sending echoes throughout the lake basin.`}
                </div>
                <Image
                    alt='bend glacier'
                    height='450px'
                    width='300px'
                    src={bendGlacier}
                />
                <Image
                    alt='lauren on south sister'
                    src={laurenSummit}
                    height={613}
                    width={850}
                />
                <div>
                   {`The South Sister summit is a beautiful but strenuous hike, gaining about 4.5k feet of elevation on a 12 mile round trip. Beginning near Lewis glacier cirque lake
                  (about 1.5 miles from the summit), the trail becomes very steep and there are sections of scree. The peak of South Sister is a relatively flat, circular dome
                  with a small, glacial lake in the center (Teardrop Pool). A rocky trail encircles the lake, which you can use to loop around the entire summit before descending 
                  back down the climber trail.`}
                  <br/><br/>
                  {`The views from the summit are absolutely incredible, with the best found on the north side. Looking north, you can see the Middle and North Sisters,
                  glacially fed lakes, and other peaks of Oregon's cascades (Mt. Jefferson and Mt. Hood on a clear day). The three deep blue lakes to the northeast
                  are a part of the `}<Link href='/blog/oregon/chambers-lakes'>Chambers Lakes Basin</Link>{`, another beautiful are of the Three Sisters Wilderness`}
                  <br/><br/>
                  {`I definitely recommend both these hikes, but if you are able to do just one, pick South Sister - although you'll need to be lucky to snag one of the
                  incredibly popular permits.`}
                </div>
                <div className={utilStyles.flexWrapContainer}>
                  <Image
                        alt='view from summit'
                        height={700}
                        width={1200}
                        src={summitView}
                    />
                    <Image
                        alt='teardrop pool'
                        height={700}
                        width={1200}
                        src={teardropPool}
                    />
                </div>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="sisters"
            />
        </Layout>
    )
}
