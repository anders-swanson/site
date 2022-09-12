import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import RelatedPosts from '../../../components/related_posts'
import Pinnable from '../../../components/pinit'
import Link from 'next/link'
import links from '../../../lib/links'

//+metadata
let metadata = {
    "title": "Golden Horn and Snowy Lakes",
    "date": "2022-08-22",
    "image": "https://lh3.googleusercontent.com/pw/AL9nZEVVUlfj77qjZ5umYnAraQ4Ima49vWuAW6xeKc4mLfsXzM_L-QbCiGHWv9DaRgcKijcH3HAZNvQR4wO_SaQ4yWGGMUZFVdaTCNeo1fQdjg0mU8e4wHN0hJ9QvYdDS5r8YURVUInUwKsfUoy1rlZ00JvP=s800-no?authuser=0",
    "tags": ["lakes", "backpacking", "washington"]
}

const cover = 'https://lh3.googleusercontent.com/pw/AL9nZEXGw25374hAKaC-wbDFevMC96m4QD0cQ-4c0Skaji8BApUQe-VCPhbjk71gq7T6c5FjM1nvigVMrW8aZ9RSIrsDdtvjyjWZHcHhwHoGHnL2BoHfrAvbVcW1qYxPjAunP-OLojDOpz73CC42DOpwY8Rj=w800-h533-no?authuser=0'
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
                            alt="Lower and Upper Snowy Lakes, Washington."
                            src='https://lh3.googleusercontent.com/pw/AL9nZEWMkjEj54FVoNqTQXLApl7MN-tmcsZv1CYWOCcGp_uMXHBGNnstKH9_Z4VkbSF3AAf_T9iK1BCl9SKdM5_ypsTb2SIotZbldRuds8Ybs9bqK_KoaofjyCoquPWVakgecXk-a4RkAJdNMxwUv5b0-pSj=w800-h533-no?authuser=0'
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
                            alt="Lower Snowy Lake and the Tower, Washington."
                            src='https://lh3.googleusercontent.com/pw/AL9nZEWhwc-Z_m4FrpaVPfv9f1s7Vi6M7Djt-gq5e578L_skGQKZbr3w68KRsq5Oa2m9cudTCdMq8avmRU68YvfmlcR0RgQoEuhMhmwS4NU6MqzcW8FsOBJdgg8lNhsrAGJcTW-Y8NIlh4r-h6TMslN8TOJL=w533-h800-no?authuser=0'
                            width={533}
                            height={800}
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
                            alt={`Washington's North Cascades.`}
                            src='https://lh3.googleusercontent.com/pw/AL9nZEXr8EGJtIQsN-iItxKV29KLYRcoaTS4QY_KPyYZIpGHvkECgmuD8IT6mQvBWgP0iXsjkFYLqbiCtTj0xHHWEZ6_uV4ekg3S7dDfemFDVUBJkf7h8MCZclJIL-377Xm5v-o1jIgf3elGM5O_Z0XW5bd9=w800-h533-no?authuser=0'
                            width={800}
                            height={533}
                        />
                    </div>
                </div>
                <div>
                    {`Snowy Lakes is best hiked from August through the end of September. The season is relatively short here due to the high elevation,
                    and northern latitude. Without proper gear, it is dangerous to hike through snow here because of the steepness of the trail.`}
                    <br/><br/>
                    {`In addition to your regular backpacking gear, I recommend bringing the following on a trip to Snowy Lakes:`}
                    <ul>
                        <li>{`A `}<Link href={links.hiking.bearVault}>bear canister</Link>{` or `}<Link href={links.hiking.ursack}>bear bag such as an Ursack</Link>{`. Black bears are commonly spotted nearby.`}</li>
                        <li><Link href={links.hiking.bugSpray}>DEET</Link>{` and/or `}<Link href={links.hiking.afterbite}>Afterbite</Link>{` - bugs can be annoying at the lakes, especially depending on the season.`}</li>
                        <li>{`Plenty of sunscreen and/or sun protective clothing. Exposure is high, and you'll mostly be in the sun.`}</li>
                        <li>{`Swimwear for the lakes - they'll be freezing cold, but it's fun to take a plunge!`}</li>
                    </ul>
                    {`Happy trails!`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt={`Golden Horn, Washington.`}
                            src='https://lh3.googleusercontent.com/pw/AL9nZEViOd9NJm8PMWG11gWT57sVAZOzWV0xHX8oAMsy_WlioZP3bVvKhdPtVfXO70SerOXnRNRcC79Ba2FDSQmgf2m2F2D80gSuFj2l998xaOJuAGT9agxgkwQSGou9V_MnCq3AABjFgARvBoopkPm-Rv-H=w533-h800-no?authuser=0'
                            width={533}
                            height={800}
                        />
                    </div>
                </div>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="backpacking"
            />
        </Layout>
    )
}
