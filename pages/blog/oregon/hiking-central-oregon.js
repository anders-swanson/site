import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import Image from "next/image";
import Link from "next/link";
import RelatedPosts from "../../../components/related_posts";
import { CentralCascadesWildernessPermit } from "../../../lib/common";

//+metadata
let metadata = {
  title: "Hiking Central Oregon",
  date: "2022-05-20",
  image:
    "https://lh3.googleusercontent.com/pw/AM-JKLUW7_4LIZ7fByn7o4y1428ZKsnsjsactTjOkLQE_m8Jihr_5BNKNkubk47XUEd6bcVc4ip1AKbA18Jkjt_SZkGqaS-rRY7-RivJDBffauokzT0ws2uF3fhbt1zxrA4Fc5srNr1-zeniKtF3W9DO5kLZ=s800-no?authuser=0",
  tags: ["hiking", "oregon", "sisters", "waterfall"],
};

const skeneOgden =
  "https://www.google.com/maps/place/McKay+Crossing+Campground/@43.7144315,-121.3789647,15.62z/data=!4m5!3m4!1s0x54b884ad1eb489ab:0xd55879446a68c383!8m2!3d43.7157!4d-121.3773999";
const tumaloFalls =
  "https://www.google.com/maps/place/Tumalo+Falls+Trailhead/@44.0387901,-121.5839357,15z/data=!4m13!1m7!3m6!1s0x54b8b10ed248cd3f:0x25fba35d1e66310f!2sTumalo+Falls!3b1!8m2!3d44.0339557!4d-121.5668789!3m4!1s0x54b8b108baef1483:0x68ec5154dee8ca40!8m2!3d44.0320083!4d-121.5663583";

const cover =
  "https://lh3.googleusercontent.com/pw/AM-JKLUlIRvPPKgdxBPDoa8RRqg7jCJyg_hc3rRsG-T-gQawbFi-TLw7wYbAUokn80IK4-e3cqTccaxh8PUi0S4jTlrYnKsgFrLuqXzxunm1o8Hn72w1_SwGLTeKtDKFyp7wT3ab5s02s0U7Jk7ZrgrwTKSj=w800-h600-no?authuser=0";

