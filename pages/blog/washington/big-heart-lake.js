import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import RelatedPosts from '../../../components/related_posts'
import Pinnable from '../../../components/pinit'
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Big Heart Lake Backpack",
    "date": "2022-07-25",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLWKatNzTf41ySXDw-gYtvZYb2TEYJVuKkpY3WgDFI42r-Ufgy1xSWH_-ifGak8-08pP7z10GqliMMj6iOTlS476idB207MOB3_AOInbmOV8t8QtjlWeRrFc6j696kZxIybZzzYJPhbM-lXNTOvleaJt=s800-no?authuser=0",
    "tags": ["lakes", "backpacking", "waterfall"]
}

const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLVoZekIWMiZJaqXMAziZ-RvHHQaWbTj-Ct9gssRSiAgF0z3Mx7gIWZX4Mbq38gVfNJwvntDSf_HWZHVhQ3ThNDQ8QbNNNwTPXxu6NX5t0fN3kfnK8UBSGr9kmv9WoNJLCzCumj7WZXTnhoGQd8xP0ON=w800-h600-no?authuser=0'
const pageURI = '/blog/washington/big-heart-lake'

const westFossRiverTH = 'https://www.google.com/maps/place/West+Fork+Foss+Lakes+Trailhead/@47.6283272,-121.302157,14.08z/data=!4m5!3m4!1s0x549a8bb7daf57e01:0x354fa548cad72ad7!8m2!3d47.6348018!4d-121.303704'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Camp at gorgeous mountain lakes in Washington's Alpine Lakes Wilderness.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`Backpacking Big Heart lake takes you on a roughly 14 mile out-and-back covering beautiful terrain in Washington's Alpine Lakes Wilderness.
                    You'll climb over 
                    3000 feet to various alpine lakes, and experience tremendous views of the Cascade range. In the Alpine Lakes Wilderness,
                    camping is permitted in established campsites, and you can find numerous spots
                    around the lakes on this trail, including Big Heart Lake. If you're planning to camp at one of the lower elevation lakes,
                    try to arrive early - this trail sees a lot of activity on weekends, and the best spots will quickly be claimed by other backpackers.`}
                    <br/><br/>
                    {`A Northwest Forest Pass is required for parking, and you are requested to self-issue a free wilderness permit at West Foss River Trailhead.`}
                </div>

                <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Alpine Lakes Wilderness, Washington."
                            src='https://lh3.googleusercontent.com/pw/AM-JKLVoZekIWMiZJaqXMAziZ-RvHHQaWbTj-Ct9gssRSiAgF0z3Mx7gIWZX4Mbq38gVfNJwvntDSf_HWZHVhQ3ThNDQ8QbNNNwTPXxu6NX5t0fN3kfnK8UBSGr9kmv9WoNJLCzCumj7WZXTnhoGQd8xP0ON=w800-h600-no?authuser=0'
                            width={800}
                            height={600}
                        />
                </div>
                <div>
                    {`This hike begins at the `}<Link href={westFossRiverTH}>West Foss River Trailhead</Link>{` east of Seattle, near Skykomish.
                    Starting out fairly even, the trail climbs gently until you reach Trout Lake after 1.6 miles. From Trout Lake to Copper Lake, 
                    you'll ascend over 2,000 in approximately 2.6 miles at a steady incline.`}
                    <br/>
                    {`On the way up, you may optionally take
                    a clearly marked side trail to Malachite Lake as a short detour.`}
                    <br/>
                    {`Malachite Lake is an excellent spot to camp if you don't feel like climbing further, or feel like having lunch/swimming.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Malachite Lake, Washington."
                            src='https://lh3.googleusercontent.com/pw/AM-JKLW70OBJRdBXJZBNlDynHCeSfqHtIomCUas1vBoSHirXRh1S9CrlnMmbFFpsUoKZkHItxTLQXYpMOKfOXg-ZjG_6XWSlc1gIdduaE0WjzTHlFcqtVZwuvchy_-Nf7qAjrrAuIJANDWYT-Cgx66KUrLkb=w800-h600-no?authuser=0'
                            width={800}
                            height={600}
                        />
                    </div>
                    <br/>
                    {`Immediately before Copper Lake there's a small ford, which should only be difficult during the high water season. You'll traverse
                    past a logjam around the southeast shore of Copper Lake, soaking in gorgeous views as the trail continues towards Little Heart Lake.
                    Several campsites can be found here, though they fill up fast.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Big Heart Lake, Washington.'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLVtfFL9m095w2HncxShRCcInLf_xFr-QYboIifrUNtcMHHjxZnAnuFKdM7_1e--76SJPDDHhOunSCR1xV7yn3jyMLt0yN1q05lD8rWX6wixNQyw2lfyf7N-xplh74ZcR6Bg7h8qLdncfthH_deP9caC=w600-h800-no?authuser=0'
                            width={600}
                            height={800}
                        />
                    </div>
                </div>
                <div>
                    {`From Copper Lake, it's another 3 miles to Big Heart Lake. On your way, you'll find Little Heart Lake and a nice off-trail viewpoint towards Glacier Peak.
                    The trail rises up to around 5k feet of elevation, and then drops around 500 feet before arriving at Big Heart Lake, which is absolutely stunning. The lake outlet forms Big Heart Falls, and is
                    crossable by hopping across a dense logjam. Most of the campsites are on the far side of the logjam, where the trail rises up a ridge.`}
                    <br/><br/>
                    {`For the adventurous backpacker, you may continue onwards to discover additional lakes in the wilderness. A rugged and unmarked trail climbs out of Big
                    Heart Lake, moving up and down the ridgeline. A short scramble can be done to Atrium Peak, which is a ridge with wonderful views of Big Heart and Angeline Lakes.`}
                    <br/>
                    {`If you hike further, you'll arrive at Chetwoot Lake some 2.7 miles from Big Heart. This trail involves a small amount of scrambling, and fades
                    away past Chetwoot. Some hardy backpackers go even further to complete a cross-country loop with the East Foss River Trailhead.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Angeline Lake, Washington.'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLWFo_-SEcoamsXTo9atOXsgFhZzjmUXXpe9N-eK-6bGuwtcFH8GJPrfpoFJZvbhm-Ep4cQvUUy2Ofkmm_GBQ2zpKwSg7CATecOwcWNpqCADCCC6SYhEIM1kyGk_SkPrZIxeMRsWXhcwzJSCDqJ9FxHw=w600-h800-no?authuser=0'
                            width={600}
                            height={800}
                        />
                        <Pinnable
                            page={pageURI}
                            alt='Big Heart Lake Outlet, Washington.'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLUtEqjtrpg5Ou8UlYtO4CpK2Bkm511O-pFripZWZcsS2XD8CQyeXa7M6B6UQPSCffXjPpykNM4UpZrzWJB_jKUlWYdOk4IH6g5gchMRMirPXgYDa-P7eXHAGpES0rOP8587NRgSLsymSjaMDrQjx9U8=w600-h800-no?authuser=0'
                            width={600}
                            height={800}
                        />
                        <Pinnable
                            page={pageURI}
                            alt='Big Heart Lake upper arm, Washington.'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLXMTzqF1xQl8g3UUW3mRIWjBtoS6pdI3Kd3XAHUOCELb7JvXAF72TQXyyJDVIWmhDQeODNV2psw0P9CcwwDUlio_I2LTdAO3z64lHola9Y-c2BdiAvNcSioWjAPKt5s1m-_EUIBPUk8NPPkpp6WyJgR=w600-h800-no?authuser=0'
                            width={600}
                            height={800}
                        />
                    </div>
                    <br/>
                    {`The lakes in this area are stocked with Brook, Cutthroat, and Rainbow trout. I didn't have my fishing gear with me, but met multiple anglers pulling
                    fingerling trout from Copper, Malachite, and Big Heart Lakes. Angeline Lake is reported to have fish as well, but the descent looks painfully steep.`}
                </div>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="backpacking"
            />
        </Layout>
    )
}
