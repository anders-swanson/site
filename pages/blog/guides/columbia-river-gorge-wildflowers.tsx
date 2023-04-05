import Image from "next/image";
import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import { rawData } from "../../../lib/common";
import Link from "next/link";
import Video from "../../../components/video";
import Slider from "../../../components/slider";
import HikeInfo from "../../../components/hike_info";
import {
  BestSeason,
  DiscoverPass,
  HikeDifficulty,
} from "../../../lib/hike_info_types";
import MapEmbed from "../../../components/maps";
import Contact from "../../../components/contact";

//+metadata
const metadata = {
  title: "Where to Find Wildflowers in the Columbia River Gorge",
  date: "2023-04-03",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8AwgdXSsg7m9ntZe2LhGC5pLBP1E4_36jLlUt0Gra52iMjg4ZR0OquA5ZyijJL2L-O-JXldat5-4Ej-Z7KqsI1NNUNLsYV-sa10XbJOvPVJWDDqbbdLwH-xnsLjjX9FU-bRYMEjjbrGjaYaM6R2y23h=w653-h653-s-no?authuser=0",
  tags: ["hiking", "wildflowers", "columbia river gorge", "guides"],
};

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Our top 3 hikes to find gorgeous spring wildflowers in the Columbia River Gorge.`}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "columbia river gorge",
      }}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`If you're looking for a stunning springtime wildflower display near Portland, look no further than the Eastern Columbia River Gorge.
          From late April through mid May, the Columbia River Gorge's rolling hills erupt with an awe-inspiring bloom of Balsamroot, Lupine, and many other beautiful flowers.`}
          <br />
          <br />
          {`The best wildflower hikes are found east of Cascade Locks, within a 1 to 2 hour drive from Portland, Oregon.
          Read my favorite hikes below to begin planning your trip to this natural springtime wonder of Oregon and Washington!`}
        </div>
        <div>
          <Video src={rawData("dm3.mp4")} height={600} width={337}/>
        </div>
        <h2 className={utilStyles.justifyCenter} id="rowena-crest">
          Tom McCall Point and Rowena Crest
        </h2>
        <HikeInfo
          distance="3.5 mile loop"
          elevation="1,000 feet"
          difficulty={HikeDifficulty.EASY}
          season={BestSeason.SPRING}
          trailhead="https://www.google.com/maps/place/Rowena+Crest+Viewpoint/@45.6827475,-121.3015662,18.46z/data=!4m14!1m7!3m6!1s0x54961a384b33a725:0x3a67d738f4ca4f9c!2sTom+McCall+Preserve!8m2!3d45.6834476!4d-121.3024387!16s%2Fg%2F11cnzn26sc!3m5!1s0x54961a222daa6039:0x6ff5db7101043183!8m2!3d45.6827367!4d-121.2992539!16s%2Fg%2F1td32ryy"
        />
        <div>
          {`The Tom McCall Point hike is a great short hike to view wildflowers located 20 minutes past the town of Hood River in Oregon.
          The hike climbs steeply to McCall point, passing through a mixture of oak savannah and colorful wildflower fields.`}
          <br />
          <br />
          {`If you want to extend your hike, consider adding on a 3-mile loop through Tom McCall Preserve. The preserve trail is right across the road from the 
          McCall Point trail - you'll find more wildflowers and views of the Columbia River's impressive basalt cliffs on this loop.`}
          <br />
          <br />
        </div>
        <Image
          src="https://lh3.googleusercontent.com/pw/AM-JKLWl4YxE5oQmUCeYUcnKCAeaiS707KPeHjNWWjSpoVg4ply1RUylQa_ycDtZ7UyQOnrsj5WO_uwZnVVyqS8vE_WBCSlwg3WAPN_rjuD35rwn1fM79nhDa2utRzkq-1jRmjQyhuwIx3JeepWjYNAubDcD=w801-h1067-no?authuser=0"
          width={400}
          height={550}
          alt="Balsamroot and Lupine Blooming in the Columbia River Gorge"
        />
        <div>
          {`Be aware that Rowena Crest and Tom McCall Point are popular areas, especially on springtime weekends. Plan accordingly and arrive early to find a parking spot: 
          getting to the trailhead before 9AM is ideal.`}
          <br />
          <br />
          {`The location of the Tom McCaall Point trailhead is shown below.`}
        </div>
        <MapEmbed lat="45.682682" long="-121.300303" />

        <Image
          src="https://lh3.googleusercontent.com/pw/AM-JKLV13v3KsKIqJ8yj8_h13V45AU-H_qjj1uzv7alqkxxXymbjQZKFm9CMOBHF_BTNI0DvyFUVvx2grP9WkZFWdJ8cwGk5kdyN9QBxZcStk0ui7vjAurdRJZ7SbJvGIu52VI2-ZEYyg3Sr_rAjMfUVGPbW=w801-h1067-no?authuser=0"
          width={400}
          height={550}
          alt="Paintbrush flowers blooming in the Columbia River Gorge"
        />
        <h2 className={utilStyles.justifyCenter} id="coyote-wall">
          Coyote Wall
        </h2>
        <HikeInfo
          distance="7 mile loop"
          elevation="1,700 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.SPRING}
          trailhead="https://www.google.com/maps/place/Coyote+Wall+Trailhead/@45.7005925,-121.4037556,17z/data=!3m1!4b1!4m6!3m5!1s0x549610435a3707f1:0x6b0035cf329d6726!8m2!3d45.7005888!4d-121.4015669!16s%2Fg%2F11gfc0pt35"
        />
        <div>
          {`Coyote Wall is a popular loop hike for viewing spring wildflowers that's 1 hour 45 minute from Portland by car.
          This is a fun hike even when its not wildflower season, but during spring it becomes absolutely astounding.
          On clear, sunny days, you'll get a spectacular view of the Columbia River Gorge and Mt. Hood.`}
          <br />
          <br />
          {`The Coyote Wall loop starts out on a closed road before climbing through a rocky trail section with small waterfalls known as the Labyrinth.
          After hiking through the Labyrinth, the trail traverses back through flower-filled meadows on its return to the trailhead.`}
        </div>
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AMWts8AKJxkI7oSllHfiXkwRVa3DXahvLUKRAL_wW0zq2BQItAUC5f6qnYnwTgJqxg-pu-WKru5oduYwk5OdluI5f9XsnnF6jd7C1bVN1GJ1_zBRV5fOGTKbRbIVSDKf9omk-_dpxxHCpDrRDbTp8ViKiZba=w798-h533-s-no?authuser=0"
            width={798}
            height={533}
            alt="Coyote Wall"
          />
        </div>
        <div>
          {`The latter section of the loop near Coyote Wall (an impressive cliff by the trailhead) is where you'll see the most wildflowers.
          If you've timed your trip just right, the grassy slopes will be carpeted with colorful flowers of many varieties.`}
          <br />
          <br />
          {`I've linked the trailhead and parking below. Plan to arrive early on weekends, when cars overflow onto the highway by late morning.`}
        </div>
        <MapEmbed lat="45.700598" long="-121.401522" />
        <Slider
          slides={[
            "https://lh3.googleusercontent.com/pw/AM-JKLWNWCo6ODzkaM3rxi3J5H3mhRxi235OovfFyaeW-8Odvsrl0OT_nOGtxuei2WV8U4do-KNk7w2dQFp7dfn4hzonlWvZZsWW2xmUhK7-JTFijtdXgVbRN9uMFe9OD1L_NwoJXHpmifdADSMZUiJl6Ajb=w1597-h1067-no?authuser=0",
            "https://lh3.googleusercontent.com/pw/AM-JKLVOiUpy6nMKjoHglfsjfkPkXBjqe7zFRbipqWgahAMA6Cd-4sHP-TTmEKcSSUWiuX3gnVWbTkDZqeDPV2jx6pQ-gkyDNSy7BznBriFC_tSHMMnlzVEDAv2um-ZChyxLRxxvzpfiJTIv-J3I5G7eOL_b=w1597-h1067-no?authuser=0",
          ]}
          width={1200}
          height={750}
        />
        <h2
          className={utilStyles.justifyCenter}
          id="dalles-mountain-ranch-loop"
        >
          Dalles Mountain Ranch Loop
        </h2>
        <HikeInfo
          distance="8.25 mile loop"
          elevation="1,200 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.SPRING}
          trailhead="https://www.google.com/maps/place/Crawford+Oaks+Trailhead/@45.6571123,-121.0883918,17z/data=!3m1!4b1!4m6!3m5!1s0x549621c64b70bb85:0xed2a853923a2b8ff!8m2!3d45.6571086!4d-121.0862031!16s%2Fg%2F11cr_s0yvs"
          permits={DiscoverPass}
        />
        <div>
          {`This is my favorite wildflower hike in the Columbia River Gorge, due to the abundance of its springtime bloom. Located at the beautiful Columbia Hills State Park
          on the Washington side of the Columbia, the Dalles Mountain Ranch Loop is nonstop Balsamroot and Lupine flowers the entire hike.`}
          <br />
          <br />
          {`Begin your hike at the Crawford Oaks trailhead, or the Dalles Mountain Ranch trailhead. I prefer starting at the Crawford Oaks trailhead, and then hiking clockwise. However,
          there's no wrong way to hike this trail.`}
          <br />
          <br />
          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AM-JKLVkoOqn34gGsnFw2hUsKyzhZPNJzxtzT1FshRZvKZGSQZX6M0NryWD9uTUiCecZPPOu042K2IRPitKFOIwa_86IKaOaI2Yc6OcpblM2Q938DcNwYt4D0-BHZc_-ySTPe3c5gTQAff9Dm-YnkWGocsK6=w1597-h1067-no?authuser=0"
              width={1200}
              height={750}
              alt="Columbia Hills State Park"
            />
          </div>
          <br />
          {`The Dalles Mountain Ranch is a historic ranch at the high point of the trail. The ranch is well preserved, with most of its buildings still intact.
          At the Ranch, search along the barbed wire fence line to find a rusted out car surrounded by blooming flowers.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8C3jBEUctZACflyN422I2J_HFH9ywqQ5bf_Tq1o2rOeE95d6Evks6etCDzgajuvCH_wmEIEpFnVoEC39gvgue6Pkn6blV4a7pQ4KIFGlgjUoAaAn5vcyIHzHqnMknty2Ax1TaIGxywXNG9gwcvl-mSH=w798-h533-s-no?authuser=0"
              width={799}
              height={533}
              alt="Old Car at Dalles mountain ranch"
            />
          </div>
          <br />
          {`I consider this trail a must-do during wildflower season, and we try to complete it every year when we're in the area.
          Most years, peak bloom occurs within the first week of May. This window may change slightly
          depending on the weather - for example, colder years are likely to have later blooms than warmer years.`}
          <br />
          <br />
          <div className={utilStyles.flexWrapContainer}>
            <Video src={rawData("dm1.mp4")} width={300} height={450} />
            <Video src={rawData("dm2.mp4")} width={300} height={450} />
          </div>
          <br />
          <br />
          {`Remember to bring a Washington Discover Pass for parking at the Crawford Oaks trailhead, which I've linked below. Alternatively, you can park at the `}
          <Link href="https://www.google.com/maps/place/Dalles+Mountain+Ranch+Trailhead/@45.6798468,-121.0965701,16.71z/data=!4m13!1m7!3m6!1s0x549621c64b70bb85:0xed2a853923a2b8ff!2sCrawford+Oaks+Trailhead!8m2!3d45.6571086!4d-121.0862031!16s%2Fg%2F11cr_s0yvs!3m4!1s0x54962108104d5799:0x9a00c48d774ea793!8m2!3d45.6802066!4d-121.0882871">
            Dalles Mountain Ranch
          </Link>
          {`to start the loop from an alternate location.`}
        </div>
        <MapEmbed lat="45.657173" long="-121.087336" />
        <div className={utilStyles.centered}>
          <Image
            src="https://lh3.googleusercontent.com/pw/AMWts8AyBwfspYZv2PBxwW1_ow1XugN9hycpJ9I9grPQXX1dfzBZVPUPnpu1TstFn5esUxSKTpu3T4lQPqc4gLC-ZZy6KD8_LjHiP4X1RiW3N3YWyMwChA9p5nCyVnLe4cjr5nt4mZnJRUJPBvWpvtyOCIAJ=w533-h798-s-no?authuser=0"
            height={799}
            width={533}
            alt="Balsamroot and Lupine at Dalles mountain ranch"
          />
        </div>
        <h2 className={utilStyles.justifyCenter} id="more-wildflower-hikes">
          Bonus Wildflower Hikes
        </h2>

        <div>
          <h3>Dog Mountain</h3>
          {`An extremely popular 6.8 mile loop, Dog Mountain is well-known for its spring flower display. A day use permit from `}
          <Link href="https://www.recreation.gov/timed-entry/10091444?tab=tours">
            Recreation.gov
          </Link>
          {` is required to hike from late April through July.`}
          <br />
          <br />
          {`The `}
          <Link href="https://www.google.com/maps/place/Dog+Mountain+Trail/@45.6992105,-121.7081278,19.04z/data=!4m6!3m5!1s0x54960a66933a3b5f:0xd04dd4a086009cc5!8m2!3d45.6992035!4d-121.7079899!16s%2Fg%2F11bw5xl9vt">
            Dog Mountain Trailhead
          </Link>
          {` is just off Highway 14 on the Washington side of the Columbia, a 1 hour drive from Portland. Dog Mountain is the steepest hike on this list, gaining over 2,700 feet 
          for its duration.`}
        </div>
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AMWts8AjH3qxU2xZsaeaMxKQN9Zpguutxn5F44tNZymJW6_mXc7hF4Q0kVgkNz6Zrd6dOuCrlRNfhEHsMfj7BjbhbpTEY43n5u1XfsmvOml4C_EAD7q3sDWc2csBX8g1OJgr_-BD3gfYXZdesQMGIu5-Lq6N=w799-h533-s-no?authuser=0"
            alt="Resting on the way up Dog mountain"
            width={799}
            height={533}
          />
        </div>

        <div>
          <h3>Lyle Cherry Orchard</h3>
          {`A 5 mile out-and-back, be wary of thick poison oak on this hike. However, if you can navigate around the poison oak, you'll be rewarded with
          a gorgeous flower display at the top. Lyle Cherry Orchard is less popular than the other hikes on this list, so you may find less people here on busy days.`}
          <br />
          <br />
          <Link href="https://www.google.com/maps/place/Lyle+Cherry+Orchard+Trailhead/@45.6875827,-121.2643082,16.13z/data=!4m15!1m8!3m7!1s0x549619965c8ba681:0x95de0d7364fdc3da!2sLyle+Cherry+Orchard+Trail,+Washington+98635!3b1!8m2!3d45.6884674!4d-121.2579113!16s%2Fg%2F11clysz7c0!3m5!1s0x5496199738adb237:0x4e42c49a43a54d4!8m2!3d45.6861767!4d-121.2655607!16s%2Fg%2F11hbgbqlpp">
            The Trailhead
          </Link>
          {` is just east of the town of Lyle, on a small pull-off of Washington Highway 14.`}
        </div>
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AMWts8BdhBYU6JaRnVkn1LTrt1DvZQ7I7yeGzW-n6HvCnD_MFoaelUJLEG-SFA4zYRnMP6-4G3uAlxGl1dn-W5fpI8r0lYoWc4d_3Go18gZup7XK2mQeLfW8AfyrV9MvQcewIADlsjWwMP4tvrOnIPOSobJ0=w798-h533-s-no?authuser=0"
            alt="Spring bloom of Balsamroot"
            width={799}
            height={533}
          />
        </div>
        <div>
          <h3>Poison Oak</h3>
          {`OK, this isn't a hike... but you should definitely watch out for poison oak, which grows plentifully in the Columbia River Gorge. It's especially prevalent on the Tom McCall Point and Lyle Cherry Orchard hikes. Knowing how to 
          identify this plant can save you from an itchy allergic reaction.`}
          <br />
          <br />
          {`Poison oak grows as a creeper, vine, or shrub with oily looking leaves that grow in threes.
          Contact with any part of the plant may cause an itchy rash (about 85% of people are allergic). 
          If you think you've come into contact with poison oak, thoroughly wash the affected area 
          with soap and water as soon as possible to mitigate an allergic reaction.`}
          <br />
        </div>
        <div>
          <Video src={rawData("poison-oak.mp4")} height={600} width={337}/>
        </div>
        <div className={utilStyles.justifyCenter}>
          {`This is poison oak in its shrub form along the Lyle Cherry Orchard trail.`}
        </div>

        <div>
          {`With that said, pick a trail, plan your trip, and hunt down the Columbia River Gorge's breathtaking yearly wildflower bloom!`}
        </div>
        <Contact />
      </div>
    </Layout>
  );
}
