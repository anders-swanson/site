import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Image from 'next/image'
import Link from 'next/link'
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "May Backpacking in Oregon",
    "date": "2022-05-02",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLWHPJ7xCPp1qC2Vs9PO4U8K3TaavS-UwFLBLLWF50XyWX8FQlUf_YwpF0b0VwHBV_Cm3OUTRMEs553abihKD9wnPVDZiPJ5jPqdP49rWqTk55irJhQL6Zj5EdKlhs8bmKs5fkRxzFNtcjDMjg2Z3aeWjw=w1065-h1067-no?authuser=1",
    "tags": ["backpacking", "guide"]
}

const rogueRiverTrail = 'https://www.google.com/maps/place/Rogue+River+National+Recreation+Trail/@42.6522736,-123.607442,14.62z/data=!4m8!1m2!2m1!1srogue+river+trail!3m4!1s0x54c5092d96ca97b7:0xe67a995c036f7ea!8m2!3d42.650836!4d-123.5865435'
const rogueRiverBLM = 'https://www.blm.gov/visit/rogue-river-national-recreation-trail'

const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLXIb_XMM-aULownfswLPoBFXK_RfoQ69Cuzxl3XqDFMIG8DV3AMKlNSe0IoaYlT1ase375566a-zMWX5V--K3HQTzYnPoNctXyES-bDBfyk2Fuod-Lna26hEkKctYYTSbkNGUAn3jy055FddAug2ceHEQ=w1423-h1067-no?authuser=1'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Backpacking Oregon in May.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`There's plenty of opportunity for early-season backpacking in Oregon - while most of the state's high country doesn't melt out until
                    July or later, routes can be planned in central or Southern Oregon that bypass lingering snow. When searching for early season trails,
                    look for areas below 5000' - most spots above this will be difficult to pass due to snow. This rule changes a bit depending on where
                    you're planning to travel: some sections of eastern and southern Oregon melt out faster.`}
                    <br/>
                    {`The following trip ideas are inspired by Memorial Day backpacking trips we've taken in the past. If you're willing to explore, the perfect long
                    weekend trip is out there.`}
                </div>

                <h1 className={utilStyles.justifyCenter} id='rogue-river'>Rogue River Trail</h1>
                <br/>
                <div>
                    {`The 40.5-mile long `}<Link href={rogueRiverTrail}>Rogue River National Scenic Trail</Link>{` follows the Rogue River from Graves Creek towards the
                    Pacific Ocean, and is a 4 hour drive from Portland. This beautiful trail is 4 hours from Portland, has plentiful campsites, gorgeous river scenery,
                    and typically is not overly crowded. The BLM has an excellent guide to the `}<Link href={rogueRiverBLM}>Rogue River trail</Link>{`, complete with mileage and general 
                    guidance. We used the BLM website for planning our trip, and finding campsites.`}
                    <br/>
                    {`A popular method of hiking the Rogue is to run a shuttle from Graves Creek and hike ~40 miles point-to-point. When I last hiked this in 2019,
                    we hiked a section from Graves Creek and did a 55 mile out-and-back.`}
                    <br/><br/>
                    {`The Rogue is a perfect trail to do early in the season, as the lower Rogue River valley can become unbearably hot in the summer. Even in May, the sun felt intense
                    and we stripped down to shorts/t-shirts by late morning. The weather can be variable in spring, but the lower Rogue is typically drier and warmer. The trail has an even
                    grade, and you won't see too much elevation change - you'll have a slight downgrade trekking from Graves Creek.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='rogue 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLWWPikz-oMtheIrod1DewOYXsZvDbfsLDQVEolY5mdFFVIEm1v4SPH3_QgYtIYCQkzMQFux6OC4TR3AluqfcLrnnGqTo0ncSOTxv4sV6rQHuIu5lC8ZObbdh8pokXa7KSSyXUWRQEkcBHwO_urbPsDQ0A=w801-h1067-no?authuser=1'
                            width={450}
                            height={600}
                        />
                    </div>
                    <br/><br/>
                    {`The lower Rogue is tick country, so make sure to check yourself for any unwanted companions after a day of hiking. On the trail you'll see plenty of landmarks
                    named after bears - this is because the Rogue is has a healthy black bear population. Plan to pack a bear canister or bag, as there are no food lockers or
                    hanging wires in the established campgrounds. We never saw any bears, but did suffer one tick bite at the end of the trip (it was easy to remove).`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='rogue 2'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLV30WN0ITL_okreDzCr2meH74CJoS5fdYVGlNHbPITw7gVaHSc4vy2Z8aYcVzBDKx_IFcouWJdYnPIgQvsw_f4xMda3d5QJovBwbji8JPRPW9Bz4jA4L0N9_V5eXOE-btUbKtD80WYPtqFxJcfG97Xw4g=w801-h1067-no?authuser=1'
                            width={450}
                            height={600}
                        />
                    </div>
                </div>

                <h1 className={utilStyles.justifyCenter} id='mckenzie-river'>McKenzie River Trail</h1>
                <br/>
                <div>
                    {`Our 2021 Memorial Day backpacking trip followed the McKenzie River, a pristine coldwater river that originates from underground springs high in central
                    Oregon's Cascades. The McKenzie hosts waterfalls, lava tubes, hot springs, and more - it's a truly amazing hike, and well worth doing. The trail spans 27 miles
                    from it's high point at Clear Lake to McKenzie Bridge. For our hike in 2021, we started a Clear Lake and did an out and back. The trail's most scienic elements
                    can be found on the upper sections, standouts including Clear Lake, the waterfalls loop, and Blue Pool.`}
                    <br/><br/>
                    {`Check out our post on `}<Link href='/blog/oregon/mckenzie-river-backpack'>Backpacking the McKenzie River</Link>{` for more details about the trail!`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='McKenzie River'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLWer2jh0uMAfoHDOfkAwoza0aaKqmV7YCUEMxK7oWjBfXvBkiFMtkosjuREr0ZViaxnPoyqjNTuvbN5um9x-aRRQE33GCp96A2Bh2Y-SqUttdUeFcBSfL6ulfgTFn3rGw8UQEoFT6Vy8QSKwesP32t-sQ=w1597-h1067-no?authuser=1'
                            width={800}
                            height={525}
                        />
                    </div>
                </div>
                <h1 className={utilStyles.justifyCenter} id='upper-rogue-river'>Upper Rogue River Trail</h1>
                <br/>
                <div>
                    {`In 2020, we hiked a 47 mile out-and-back from the North Fork dam near Prospect, Oregon to Farewell Bend just past Union Creek. The trail can also be easily
                    shuttled - park one car near Union Creek/Farewell Bend, and the other at North Fork dam, which should be your starting point. 
                    The upper Rogue River trail is a moderate hike with interesting water features, including a section of the river that travels underground through a lava tube.
                    Along the trail there are a mix of developed and dispersed camping options - we opted to try both, staying for one night in the Farewell Bend campground.
                    The developed campgrounds support a small number of walkup campers, and we never had trouble finding a campsite.`}
                    <br/><br/>
                    {`At Natural Bridge (where the river enters and exits a lava tube), the trail forks and continues as #1034 on the north side of the river,
                    and #1034A on the south side. We were tempted to cross the river here and follow trail #1034, but we quickily found it was covered in blowdown and
                    almost impassable. After covering about 1/2 of a mile, we doubled back and continued on #1034A to Farewell Bend.`}
                    <br/>
                    {`Unless you've got a high appetite for scrambling over brush, I'd recommend to stay on the #1034A trail.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='rogue 2'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLV5OOWdqkHwh8wmEO0bDGubC0YtT3Vo8jxOQra8c6tjEIlqEc1I9_rFG-1E9YECN1pYkgtQV6mIT7is2RIaVvIMXoDCRuNoLmXW7T6atMPczsr1sXZ9zxMSjyWSZ6dtMHTvVy5EF2fQsYEZ1uea_ETPzQ=w1423-h1067-no?authuser=1'
                            width={800}
                            height={600}
                        />
                    </div>
                    <br/><br/>
                    {`The Upper Rogue is is an excellent trail to bring your fishing gear on. The trail closely follows the river for its span, and there are lots of
                     sandy bars to setup camp and cast your line. We didn't have our gear with us, but saw many others fishing.`}
                    <br/>
                    {`In the lower section of the trail (first ~10 miles from Prospect), we found abundant Morel and King Bolete mushrooms. Both are delicious, edible wild mushrooms,
                    which we used to spice up our backpacking meals. I was surprised at how many mushrooms there were, and how easy they were to find - all the Morels we found
                    were readily visible from the trail.`}
                    <br/>
                    {`Note: please only harvest wild mushrooms if you're confident in your ability to identify them. Wild mushrooms can be poisonous
                    or even deadly.`}
                </div>
                <div className={utilStyles.centered}>
                        <Image
                            alt='upper rogue 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLUTzMq0nxnf5iI13NJ3x7w8Ow0s50-RQ1QYGIRNKxr5YNRc_d7fr_v_PhjLlCWQ6-i8zSKanMo1jT2ROBUOJg09Jkk04dY7omWHChOq8CRqxk_hnikR4SxnIa-b7gr2EVdhwWVcGK-9D5jap17rMHGKPA=w801-h1067-no?authuser=1'
                            width={450}
                            height={600}
                        />
                        <Image
                            alt='upper rogue 2'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLUCc-gd59B-8BWXgIDIPx3e9Ges-6-U3mnmK5xn9i4f7irGAeMBSL8pDznxVTMP1nDh43yhvAnhGOcl7nZfcnXqjfxkIK4AMicKuhH1VZ-y5dGubbtIrvLJGKVRuHKvBrgt92jWQQj6l3tr5rTxcZgKlQ=w801-h1067-no?authuser=1'
                            width={450}
                            height={600}
                        />
                </div>
                <h1 className={utilStyles.justifyCenter} id='north-umpqua'>North Umpqua Trail</h1>
                <br/>
                <div>
                    {`In 2022, we plan to hike the North Umpqua trail - we'll have details on this trail after we complete it! In the meantime,
                    check out the BLM's website covering the `}<Link href='https://www.blm.gov/or/districts/roseburg/recreation/umpquatrails/'>
                        North Umpqua Trail
                    </Link>{` if you're interested in learning more. Happy trails!`}
                </div>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="guide"
            />
        </Layout>
    )
}
