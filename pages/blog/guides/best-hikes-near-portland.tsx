import Image from "next/image";
import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import HikeInfo from "../../../components/hike_info";
import Contact from "../../../components/contact";
import LyleCherryOrchard from "../../../components/pages/shorts/lyle-cherry-orchard";
import DogMountain from "../../../components/pages/shorts/dog-mountain";
import CoyoteWall from "../../../components/pages/shorts/coyote-wall";
import {
  BestSeason,
  DiscoverPass,
  HikeDifficulty,
  NWForestPass,
} from "../../../lib/hike_info_types";
import Link from "next/link";
import WTPHiking from "../../../components/snippets/what-to-pack-hiking";

//+metadata
const metadata = {
  title: "Best moderate hikes near Portland",
  date: "2023-04-15",
  image:
    "https://lh3.googleusercontent.com/pw/AJFCJaXeV_ESsemxiBWD4pZrZNxSmX-rysyOXESyB7cItBnZSpUU6CWfngHl7yd1XPfbPUZfot0XYCdcU1N0QUbqd2n_An6EFX2QTDz8UfclpweAeoZtESQtD8oDLaVwM7KU7TN7GQVVLAE9ETOnzLAQLLmI=w653-h653-s-no?authuser=0",
  tags: ["hiking", "oregon", "guides", "waterfall"],
};

