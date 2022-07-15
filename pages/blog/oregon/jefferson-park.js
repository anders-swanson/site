import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Link from 'next/link'
import RelatedPosts from '../../../components/related_posts'
import Pinnable from '../../../components/pinit'

//+metadata
let metadata = {
    "title": "Jefferson Park from Triangulation Peak",
    "date": "2022-07-14",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLX7qCosM0T7xsZ9HG-0vN1X3AUbvkx5zczRAOwjkw-V1n-bSV1EvaW7UVr6jTUY2jPu0wfAkQ7GGsmDLPb18M1rvhTu6ySURM5aVv_pToVQqFyXIMgidaZ2TfQfdglhddXhb6cR-53gQjJCIvlJvQNe=s800-no?authuser=0",
    "tags": ["lakes", "backpacking"]
}

const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLXNlsA0EI899Wuy_CWH_s9hTHE77DnJcIFq-M5IjfJ1DpuTiP3OUAW1ObhvUrxe3PhYYsBfwVT5palzh1NR02pC8CSKRWZqk1Md_IrrHuXLo6-Cpq4yQjDgQ-FOo-wzItnd5GwRzpktZpaR1gvF3vFX=w800-h600-no?authuser=0'
const pageURI = '/blog/utah/jefferson-park'

const devilsGardenTrailhead = `https://www.google.com/maps/place/Devil's+Garden+Trailhead/@38.7797899,-109.5946363,16.21z/data=!4m5!3m4!1s0x8748778d7fcc775f:0x7701fbf4c1ffd6b7!8m2!3d38.7829031!4d-109.5949423`

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Alpine lake camping on the flank of Mt. Jefferson, with a bonus cave to explore.`}
            subText={`CLOSED until further notice due to the 2020 Lionshead Fire.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`An alpine lake basin with plenty to explore on Mt. Jefferson's Northwest slopes, Jefferson Park features numerous lakes, glacier views, and
                    camping near meadows. Sadly, the area is indefinitely close due to the 2020 Lionshead Fire - we hope that someday for Forest Service will reopen
                    this area and visitors can hike and camp here again. Until then, enjoy Jefferson Park and its surrounding area from afar.`}
                </div>

                <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="View of Mt. Jefferson from Jefferson Park, Oregon."
                            src='https://lh3.googleusercontent.com/pw/AM-JKLW950y8Lhh2u5cTNJkxW_cpVjKjSVRBiBzLEyVNJiUW-y6JaUPWwJ_-rJc-9JiwGJ9RB6k9P1CdDCD_khDH5fopAfZojxDwPMdJUasaxrzckDlAULodPspl4A5WJLAjaHmIoNmQ1X6uslf5_IMrOGEH=w800-h600-no?authuser=0'
                            width={800}
                            height={600}
                        />
                </div>

                <br/>
                <div>
                    {`In 2019, we hiked from Triangulation Peak trailhead to Jefferson Park, camping one night near Russell Lake. Triangulation Peak is a short, but steep
                    side trail up to a viewpoint of Mt. Jefferson's western face.`}
                    <br/>
                    {`Just shy of Triangulation Peak's summit is a scramble down an unassuming slope leading to a small cave. I would have easily missed this trail
                    without prior, as it is not well marked. The cave is maybe 30 feet deep, and beautifully frames Mt. Jefferson 
                    when you stand inside its entrance. On the return trek from Jefferson Park, the cave is visible to the careful observer from the trail below.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Mt. Jefferson from Triangulation Cave, Oregon."
                            src='https://lh3.googleusercontent.com/pw/AM-JKLWQtbFoHkLvlUeFgoPv94lUWOtTPfKYXuPPKmJN6z8OZ3gjVaMl_dxxz_NieCQeL49JLK2svBd-ZdV_vLAo4MnxyNXOTyVh0VCsao4XYBTbk1WRAgPbRQMcMi9oqQ0Ir0pJRnmezfPV5TpYadjmy9-h=w800-h450-no?authuser=0'
                            width={800}
                            height={450}
                        />
                    </div>
                    <br/><br/>
                    {`After visiting the cave and lunching atop Triangulation Peak, we headed back down to the Triangulation Trail, following it as it merges with the 
                    Whitewater Trail, and eventually joining the PCT. It's about 10 miles by this route (there are shorter trails to Jefferson Park), but we had
                    wanted to explore the Triangulation Peak cave.`}
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
                tag="backpacking"
            />
        </Layout>
    )
}
