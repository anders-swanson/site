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

const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLW_ayn0e_jkC96r4yaREm45gsA5048u3PD2sbCi4xBah_zKCAKan2ujaWxusOcFJEzjSGLvmPCLB3HW0dQASgLKbfI7hRnfX1OZXog4stGvSoZhdEp2cnnXDsD-LLulcktG2BeXbLYSB3E2eyqvXMpI=w800-h600-no?authuser=0'
const pageURI = '/blog/utah/jefferson-park'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Alpine lake camping on the flank of Mt. Jefferson, with a bonus cave to explore.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`Jefferson Park is an alpine lake basin with plenty to explore on Mt. Jefferson's Northwest slope. Get lost as you take in the glacier views, 
                    visit the lakes, and camp near beautiful meadows.
                    Sadly, Jefferson Park is indefinitely close due to the 2020 Lionshead Fire - we hope that someday for Forest Service will reopen
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
                    side trail up to a viewpoint of Mt. Jefferson's western face. It's worth the extra distance to Triangulation Peak, and many people used
                    to visit as a day hike. Beware the fat, hungry chipmunks who live at the peak!`}
                    <br/><br/>
                    {`Just below of Triangulation Peak's summit is a scramble down an unassuming slope that leads to a small cave. I would have easily missed this trail
                    without prior knowledge, as it is not well marked. The cave is maybe 30 feet deep, and beautifully frames Mt. Jefferson 
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
                    {`After visiting the cave and lunching atop Triangulation Peak, we headed back down to the Triangulation Trail, following along as it merges with the 
                    Whitewater Trail, and eventually joining the PCT - it's about 10 miles one way by this route. There are shorter trails to Jefferson Park,
                    but we had wanted to extend our trip and visit Triangulation Peak.`}
                    <br/><br/>
                    {`From Triangulation Peak, the trail traverses through a burned area, doubly burned now from the 2020 fires. Sprouting wildflowers grow among the charred pine,
                    showing the slow recovery of the burn. The trail is hot and dusty, greening up as it draws closer to the PCT and crosses a fordable stream.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Russell Lake at Jefferson Park, Oregon.'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLW7RmdEHZP4m4iBUB3Bt5QrelTP6zsVbCWraoGTF2_aPbuci4oRTbZAgjWOO6cQSwwtsH06rJbF9yarsVkZYnaJCzsiL7a50mJlsF1ykHYsgsNTwby4ZpaGmXYCW-X6k4QqSceX5dGUcNaFcGWuFigs=w800-h600-no?authuser=0'
                            width={800}
                            height={600}
                        />
                    </div>
                    <br/><br/>

                </div>
                <div>
                    {`As you head north along the PCT towards Jefferson Park, the trail becomes very beautiful and pleasant - a small creek bubbles along the trail as you climb up through rolling 
                    meadows. After a short trek on the PCT, the trail levels out onto Jefferson Park - once you reach the lake basin, you'll be amazed by the views of Mt. Jefferson.
                    Several hours can be spent exploring the different lakes, meadows, and taking in the views. There are 20+ campsites around Jefferson Park, and the area never
                    required permits. A couple days can easily be spent here, making day hikes or just relaxing.`}
                    <br/><br/>
                    {`Please respect ongoing fire closures until the Forest Service fully reopens Jefferson Park. Trespassing is dangerous due to fire hazards, and may result in
                    a hefty fine.
                    For information regarding the status of Jefferson Park, contact the Mt. Jefferson Wilderness USFS office.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Mt. Jefferson from Jefferson Park, Oregon.'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLX2VkyfNAd6Cr-F3cFV6Rc4Rylv3CHkcTAelzpt5WPisSGzVSKGkEoWLQ2qliU8II2BXYvFfCrrw6l__Qzm18Xd4DjlrBQwlmZkN-R7BghSSPSn3kF2G95XWk0UzjHz1baMyM5GY_BNFvs-9puWJb45=w675-h379-no?authuser=0'
                            width={675}
                            height={379}
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
