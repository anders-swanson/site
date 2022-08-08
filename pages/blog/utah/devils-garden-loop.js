import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Link from 'next/link'
import RelatedPosts from '../../../components/related_posts'
import Pinnable from '../../../components/pinit'

//+metadata
let metadata = {
    "title": "Devil's Garden Loop",
    "date": "2022-07-07",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLWejtJQaBmM9FcDNoAjPSkdfFuiwpD6H_28t81k6fOti9muxs8Iy6LHgCo-ZlvR9Ak2HqeI61binOTUvkmW6p68Aj6Koov0zQbfcIc8q7DtcFdvUUyceqi-b2yOBbx3pMCkC9bnP1-LJFYmm9vvrm-S=s800-no?authuser=0",
    "tags": ["hiking", "national park", "utah"]
}

const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLXNlsA0EI899Wuy_CWH_s9hTHE77DnJcIFq-M5IjfJ1DpuTiP3OUAW1ObhvUrxe3PhYYsBfwVT5palzh1NR02pC8CSKRWZqk1Md_IrrHuXLo6-Cpq4yQjDgQ-FOo-wzItnd5GwRzpktZpaR1gvF3vFX=w800-h600-no?authuser=0'
const pageURI = '/blog/utah/devils-garden-loop'

const devilsGardenTrailhead = `https://www.google.com/maps/place/Devil's+Garden+Trailhead/@38.7797899,-109.5946363,16.21z/data=!4m5!3m4!1s0x8748778d7fcc775f:0x7701fbf4c1ffd6b7!8m2!3d38.7829031!4d-109.5949423`

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Scramble up sandstone trails on this challenging loop in Arches National Park, Utah.`}
            subText={`9.5 miles, 1,300 feet of gain.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`Arches National Park lies in Southeastern Utah, just north of the small town of Moab. Arches is an extremely popular park, and there are many short hikes or pull-offs
                    to see the namesake arches of the park. This post describes the Devil's Garden trail, one of the longer hikes in the park that doesn't involve cross country travel.
                    This lollipop loop trail includes challenging sections of scrambling over sandstone, so please only attempt it if you are capable of lifting your bodyweight,
                    and are confident scrambling over unstable or slippery surfaces.`}
                    <br/><br/>
                    {`Arches is famous for its Delicate Arch (if you've seen literally any postcard or stamp of Utah, you've probably seen Delicate Arch), and is home to dozens more
                    that are almost equally picturesque. If you're visiting Arches, I recommend to take around two days to explore the park - one to hike the 
                    Devil's Garden Loop, and the second to explore the park's shorter trails, most of which are under 1-2 miles.`}
                    <br/><br/>
                    {`The same day we hiked the Devil's Garden trail, we also hiked the Delicate Arch and Windows trails, which made for a long, but thoroughly enjoyable day trip.
                    Of the trails we hiked in Arches, the Devil's Garden trail was our favorite.`}
                </div>

                <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Rifts of sandstone in Arches National Park."
                            src='https://lh3.googleusercontent.com/pw/AM-JKLUYWlJmyLmxg0WWX67CtkA5WmvGRqx3i5RV-N_O338P5lNmJQKGBPT8p7Z1RWE6O9sW0zpcJjUYe18RcJOAAwszhoeAJrIXFsPzgAvyXJ4J80OTu_5tBzhCqUBwiQT-pqPrmEaBGFCEtZK-ofgzF72v=w800-h600-no?authuser=0'
                            width={800}
                            height={600}
                        />
                </div>

                <br/>
                <div>
                    {`The Devil's Garden hike begins at the `}
                    <Link href={devilsGardenTrailhead}>{`Devil's Garden trailhead`}</Link>
                    {`. There's a campground near the trailhead, and a decently large loop for parking. Because this trailhead is so popular, it's advisable
                    to arrive as early as possible so you can secure parking.`}
                    <br/><br/>
                    {`The trail begins very well graded and accessible (though that quickly changes), and has several side trails which access different arches. You'll encounter the first
                    side trail shortly after starting the hike. I encourage you to take every side trail you can to experience this trail in the best way possible - by
                    seeing each and every one of its beautiful arches and various rock formations.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="O-Shaped arch in Devil's Garden."
                            src='https://lh3.googleusercontent.com/pw/AM-JKLXsaRMpRbPUOdDeVkvWhBwWRTzAkwnOWqvdym3wbHGt5ZdHUAwoPjKVFGjq51jeB752zs5w6JyvygMFL_sYrh4RA7BAE851VShCa1f43BUglu3iM_Xua3R1gwLUn5OPEI6Y4gosV4M2eNF3kVUSYdQB=w800-h600-no?authuser=0'
                            width={800}
                            height={600}
                        />
                    </div>
                    <br/><br/>
                    {`Past the first side trail, you'll arrive at the Landscape arch, the longest arch in the park. The trail forks here, so take the right-hand path
                    and continue on the Devil's Garden primitive loop. This "primitive" trail section requires route finding by cairns, some scrambling and climbing over sandstone
                    obstacles.`}
                    <br/><br/>
                    {`On the primitive trail, you'll pass through Fin Canyon, notable for its narrow packed ridges, followed by climbing up through tight sections of sandstone trail. Don't miss the side trail
                    for Private Arch, which should be well marked. Continuing on from Private Arch, the primitive trail reconnects to the main trail near Double-O Arch, a truly
                    impressive feature. This is great place to stop for lunch, and there are many scrambles to viewpoints around Double-O arch. You may also make a short hike to 
                    the Dark Angel rock spire, though it is not as remarkable as the arches.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Double-O Arch in Arches National Park, Utah.'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLUt4mOQC2VE3Ar3OVl6twxMlFZIe4K-0qYn36Ty8G0QgJ51eiE-Yvq364_DoY7iatFV-JxFc5JYrIgxebY4mDzbTAAbNjPsOsZknX9vuRJPXulk3Yt-2sDQCqm3vJIBl8UW_x2ExVgrsCmlGlEE4Rdo=w800-h600-no?authuser=0'
                            width={800}
                            height={600}
                        />
                    </div>
                    <br/><br/>

                </div>
                <div>
                    {`As you head back from Double-O arch on the return section of the loop, the trail follows a narrow fin of sandstone that offers great views of Devil's Garden. As you
                    get closer to the end of the loop near Landscape arch, there are side trails to Navajo and Partition arches, both of which are worth seeing if you have the time. 
                    Navajo arch is a large, bridge like arch with greenery around it, and Partition arch is a window-style arch that looks down on the surrounding area.`}
                    <br/><br/>
                    {`Once you connect back to Landscape arch, it's a short trek on familiar trail to the parking lot. I recommend to take your time on this hike, and enjoy every
                    section of it - there's a lot of variety in Devil's Garden, and an amazing amount of arches and other features to discover. If you've still got energy left after this
                    hike, consider making hike the 3-mile roundtrip to Delicate Arch as you head out of the park. Delicate arch is best viewed at sunset or sunrise, and is
                    absolutely astounding to behold.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Arch formation in Southeastern Utah.'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLXcOiICJSWfiD5TiqffCKGPIyCe8FqiXPTcOpEp3hQcVlpOL0KsZAOS60L6oKgaBt1nRjM8N_5iLtE69V6gHNqXIwxGwKEcAHU1MkvegByJnkAuXOBFh6kXuImqABJ_vCbLBiErXiEXS77jUge3GiR7=w600-h800-no?authuser=0'
                            width={600}
                            height={800}
                        />
                    </div>
                    
                </div>

            </div>
            <RelatedPosts
                metadata={metadata}
                tag="national park"
            />
        </Layout>
    )
}
