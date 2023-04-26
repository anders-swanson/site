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

//+metadata
const metadata = {
  title: "My favorite moderate hikes near Portland",
  date: "2023-04-15",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8B4dSrNj81huqxNj3QwHsPjwBZcX8sls3dm-ovdW1bGw8jhWumezwGAw_Rt_V9ykRQTrjxtJtI6eYwK4LUarVCH9Z39YOSdBJMqJrN28vmgLu7NRcbJv0EaPNa-lEV_6wP3RuODa1YssKvG3NIJo1kY=w653-h653-s-no?authuser=0",
  tags: ["hiking", "oregon", "guides", "waterfall"],
};

const multnomahFallsPermit = 'https://www.recreation.gov/timed-entry/10089144'

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Amazing hikes between 5-8 miles within a 2 hour drive from Portland. Send this to your hiking buddy! 📤`}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "guides",
      }}
    >
      <div className={utilStyles.flexGapContainer}>
      <div>
          <h3>{`Angel's Rest`}</h3>
          <HikeInfo
            distance="4.7 miles round-trip"
            elevation="1,500 feet"
            difficulty={HikeDifficulty.MODERATE}
            season={BestSeason.SPRING_SUMMER_FALL}
            trailhead="https://www.google.com/maps/place/45%C2%B033'36.9%22N+122%C2%B010'21.7%22W/@45.5602589,-122.1733457,19z/data=!3m1!4b1!4m4!3m3!8m2!3d45.560258!4d-122.172702"
          />
          <br/>
          {`Angel's Rest is a beautiful, beloved out-and-back trail close to Portland. On this trail, you'll swiftly climb to the summit of Angel's Rest,
          a rocky outcropping with a stunning Columbia River overlook. On clear days you'll be able to see the skyscrapers of downtown, miles away.`}
          <br/><br/>
          {`This is a popular trail, so expect crowds on weekends/holidays, and competitive parking during peak season.`}
          <br/><br/>
          {`Angel's Rest is also a popular sunset hike, with the sun dipping behind the river as it disappears to the west.
          If you plan to view the sunset here, give yourself plenty of time to reach the top, and bring your headlamp for the hike down.`}
        </div>

        <div>
          <h3>
            Wahkeena Falls to Multnomah Falls Loop
          </h3>
          <HikeInfo
            distance="6 mile loop"
            elevation="1,700 feet"
            difficulty={HikeDifficulty.MODERATE}
            season={BestSeason.SPRING_SUMMER_FALL}
            permits={<Link href={multnomahFallsPermit}>Multnomah Timed Entry Permit</Link>}
            trailhead="https://www.google.com/maps/place/Wahkeena+Falls+Day+Use%2FPicnic+Area%2FTrailhead/@45.5754708,-122.1279256,18.83z/data=!4m6!3m5!1s0x5495eadf7c66919d:0x9ca4b92b7a4f7715!8m2!3d45.576025!4d-122.127828!16s%2Fg%2F11bv3ycbbv"
          />
          <br/>
          {`A classic loop hike with six different waterfalls, you'll be amazed by the towering 627 ft. Multnomah Falls.`}
          <br/><br/>
          {`The classic Wahkeena/Multnomah waterfall loop can be started at Multnomah Falls, or Wahkeena Falls, and hiked in either direction.
          There is a short connector trail between Multnomah and Wahkeena falls that links the two trailheads.`}
          <br/><br/>
          {`Be aware that `}<Link href={multnomahFallsPermit}>permit</Link>{` is required to park at Multnomah Falls May 26th through September 4th. This trail is best hiked outside of peak season
          to avoid intense crowding at Multnomah Falls, and along the waterfall corridor.`}
        </div>

        <DogMountain />
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
          <br/>
          {`Hamilton Mountain is one of my favorite gorge hikes, complete with sweeping views, wildflowers, and waterfalls. On the way up, you'll pass the tumbling Rodney Falls, and the Pool of the Winds.
          Above the falls, the trail begins to open up from the trees as it ascends Hamilton Mountain, and the trail is interspersed with wildflowers during spring.`}
          <br/><br/>
          {`After reaching the summit, I recommend extending your hike another 1/2 mile farther to reach the Saddle, a broad viewpoint of the gorge that is (in my opinion) much more beautiful that the peak.`}
          <br/><br/>
          {`Make this trail a ~9 mile loop by hiking past the Saddle on the equestrian trail. The equestrian trail will eventually connect back to the Hamilton Mountain trail near Rodney Falls.`}
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
            {``}
            {`Be aware that the access road to the parking lot is closed during winter. It's possible to park at the gate and walk to the trailhead, but be aware it will add 3 miles to your hike, round-trip.`}
            <br/><br/>
            {`If you're in the area, I recommend checking out `}
            <Link href="https://www.google.com/maps/place/Panther+Creek+Falls/@45.867171,-121.8313998,17z/data=!3m1!4b1!4m6!3m5!1s0x549677449c31d3eb:0x4125e2c0d722c754!8m2!3d45.8671673!4d-121.8288249!16s%2Fm%2F047n_gy">
              Panth Creek Falls
            </Link>
            {` as well. It's a short hike, and extremely rewarding, as Panther Creek Falls is one of the most beautiful waterfalls in the area.`}
          </div>
        </div>
        <h3>Silver Star</h3>
        <HikeInfo
          distance="6.8 miles round-trip"
          elevation="2,050 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.SUMMER_FALL}
          permits={DiscoverPass}
          trailhead="https://www.google.com/maps/place/Tarbell+Trailhead/@45.7286334,-122.2816336,14.75z/data=!4m6!3m5!1s0x5495c72beb3a8485:0xf3ce621aea3c97a1!8m2!3d45.7233732!4d-122.2705953!16s%2Fg%2F11s4_4n51h"
        />
        <h3>Ramona Falls</h3>
        <HikeInfo
          distance="7.2 mile loop"
          elevation="1,000 feet"
          permits={NWForestPass}
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.SUMMER_FALL}
          trailhead="https://www.google.com/maps/place/Ramona+Falls+Trailhead/@45.390935,-121.8314183,16.04z/data=!4m6!3m5!1s0x5495f5e3b79aa759:0xef6601b629560d2b!8m2!3d45.3870029!4d-121.8320745!16s%2Fg%2F11q1qnvtbm"
        />
        <h3>Burnt Lake</h3>
        <HikeInfo
          distance="6.6 miles round-trip"
          elevation="1,500 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.SUMMER_FALL}
          permits={NWForestPass}
          trailhead="https://www.google.com/maps/place/45%C2%B022'21.3%22N+121%C2%B049'22.6%22W/@45.3725802,-121.8244415,17z/data=!3m1!4b1!4m4!3m3!8m2!3d45.372578!4d-121.822954"
        />
        <h3>Cloud Cap to Cooper Spur</h3>
        <HikeInfo
          distance="7 miles round-trip"
          elevation="2,800 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.MID_SUMMER_FALL}
          permits={NWForestPass}
          trailhead="https://www.google.com/maps/place/Cloud+Cap+Saddle+Campground/@45.4051105,-121.6553203,16.46z/data=!4m6!3m5!1s0x54be02ccc7ad4907:0x20059b0c7995414c!8m2!3d45.4024584!4d-121.655107!16s%2Fg%2F11bx1htgln"
        />
        <h3>
          Timberline Lodge to ZigZag Lookout
        </h3>
        <HikeInfo
          distance="5 miles round-trip"
          elevation="900 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.SUMMER_FALL}
          trailhead="https://www.google.com/maps/place/Timberline+Lodge+Trailheads/@45.3327037,-121.7146406,17.04z/data=!4m6!3m5!1s0x54be1c0003729767:0x78c190bba8454c33!8m2!3d45.330519!4d-121.709081!16s%2Fg%2F11bx212rk5"
        />
        <h3>Top Spur to McNeil Point</h3>
        <HikeInfo
          distance="10.1 miles round-trip"
          elevation="2,200 feet"
          difficulty={HikeDifficulty.HARD}
          season={BestSeason.MID_SUMMER_FALL}
          permits={NWForestPass}
          trailhead="https://www.google.com/maps/place/Top+Spur+Trailhead/@45.4008253,-121.7666177,14.71z/data=!4m6!3m5!1s0x5495f72894c766b3:0x3d545fe06cbc6376!8m2!3d45.4077274!4d-121.7857386!16s%2Fg%2F11rc30zwsg"
        />
        <h3>Elk Flats to Cape Falcon</h3>
        <HikeInfo
          distance="7 miles round-trip"
          elevation="2,000 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.YEAR_ROUND}
          trailhead="https://www.google.com/maps/place/Elk+Flats+Trail/@45.7535405,-123.973268,15.25z/data=!4m6!3m5!1s0x5494b68cd1e117df:0xf2ad814ab43c6137!8m2!3d45.7483701!4d-123.9626837!16s%2Fg%2F11bwpd4n_6"
        />
        <h3>{`God's Thumb`}</h3>
        <HikeInfo
          distance="4.8 miles round-trip"
          elevation="1,200 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.YEAR_ROUND}
          trailhead="https://www.google.com/maps/place/The+Knoll+at+Cascade+Villages+Head+Trail/@45.0114429,-123.9993117,17.92z/data=!4m6!3m5!1s0x54eaed336259bd4d:0x8717af00672f47bc!8m2!3d45.0108948!4d-123.9977199!16s%2Fg%2F11fxw8kh75"
        />
        <h3>
          Saddle Mountain (Looks like this hike is still closed 😞)
        </h3>
        <HikeInfo
          distance="5.2 miles round-trip"
          elevation="2,000 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.SUMMER_FALL}
          trailhead="https://www.google.com/maps/place/Saddle+Mountain+State+Natural+Area/@45.9626765,-123.6907317,18.21z/data=!4m6!3m5!1s0x5494bd81fef0ab6f:0x1e57fb94eac783e5!8m2!3d45.9627554!4d-123.6900043!16zL20vMDM5aGZi"
        />
        <h3>{`Bonus Hike: Silver Falls`}</h3>
        <HikeInfo
          distance="9.2 mile loop"
          elevation="1,200 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.SPRING_SUMMER_FALL}
          trailhead="https://www.google.com/maps/place/South+Falls+Lodge+Trailhead/@44.8777659,-122.6548691,18.21z/data=!4m6!3m5!1s0x54bfef9b964f3adb:0xe830b7bf44031143!8m2!3d44.8774872!4d-122.6549722!16s%2Fg%2F11qnk7yn0g"
        />
        <Contact />
      </div>
    </Layout>
  );
}
