import utilStyles from "../../../styles/utils.module.css";
import Pinnable from "../../pinit";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";
import MapEmbed from "../../maps";
import Contact from "../../contact";
import Video from "../../video";
import { rawData } from "../../../lib/common";
import links from "../../../lib/links";
import Link from "next/link";

const pageURI = "/blog/guides/lunch-while-backpacking";

//+metadata
export const metadata = {
  title: "What should I have for lunch while backpacking?",
  date: "2023-03-17",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8CIYux4Hob3k20VjNGnEz4wI70iKsuhoJQT2Ya3zHlmLAPOwjFBznAMLzKNAEyeM8uebfmyP3nyPUy-9Zoc61UDabxutlb2vbx7koRRnzX6LnQmU2L-Zofh4CtFX871UUF9pY8FMS3bRBysxK42hDP5=s800-no?authuser=0",
  tags: ["guides", "backpacking"],
  preview:
    "Join us as we share our top, tasty lunch choices that'll keep you well-fed while backpacking.",
};

export default function BackpackingLunch({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <div>

          {`what types of food to pack: nutrient dense, lightweight, shelf-stable, easy to prepare
          tortilla wraps and variations
          snacks: date "snickers"
          salami/cheese/smolked salmon
          instant or quick-cook meal packets: instant potatoes, minute oats, ramen noodles, instant rice
          energy bars: huge variety, but generally low in satiety`}
          {`If you're local to NW Oregon, the Eagle Creek trail almost needs no introduction. This trail is well-known for its many waterfalls,
          towering basalt canyons, and scenic views. The main draw of the Eagle Creek trail is Tunnel Falls, a 172-foot waterfall with an enclosed passage behind it.`}
          <br />
          <br />
          {`The Eagle Creek trail is a staple hike for those exploring the Columbia River Gorge or visiting Oregon. Even if you don't make it all the way to Tunnel Falls,
          there are still countless other waterfalls to see along the way. I've hiked the Eagle Creek trail at least a dozen times during every season of the year, and it never disappoints!`}
          <br />
          <br />
          {`The photos in this post are from an early-March trip, when the trail had some snow and ice.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Video
              src={rawData("eagle-cr-walk.mp4")}
              height={600}
              width={337}
            />
          </div>
        </div>

        <ReadMoreLink
          enabled={readMore}
          text="hiking the Eagle Creek trail"
          uri={pageURI}
        >
          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There and Parking
          </h1>
          <div>
            {`The trailhead is located about 45 minutes east of Portland on I-84, between Bonneville Dam and Cascade Locks. The following pin shows the trailhead's location
            in the Columbia River Gorge.`}
          </div>
          <MapEmbed query="Eagle+Creek+Trailhead/@45.6366863,-121.9218307,16.71z/data=!4m5!3m4!1s0x5495a7b3fcbd403f:0x7e7ddf075caddc4c!8m2!3d45.6368482!4d-121.9194887" />
          <div>
            {`A Northwest Forest Pass or day use permit is required for parking at the trailhead. $5 Day use permits can be purchased on-site before your hike.`}
            <br />
            <br />
            {`The Eagle Creek trail can get very busy, especially during Spring and Summer. If you're planning to hike on a Summer weekend, I recommend getting to the trailhead by 8:00 AM to claim a parking spot.
            The majority of the available parking is over 1/2 mile from the trailhead, so arriving early can reduce extra walking along the access road.
            Alternatively, consider hiking off-season or midweek to reduce the crowds.`}
          </div>

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>

          <div>
            {`The Eagle Creek trail begins in a basalt canyon, following the creek. The trail can be rocky at times, and there is a sharp drop-off on the right-hand side.`}
            <br />
            <br />
            {`The first two miles of trail
            are particularly scenic, with lush moss and small to medium sized waterfalls including Wauna and Metlako Falls. If there has been heavy rain recently, expect to see a multitude of ephemeral
            waterfalls cascading down the canyon walls.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Eagle Creek Trail, Columbia River Gorge, Oregon."
                src="https://lh3.googleusercontent.com/pw/AMWts8CdBeidz2ewRYzKMoCYVyjleQGNfLrmdV5EbNJlnolSFk4wTJyCENDkyfScsVbEqE9sD9Cr3HRz_nk4xtYfVJZi6sEXE8UfZqiTtUdCmIEXbpkMRsMgZ8mwN4mcWbKDtBh8Aj7UmrcJEgYT9_bcoWkh=w600-h800-no?authuser=0"
                width={600}
                height={800}
              />
            </div>
            <br />
            <div>
              {`After 2 miles, you'll reach Punchbowl Falls. If you're up for a shorter hike, this is a good turnaround point and/or lunch spot. During the Summer, Punchbowl and Lower Punchbowl Falls
            are popular with swimmers.`}
              <br />
              <br />
              {`To get down to Lower Punchbowl falls, look for a side trail slightly before Punchbowl Falls. This will takes you down to a rocky bar alongside Eagle Creek, and is best used during Summer.`}
            </div>
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Punchbowl Falls, Eagle Creek Trail, Oregon"
                src="https://lh3.googleusercontent.com/pw/AMWts8BKjmBP9F591eB_St5I5WGFiT9KVSZ5chsSyKGXYa3ZO6k8ubvLTwvNd5QGuXau6FCkXHpCnX6bm3z7f5E1KBf8F28XL9mXLB0GUBRb0iSoujmgwO6YcinQAh5RpJoRJTkrykcWfIXKQEc7WuSGxY58=w600-h800-no?authuser=0"
                width={600}
                height={800}
              />
            </div>
            <br />
            {`1.4 miles from Punchbowl Falls is High Bridge, which spans a steep and very pretty section of the canyon. On the way to High Bridge, look to your right for the two-tiered Loowit Falls.`}
            <br />
            <br />
            {`Continue along the trail for 1.1 miles past High Bridge, crossing over 4 1/2 Mile Bridge. Unsurprisingly, this bridge is 4 1/2 miles from the trailhead!`}
            <br />
            <br />
            {`It was snowing hard at this point during my
            last trip, and I decided to stop to put on my microspikes.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Video src={rawData("IMG_0323.mp4")} height={600} width={337} />
            </div>
            <br />
            {`Two more miles of hiking, and you'll arrive at Tunnel Falls. Tunnel Falls is an absolutely spectacular 172-foot waterfall with a man-made tunnel passing behind it. I consider this to be the main
            destination on the Eagle Creek trail, and most hikers who aren't backpacking turn around here.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Tunnel Falls, Eagle Creek Trail, Oregon"
                src="https://lh3.googleusercontent.com/pw/AMWts8DGhV2lIkow6hRiYzjff4PSJ3tEZKTZlvQfI1wIN2QnmRQyXgoymlZ3LqKVHh8AzIK6IVeeF1Oc6_uC57sveqg7VdytvmF415iq7xw0tyHHiZRYMIWcr6G_eyws0ZgIPak-sUvv6-D-SNofj4amP2By=w600-h800-no?authuser=0"
                width={600}
                height={800}
              />
            </div>
            <br />
            <div>
              {`The trail passes behind the falls, and was a little icy at the time. The buildup of hanging ice from the fall's spray added a layer of beauty to the scene.`}
            </div>
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Another look at Tunnel Falls, Eagle Creek Trail, Oregon"
                src="https://lh3.googleusercontent.com/pw/AMWts8B-ObS7yeTKD7yqm-rWuC7ULjfvTrAJXkbHWvULzlKDJnUxWMomvxaL7eF9Reh5fIScninRyWzEe9iAkOr0BxslSBnF1dH_8OqOhfzfs_dfxl1eeAGRIKmwYdyJoXjEGQZnb7cted3Vn4SCb0HRZYM9=w600-h800-no?authuser=0"
                width={600}
                height={800}
              />
            </div>
            <br />
            <div>
              {`If you've got the energy for it, I recommend continuing 1/2 mile beyond Tunnel Falls to Twister Falls. There's a gorgeous, steep trail before Twister Falls, and the falls themselves are interesting to see.
              I didn't notice any tracks in the snow past Tunnel Falls, and continued on. Mind the drop-off here!`}
            </div>
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Continuing past Tunnel Falls, Eagle Creek Trail, Oregon"
                src="https://lh3.googleusercontent.com/pw/AMWts8DpB5hRzXVEwkwaOEBOWhLAct7OBxreista370StlXB5a0Jfssb1jBvExGbP4kXwbmIxG2DO7AZW-FqPcXoIaedpBK8oEhPmYyL7B7fc0W37hsif-NkaA539z-I8OucojNz9soBGS5igkOBmj2TmnGE=w800-h600-no?authuser=0"
                width={800}
                height={600}
              />
            </div>
            <br />
            <div>
              {`Twister Falls spirals down through a narrow chute next to the trail, creating a lot of spray. Thick ice had formed over the trail, and I decided to turn around after checking out the falls.`}
            </div>
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Twister Falls, Eagle Creek Trail, Oregon"
                src="https://lh3.googleusercontent.com/pw/AMWts8DmoPey1e0WnexK7fQ9f4_S_6odLYqrPSnSCqOrV1kP08O5_Lvk5B9Gki8j9lm2fAjA3NKlvahp3-NHsAGjDwP2NRe5vwzMF5UO74DvIhzYvo7e3-gHrTWBvHkLa5ntat_pp48X7xA9kFwMGdoH2P3h=w600-h800-no?authuser=0"
                width={600}
                height={800}
              />
            </div>
            <br />
            <div>
              {`On the way back, it started snowing heavily again, and there was almost no one on the trail. If you plan on hiking this trail in the Winter,
              be sure to bring microspikes.`}
              <br />
              <br />
              {`If you like waterfalls and canyons, consider this hike a must-do for any trip to Oregon. The only drawback is the crowds, which can be worked around (or joined).`}
            </div>
            <br />
            <div className={utilStyles.centered}>
              <Video src={rawData("IMG_0325.mp4")} height={600} width={337} />
            </div>
          </div>

          <h1 className={utilStyles.justifyCenter} id="other-tips">
            Other Tips
          </h1>
          <div>
            {`If you hike the Eagle Creek trail during winter or early spring, be prepared for moderate to heavy snowfall and the possibility of deep stream crossings.`}
            <ul>
              <li>
                {`Bring spikes for traction on snow and ice. I like the `}
                <Link href={links.hiking.blackDiamondSpikes}>
                  Black Diamond Spikes
                </Link>
                {`, having used them for 100's of miles.`}
              </li>
              <li>{`Pack extra food. During colder temperatures, our bodies need more energy.`}</li>
              <li>{`Be ready to get wet. Winter and spring often mean rain/snow, and deep stream crossings.`}</li>
            </ul>
            {`If you're hiking in the summer, expect intense crowds and difficult parking. The benefit of summer hiking is the possibility to swim near Punchbowl Falls or other swimming holes.`}
            <br />
            <br />
          </div>

          <br />
          <Contact />
        </ReadMoreLink>
      </div>
    </>
  );
}