export default function Post() {
  return (
    <Layout
      headerImage={cover}
      headerText={metadata.title}
      description={`Read about our favorite and most beautiful hikes in Central Oregon as inspiration for your next trip!`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`Comprised of Jefferson, Crook, and Deschutes counties, Central Oregon is home to snow capped mountains, alpine lakes, pristine rivers, and sprawling sagebrush
                    desert. Considered by many to be Oregon's premier destination for outdoor recreation, there are almost endless opportunities for hiking,
                    backpacking, and more. The most popular time to visit is July through September - spring, fall, and winter are also beautiful, but the weather is more variable,
                    and can be bitterly cold. Because of Central Oregon's long, cold winters, heavy mountain snowpack does not melt out until 
                    July (barring exceptionally dry and warm years), and you may see snow at any time of the year. The summers are dry and warm, with an
                    amazing amount of sun.`}
          <br />
          {`If you are planning to hike the Three Sisters, Mount Washington, or Mount Jefferson Wilderness areas (where the majority of the
                    best trails are found), read up on the `}
          <Link href={CentralCascadesWildernessPermit}>
            Central Cascades Permit System
          </Link>
          {`. During the permit season (May - September) many of the trailheads limit entry for day hikes, and all trailheads restrict the number of overnight visitors.`}
          <br />
          <br />
          {`The hike ideas below are inspired by day and overnight trips we've done in Central Oregon. Check out our related
                    posts at the bottom of the page for even more hiking inspiration in the area, including my absolute favorites for Central Oregon: Chambers Lakes Basin, 
                    South Sister, and Broken Top.`}
        </div>

        <h1 className={utilStyles.justifyCenter} id="peter-skene-ogden-trail">
          Peter Skene Ogden Trail and Paulina Lake
        </h1>
        <br />
        <div>
          {`The Peter Skene Ogden trail follows Paulina Creek from its outflow at Paulina Lake down to La Pine. The trail is best started at `}
          <Link href={skeneOgden}>McKay Crossing</Link>
          {` (about 40 minutes from Bend), and hiked uphill, though you can start at the Ogden Group camp further downhill
                    if you want a longer trip. If you hike all the way to Paulina Lake/Paulina Falls from McKay, expect an 11 mile out-and-back - from Ogden Group camp it's closer
                    to 20 miles.`}
          <br />
          {`Starting at McKay, you will encounter numerous small to medium sized waterfalls and swimming holes on your hike uphill. I highly recommend to hike this
                    trail on a warm, sunny day and take advantage of the swimming holes. Midway up the trail is a popular swimming spot known as the "natural slip and slide",
                    where the river flows over a flat, broad section of rock that swimmers slide down.
                    Most people usually stop here to swim, and you can find even more swimming holes farther along.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="p1"
              src="https://lh3.googleusercontent.com/pw/AM-JKLUlIRvPPKgdxBPDoa8RRqg7jCJyg_hc3rRsG-T-gQawbFi-TLw7wYbAUokn80IK4-e3cqTccaxh8PUi0S4jTlrYnKsgFrLuqXzxunm1o8Hn72w1_SwGLTeKtDKFyp7wT3ab5s02s0U7Jk7ZrgrwTKSj=w800-h600-no?authuser=0"
              width={800}
              height={535}
            />
          </div>
          <br />
          <br />
          {`On a nice day, the initial section of trail near McKay Crossing can be moderately busy. The farther up you go, the quieter it gets - it's also
                    worth it for the waterfalls. If you don't do the full hike, consider driving up to Paulina Lake to view Paulina Falls. 
                    The falls are accessible via a short walk from a parking lot off the highway.`}
          <br />
          {`Paulina Lake is also a worthwhile destination. The lake has a small resort, and several campgrounds (these get REALLY busy in the summer). Near the lake,
                    there's tons of things to do - you can loop hike the lake and visit a small hot water seep on the north side, hike Paulina Peak for a gorgeous view of East Lake
                    /Paulina Lake, or visit the Big Obsidian Lava Flow.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="p2"
              src="https://lh3.googleusercontent.com/pw/AM-JKLWR5yIn1_bFsPbqJ6esq3Za82p7kHDJ24sVBiO31HvdpGNxkte6pDBXdTylJ4Wnc5ye7AV8PZB9Yuoyn-YqURIZB4JwFgCp8sWBkz5qykV5iP91Ogm1gtc3ox1sRNGNP-gfSa__CfoUtP2aBiQ33523=w600-h800-no?authuser=0"
              width={400}
              height={600}
            />
          </div>
          <br />
          <br />
          {`We've camped several times at or near Paulina Lake, and enjoyed every trip. The fishing here is phenomenal, massive rainbow and brown trout can be caught
                    in East Lake. The last time I hiked this trail we started at the Ogden Group camp, camped one night at Paulina lake, and hiked down the next day.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="p3"
              src="https://lh3.googleusercontent.com/pw/AM-JKLWysbYcKY7P3pgI6Zhsivbnq3v5TsHD6DP3hmaGaEHWPwIHP5ta4CSjXxNfygfi1Unkq02KS1hFtCVVo_tChslpkHFSijpBqen_OqlIaCVRf4vEcxQnxOmOPaB9gQ-3HbqDVJSb2-LSyPMG8p8iYBEn=w800-h600-no?authuser=0"
              width={800}
              height={535}
            />
          </div>
        </div>

        <h1 className={utilStyles.justifyCenter} id="metolius-river">
          Metolius River
        </h1>
        <br />
        <div>
          {`The Metolius River originates from natural springs under the north side of Black Butte, flowing through the Metolius River valley before 
                    joining the Crooked and Deschutes rivers at Lake Billy Chinook. Driving from Bend, the Metolius River is about 45 minutes down highway 20 past Sisters.`}
          <br />
          {`You can hike about 10-12 miles one way on the Metolius from the river's head to Candle Creek Campground.
                    There are a plethora of campgrounds along the way, making it possible to start your hike at the river's head, camp at one of the campgrounds,
                    and hike back the next day. The campgrounds on the Metolius River feature quiet, beautiful sites on the river's edge. It's truly a peaceful and relaxing place.`}
          <br />
          {`If you want to fish the Metolius, be advised that it is catch and release, fly-fishing only.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="m1"
              src="https://lh3.googleusercontent.com/pw/AM-JKLXzC4Fhc2EkXvUSe3bMaw3l9hANenPscot57-O0NATy4y2Dw2Vjt3s0pydY4_JNTWw6PYYr9h8j4xf89iMtJTCcDABl6PA7lFdZFuRMMevB1lNrzPHywcO9OIEYILNmE2D8KicUdoifCrBX4mUjuvyR=w800-h535-no?authuser=0"
              width={800}
              height={535}
            />
          </div>
          <br />
          <br />
          {`Another great hiking trail near the Metolius River is the Black Butte trail - at the south end of the Metolius River is a steep climb to Black Butte's 
                    summit at 6,355 feet. The isolated, open peak has
                    sweeping, panoramic views of Oregon's Cascade Range. The trail has lower and upper trailheads, which are 9.5 and 4 mile out-and-backs, respectively.
                    I recommend to only pick the lower trailhead if you are looking for extra milage, because those additional miles will just be through dense ponderosa forest.
                    The trail is usually clear of snow by mid May because of its dry, south facing exposure. You may still encounter small amounts of snow at the summit
                    until June, depending on the year.`}
          <br />
          {`It's better to hike this one early in the season - by late summer, the trail becomes extremely hot and dusty.`}
          <br />
          <br />
          {`If you didn't find it while hiking along the Metolius, the Wizard Falls fish hatchery is also worth a visit. The Forest Service operator hatchery
                    is drivable, open to the public, and  has several holding ponds where you can look at large trout being raised for release in the wild.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="m2"
              src="https://lh3.googleusercontent.com/pw/AM-JKLXwjfWQ5l_Y-Tez4_Y5ZutdVs0-JQV9P6sO9LbJN0ibLZzrX4BaAiRzQBFdneG3BQUcTitdrBnJfc_LlMrbyTfvI3l9gdGouCzhUNLejlWyZahrC2kWgmljNL_qK2WsH7tJODrWJKVIrDZ7JyxuRJFQcQ=w800-h535-no?authuser=0"
              width={800}
              height={535}
            />
          </div>
        </div>

        <h1 className={utilStyles.justifyCenter} id="tumalo-falls-trail">
          Tumalo Falls Trail
        </h1>
        <br />
        <div>
          <Link href={tumaloFalls}>The Tumalo Falls Trail</Link>
          {` is popular for a short walk to the Tumalo Falls viewpoint, but it's also an amazing
                    jumping off point to the Tumalo Creek trail system. 
                    In the Tumalo Falls area there are ample opportunities for viewing waterfalls on Bridge Creek, Middle Fork Tumalo Creek, and North Fork Tumalo Creek. The trail network
                    here that allows for routes between 3-10+ miles, all with great waterfalls. I recommend hiking the Middle/North Fork Tumalo Creek for the densest concentration of waterfalls.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="t1"
              src="https://lh3.googleusercontent.com/pw/AM-JKLVqVUJt1UpUXKqXgjjSzgCZjGxAKzFQ0JP7Z-E9Vz0sRnJNYE6Gkz-NDu1m95GRb2ZtAdFR2MVPCn95ltxWaF8hyH0ZgQZLE2NDBN0cXQrIiiQLhQ1khAor0qg7-bImKT_epLuSjGoRNTcZke9lz6Z-=w800-h535-no?authuser=0"
              width={800}
              height={535}
            />
          </div>
          <br />
          <br />
          {`If you want to hike farther than the first few waterfalls on Tumalo creek, a great 7-8 mile loop from this trailhead hikes past Tumalo Falls
                    on the North Fork Trail, and loops back on the Swampy Lakes and Bridge Creek trails. You should see about 12 waterfalls on this loop. 
                    I love to do this hike on a weekday or Friday afternoon when the trail is less busy, and stop at all the waterfalls to relax.`}
          <br />
          {`The Tumalo Falls trailhead is at 4,800 elevation and may see snow into May. Early summer and fall are the best times to visit.`}
        </div>
        <div className={utilStyles.centered}>
          <Image
            alt="t2"
            src="https://lh3.googleusercontent.com/pw/AM-JKLXDaybHNNW9eC1g25yfycnDNU48u73Eg65JOX_N24ybXRBmekw2Hm82FD0bSuAezRXom_tnMHes526tJKwckGgYuVr9bG8tEpMRXTwqlKD5K4rHWKzMZ2WhLvfCJZnAS_FdzDOmB947KJu9Xv_4yFeR=w450-h600-no?authuser=0"
            width={450}
            height={600}
          />
          <Image
            alt="t3"
            src="https://lh3.googleusercontent.com/pw/AM-JKLXiobtUeGzehE61wDrG-o1u2jc74-E1oSBGK7J3m0qBARwfvqxJ0pM5d2Rz75zeZjfACqI__DeWVUi3O9KeBqzVCDcNieoMQB6PNh7mC7Qj1xnd33qzT2pqUbJYo_5juviQ18NST1mY4DukDgW0YXwq=w600-h800-no?authuser=0"
            width={450}
            height={600}
          />
        </div>
        {`Look below for more Central Oregon hiking ideas - Happy Trails!`}
      </div>
      <RelatedPosts metadata={metadata} tag="sisters" />
    </Layout>
  );
}
