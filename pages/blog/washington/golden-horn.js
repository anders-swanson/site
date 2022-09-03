import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import RelatedPosts from '../../../components/related_posts'
import Pinnable from '../../../components/pinit'
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Golden Horn and Snowy Lakes",
    "date": "2022-08-22",
    "image": "https://lh3.googleusercontent.com/pw/AL9nZEWxLuzadNQTYTvoNNkiecQsizYqx3wpydluafg5-Rc8Lc6sAvZEzaynslU5OGeIeU6HE3W_hFXNC5lq-LMoQtwRtubErCoMaDIeahrhtdni5Ot4Avu6moA7miUgV68PBT9tLEH6Kv4vg2UfaKSRdRJk=s800-no?authuser=0",
    "tags": ["lakes", "backpacking", "washington"]
}

const cover = 'https://lh3.googleusercontent.com/pw/AL9nZEWOw_322W10tjYx5Wi2etJKvCrPKqIDKpm-ulWi1TBWtQQg5jDXEIZDoVHyngDz318-vH-U5fkIP0fbN56pkLSCH-F7lw3P_kI8C3Ur6It_r9OfZAq4Z1kDwAlD00o0YfGVPXUc0_Z_nbxOEZfhj4IF=w800-h533-no?authuser=0'
const pageURI = '/blog/washington/golden-horn'

const paciticCrestNorthTrailhead = 'https://www.google.com/maps/place/Pacific+Crest+Trail+North+Trailhead/@48.5258689,-120.7382231,16.58z/data=!4m8!1m2!2m1!1sgolden+horn+trailhead!3m4!1s0x5484ade98ee8e437:0x54f63bb022e7f5b5!8m2!3d48.5246355!4d-120.7360385'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Explore a gorgeous stretch of the Pacific Crest Trail in Washington's North Cascades.`}
            subText={`20 miles`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`The hike to Golden Horn and Snowy Lakes explores some extremely accessible and wonderfully beautiful high country in the eastern North Cascades.`}
                    <br/>
                    {`The majority of this 20 mile out-and-back is spent above the treeline, crossing two mountain passes with almost constant 360-views of the surrounding
                    peaks. Set your tent at Upper or Lower Snowy Lake in one of many campsites, or make this a long day hike if you're a especially hardy hiker.`}
                    <br/><br/>
                    {`The trail starts at the `}
                    <Link href={paciticCrestNorthTrailhead}>Pacific Crest North Trailhead</Link>
                    {` across Highway 20 from Rainy Pass, just outside the North Cascades National Park. Campsites at Snowy Lakes are first come, first serve, and there are no
                    required permits for backcountry camping along this stretch of the Pactific Crest Trail.`}
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
                <h1 className={utilStyles.justifyCenter} id='golden-horn-snowy-lakes'>Golden Horn and Snowy Lakes</h1>
                <br/>
                <div>
                    {`The trail's first five miles gradually climb to Cutthroat Pass, with views of mountains interspersed throughout the forest along the way. There's plenty of water
                    at the start, with several small stream crossings including Porcupine Creek. Cutthroat Pass is an excellent place to stop and have lunch, looking across
                    Cutthroat + Hinkhouse Peaks, and down to Cutthroat lake.`}
                    <br/>
                    {`This was also the trail section we saw the most wildlife. We passed a black bear 50 yards off trail below Cutthroat Pass, and saw a mountain goat above the pass.`}
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
                    {`The next couple miles follow a high, dry ridge line, which eventually drops down to Granite Pass. Continue a few miles more through the gorgeous high country
                    to reach the Snowy Lakes cutoff trail. You'll see Mt. Hardy, Golden Horn, and The Tower on your approach.`}
                    <br/><br/>
                    {`The Snowy Lakes side-trail is clearly marked - you'll climb about 500 feet in 0.8 miles to Lower Snowy Lake. Upper Snowy Lake is 0.2 miles further. 
                    There are plenty of established campsites at both lakes, and it might be hard to pick a favorite for camping. The upper lake has an excellent view of Mt.
                    Hardy from ridge behind, which is great during sunset.`}
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
                    {``}
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
                    {`Snowy Lakes is best hiked from August through the end of September. The season is relatively short here due to the high elevation,
                    and northern latitude. Without proper gear, it is dangerous to hike through snow here because of the steepness of the trail.`}
                    <br/><br/>
                    {`In addition to your regular backpacking gear, I recommend bringing the following on a trip to Snowy Lakes:`}
                    <ul>
                        <li>{`A near canister or bear bag such as an Ursack. Black bears are commonly spotted nearby.`}</li>
                        <li>{`DEET and/or Permethrin - bugs can be annoying at the lakes, especially depending on the season.`}</li>
                        <li>{`Plenty of sunscreen and/or sun protective clothing. Exposure is high, and you'll mostly be in the sun.`}</li>
                        <li>{`Swimwear for the lakes - they'll be freezing cold, but it's fun to take a plunge!`}</li>
                    </ul>
                    {`Happy trails!`}
                </div>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="backpacking"
            />
        </Layout>
    )
}
