import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../layout";
import Link from "next/link";
import RelatedPosts from "../../related_posts";
import links from "../../../lib/links";
import Pinnable from "../../pinit";
import Contact from "../../contact";
import MapEmbed from "../../maps";
import WTPBackpacking from "../../snippets/what-to-pack-backpacking";
import ReadMoreLink from "../../read_more_link";

//+metadata
let metadata = {
  title: "Garibaldi Park Backpacking",
  date: "2022-11-06",
  image:
    "https://lh3.googleusercontent.com/pw/AL9nZEXdf4dR5_zUFiRTPPsNDjkqVJOi6-6SHxXZikfgvFTSUOr0gLfI6ojOVx6jbh62KSyDGAdifitbY1T00Iiy6XvsCArGuH_j-RisUlMwqlUwINk_LvZ5pNphMwBPcdBVX50R0nuXXHmannaPVyIBoyKg=s800-no?authuser=0",
  tags: ["british columbia", "lakes", "backpacking"],
};

const cover =
  "https://lh3.googleusercontent.com/pw/AL9nZEVhRrYvbUiAVCeZAXykSN_qLJhTemb91Y8JEKVIm6S1ogFbzcwBqdjXkQc4a5_9bmn9agULI6lT8wzVhkIHRR2eELYAlo-ST0xuu9Gd08pirzCESrXU96HyuA6cCVWzQwdh8rzSkHK4zBv7RwdCjcmR=w800-h533-no?authuser=0";
const pageURI = "/blog/bc/garibaldi-lake";
const relatedTag = "backpacking";

const garibaldiLakeTrailhead =
  "https://www.google.com/maps/dir/Rubble+Creek+Trailhead,+0A0+Daisy+Lake+Rd,+Whistler,+BC+V0N+1H0,+Canada/@49.9573116,-123.1552543,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54871c632191eab1:0x59a0a0082e018b3f!2m2!1d-123.120235!2d49.9572617?hl=en";
const elfinLakesTrailhead =
  "https://www.google.com/maps/dir/Elfin+Lakes+Trail+%26+Diamond+Head+Trail,+Squamish-Lillooet,+BC+V0N+1H0,+Canada/@49.7714738,-123.0387118,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5486fae751cb2185:0xdde616187e478a39!2m2!1d-123.0036925!2d49.7714236?hl=en";

