import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Link from 'next/link'
import RelatedPosts from '../../../components/related_posts'
import links from '../../../lib/links'
import Pinnable from '../../../components/pinit'
import Contact from '../../../components/contact'
import MapEmbed from '../../../components/maps'

//+metadata
let metadata = {
    "title": "Garibaldi Park Backpacking",
    "date": "2022-11-06",
    "image": "https://lh3.googleusercontent.com/pw/AL9nZEXdf4dR5_zUFiRTPPsNDjkqVJOi6-6SHxXZikfgvFTSUOr0gLfI6ojOVx6jbh62KSyDGAdifitbY1T00Iiy6XvsCArGuH_j-RisUlMwqlUwINk_LvZ5pNphMwBPcdBVX50R0nuXXHmannaPVyIBoyKg=s800-no?authuser=0",
    "tags": ["british columbia", "lakes", "backpacking"]
}

const cover = 'https://lh3.googleusercontent.com/pw/AL9nZEVhRrYvbUiAVCeZAXykSN_qLJhTemb91Y8JEKVIm6S1ogFbzcwBqdjXkQc4a5_9bmn9agULI6lT8wzVhkIHRR2eELYAlo-ST0xuu9Gd08pirzCESrXU96HyuA6cCVWzQwdh8rzSkHK4zBv7RwdCjcmR=w800-h533-no?authuser=0'
const pageURI = '/blog/bc/garibaldi-lake'
const relatedTag = 'backpacking'

