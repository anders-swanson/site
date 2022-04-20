import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import { CentralCascadesWildernessPermit } from '../../../lib/common'
import Image from 'next/image'
import Link from 'next/link'
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "One Night Backpacking Trips for Beginners",
    "date": "2022-03-23",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLVwwa1q6n40xiuuJHZXqcMaLjpbZaZxsRWxBiFPMcKTqa16Kkr0T1RKCrrxZvVWO6gO0VJ69bRgieBA7CEoLnMWRKiztw-phEuvNqKGISY5ljSP17TsTDh4vs7A9r4Nf2Gq39lK63PnVzmH0U7We_XA=s1067-no?authuser=0",
    "tags": ["backpacking", "guide"]
}

const killenCreekTrailhead = 'https://www.google.com/maps/place/Killen+Creek+Trailhead/@46.265345,-121.5707579,13.21z/data=!4m9!1m2!2m1!1shigh+camp+mt+adams!3m5!1s0x5496fad09064a871:0x116bf95df4b0c597!8m2!3d46.2884481!4d-121.5523052!15sChJoaWdoIGNhbXAgbXQgYWRhbXNaFCISaGlnaCBjYW1wIG10IGFkYW1zkgEKdHJhaWxfaGVhZJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VORGRqZG1RM1puUlJBQg'
const greenLakesTrailhead = 'https://www.google.com/maps/place/Green+Lakes+Trailhead/@44.0365077,-121.7602828,13.83z/data=!4m5!3m4!1s0x54b8ac40ce8b6647:0x45000b3b0fe8dc40!8m2!3d44.031087!4d-121.7363949'
const jackLakeTrailhead = 'https://www.google.com/maps/place/Jack+Lake+Trailhead/@44.4904044,-121.8111457,14.96z/data=!4m5!3m4!1s0x54bf11588b62d415:0xb3594c706ec5555d!8m2!3d44.4919137!4d-121.7941744'
const timberlineLodgeTrailhead = 'https://www.google.com/maps/place/Timberline+Lodge+Trailheads/@45.3322327,-121.7125659,17.58z/data=!4m15!1m9!3m8!1s0x54be1eaaa37312a3:0x6738b4912b8ca4f2!2sTimberline+Lodge!5m2!4m1!1i2!8m2!3d45.3310658!4d-121.7113589!3m4!1s0x54be1c0003729767:0x78c190bba8454c33!8m2!3d45.330519!4d-121.709081'

const paradiseParkCamp1 = 'https://www.google.com/maps/@45.3529244,-121.7478289,17.46z'
const paradiseParkCamp2 = 'https://www.google.com/maps/@45.3553334,-121.7496171,17.46z'

