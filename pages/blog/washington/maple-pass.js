import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Link from 'next/link'
import Video from "../../../components/video"
import RelatedPosts from '../../../components/related_posts'
import Pinnable from '../../../components/pinit'
import Contact from '../../../components/contact'
import Slider from '../../../components/slider'

//+metadata
let metadata = {
    "title": "Maple Pass Loop",
    "date": "2022-10-18",
    "image": "https://lh3.googleusercontent.com/pw/AL9nZEWibEdZnXniowowo_BwOCztCjde2LaympWEJu6mMs8wtTwss0u6krwrJ-SY9964iTAh_fGuH1T-ca2sZlWSq-AeSqs06TMH1bYlke-tDxZFQ301vhHop1lTDrastQ107wU7d7IH-iNe3htClFOASNAb=s800-no?authuser=0",
    "tags": ["washington", "lakes", "camping"]
}

const cover = 'https://lh3.googleusercontent.com/pw/AL9nZEVTL7BLvGmaPvK_Uv1FHmsEAguLVCbjGiIhq2CW7dEO5AjPiIfmc-MOP4Kka6ZuxiPaO4TK3l1knnk3Iv5ktLekzyjy7NAtyz5cc3-9pWD-CcvWunn37uc89WlucENIaBsdUmr6isgRoRUbwT6SBA1H=w800-h446-no?authuser=0'
const pageURI = '/blog/washington/maple-pass'
const maplePassTrailhead = 'https://www.google.com/maps/place/Maple+Pass+Trailhead/@48.5162035,-120.7375887,17z/data=!3m1!4b1!4m5!3m4!1s0x5484ad9309b675f7:0x2381397e1ecc2bac!8m2!3d48.5162!4d-120.7354'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Hike an 8-mile loop to discover astounding fall colors in Washington's North Cascades.`}
            subText={`8 miles, 2k feet gain`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
            <div>
                    {`Located on the northeast slopes of Washington's Cascade range, the Maple Pass trail is home to an abundance
                    of beautiful Golden Larches, a conifer tree that briefly turns yellow-gold in October.
                    This absolutely gorgeous trail is a must-do for the fall season, requiring only a little planning and willingness to get up early!`}
                    <br/><br/>
                    {`Maple Pass is one of the most popular hikes in northern Washington (for good reason). Parking will fill early (more on that later), 
                    and requires a Northwest Forest Pass or equivalent.`}
                </div>

                <div className={utilStyles.centered}>
                    <Slider
                        slides={[
                            
                            'https://lh3.googleusercontent.com/pw/AL9nZEWb2GADoJRIM3jZyUgq7VtaUbwsQqug8Xvi7_fzlBsjC8s0-MjTXS5Yj5d52DL9tFDfI73ljbO1Ss1cdtqQZRuu_9_7yb52BnXQe5AAR3e_w_0I8i09F84ftRhKK1jD8zZhY5wcwbH6AUqckfgfWaGq=w533-h800-no?authuser=0',
                            'https://lh3.googleusercontent.com/pw/AL9nZEV706SfdNhTP3jFLrOr3I4a_DoM64zDX2MIArJsPuNC6SykM5b-BO_XAXVT5IdecbHpC4ePIVG27t_QQe2T7EE7KKzp7eehWD7hTJMq_GadwbobKNltmhNpnpvl4IM-OohkVOKympPSbU8ZzMAjKGWK=w533-h800-no?authuser=0',
                            'https://lh3.googleusercontent.com/pw/AL9nZEXy36_p2G92xR_XhSPGahe1DlQVMam6YyoL8ENbuIQ89pZdna5duIqCF25VzMdNJ87CzSHoAiwKmKmrdgffZxxnSnq4YldPjE1tu_vINUU1tL0g0QVeTJ15nHpJ8Dzaks2KGKTjLe1j71JABQ0C5Hzm=w533-h800-no?authuser=0',
                        ]}
                        width={533}
                        height={800}
                    /> 
                </div>

                <h1 className={utilStyles.justifyCenter} id='getting-there'>Getting There and Parking</h1>
                <br/>
                <div>
                    {`The `}<Link href={maplePassTrailhead}>Maple Pass trailhead</Link>{` is a 3 hour drive from Seattle, and wildly popular. Peak season is during 
                    the couple weeks of October, when the Golden Larches are at their prime. Highway 20, the only
                    road to access the trail, typically closes in November and re-opens by spring as conditions allow.`}
                    <br/><br/>
                    {`Expect large crowds at Maple Pass and limited parking (especially so during fall). The medium-size parking lot may fill overnight, but extra parking is 
                    available on either side of Highway 20 for around 1/2 mile in either direction of the trailhead.
                    We hiked this trail on a peak Sunday in 2022, and cars were overflowing to the highway shoulder before 6:30 AM.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='pc0'
                            src='https://lh3.googleusercontent.com/pw/AL9nZEWK86Rl3IMIsLiP0rEZ7HFzAipGg_KVAu7QqByX4dP7ix17vKOzwwjDDxntKwzrwtqIfb-3u3cMPsKt4Fvij0u15j8p0Ea3UF5yY1tU-4MihpWy0FCd86FxPTxgg_9nu3eUmi6rcyn9JPoJbXDS-wsi=w800-h533-no?authuser=0'
                            width={800}
                            height={533}
                        />
                    </div>
                </div>

                <h1 className={utilStyles.justifyCenter} id='hike-details'>Hike Details</h1>
                <div>
                    {`The loop trail gains approximately 2,000 feet of elevation gain over 8 milen. Most hikers do the loop counter-clockwise, and I suggest the same.
                    Due to the amount of people on the trail, it's easier to go with the flow of traffic: If you hike clockwise, you may pass 100's of people going the other way.`}
                    <br/><br/>
                    {`Starting early can help you beat the crowd - hitting the trail by 6:30 AM allowed us to get ahead of the pack and avoid most of the congestion. 
                    Bring a headlamp if you plan to start early, especially in the fall. By October, there's little natural light until after 7 AM.`}
                    <br/><br/>
                    {`About 1.5 miles into the loop (going counter-clockwise), you'll arrive at the Lake Ann spur. Take this short spur for a pretty view of Lake Ann,
                    the fall color display will be astounding. Past Lake Ann, the trail climbs consistently for another 2.5 miles until it reaches the crest
                    of the ridge. On the climb, take in some of the trail's most beautiful scenery as you pass through multiple groves of Golden Larches.`}
                    <br/><br/>
                    {`The ridge's crest is a pleasant resting point and snack spot before beginning your descent. Past the ridge summit, the trail rapidly switchbacks
                    towards the highway, kicking up dust and entering the treeline. The final section of the loop is flat and paved, connecting back to the trailhead.`}
                    <br/>
                    <br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='pc1'
                            src='https://lh3.googleusercontent.com/pw/AL9nZEU3bRraoN2erM5PUtzc7QTFSG4GOwKlu77ieavIq93oruiQ_PRhQOWCoDBWYRs87rN0hI6tEh9icR3JRfeAVjmSMthw8PGRu8d0im9NRiH69yPDW6CsLstqq0PHIW8npPc_xAd5tVMkNUz1ZskHFmZr=w800-h533-no?authuser=0'
                            width={800}
                            height={533}
                        />
                    </div>
                    <br/><br/>
                </div>

                <h1 className={utilStyles.justifyCenter} id='nearby-camping'>Camping Nearby</h1>
                <div>
                    {`Because of the trail's distance from population centers and its popularity, I suggest camping in your car or at one of the 
                    nearby campgrounds. Colonial Creek South Campground is 30 minutes west on Highway 20, and has 10 first-come, first-served spots after the summer reservation season ends.
                    Lone Fir and Klipchuck campgrounds are both first-come, first-served campgrounds 10-25 minutes east of the trailhead. Dispersed camping is limited in this
                    area due to its proximity to North Cascades National Park and the lack of access roads.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Slider
                            slides={[
                                
                                'https://lh3.googleusercontent.com/pw/AL9nZEW6vvDgy-90b7ILNJGbZP0lLKi23xduqmdk9cybd4gZ5mhuLQrplO8L0WP8lWuqUrqiSoWcatUbJlPJYYVpsG100CajJ6FeMnsoli0C9V2po4r-8oib-pBkdKJmdWHeW4BjuY9WBQWB1lydxjV6u5G-=w533-h800-no?authuser=0',
                                'https://lh3.googleusercontent.com/pw/AL9nZEVAHq8iTZyx8AM3DhAzFkD0S7NcTU_KoIhNAvfKfPiYqwer6QKqfwrZI_qFhXXK4el29ZC7jFerDqf-MVylGZ6XJ4FCbdIrdQU0wOt6GDvaBKVKOQb0RmFkX-ivGQu9IPLoEiNKDG0412yC2Sb1HuLL=w533-h800-no?authuser=0',
                                'https://lh3.googleusercontent.com/pw/AL9nZEVlx17Gz51Y8mxXNi4jm9lu_nJ5zk5jBMdZfwaJqAJjaBZSMGq5TYauEuTFb76_jJdOOcU772TGkzLB_UPDPgNZnqg6xGMGvlDv5-tyFI9Ck4HD6rpxbaTTI-lMhhy2LVm8zBxaHjzHsmnxzkdoIQmL=w533-h800-no?authuser=0',
                            ]}
                            width={533}
                            height={800}
                        /> 
                    </div>
                    <br/><br/>
                    <Contact/>
                </div>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="guides"
            />
        </Layout>
    )
}