const garibaldiLakeTrailhead = 'https://www.google.com/maps/dir/Rubble+Creek+Trailhead,+0A0+Daisy+Lake+Rd,+Whistler,+BC+V0N+1H0,+Canada/@49.9573116,-123.1552543,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54871c632191eab1:0x59a0a0082e018b3f!2m2!1d-123.120235!2d49.9572617?hl=en'
const elfinLakesTrailhead = 'https://www.google.com/maps/dir/Elfin+Lakes+Trail+%26+Diamond+Head+Trail,+Squamish-Lillooet,+BC+V0N+1H0,+Canada/@49.7714738,-123.0387118,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5486fae751cb2185:0xdde616187e478a39!2m2!1d-123.0036925!2d49.7714236?hl=en'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Discover, backpack, and enjoy beautiful Garibaldi Provincial Park in British Columbia.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`We visited Garibaldi Provincial Park for a week in 
                    mid-September 2022, and experienced one of our best trips of the year. Check out my tips and recommendations below for planning your
                    trip to this amazing area!`}
                </div>
                <h1 className={utilStyles.justifyCenter} id='getting-there'>Getting There</h1>
                <br/>
                <div>
                    {`Garibaldi Provincial Park is located near the town of Squamish in British Columbia, accessed by the Sea-to-Sky highway.
                    The park hosts some extremely beautiful trails - The Garibaldi Lake trail is probably the most popular in the park, though there are
                    many to choose from.`}
                    <br/><br/>
                    {`Most trailheads in the park are accessible via gravel or dirt forest service roads (except Garibaldi Lake, which is fully paved). I found all the main roads
                    passable with a 2WD sedan, though there are many rocky/potholed sections that should be taken slowly.`}
                    <br/><br/>
                    {`Backcountry camping in Garibaldi Provincial Park is restricted to developed campgrounds, and reservations must be made in advance. For day or overnight
                    reservations, visit the `}<Link href={links.misc.bcparksReservations}>BC Parks Website</Link>{`. During the summer season, a free permit is required
                    for day use. There are limited number of permits, and they can go quickly. I recommend checking for permits as soon as they are released.`}
                    <br/><br/>
                    {`If you don't feel like camping, there are more developed places to stay in nearby Squamish or Whistler, both of which are popular tourist destinations.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Tantalus Range from Garibaldi Park'
                            src='https://lh3.googleusercontent.com/pw/AL9nZEXjFoa2IG2Ad21KC9bXpDrh95Ei5cSxx4KiJUbyF-8KtA3Sl0z-8HfzELhXnD0LDsW7-M0c8QTJqRpthyH2G1Wz5lsnLjpkgXohaiWemhAKlxOi16BX6UDHt_p7ZWECBs8waGRpydnAclNvv3LgOmIr=w800-h533-no?authuser=0'
                            width={800}
                            height={533}
                        />
                    </div>
                </div>

                <h1 className={utilStyles.justifyCenter} id='garibaldi-lake'>Garibaldi Lake</h1>
                <div>
                    {`The hike to Garibaldi Lake starts at the `}<Link href={garibaldiLakeTrailhead}>Rubble Creek Trailhead</Link>{` north of Squamish, travelling uphill
                    roughly 6 miles (12 round trip).
                    You may optionally return back via Taylor Meadows for a slightly longer, but more varied experience. The trail is steep and wooded
                    for the majority of its duration,
                    but its made up for by the extreme beauty of the lake. If you can tolerate cold water,
                    the lake is good for swimming in the summer. At the lake, there are several small islands called "The Battleships" you can swim or walk out to depending on the
                    water level.`}
                    <br/>
                    <MapEmbed query='Rubble+Creek+Trailhead/@49.9572651,-123.1224237,17z/data=!3m1!4b1!4m5!3m4!1s0x54871c632191eab1:0x59a0a0082e018b3f!8m2!3d49.9572617!4d-123.120235'/>
                    <br/><br/>
                    {`Garibaldi Lake is a popular area for both day hikers and backpackers, so expect to see plenty of people here. The lake is adjacent to a 50-site
                    campground. The campground has multiple cooking shelters, outhouses, and a pulley system for food storage - it's one of the most developed
                    backpacking campgrounds I've ever seen. During the summer, a ranger station is staffed with park employees.`}
                    <br/><br/>
                    {`If you are able to camp here, stay out to view the sunset as the last rays of light crest the mountains behind the lake.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Garibaldi Lake at sunset'
                            src='https://lh3.googleusercontent.com/pw/AL9nZEWbGm-Grs-W0tO7tSR-vSn5hmjNP0f54YgL1fnnHYFe3OpagmakiqlD1bBQIwHk5fxgTka_XFu29YZoOmJi2DsXKI8lw7EkACeSNl6XCjKRtNwyV_QBvVOBDYTmveUQNwm-rHZc4wYEtPtiga5EzUr0=w800-h533-no?authuser=0'
                            width={800}
                            height={533}
                        />
                    </div>
                    <br/><br/>
                </div>

                <h1 className={utilStyles.justifyCenter} id='panorama-ridge'>Panorama Ridge</h1>
                <div>
                    {`Panorama Ridge offers a 360 degree view of Garibaldi Lake, Black Tusk, and the Helm Lake area. It's arguably the 
                    best viewpoint in the park - but it's a long, difficult hike to get there. If done as a day hike, 
                    you'll cover around 20 miles round-trip, with 5k+ feet of elevation gain.`}
                    <br/><br/>
                    {`To hike Panorama Ridge, start at `}<Link href={garibaldiLakeTrailhead}>Rubble Creek Trailhead</Link>{`.
                    You may choose to hike past Garibaldi Lake, or through Taylor Meadows and bypass the Lake. Past Garibaldi Lake/Taylor Meadows,
                    you'll travel several miles of varied meadows and smaller lakes - the views here are stunning. On your way, you'll see for
                    Panorama Ridge. The Panorama Ridge trail is about 2 miles long once it leaves the main trail.`}
                    <br/><br/>
                    {`If you can get the reservations, I recommend camping at Taylor Meadows or Garibaldi Lake before attempting this hike.
                    Camping at one of the backcountry campgrounds will reduce the distance you need to hike each day, and you'll be able to spend more time
                    exploring the park.`}
                    <br/><br/>
                    {`If you can only do one hike at Garibaldi Provincial Park, and you're up for a tough 20-mile day, this is the hike you want to do.`}
                    <br/>
                    <br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Garibaldi Lake from Panorama Ridge'
                            src='https://lh3.googleusercontent.com/pw/AL9nZEUO1Y3yTxPlcYZE4k9pr1OIbx4V-xHqBiN_XzxYxtKyzT7c846g0POmTtqorUDg8YfU-xDppl6k9oYzaGKmgNvJUbDCaOU9TpK7FRMOKrP9e8WIKxWsDlewAsHm4jgbCsqcXO0VbSPPT3K5nZ5CIE7G=w355-h533-no?authuser=0'
                            width={355}
                            height={533}
                        />
                    </div>
                    <br/><br/>
                </div>

                <h1 className={utilStyles.justifyCenter} id='black-tusk'>Black Tusk</h1>
                <div>
                    {`Black Tusk is a peak of dark volcanic rock that's visible from most of the area above Garibaldi Lake. The peak is accessed via a steep 2-mile trail that
                    forks from the main trail past Taylor Meadows. The last section of this trail is somewhat of a scramble, but will take you high up the mountain to an
                    amazing view. Starting at the `}<Link href={garibaldiLakeTrailhead}>Rubble Creek Trailhead</Link>{`, expect a 17 mile round trip - the route is 
                    very similar to the Panorama Ridge hike.`}
                    <br/><br/>
                    {`It's possible to hike Panorama Ridge, Black Tusk, and Garibaldi Lake on the same trip due to their proximity. This itenerary is best suited
                    for a multi-day backpack, camping at Taylor Meadows, Garibaldi Lake, or Helm Creek Campground. Helm Creek Campground is around 3 miles further from
                    the Panorama Ridge turnoff on the main trail.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Black Tusk'
                            src='https://lh3.googleusercontent.com/pw/AL9nZEV7ZSR60413tizgORy13VZ5njXo8CZtdJXJfnv5zTFLSOWGC4P1toUUezRi5lRLXqx9p0W6vHqqJi4naSufhSqcHLwHpP7iwFK32sDbMI4o4LrKwAHbxuuUNyp9qAewe2ws37mv3mg60t4RIWmY8sTA=w533-h800-no?authuser=0'
                            width={533}
                            height={800}
                        />
                    </div>
                    <br/><br/>
                </div>

                <h1 className={utilStyles.justifyCenter} id='elfin-lakes'>Elfin Lakes</h1>
                <div>
                    <Link href={elfinLakesTrailhead}>Elfin Lakes</Link>{` is a favorite backpacking destination near Squamish. The trailhead is up a 
                    steep forest service road just 45 minutes outside of town. The trail climbs steadily along a closed road for 6 miles, passing through
                    red heather meadows until it reaches Elfin Lakes.
                    Partway up the trail is the Red Heather shelter, a nice spot to stop and have lunch, especially if the weather is wet or cold
                    (we were freezing wet when we hiked this!).`}
                    <MapEmbed query='49.750047,-123.053960'/>
                    <br/><br/>
                    {`When we visited in the fall, the meadows were vibrant with color, and there were plentiful blueberries growing alongside the trail. 
                    The berries growing in the meadows also attracted bears, and we saw six bears on the way up - two mama bears, each with two cubs.`}
                    <br/><br/>
                    {`Elfin Lakes campground has a shelter, outhouse, and many, many tent pads. There's a larger shelter for winter camping, but it was 
                    closed when we visited. Past Elfin Lakes, there's several options to continue your hike: continue on to Rampart Ponds, hike up to the Gargoyles (an interesting rock
                    formation). Another campground is located at Rampart Ponds
                    if you want to extend your backpacking trip.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Bear Cubs near Red Heather Meadows'
                            src='https://lh3.googleusercontent.com/pw/AL9nZEXR2bgAsL-703pZH1C5CQzCbnJ_2zAFN4Z9rWkexTyysq-YSsWp4U_mYfLwk1K7K5CIv49TvN2fTg2ZTYjilPb6yh3eX6Y5WXCLNN0hykPjvOcC6_ju3doTFJDNdxTy_B9vHUlZjIi2-J-IYHHA0TWR=w800-h533-no?authuser=0'
                            width={800}
                            height={533}
                        />
                    </div>
                    <br/><br/>
                </div>

                <h1 className={utilStyles.justifyCenter} id='trip-ideas'>Backpacking Trip Ideas</h1>
                <div>
                    {`These suggestions are based on backpacking we did within the park. There are many ways to plan your trip in
                    Garibaldi, so take these as general ideas for your own use.`}<br/><br/>
                    <b>{`Garibaldi Lake Area`}</b>
                    <ul>
                        <li>Day 1: Hike from Rubble Creek Trailhead to Garibaldi Lake, 6 miles. Camp at Garibaldi Lake.</li>
                        <li>Day 2: Day hike to Panorama Ridge, 10-12 miles. Camp at Garibaldi Lake or Taylor Meadows.</li>
                        <li>Day 3: Hike out to Rubble Creek Trailhead, 6 miles.</li>
                    </ul>
                    <b>{`Elfin Lakes`}</b>
                    <ul>
                        <li>Day 1: Hike from Elfin Lakes Trailhead to Elfin Lakes, 6 miles. Camp at Elfin Lakes.</li>
                        <li>Day 2: Hike to Rampart Ponds, day hike or camp there.</li>
                        <li>Day 3: Hike out to Elfin Lakes trailhead.</li>
                    </ul>
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Cheakamus Lake'
                            src='https://lh3.googleusercontent.com/pw/AL9nZEVAeCHO8Ay277NYxeZu-ZXH0ef0_16pfjwlzWflILFdJofKfLnQYSY2Af2kPdOfXoHAyOKvIxvnrK2j1Lv1--2MNVY3HcA64JShl71PcVmGYv8c6gVNkI0kZXQzjfXOK_zdubXbOclpla_rOWZ10C_P=w355-h533-no?authuser=0'
                            width={355}
                            height={533}
                        />
                    </div>
                    <br/><br/>
                </div>

                <h1 className={utilStyles.justifyCenter} id='bear-safety'>Bear Safety</h1>
                <div>
                    {`Garibaldi is home to a large population of Black Bears, as well as the occasional Brown Bear. Bears are particularly active towards the
                    end of summer and early fall, and you are likely to see them when visiting the park.`}
                    <br/><br/>
                    {`While visiting bear country,
                    please learn and practice `}<Link href={links.hiking.bearSafety}>Bear Safety</Link>{` to protect yourself and the bears.
                    Keeping human food away from bears is of the utmost importance - bears that become accustomed to approaching humans or eating 
                    human food are euthanized if reverse conditioning is ineffective. Please hike responsibly and help preserve the park's wildlife.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='Black Bear in Taylor Meadows'
                            src='https://lh3.googleusercontent.com/pw/AL9nZEWueW5yL9NbGf9KLuQ6L72-_aejsdXslBDF9RNjmc4w1EaEvB3_SOLWvB3NvZJqFIaIxqSA844Lppfri1fy071qquuE84HRVSNuNwpZkYpKV7wCJMk-S-OD0E0i21X_jMyYzNUSG_az_lYukaWbo3dY=w533-h800-no?authuser=0'
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
                tag={relatedTag}
            />
        </Layout>
    )
}