const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLXXcf1K4hJmKGMYeeh4mEo1RunikoWbFKynQaEqZnUXA3bnuerQ2Rba3aTFMdM68SBqSLI0MyLAHyM5-kNFrAgFzLMJlbn-4_Iwws4twiM35I6ImoiYNLV1n-ccMYhnlACnipIVaZaVUF6qOmyE23qk=w1920-h955-no?authuser=1'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Trip ideas for beginner backpacking trips near Portland, Oregon.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`You've got all your gear, and you're ready to hit the trail - only problem is, you're not sure where to go! 
                    If you live near the Portland metro area, check out our recommendations below for beginner friendly backpacking trips.
                    These trip ideas are all within a few hours drive of Portland, and are great adventures to get started with backpacking.`}
                    <br/><br/>
                    {`If you're inspired to try any of these trips, make sure you are physically fit enough to hike at least 5-6 miles per day,
                    wearing all of your backpacking gear. I've accidentally signed myself up for trips I wasn't physically prepared for,
                    and it can turn a fun weekend of adventure into a grueling slog. Please be prepared and hike responsibly - you are 
                    responsible for your own safety in the backcountry.`}
                </div>

                <h1 className={utilStyles.justifyCenter}>Green Lakes</h1>
                <br/>
                <div>
                    {`Most years, the `}<Link href={greenLakesTrailhead}>Green Lakes trail</Link>{` doesn't fully ice off until July, and is best visited
                    late in the summer. The bugs can get pretty bad here earlier in the season, but by late August, almost all the mosquitoes have died off
                    and you can hike in peace.`}
                    <br/><br/>
                    {`If you can make it out here, Green Lakes is one of the most beautiful and accessible campgrounds in the Three Sisters Wilderness. It's
                    a 4.5 mile hike out (9-10 round trip), and follows the Green Lakes Trail the entire way. There's a decent amount of campsites scattered 
                    around the three lakes -but note that visitors between May and the last Friday of September, are required to carry a `}
                    <Link href={CentralCascadesWildernessPermit}>Central Cascades Wilderness Permit</Link>{` for both overnight and day trips.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='green lakes 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLWo760gAeC6VZmiQHuxiS0DAxS8WfWJY6QFjL6dEI2L0BhX7Z-OtLK1T-qSF9ti0m4nsQsxm0zOTQfe2aKsRZ4pBrxsKFGLDvvv9YlrPIHYwfapzvOk2Gu31AQRkFYB1BoyfogRP4JEYNQclijlparV=w801-h1067-no?authuser=0'
                            width={450}
                            height={600}
                        />
                    </div>
                    <br/><br/>
                    {`If you get lucky with the weather, a great time do camp here is in late September/Early October, after the permit system ends for the year. One of my
                    favorite trips in 2021 was a Friday night, after-work hike up to Green Lakes the first week of October. It can get a bit cold later in the year (below freezing),
                    so make sure you pack warmly.`}
                </div>
                <br/><br/>
                <div className={utilStyles.centered}>
                    <Image
                        alt='green lakes 2'
                        src='https://lh3.googleusercontent.com/pw/AM-JKLXWqnwYufW5U5RpiUdgC9m716klMXXh9K_zBwEjwqLnhtAsbVmmBLMEhmfuUGJ29QKbd8KkKEFXItuubWfCIC9iGHiB_Uzdw2a5MnutPoLJz_bYQMh7zrjC1CKfHWlYRHHMWqtuwWZxA8WdmF4K2eN8=w801-h1067-no?authuser=1'
                        width={450}
                        height={600}
                    /> 
                </div>

                <h1 style={{'width': '1200px'}} className={utilStyles.centered}>Paradise Park Lollipop Loop</h1>
                <div className={utilStyles.flexWrapContainer}>
                    <div>
                        {`This lollipop loop starts at `}<Link href={timberlineLodgeTrailhead}>Timberline Lodge</Link>{`, and heads northwest to
                        a beautiful alpine meadow. Above timberline, you'll have breathtaking views of Mt. Hood, and the meadows supply an ample selection
                        of wildflowers. Paradise Park specifically refers to the area above timberline on Mt. Hood's southwest slope, and is some of the
                        best terrain on Mt. Hood that can be easily accessed.`}
                        <br/><br/>
                        <div className={utilStyles.centered}>
                            <Image
                                alt='mt hood from paradise park'
                                src='https://lh3.googleusercontent.com/pw/AM-JKLW4ggsYQAweDh91XJDrGXV8mReqG1pyHUn1z1D0AAcrqBSW8ysLBxpscPNwHbiYEm-K_JAkIBCiIj50tyvM-GyR4ogeTWPO6opBjzVNCrTbRam1yBs-A-yciBHhmRwCW1_22PjiK8bddhdw5CeIVTP2=w1423-h1067-no?authuser=0'
                                width={900}
                                height={625}
                            />
                        </div>

                        <br/><br/>
                        {`The total trip distance is about 12 miles, but may be longer if you explore any spurs. From Timberline Lodge, follow the PCT/Timberline
                        trail nortwest for about 3.8 miles, at which point you'll meet the Paradise Park trail. Along the way you'll pass the Hidden Lake trail (skip it),
                        and the Zigzag overlook. Once you get to the Paradise Park trail, turn right. This is the start of the lollipop loop, and you'll ascend
                        a short distance to gorgeous alpine meadows.`}
                        <br/><br/>
                        {`There are a collection of scattered campsites around here, near `}<Link href={paradiseParkCamp1}>Lost Creek</Link>
                        {`, and `}<Link href={paradiseParkCamp2}>Rushing Water Creek</Link>{`. The campsites are at around 5.4-5.7 miles from the trailhead.
                        After traversing the alpine meadows, the Paradise Park trail descends to meet the Timberline trail - once you intersect the Timberline trail,
                        take a left. Follow the Timberline trail back to Timberline Lodge (6.5-7 miles from the campsites).`}
                    </div>
                </div>

                <h1 className={utilStyles.justifyCenter}>Mt. Adams High Camp</h1>
                <br/>
                <div>
                    <b>Disclaimer</b>{`: The road to `}<Link href={killenCreekTrailhead}>Killen Creek Trailhead</Link>{` from Takh Lakh Lake is unpaved and deeply rutted.
                    It's doable in a regular passenger vehicle, but you should be comfortable driving on rougher roads.`}
                    <br/><br/>
                    {`High Camp is an alpine meadow at around 6,900' on the slopes of Mt. Adams, with ample views and wildflowers in season.`}
                    <br/>{`The trail to High Camp starts at `}<Link href={killenCreekTrailhead}>Killen Creek Trailhead</Link>{`, near Takh Lakh lake.
                    The out-and-back trip is around 4.5 miles each way, and has about 2,264 feet of elevation gain. This trip is pretty nostalgic for me, as I
                    used to do it almost every year in the late summer as a kid. I was last here in August 2020, and it was just as gorgeous as I remembered.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='high camp'
                            width={900}
                            height={600}
                            src='https://lh3.googleusercontent.com/pw/AM-JKLWuTXPF5PfEenNSNepPjNQO73MCDGcPsh-VUufCNt1R2tWgEM4EeuroqIe7JGXiTqXIkaYiP3nXbuLTtE_EPLnmmS_A-Hx_zI77i5N_ZGmlWXQZiyPOR-SkoURaOuPapa1LrHsWgwKCsMMuCRb6Wu31=w1423-h1067-no?authuser=0'
                        />
                    </div>
                    <br/><br/>
                    {`Once you get to the trailhead, hike up the Killen Creek trail until it meets the meets the PCT in a T-junction. At the PCT, turn right and head south. 
                    Shortly after turning onto the PCT, take a left turn on the trail that heads up towards Mt. Adams - This is the trail to High Camp.
                    the High Camp trail climbs to a meadow and the camping area - if you're intending to go higher, keep in mind that a Cascade
                    Volcano Pass is required for anyone above 7,000' (essentially anywhere above High Camp). I've never seen a ranger up here, but it's never
                    fun to get a ticket/fine.`}
                    <br/><br/>
                    {`There are free (primitive) campsites around the meadow - But be sure to find a spot that is
                    already clear of vegetation, as camping directly in the meadow will harm the plant life. The camping spots here are pretty dispersed, but
                    there will be social trails to and from them. The ecosystem here is sensitive, so please stay on existing trails and pack out everything
                    you bring in.`}
                </div>

                <h1>Canyon Creek Meadows</h1>
                <br/>
                <div>
                    {`The shortest of the bunch, Canyon Creek Meadows is a 7.5 mile loop on the east side of Three Fingered Jack. Start at the `}
                    <Link href={jackLakeTrailhead}>Jack Lake Trailhead</Link>{`, and head north on the Old Summit trail. Once you intersect the Canyon Creek
                    trail, turn left. Follow this trail until you reach a T-junction, and then contiue straight towards the campsites.
                    This area is terrible for mosquitoes until late summer, so I recommend coming here in August-October (before snow covers everything in the fall).`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='sitting in meadow'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLWoVcT9O0iPq5AIdyLiGaqEejSoxdyxT7kpJclTLUazCCw7BDzoZH-ynwpGBPaDd3eiCA51ouxCXnlGOZBCX4Fa5dgzTpxgI7QK197nHsDcTR1BP-yboR-DYx6LwLHOSXVRZTOqTYOT3pT8imbc4Dil=w801-h1067-no?authuser=1'
                            width={450}
                            height={600}
                        />
                    </div>
                    <br/><br/>
                    {`The campsites are nestled in a wooded area near the meadows (yes, there are awesome wildflowers). Spend some time to explore here - you can
                    hike right up to Jack Glacier (the only glacier on Three Fingered Jack), and poke around the meadows to look at the flowers. If you're lucky,
                    you might see one of the resident mountain goats.`}
                    <br/><br/>
                    {`To loop back, return to the Canyon Creek trail from your campsite and continue north until you reach the Old Summit trail. Turn right and 
                    follow this trail back to Jack Lake trailhead. Similar to the Green Lakes trail, Canyon Creek Meadows falls within the `}
                    <Link href={CentralCascadesWildernessPermit}>Central Cascades Wilderness Permit</Link>{` area. Make sure you secure a pass if 
                    you're planning to visit during the permit season.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='standing in meadow'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLUFiBbDJka2xN4qBkb4RUaW_8zkimPX9JvIuuiyOhEtNsrtEjG3XXDh-wtvlgUtbbohcu4xdHNiceCr4KUIXGKGQ82aE44O5lFjMaAiBXVcTSsE39azK3W74Aw5-qYDKQQMto2KW_V8SOhQ9HRs6KUw=w801-h1067-no?authuser=1'
                            width={450}
                            height={600}
                        />
                    </div>
                    <br/><br/>
                </div>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="guide"
            />
        </Layout>
    )
}
