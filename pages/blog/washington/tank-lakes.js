import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import RelatedPosts from '../../../components/related_posts'
import Pinnable from '../../../components/pinit'
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Tank Lakes",
    "date": "2022-08-09",
    "image": "https://lh3.googleusercontent.com/pw/AL9nZEWxLuzadNQTYTvoNNkiecQsizYqx3wpydluafg5-Rc8Lc6sAvZEzaynslU5OGeIeU6HE3W_hFXNC5lq-LMoQtwRtubErCoMaDIeahrhtdni5Ot4Avu6moA7miUgV68PBT9tLEH6Kv4vg2UfaKSRdRJk=s800-no?authuser=0",
    "tags": ["lakes", "backpacking", "washington"]
}

const cover = 'https://lh3.googleusercontent.com/pw/AL9nZEWOw_322W10tjYx5Wi2etJKvCrPKqIDKpm-ulWi1TBWtQQg5jDXEIZDoVHyngDz318-vH-U5fkIP0fbN56pkLSCH-F7lw3P_kI8C3Ur6It_r9OfZAq4Z1kDwAlD00o0YfGVPXUc0_Z_nbxOEZfhj4IF=w800-h533-no?authuser=0'
const pageURI = '/blog/washington/tank-lakes'

const eastFossRiverTH = 'https://www.google.com/maps/place/Necklace+Valley+Trailhead/@47.6606472,-121.2944193,15.08z/data=!4m5!3m4!1s0x549a8c9d5a0ce6cf:0xecb31ebbfc1ce76c!8m2!3d47.6651581!4d-121.2883488'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Take a strenuous, but stunning hike to Tank Lakes in Washington's Alpine Lakes Wilderness.`}
            subText={`24 miles, 1 night`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`Tank Lakes is a stunning backpacking destination high in Washington's Alpine Lakes Wilderness.
                    This incredible hike starts off unassumingly, ambling through miles of forest alongside the East Foss River before rapidly gaining 5,300 feet of elevation 
                    through rugged terrain.
                    If you survive the climb to the top, and you'll be rewarded with astounding views of multiple snow-capped peaks, pristine alpine lakes, and ample backcountry
                    to explore in Washington's beautiful Cascade Range.`}
                    <br/><br/>
                    {`Bring a Northwest Forest Pass for parking at the `}
                    <Link href={eastFossRiverTH}>Necklace Valley Trailhead</Link>
                    {`, and self-issue a free wilderness permit at the trailhead kiosk. The trailhead parking area is small and fills up fast, but you
                    can easily find additional spots to park along the forest road road.`}
                </div>

                <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Camping at Tank Lake, Alpine Lakes Wilderness, Washington."
                            src='https://lh3.googleusercontent.com/pw/AL9nZEUbNo_YhJDC1eFxRpQRpuhgo6f1gsd7dZUsmHmadeyKF3JCHJDElv-t4GTT2ZnAp8ylt2fqaM1AC_FFL7bRpeCBu1vcWN5ePslAgBFrywoahqTQYRpQ_KGWlfov-fXaHxh0c4sJ8HNJkc0g9XYYkgsN=w800-h533-no?authuser=0'
                            width={800}
                            height={533}
                        />
                </div>
                <h1 className={utilStyles.justifyCenter} id='tank-lakes'>Necklace Valley and Tank Lakes</h1>
                <br/>
                <div>
                    {`For the first five miles, the trail is relatively flat, having only minor ups and downs. You'll spot multiple small campsites along the East Foss
                    River, which are good spots to stop for lunch, or refill your water.`}
                    <br/><br/>
                    {`After crossing the foot bridge at the five mile mark, the climb begins to Jade Lake. In about 3 miles you'll gain almost 2,500 feet of elevation
                    on a rough, rocky trail before reaching the southern end of Jade Lake.
                    Jade Lake is a pretty, oblong lake with mountains poking out of the treeline at either end. Campsites are available near the lake if you
                    decide to stop here for the day. Fingerling trout were jumping in Jade Lake, so fishing is definitely possible here.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Jade Lake north end, Washington."
                            src='https://lh3.googleusercontent.com/pw/AL9nZEVfJ9-pdMIrPP2xKDrNNE-bw8Cmdl_Sm4Yrt3WsdkfNE4fH37nLExcJWDoCHc72AgOXe2P2RwN5BJrllDkZSL1inWWg_yYKHeYd8CyeqaCeRLzgdMFrI26IIVBNwQ3YXeqdoRWnZ7yXW12MxNof7MwD=w533-h800-no?authuser=0'
                            width={266}
                            height={400}
                        />
                        <Pinnable
                            page={pageURI}
                            alt="Jade Lake south end, Washington."
                            src='https://lh3.googleusercontent.com/pw/AL9nZEWrl0NLqM_afWXU38OzrpQKpcNqkXkU5L_tpakWVggh6wKZUhtCRgMa0MiBxP6Cg79fuaUjhPklp87eiuI3HXdqZLupVPOvzOu8NSHP0fMcjsSocAuvHn9A0pxbQ08pHTJY7Jv0JqjyhTuY0pEN8dy9=w533-h800-no?authuser=0'
                            width={266}
                            height={400}
                        />
                    </div>
                    <br/>
                    {`The next mile from Jade Lake passes by Emerald and Opal Lakes, and the rustic Necklace Valley cabin which was built in 1950. You'll find plenty
                    of campsites near Emerald and Opal Lakes. The trail in this section is full of wildflowers, bubbling streams, and the occasional small waterfall.
                    Enjoy the respite while you can before embarking on the grueling climb to Tank Lakes.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='La Bohn Peak, Washington.'
                            src='https://lh3.googleusercontent.com/pw/AL9nZEXc1d_B-c2n9oM43JHWBS-gwnxBAqkH2T3qzwmU5wYSXCZubj2YD6PhQ3tdhAfGSC4A77p60oqM5C7of3gjh6pPXsmIxnuT7B7P3xWRbpT1gQyMCikxoxz_zVEca56pHa-4bmWXxNujnEuqoX4BWi_b=w800-h533-no?authuser=0'
                            width={800}
                            height={533}
                        />
                    </div>
                </div>
                <div>
                    {`The trail becomes steeper as you start the ascent to Tank Lakes, scrambling up a brushy hillside which transitions to a boulder field.
                    Once you're on the boulder field, follow the rock cairns up and to the left for the easiest route to Tank Lakes. Having a GPS track is helpful
                    here, as there aren't many trail markers except cairns. A nice view of La Bohn peak is your left as you climb, and there may be
                    snow fields as late as August. We didn't have any trouble crossing the snow in regular hiking boots.`}
                    <br/><br/>
                    {`Eventually, you'll crest the rightmost arm of La Bohn peak to gaze down at the southern Tank Lake. The view here is absolutely jaw-dropping - beyond the lake
                    are the impressive Three Chief mountains and glaciated Chimney Rock.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Tank Lake, Washington.'
                            src='https://lh3.googleusercontent.com/pw/AL9nZEWmCLIhWCMT_h4Lf7SJg03PDmzhpWC3UTvygOg8If-Ssgq76_Z51qIJPypft6bYor6YzWezLGii72djD3gzIEgLioO4GFDg4Zb201NLefKB-r2Yawl5bcuvcY6g8RpefeyxMqZTgiRjNwGgZ__El_qP=w533-h534-no?authuser=0'
                            width={533}
                            height={534}
                        />
                    </div>
                    {`The lake basin has several campsites with commanding views of the surrounding scenery, all within a short distance of the lake. Explore the basin plateau
                    for a view of Bear's Breast Mountain, Iron Cap Mountain, and Dutch Miller Gap.`}
                    <br/><br/>
                    {`Before heading back, I recommend to either scramble the side of La Bohn peak for a top-down view, or hike cross-country to the northern Tank Lake
                    for even more views.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Chimney Rock, Washington.'
                            src='https://lh3.googleusercontent.com/pw/AL9nZEXMkXbwXs7yzykr1uivjOt-D2XFujkz5zL-0GFIrTIGOJfZ1vidwBgLROY5wKI9HEFPBp9ipDmvWdznUSkWOB2u2S6VLCShL3snRESzlPdeY5YNg4lDiFIW-ploSLpXkdoyfdEFXONfTzOKRR6WHBsH=w533-h800-no?authuser=0'
                            width={533}
                            height={800}
                        />
                    </div>
                    <br/>
                    {`Note: If you're visiting Necklace Valley, you'll definitely want to bring bug spray (such as DEET).
                    This area is notorious for mosquitoes and biting flies during the summer.
                    The Alpine Lakes Wilderness is also Black Bear country, so please pack bear resistent containers and store all food or scented items securely. We saw lots of 
                    wildlife during our hike, including a black bear in the Tank Lakes area.`} 
                </div>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="backpacking"
            />
        </Layout>
    )
}