const multnomahFallsPermit = "https://www.recreation.gov/timed-entry/10089144";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Some of the best hikes between 5-8 miles within a 2 hour drive from Portland. Send this to your hiking buddy! 📤`}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "guides",
      }}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          <div>
            {`Check out some of the best hikes near Portland with this list of amazing, easy-to-moderate difficulty hikes.
            This is by no means an exhaustive list (there's just too many great hikes around!), but we tried to pick our favorites!`}
          </div>
          <h3>{`Angel's Rest`}</h3>
          <HikeInfo
            distance="4.7 miles round-trip"
            elevation="1,500 feet"
            difficulty={HikeDifficulty.MODERATE}
            season={BestSeason.SPRING_SUMMER_FALL}
            trailhead="https://www.google.com/maps/place/45%C2%B033'36.9%22N+122%C2%B010'21.7%22W/@45.5602589,-122.1733457,19z/data=!3m1!4b1!4m4!3m3!8m2!3d45.560258!4d-122.172702"
          />
          <br />
          {`Angel's Rest is a beautiful, beloved, out-and-back trail very close to Portland. On this trail, you'll swiftly climb to the summit of Angel's Rest,
          a rocky outcropping with a stunning Columbia River overlook. On clear days you can see down the river to the downtown skyscrapers, miles away.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              src="https://lh3.googleusercontent.com/pw/AJFCJaWOBGNBHUE1A_T_co8o4QRbTiYomsJZ8eV0jCaIaA65kA4r_BV0nA2FtgZtm7GVN873x8dn63PcvOpP6tc7OeONzqDFp4acy7D11_j7rQK7Jmqah--I2DIru0rb3o60JyrCMVn1jHwcaFmgSSuqSbkY=w584-h730-s-no?authuser=0"
              width={584}
              height={730}
              alt="View of the Columbia River from Angel's Rest"
            />
          </div>
          <br />
          {`Angel's Rest is a popular trail, so expect crowds on weekends/holidays, and competitive parking during peak season.`}
          <br />
          <br />
          {`Angel's Rest is also a popular sunset hike, with the sun dipping behind the river as it disappears to the west.
          If you plan to view the sunset here, give yourself plenty of time to reach the top, and bring your headlamp for the hike down.`}
        </div>

        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AJFCJaXOX5BWGEUQpUZEDYrT_D1Rwoh-kdmYiZAQNv9IFK0H2c05MBDFiRqlxWpt62igZAJsu6mjNLDNpZ0_wFDPMZkstT77ImE-7Ftg1Jal-Ki8CjDJtr-Bw_0s323BjQ2Ma1ykxbwgpnyZb8CwePEhHbUB=w584-h730-s-no?authuser=0"
            width={584}
            height={730}
            alt="Rocky outcroppings at Angel's Rest"
          />
        </div>

        <div>
          <h3>Wahkeena Falls to Multnomah Falls Loop</h3>
          <HikeInfo
            distance="6 mile loop"
            elevation="1,700 feet"
            difficulty={HikeDifficulty.MODERATE}
            season={BestSeason.SPRING_SUMMER_FALL}
            permits={
              <Link href={multnomahFallsPermit}>
                Multnomah Timed Entry Permit
              </Link>
            }
            trailhead="https://www.google.com/maps/place/Wahkeena+Falls+Day+Use%2FPicnic+Area%2FTrailhead/@45.5754708,-122.1279256,18.83z/data=!4m6!3m5!1s0x5495eadf7c66919d:0x9ca4b92b7a4f7715!8m2!3d45.576025!4d-122.127828!16s%2Fg%2F11bv3ycbbv"
          />
          <br />
          {`A classic loop hike with six different waterfalls, you'll be amazed by the towering 627 ft. Multnomah Falls, and the 5 other waterfalls along the way.`}
          <br />
          <br />
          {`The Wahkeena/Multnomah waterfall loop can be started at Multnomah Falls or Wahkeena Falls, and hiked in either direction.
          There is a short connector trail between Multnomah and Wahkeena falls that joins the two trailheads.`}
          <br />
          <br />
          {`I suggest starting your hike at Wahkeena, and hiking counter-clockwise. This route has you pass Multnomah Falls on the back half of your hike.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              src="https://lh3.googleusercontent.com/pw/AJFCJaVNlDNvhoTHMlkijPyhyo7UvN0cTmlRckhj2XRWbGwZ9uxYHhqxVajNZhtDEU1b2uzMTqioP8geCYzMJOVMqKSUZcyE7lbx17-xIIq35S7mFiSP1h03d0BGbbkpqVDV-5UFe0JRmxn3GVJyzKzeZ6iq=w533-h799-s-no?authuser=0"
              width={533}
              height={799}
              alt="Basalt Overhang on the Wahkeena Multnomah Loop"
            />
          </div>
          <br />
          {`A `}
          <Link href={multnomahFallsPermit}>permit</Link>
          {` is required to park at Multnomah Falls May 26th through September 4th.`}
          <br />
          <br />
          {`This trail is best hiked outside of peak season
          to avoid intense crowding at Multnomah Falls, as well as along the waterfall corridor.`}
        </div>

        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AJFCJaXUFaUyAeCEYrPMGZFWo5CQ7cCv8_t9Ew_uuFhabV7dCz11tz4_yRQgbSg1cqfM4WhML79drTSg2boNfxJnUle7US_scpwi5DXw5DiGIDrAMJviSmqexZEK8nNRzDGB_rlUD7oiwTbP-8ZcoWB3enmB=w754-h565-s-no?authuser=0"
            width={754}
            height={565}
            alt="Snow covering the Larch Mountain trail on the Wahkeena Multnomah loop"
          />
        </div>

        <DogMountain info />
        <div>
          <h3>Hamilton Mountain</h3>
          <HikeInfo
            distance="7 miles round-trip"
            elevation="2,000 feet"
            difficulty={HikeDifficulty.MODERATE}
            season={BestSeason.SPRING_SUMMER_FALL}
            permits={DiscoverPass}
            trailhead="https://www.google.com/maps/place/Hamilton+Mountain+Trailhead/@45.6326886,-122.020203,20.75z/data=!4m6!3m5!1s0x5495e9ca4e5a2d5d:0x98cef5ae4083eb6!8m2!3d45.6327992!4d-122.020139!16s%2Fg%2F11b7kgbgtn"
          />
          <br />
          {`Hamilton Mountain is one of my top gorge hikes, complete with sweeping views, wildflowers, and waterfalls. View tumbling Rodney Falls and the Pool of the Winds on the climb up.`}
          <br />
          <br />
          {`Above the falls, the trail opens up from tree cover as it ascends Hamilton Mountain, where the trail is interspersed spring wildflowers.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              src="https://lh3.googleusercontent.com/pw/AJFCJaUnXE9XB_LAsdJcojIwE8f5xo5qrkfhD_IZFdcZ3ZHTisCzi1y3jvV71kdjK6tKYZWeTTHuDTQNM4_y6w6D7S0Ia48VpIDRRP7XKMGETmszO_EeJ0rgdphOqN7NmmR0vNwy9UwOMUCB0XyEFgRYuzqy=w584-h730-s-no?authuser=0"
              width={584}
              height={730}
              alt="Lauren Hiking the Hamilton Mountain Trail"
            />
          </div>
          <br />
          {`After reaching the summit, considering extending your hike another 1/2 mile farther to reach the Saddle, a broad viewpoint of the gorge that is (in my opinion) much more beautiful that the peak.
          We've hiked to the saddle many times throughout the seasons, but winter was the most beautiful. The ice and snow, however, were not that fun to deal with!`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              src="https://lh3.googleusercontent.com/pw/AJFCJaWBX6gPlgiFD9T_j8tbCvqiSlHZqkAh6P1dqBrMfau7Afw-L_ou9UOSOVPNh93nQqsS29LSKVp9eezBUoA8SWlYzaFjd9fsCfYFEFUMbpwKcmrsHCc4PN7PQyXFiO3f17FSyW38_GjfE6_oJFwmx9kp=w799-h533-s-no?authuser=0"
              width={799}
              height={533}
              alt="Hamilton Mountain in the spring"
            />
          </div>
          <br />
          {`Make this trail a 9+ mile loop by hiking beyond the Saddle on the equestrian trail. The equestrian trail eventually connects with the Hamilton Mountain trail near the Pool of the Winds.`}
        </div>

        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AJFCJaXQm00DbYCSdMcJbj4lOBWT_uW2Wj338hqUyRw1MqOr_PL9Z5m8kiqTMV8aUmr9yRLQppTf3ji4GLCvS7D9KR9NReMqgQazJTq4KNEU3QcZEVR8l_Hl40buF2C6JeAtNzbcLwfnEw8v8tQs-rGmlUDk=w870-h489-s-no?authuser=0"
            width={870}
            height={489}
            alt="Hamilton Mountain in the snow"
          />
        </div>

        <div>
          <h3>Latourell Falls</h3>
          <HikeInfo
            distance="2.4 mile loop"
            elevation="650 feet"
            difficulty={HikeDifficulty.EASY}
            season={BestSeason.YEAR_ROUND}
            trailhead="https://www.google.com/maps/place/Latourell+Falls+Trailhead/@45.537012,-122.2280962,15z/data=!4m14!1m7!3m6!1s0x549594381efbd86d:0x619be41af91e6535!2sLatourell+Falls!8m2!3d45.5369979!4d-122.2177965!16zL20vMDdsdm1i!3m5!1s0x54959448385ea8e5:0xbcdb6b973e3d24a6!8m2!3d45.5388146!4d-122.2178862!16s%2Fg%2F11bytmbqfk"
          />
          <br />
          {`Near Portland, Latourell Falls is a breathtaking waterfall hike that can be easily looped with Upper Latourell Falls. The lower waterfall is in view of the trailhead,
          with trails looping around it. Do the whole 2.4 mile loop to see the upper viewpoint and the very pretty Upper Latourell Falls.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              src="https://lh3.googleusercontent.com/pw/AJFCJaU-I8wcG59ywoueoxhsu8bMp9SrNMZ4xFr67PDTWslxxWNNmzOl9cGWHQjVlCrj4bKFS9XOQuwf8CBd_F8EJx7QuCRpq_pjEBrvXbP627ogVlQmLdgmprnBwzIepEsaIPZxNEH03SzSbeaviVN756jS=w565-h754-s-no?authuser=0"
              width={565}
              height={754}
              alt="Latourell Falls iced over in winter"
            />
          </div>
          <br />
          {`The last time we hiked this, it was immediately after a winter storm and the falls were decked out in ice and snow. If hiking in winter, microspikes may be required depending
          on the current snow and ice.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              src="https://lh3.googleusercontent.com/pw/AJFCJaUFxkkynLiaUk1lsRr2j0Qkt-yUrQ8BI6PbbgTcwecNkF-20hKlmOaYD6jkpG9-LeYyZ3T9PnRPz_j0M999ySdhASVvMJJAZD9mgvu5RHimrxAhPcC0V5WA0jT1d3cmEcpmV5SJa0GZTU_d9bpYBz_j=w534-h797-s-no?authuser=0"
              width={534}
              height={797}
              alt="Upper Latourell Falls in winter"
            />
          </div>
          <br />
          {`Note that it is extremely difficult to find parking at Latourell Falls on summer weekends. I strongly suggest hiking out of season or mid-week for the best experience.`}
        </div>

        <CoyoteWall h3 />

        <LyleCherryOrchard />
        <div>
          <h3>Fall Creek Falls</h3>
          <HikeInfo
            distance="6.1 mile loop"
            elevation="1,200 feet"
            difficulty={HikeDifficulty.MODERATE}
            season={BestSeason.SPRING_SUMMER_FALL}
            trailhead="https://www.google.com/maps/place/Falls+Creek+Falls+Trailhead/@45.9060167,-121.9423765,16.75z/data=!4m14!1m7!3m6!1s0x5496791a36cb7893:0x3fc72fc9862e9487!2sFalls+Creek+Falls!8m2!3d45.9101932!4d-121.9140351!16s%2Fg%2F1tg_frzp!3m5!1s0x549678e8782f78bf:0xc85f3c65cd564bda!8m2!3d45.9058988!4d-121.940032!16s%2Fg%2F11b7vx4jp4"
          />
          <div>
            <br />
            {`One of my favorite waterfall hikes near Portland, don't miss out on the beautiful Fall Creek Falls. 
            Visiting the falls after recent rains is a tremendous experience, and astoundingly beautiful.`}
            <br />
            <br />
            {`The forested hike to the falls follows a creek, crossing small bridges. This hike can be looped or made a shorter out-and-back to and from the falls.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AJFCJaX8SJg06O2F76ZDYoLPNkPHNrneDYel5E8x-IzXXlsNvsPKbh8A9vAlcNvg-Vn_jVhu_NP0l-BPUF3vOnBWxtzJTi_VjGiX6gPvMp78rybcXEna0ZzRuHLb-nG-renO2xBDJU_RRrxTjGlioZHT7UHu=w530-h795-s-no?authuser=0"
                width={530}
                height={795}
                alt="Fall Creek Falls"
              />
            </div>
            <br />
            {`The access road to Fall Creek Falls Trailhead is rough and potholed, but drivable enough that any passenger car can make it.
            This road is closed during the winter, but you may park at the gate and walk to the trailhead adding around 3 miles round-trip.`}
            <br />
            <br />
            {`If you're in the area and have extra time, I recommend checking out `}
            <Link href="https://www.google.com/maps/place/Panther+Creek+Falls/@45.867171,-121.8313998,17z/data=!3m1!4b1!4m6!3m5!1s0x549677449c31d3eb:0x4125e2c0d722c754!8m2!3d45.8671673!4d-121.8288249!16s%2Fm%2F047n_gy">
              Panther Creek Falls
            </Link>
            {`. It's a 1/2 mile round-trip and extremely rewarding: Panther Creek Falls is one of the most beautiful waterfalls in the area.`}
          </div>
        </div>

        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AJFCJaWNVp98MxkAYQJqk42GygSO_sDK025ZNBACPWf8ajlExE4qFh7VxluzfyaogV14vnJuz7yMsv7S7EsEgtUTQDdPYG0NIyyVQdZH6jjATSJwCfb1izUwnVL8GsXxD-1gUR4j0AmX0pjQ5fdQ-WG4clpw=w795-h530-s-no?authuser=0"
            width={795}
            height={530}
            alt="Panther Creek Falls"
          />
        </div>

        <div>
          <h3>Silver Star</h3>
          <HikeInfo
            distance="6.8 miles round-trip"
            elevation="2,050 feet"
            difficulty={HikeDifficulty.MODERATE}
            season={BestSeason.SUMMER_FALL}
            permits={DiscoverPass}
            trailhead="https://www.google.com/maps/place/Tarbell+Trailhead/@45.7286334,-122.2816336,14.75z/data=!4m6!3m5!1s0x5495c72beb3a8485:0xf3ce621aea3c97a1!8m2!3d45.7233732!4d-122.2705953!16s%2Fg%2F11s4_4n51h"
          />
          <br />
          {`The first time I hiked Silver Star, I was absolutely blown away by the breathtaking mountain views near the summit. I highly, highly recommend this hike if you live near Portland:
          The ascent of Silver Star is steep, but it's oh-so-worth it.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              src="https://lh3.googleusercontent.com/pw/AJFCJaW2-ldcOfEAZ8M5-XxBF59QDg2KSo5HhrVWQrraYAATNNzM6EpvhQ3Ui3-by3bGY2Nv4__y5QKHwngw-IJgIkEGPr-d899G1y96BOvi_0pZVsZS3j9VJDue7ryRx1gZxbatidHgTwWfJRUXzMMULHEt=w584-h730-s-no?authuser=0"
              width={584}
              height={730}
              alt="Lauren looking north from the summit of Silver Star Mountain"
            />
          </div>
          <br />
          {`Try to arrange a clear day for this hike so you have the best views from the summit. Mount St. Helens, Adams, Rainier, and Hood are all within
          view at the peak.`}
          <br />
          <br />
          {`The access road is unpaved, rocky, and potholed, but is overall doable by passenger cars. I was able to reach the trailhead without difficulty in a low clearance Mazda3 sedan.`}
        </div>
        <div>
          <h3>Ramona Falls</h3>
          <HikeInfo
            distance="7.2 mile loop"
            elevation="1,000 feet"
            permits={NWForestPass}
            difficulty={HikeDifficulty.MODERATE}
            season={BestSeason.SUMMER_FALL}
            trailhead="https://www.google.com/maps/place/Ramona+Falls+Trailhead/@45.390935,-121.8314183,16.04z/data=!4m6!3m5!1s0x5495f5e3b79aa759:0xef6601b629560d2b!8m2!3d45.3870029!4d-121.8320745!16s%2Fg%2F11q1qnvtbm"
          />
          <br />
          {`Ramona Falls is a major waterfall attraction near Mt. Hood off Lolo Pass Road, within a reasonably short drive from Portland. By mid-summer, crowds flock to visit the stunning waterfall.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              src="https://lh3.googleusercontent.com/pw/AJFCJaV3wqzstDJNHnRGqJUhrtsXci_LFc6UfZl6e9u3yqNHvlqzvTFzKnGIbocfP8tG-GUp7YramncocY_xAB9jsH3qJMOwjFO7wHYR9sjBnLtT6aXMO8xnYFFQuLK7VVn6fkW6OO5ieYPUkpx3X32ku-wu=w584-h730-s-no?authuser=0"
              width={584}
              height={730}
              alt="Lauren at Ramona Falls near Mt. Hood"
            />
          </div>
          <br />
          {`The roughly 7-mile loop trail is relatively flat, easy hiking on a somewhat sandy trail. However, be aware that there is no bridge for the Sandy River crossing near
           the trailhead. Some minor balancing skills are required to traverse fallen logs spanning the river, or wade across.`}
        </div>

        <div>
          <h3>Cloud Cap to Cooper Spur</h3>
          <HikeInfo
            distance="7 miles round-trip"
            elevation="2,800 feet"
            difficulty={HikeDifficulty.MODERATE}
            season={BestSeason.MID_SUMMER_FALL}
            permits={NWForestPass}
            trailhead="https://www.google.com/maps/place/Cloud+Cap+Saddle+Campground/@45.4051105,-121.6553203,16.46z/data=!4m6!3m5!1s0x54be02ccc7ad4907:0x20059b0c7995414c!8m2!3d45.4024584!4d-121.655107!16s%2Fg%2F11bx1htgln"
          />
          <br />
          {`Beginning at the historic Cloud Cap Inn on the east slopes of Mt. Hood, the Cooper Spur hike steeply climbs the moraine for a spectacular view of Eliot Glacier. Note that the Cloud Cap
          Inn is closed to the public, but you may freely explore its grounds.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              src="https://lh3.googleusercontent.com/pw/AJFCJaVR8vOWRXw7UTWrpDoexLUp--JAbUxXnk9SDTFuEIa_z-2IuFyRYWQYd1ZB555rjDQpc18aITH-kJ333RYDiKeNtol0qkSYwX6RwnydIZ3IElqLn6pdIMEEbvmy8Bo_nERdLqlFCsgn9EZdtVV1wDR_=w584-h730-s-no?authuser=0"
              width={584}
              height={730}
              alt="View of Mt. Hood and Eliot Glacier from Cloud Cap Inn"
            />
          </div>
          <br />
          {`The Cooper Spur hike is all uphill, and can be crowded on summer weekends. Because of the elevation (Cooper Spur is at 8,510 feet), save this hike for later in the summer to
          avoid any lingering snow.`}
          <br />
          <br />
          {`The trailhead is about 2 hours from portland, including 8.8 miles of gravel to Cloud Cap Inn. This last stretch of road is bumpy and roughly graded, but passable for most vehicles.
          If you're interested in camping, The Cloud Cap Saddle campground is right at the trailhead. This is a small, first-come, first-served campground without many amenities.`}
        </div>

        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AJFCJaWU5mIhOHhJoXTcLBjTarfMpvX_3AYyTz6TVhbd0B3s3R-iDVjYwl4Yv-8jBrdMyInjbPLqmDLYrXvhm69y_VihbwnRorJTkZv_DKJvJkOM2A0_rhZOSLhmiEG6Rs9YJTtcoWn3GAiKZCbCCLNTI0bs=w584-h730-s-no?authuser=0"
            width={584}
            height={730}
            alt="Wildflowers on the east flank of Mt. Hood"
          />
        </div>

        <div>
          <h3>Timberline Lodge to ZigZag Canyon</h3>
          <HikeInfo
            distance="5 miles round-trip"
            elevation="900 feet"
            difficulty={HikeDifficulty.MODERATE}
            season={BestSeason.SUMMER_FALL}
            trailhead="https://www.google.com/maps/place/Timberline+Lodge+Trailheads/@45.3327037,-121.7146406,17.04z/data=!4m6!3m5!1s0x54be1c0003729767:0x78c190bba8454c33!8m2!3d45.330519!4d-121.709081!16s%2Fg%2F11bx212rk5"
          />
          <br />
          {`Timberline Lodge is a favorite starting point for the Timberline Trail, a portion of which you'll hike on the way to ZigZag canyon. Best hiked from July to September,
          expect wildflowers and mountain views on this shorter, stunning hike.`}
          <br />
          <br />
          {`If its your first time hiking at Timberline Lodge, it can be a bit confusing to find trail's starting point. The way to ZigZag canyon is on the west side of the lot (left as you face 
            Mt. Hood). There are many small footpaths that lead out of the parking lot, and these trails coalesce into the Timberline Trail.`}
          <br />
          <br />
          {`If you want to extend your hike, consider continuing on the Timberline Trail to Paradise Park. This will increase your total distance to around 10 miles, but Paradise
          Park is a haven of wildflowers in mid-summer, the best you can find on Mt. Hood.`}
        </div>

        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AJFCJaVDM5KRDPik01h82_NkRCrDa1vTQK7kEKWV6T7agScRqyhOxLIQ20zcPwz_MHuPEV7MZ0dp7sHw3f3z_UjCY6V4ljJqdjfyVNYbPeQVaHUM-i9WxAxbTJ64CYHZwhZGX4PQQT_NftDffU8iVmfcz9IG=w584-h730-s-no?authuser=0"
            width={584}
            height={730}
            alt="Wildflowers blowing at Paradise Park on Mt. Hood"
          />
        </div>

        <div>
          <h3>Elk Flats to Cape Falcon</h3>
          <HikeInfo
            distance="7 miles round-trip"
            elevation="2,000 feet"
            difficulty={HikeDifficulty.MODERATE}
            season={BestSeason.YEAR_ROUND}
            trailhead="https://www.google.com/maps/place/Elk+Flats+Trail/@45.7535405,-123.973268,15.25z/data=!4m6!3m5!1s0x5494b68cd1e117df:0xf2ad814ab43c6137!8m2!3d45.7483701!4d-123.9626837!16s%2Fg%2F11bwpd4n_6"
          />
          <br />
          {`Located on the northern Oregon Coast, this hike is a combination of the Elk Flats hike and the Cape Falcon hike. The hikes are joined by a connector trail
          from Elk Flats to Short Sands beach, where the Cape Falcon trail starts. Depending on how you chose to hike this, you can do Elk Flats, Cape Falcon, or both!`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              src="https://lh3.googleusercontent.com/pw/AJFCJaVEIvekVyeMkbbBPlyIbNJLXsNwbpoHppQ3bWa3eftMnR9dQkCEcAw3hT3befF_EYquyy64Md9xMHgvcxyBgiR9rNjmbWFUQAnzq_AqZsGS73chRoVkKajN5FeE5GGI2Fy6zhRAsT-QQau6HzOq4R4e=w584-h730-s-no?authuser=0"
              width={584}
              height={730}
              alt="Lauren at the coast near Elk Flats"
            />
          </div>
          <br />
          {`Starting at Elk Flats, the hike follows the rugged coastline, dipping into the trees before arriving at Short Sands beach. From Short Sands, you'll hike uphill
          to Cape Falcon for a panoramic view of the Oregon coast.`}
        </div>

        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AJFCJaXWW05-9eZ0SP6dlNEv00e2KREIw2aBS3BGxI72yqQfzY2fRz-mx3UBHGdMqQM69CkpI25qt206g2KB41_U76Py9oeNGFgYt_RugU47DY9LvvS6qSVZFI-wONU8VwQ7V1O3yjZPhAwmDfSpoHL5yrvQ=w584-h730-s-no?authuser=0"
            width={584}
            height={730}
            alt="Tree tunnel on the trail to Short Sands Beach"
          />
        </div>

        <div>
          <h3>{`Trail of Ten Falls, Silver Falls State Park`}</h3>
          <HikeInfo
            distance="8 mile loop"
            elevation="1,200 feet"
            permits="$5 park fee payable at trailhead"
            difficulty={HikeDifficulty.MODERATE}
            season={BestSeason.SPRING_SUMMER_FALL}
            trailhead="https://www.google.com/maps/place/South+Falls+Lodge+Trailhead/@44.8777659,-122.6548691,18.21z/data=!4m6!3m5!1s0x54bfef9b964f3adb:0xe830b7bf44031143!8m2!3d44.8774872!4d-122.6549722!16s%2Fg%2F11qnk7yn0g"
          />
          <br />
          {`Known as the Crown Jewel of the Oregon State Parks system, the Trail of Ten Falls at Silver Falls is the absolute best waterfall hike in Oregon.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              src="https://lh3.googleusercontent.com/pw/AJFCJaWLljQk6tq3w7hnPpjTqB1PPcnqbdQAkoj9VClWXJPUb_ObfsHV6a8Ik8RQvYOXyuw-gRC3yWgSYckbBL0OFBxCvdO4n88t8gnFbHg2LOxGo6i5jBKOM4bpR4wljyR2qtvGGNKWMbn_eLgeO6EN9c-5=w533-h799-s-no?authuser=0"
              width={533}
              height={799}
              alt="South Falls at Silver Falls State Park"
            />
          </div>
          <br />
          {`There are ten major waterfalls on this trail, each notable in their own way. The trail cuts behind several of this falls, allowing you to 
          walk behind the water for a surreal experience.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              src="https://lh3.googleusercontent.com/pw/AJFCJaXLZ1_CNiEzsdIMofR2zUTijzHAHz0-Ug_wm9oq7cBhbULmionaPq_DFuGTTnLcF1ZTgYJxLsFX3aT7EsWZfIrY73N7LVctlot6eRIL9RCA4zmzYRJ3-7TrKpzFZfJu-hHEqNZ3FuM5jGw3fMDVCl-I=w533-h799-s-no?authuser=0"
              width={533}
              height={799}
              alt="Waterfalls at Silver Falls State Park"
            />
          </div>
          <br />
          {`Begin the trail at the South Falls Lodge, hiking clockwise. This starts you at South Falls, the most majestic of the waterfalls in the park.`}
          <br />
          <br />
          {`After recent rainstorms, the already large waterfalls grow even more tremendous. The best time to hike Silver Falls is during the spring, when
          the waterfalls are huge and the crowds are small(er).`}
        </div>
        <WTPHiking />
        <Contact />
      </div>
    </Layout>
  );
}