export default function Garibaldi({ readMore }) {
  return (
    <Layout
      headerImage={cover}
      headerText={metadata.title}
      description={`Discover, backpack, and enjoy beautiful Garibaldi Provincial Park in British Columbia.`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Mountain range in Garibaldi Park"
            src={cover}
            width={800}
            height={533}
          />
        </div>
        <div>
          {`Picture yourself surrounded by towering peaks, alpine lakes, and fields of wildflowers as you backpack through the rugged splendor of Garibaldi Provincial Park
           in British Columbia, Canada. This park is a favorite for lovers of the outdoors, offering a range of challenging hikes, panoramic vistas, and diverse 
           backpacking opportunities.`}
          <br />
          <br />
          {`During our week-long visit to Garibaldi Provincial Park in September 2022, we were left in awe by the park's natural splendor and had one of the most
           memorable trips of the year. In this guide, we'll share our top tips and insights for planning your own unforgettable adventure to this incredible destination.`}
        </div>
        <h1 className={utilStyles.justifyCenter} id="getting-there">
          Getting There
        </h1>
        <br />
        <div>
          {`Conveniently located just an hour north of Vancouver, Garibaldi Provincial Park is easily accessible via the scenic Sea-to-Sky highway, which
           takes you on a picturesque journey towards the world-renowned ski destination of Whistler. One of Garibaldi Park's most popular hikes is Garibaldi Lake, 
           which can be reached by a well-maintained road with a large parking lot (however, it's worth noting that the lot 
            tends to fill up quickly during peak season). The park's other main trailheads (Cheakamus Lake and Elfin Lakes) can 
            be accessed via gravel/dirt roads. I found these roads passable with a 2WD sedan, but they do have numerous rocky or potholed sections that should be taken slowly.`}
          <br />
          <br />
          {`Camping in Garibaldi Provincial Park is restricted to developed campgrounds and requires reservations made in advance.
          To reserve a campsite or a day-use permit, visit the `}
          <Link href={links.misc.bcparksReservations}>BC Parks Website</Link>
          {`. It's important to note that during the summer months, a free permit must also be reserved for day use. There are a limited number of permits,
          and they are often claimed quickly. I recommend reserving a permit as soon as you are able to secure your trip to avoid disappointment.`}
          <br />
          <br />
          {`If camping isn't your style, the nearby towns of Squamish and Whistler are popular tourist destinations with excellent accommodations.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Tantalus Range from Garibaldi Park"
              src="https://lh3.googleusercontent.com/pw/AL9nZEXjFoa2IG2Ad21KC9bXpDrh95Ei5cSxx4KiJUbyF-8KtA3Sl0z-8HfzELhXnD0LDsW7-M0c8QTJqRpthyH2G1Wz5lsnLjpkgXohaiWemhAKlxOi16BX6UDHt_p7ZWECBs8waGRpydnAclNvv3LgOmIr=w800-h533-no?authuser=0"
              width={800}
              height={533}
            />
          </div>
        </div>

        <ReadMoreLink
          enabled={readMore}
          text="backpacking Garibaldi Provincial Park in British Columbia"
          uri={pageURI}
        >
          <h1 className={utilStyles.justifyCenter} id="garibaldi-lake">
            Garibaldi Lake
          </h1>
          <div>
            {`The hike to Garibaldi Lake begins at the `}
            <Link href={garibaldiLakeTrailhead}>Rubble Creek Trailhead</Link>
            {`, located north of Squamish, and takes you uphill for about 6 miles (12 miles round trip) through a dense evergreen forest. The hike can be done as an out-and-back, or you can opt for a slightly longer and more varied experience by returning via Taylor Meadows. The trail is well-marked throughout, with signposts and maps to guide you.`}
            {`The hike to Garibaldi Lake starts at the `}
            <br />
            <br />
            {`Although the hike through the forest may not be the most thrilling, the lake's breathtaking beauty more than makes up for it. When we finally arrived at Garibaldi Lake, we were struck
           by the lake's bright turquoise waters, surrounded by towering snow-capped mountains.
                    If you're up for a swim,
                    I recommend heading out to one of the small islands, nicknamed "The Battleships" - if the view didn't take your breath away,
                    the lake's icy cold water definitely will. Be aware that while the lake water
                    may look inviting after a hike, it's extremely cold and should only be attempted by confident swimmers.`}
          </div>
          <MapEmbed query="Rubble+Creek+Trailhead/@49.9572651,-123.1224237,17z/data=!3m1!4b1!4m5!3m4!1s0x54871c632191eab1:0x59a0a0082e018b3f!8m2!3d49.9572617!4d-123.120235" />
          <div>
            {`This area is heavily frequented by both day hikers and backpackers, so don't expect too much solitude here. The lake is adjacent to a 50-site backpacker's
                    campground. The campground has multiple cooking shelters, outhouses, and a pulley system for bear-safe food storage. 
                    During the summer, a ranger station at the edge of the campground is staffed with park employees. Note that all drinking water
                    must be filtered and/or purified from the lake.`}
            <br />
            <br />
            {`If you are able to camp here, stay out to view the sunset as the last rays of light illuminate the mountain range behind the lake. A great spot to take in the sunset is from the wooden, floating helipad near the ranger station. The helipad is also a great spot to hang out and chat with other backpackers who are also enjoying the view.`}
          </div>
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Garibaldi Lake at sunset"
              src="https://lh3.googleusercontent.com/pw/AL9nZEWbGm-Grs-W0tO7tSR-vSn5hmjNP0f54YgL1fnnHYFe3OpagmakiqlD1bBQIwHk5fxgTka_XFu29YZoOmJi2DsXKI8lw7EkACeSNl6XCjKRtNwyV_QBvVOBDYTmveUQNwm-rHZc4wYEtPtiga5EzUr0=w800-h533-no?authuser=0"
              width={800}
              height={533}
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="panorama-ridge">
            Panorama Ridge
          </h1>
          <div>
            {`Panorama Ridge offers a beautiful 360-degree view of Garibaldi Lake, Black Tusk, and the Helm Lake area, and it's considered the 
                    best viewpoint in the park accessible by trail. However, it's a long and challenging hike to get there, with plenty 
                    of climbing and rocky terrain. If you decide to hike Panorama Ridge in a day, be prepared to cover over 20 miles 
                    round-trip with about 5,000 feet of elevation gain. For most hikers, this is a 10-14-hour hike, so plan accordingly with plenty of food and water.`}
            <br />
            <br />
            {`The Panorama Ridge hike starts at the `}
            <Link href={garibaldiLakeTrailhead}>Rubble Creek Trailhead</Link>
            {`, with stunning views of meadows, mountain glaciers, and lakes. On the way there, you have the option of hiking past Garibaldi Lake or bypassing the 
          lake with the trail through Taylor Meadows. The high country between Taylor Meadows/Garibaldi Lake is some of the best in the park, with thinning trees
           giving way to wildflower meadows, streams, and unobstructed views of several mountain ranges, including the distant Tantalus Range towards Squamish.`}

            {`The final push to Panorama point is along a 2-mile spur off the main trail, on the right hand side near the signage for Helm Creek. The trail rapidly
          turns steep and rocky here, but persevere and you'll be rewarded with an incredible view of Garibaldi Lake from above. There's an excellent spot for
          photos of the lake and mountains on the saddle past the high point. The pin below marks the turn-off for the Panorama Ridge trail - it's 
          easily missed, so take your time when approaching and watch for where other hikers are headed. Most other people on the trail will be heading up to Panorama Ridge.`}
          </div>
          <MapEmbed lat="49.964556" long="-123.028118" />
          <div>
            {`To better enjoy this hike, I recommend camping at Taylor Meadows or Garibaldi Lake the night before, to reduce the amount of miles you need
          to hike in a single day. Not only will this make your trip easier, it will also allow you to spend more time enjoying the natural splendor of Garibaldi.`}
            <br />
            <br />
            {`If you only have one day at Garibaldi Provincial Park, and you know you can tackle a tough 20-mile hike, this is the one you absolutely must do.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Garibaldi Lake from Panorama Ridge"
                src="https://lh3.googleusercontent.com/pw/AL9nZEUO1Y3yTxPlcYZE4k9pr1OIbx4V-xHqBiN_XzxYxtKyzT7c846g0POmTtqorUDg8YfU-xDppl6k9oYzaGKmgNvJUbDCaOU9TpK7FRMOKrP9e8WIKxWsDlewAsHm4jgbCsqcXO0VbSPPT3K5nZ5CIE7G=w355-h533-no?authuser=0"
                width={355}
                height={533}
              />
            </div>
            <br />
            <br />
          </div>

          <h1 className={utilStyles.justifyCenter} id="black-tusk">
            Black Tusk
          </h1>
          <div>
            {`Black Tusk is an imposing peak of dark volcanic rock that's plainly visible from most of the area above Garibaldi Lake, and offers a commanding view 
          of this gorgeous area. The hike to Black tusk also starts at the `}
            <Link href={garibaldiLakeTrailhead}>Rubble Creek Trailhead</Link>
            {`, and is approximately a 17 mile round trip - the route is 
                    technically similar to the Panorama Ridge hike described in the last section. Hike along the main trail from Taylor Meadows, till you
                    reach signage for Black Tusk. The challengingly steep side trail to the peak is 2 miles long, and becomes increasingly rocky towards the end. The pin below marks
                    the exact location of the Black Tusk turnoff from the main trail.`}
          </div>
          <MapEmbed lat="49.959747" long="-123.048888" />
          <div>
            {`If you're planning a multi-day trip to Garibaldi Park, I recommend hiking hike Panorama Ridge, Black Tusk, and Garibaldi Lake on the same trip due to their proximity.
          While possible for extreme hikers in a single day, this itinerary is better suited
                    for multi-day backpackers taking advantage of campsites Taylor Meadows, Garibaldi Lake, or Helm Creek. Helm Creek Campground is around 3 miles further from
                    the Panorama Ridge turnoff on the main trail.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Black Tusk"
                src="https://lh3.googleusercontent.com/pw/AL9nZEV7ZSR60413tizgORy13VZ5njXo8CZtdJXJfnv5zTFLSOWGC4P1toUUezRi5lRLXqx9p0W6vHqqJi4naSufhSqcHLwHpP7iwFK32sDbMI4o4LrKwAHbxuuUNyp9qAewe2ws37mv3mg60t4RIWmY8sTA=w533-h800-no?authuser=0"
                width={533}
                height={800}
              />
            </div>
            <br />
            <br />
          </div>

          <h1 className={utilStyles.justifyCenter} id="elfin-lakes">
            Elfin Lakes
          </h1>
          <div>
            <Link href={elfinLakesTrailhead}>Elfin Lakes</Link>
            {` is a favorite backpacking destination near Squamish with multiple lakes and a beautiful campsite that fronts Mt. Garibaldi.
                   The  Elfin Lakes Trail trailhead is up a rocky forest service road just 45 minutes outside of Squamish, most of the drive time
                   being on the gravel road.
                   Once you hit the trail, it climbs steadily along an old, closed road for about 6 miles, passing through
                   meadows of red heather and wild blueberry before reaching Elfin Lakes. Partway up the trail is the Red Heather shelter
                   stocked with tables, chairs, and a fully hooked up a gas burner. The shelter is a great spot to stop and have lunch, especially
                   if the weather is rainy or cold, but please note that overnight camping is not allowed in the Red Heather shelter.`}
            <br />
            <br />
            {`Due to the abundance of blueberry meadows along the trail, bear sightings in this area are quite frequent. Be bear aware during your hike, as
                   you'll likely see one or more black bears munching on blueberries towards the end of summer - I recommend hiking
                   this trail in a group, as you will be less likely to startle any bears you encounter.`}
          </div>
          <MapEmbed query="49.750047,-123.053960" />
          <div>
            {`When we visited in the fall, the meadows were vibrant red with color, and there were plentiful blueberries growing alongside the trail. 
                    The berries growing in the meadows attracted bears, and we saw six bears on the way up - two mama bears, each with two cubs.`}
            <br />
            <br />
            {`The Elfin Lakes campground has a shelter, an outhouse, and a large amount of tent pads. There's a larger shelter for winter camping, but it was indefinitely
                    closed during our visit. One of the lakes is designated for collecting drinking water, while the other is intended for swimming.`}
            <br />
            <br />
            {`If you decide hike past Elfin Lakes, there's a couple options to continue adventuring: continue on to Rampart Ponds, or
                    hike up to the Gargoyles (an interesting rock
                    formation). Another campground is located at Rampart Ponds
                    if you want to extend your backpacking trip.`}
          </div>
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Bear Cubs near Red Heather Meadows"
              src="https://lh3.googleusercontent.com/pw/AL9nZEXR2bgAsL-703pZH1C5CQzCbnJ_2zAFN4Z9rWkexTyysq-YSsWp4U_mYfLwk1K7K5CIv49TvN2fTg2ZTYjilPb6yh3eX6Y5WXCLNN0hykPjvOcC6_ju3doTFJDNdxTy_B9vHUlZjIi2-J-IYHHA0TWR=w800-h533-no?authuser=0"
              width={800}
              height={533}
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="trip-ideas">
            Backpacking Trip Ideas
          </h1>
          <div>
            {`These suggestions are based on backpacking we did within the park. There are many ways to plan your trip in
                    Garibaldi, so take these as general ideas for your own use.`}
            <br />
            <br />
            <b>{`Garibaldi Lake Area`}</b>
            <ul>
              <li>
                Day 1: Hike from Rubble Creek Trailhead to Garibaldi Lake, 6
                miles. Camp at Garibaldi Lake.
              </li>
              <li>
                Day 2: Day hike to Panorama Ridge, 10-12 miles. Camp at
                Garibaldi Lake or Taylor Meadows.
              </li>
              <li>Day 3: Hike out to Rubble Creek Trailhead, 6 miles.</li>
            </ul>
            <b>{`Elfin Lakes`}</b>
            <ul>
              <li>
                Day 1: Hike from Elfin Lakes Trailhead to Elfin Lakes, 6 miles.
                Camp at Elfin Lakes.
              </li>
              <li>Day 2: Hike to Rampart Ponds, day hike or camp there.</li>
              <li>Day 3: Hike out to Elfin Lakes trailhead.</li>
            </ul>
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Cheakamus Lake"
                src="https://lh3.googleusercontent.com/pw/AL9nZEVAeCHO8Ay277NYxeZu-ZXH0ef0_16pfjwlzWflILFdJofKfLnQYSY2Af2kPdOfXoHAyOKvIxvnrK2j1Lv1--2MNVY3HcA64JShl71PcVmGYv8c6gVNkI0kZXQzjfXOK_zdubXbOclpla_rOWZ10C_P=w355-h533-no?authuser=0"
                width={355}
                height={533}
              />
            </div>
          </div>

          <h1 className={utilStyles.justifyCenter} id="bear-safety">
            Bear Safety
          </h1>
          <div>
            {`Garibaldi is home to a large population of Black Bears, as well as the occasional Brown Bear. Bears are highly active during the
                    end of summer and early fall, and you are likely to see them when visiting the park. We saw at least one bear every day we backpacked in 
                    Garibaldi, often multiple bears per day.`}
            <br />
            <br />
            {`While visiting bear country,
                    please be bear aware and and practice recommended tips for `}
            <Link href={links.hiking.bearSafety}>Bear Safety</Link>
            {` to protect yourself and the bears.
                    Keeping human food away from bears is of the utmost importance - bears that become accustomed to approaching humans or eating 
                    human food are euthanized if reverse conditioning is ineffective. Please hike responsibly to help preserve the park's wildlife.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Black Bear in Taylor Meadows"
                src="https://lh3.googleusercontent.com/pw/AL9nZEWueW5yL9NbGf9KLuQ6L72-_aejsdXslBDF9RNjmc4w1EaEvB3_SOLWvB3NvZJqFIaIxqSA844Lppfri1fy071qquuE84HRVSNuNwpZkYpKV7wCJMk-S-OD0E0i21X_jMyYzNUSG_az_lYukaWbo3dY=w533-h800-no?authuser=0"
                width={533}
                height={800}
              />
            </div>
          </div>
          <WTPBackpacking pageURI={pageURI} />
          <Contact />
        </ReadMoreLink>
      </div>
      <RelatedPosts metadata={metadata} tag={relatedTag} readMore={readMore} />
    </Layout>
  );
}
