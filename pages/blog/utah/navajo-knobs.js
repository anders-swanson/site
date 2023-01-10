import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import Link from "next/link";
import RelatedPosts from "../../../components/related_posts";
import Pinnable from "../../../components/pinit";

//+metadata
let metadata = {
  title: "Navajo Knobs at Capitol Reef",
  date: "2022-06-29",
  image:
    "https://lh3.googleusercontent.com/pw/AM-JKLVCdFFKxG34Gb-kxA7VErUzs-jOIzUToqDNiUOtqxiTliOJ4qTjiCBpc566ABwG6mroJn5O_eElzGVzZ6xTE_RzKCak5Pe65UpHacTQ9kZfP8PTYfIFdCAcXcSkTy_E3FnOfELHm1FMMyDYQP5mDRIY=s800-no?authuser=0",
  tags: ["hiking", "national park", "utah"],
  disabled: true,
};

const cover =
  "https://lh3.googleusercontent.com/pw/AM-JKLVDKuDPIETlDsSAE-xWmA0a_FOPgFGJ3wKqFJf1XcJCF0q96OY1rhEB9WQNW8M2uvuFKIBayUko4ipPiiN_Jo4RZjnZcO1gLpxxImjDVZeNE2eVol6l8Oa5IZ3COps3hrF2IXghT7rWg3URYBB92REr=w800-h600-no?authuser=0";
const hickmanTH =
  "https://www.google.com/maps/place/Hickman+Bridge,+Rim+Overlook+and+Navajo+Knobs+Trail+Head/@38.2897142,-111.2310988,16.83z/data=!4m5!3m4!1s0x874a1904f7209117:0x2c6384b908780ba!8m2!3d38.2887635!4d-111.227639";
const cohabCanyonTH =
  "https://www.google.com/maps/place/Cohab+Canyon+Trailhead/@38.2827507,-111.2467847,17.71z/data=!4m5!3m4!1s0x874a19af84cbc6e9:0x5f99a228620aa33e!8m2!3d38.282643!4d-111.2462364";
const pageURI = "/blog/utah/navajo-knobs";

export default function Post() {
  return (
    <Layout
      headerImage={cover}
      headerText={metadata.title}
      description={`Discover stunning vistas while hiking the Waterpocket Fold in Utah's Capitol Reef National Park.`}
      subText={`9 miles, extend to 16+`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`Capitol Reef is one of Utah's five National Parks, tucked midway between Bryce Canyon and Canyonlands National Parks.
                    The main feature of Capitol Reef is the Waterpocket Fold, a geologic uplift topped by glittering Navajo Sandstone. 
                    From the upward shift of the Fold, the rock is layered in beautiful, colorful patterns.
                    Pictures of the Waterpocket Fold look almost like they are artificially tilted, but this is simply the natural look of the rocky uplift.`}
        </div>

        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Domes of Navajo Sandstone in Utah's Capitol Reef National Park."
            src="https://lh3.googleusercontent.com/pw/AM-JKLVaXE4CbKQcFYhOdKsTt_9HMXqDnPSvwS-LXZSyaw8IWZyr99rj1zrtV2xUw2VPdI_w0UICGndUFFq2p004WkUE0fBN8vZdjC3sv91PGuforUdXlI8MviDqpExBMYQCsWg9ZXpnidOirMSxhr05tIkw=w800-h600-no?authuser=0"
            width={800}
            height={600}
          />
        </div>

        <h1 className={utilStyles.justifyCenter} id="navajo-knobs">
          Navajo Knobs via Cohab Canyon
        </h1>
        <br />
        <div>
          {`The Navajo Knobs hike is commonly started from the `}
          <Link href={hickmanTH}>Hickman Bridge trailhead</Link>
          {`, and runs about 9-10 miles roundtrip. Since we're always looking for
                    new and interesting ways to make our legs sore, we decided to start the hike at Fruita Campground and connect to the Hickman Bridge trailhead via `}
          <Link href={cohabCanyonTH}>Cohab Canyon</Link>
          {`. If you start from the Cohab Canyon Trailhead, expect 16-17 miles and close to 4,000 feet of elevation gain.`}
          <br />
          <br />
          {`The Cohab Canyon trail unassumingly starts across the road from the Fruita Campground, and passes through a stunning sandstone canyon. As you traverse the canyon trail,
                    take note of the pock marks in the brilliant red, orange, and gold walls caused by natural erosion from wind and rain.
                    About halfway along, there is a short side trail that climbs to the rim of Cohab Canyon - hike up this route for a view over Fruita and the Fremont River.`}
          <br />
          <br />
          {`Bypassing the Cassidy Arch trail on the right (another beautiful trail worth doing), the Cohab Canyon trail ends right across the 
                    road from the Hickman Bridge Trailhead. Cross the road and continue on the Hickman Bridge Trail.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Looking down on Fruita from the Waterpocket Fold, Capitol Reef National Park."
              src="https://lh3.googleusercontent.com/pw/AM-JKLWKfI1f9rInyOQIuPhI8kIRZLDekYpw2-uYgmRPMcHc8CELhyJTANfmt2225DC5n5wfza8-crABpmn98v9SL5xdOJQ5lTeb2F7HEkuzZQqCbvReiZpSj4UXAw8kLF6996-udX9PzOudvoyF_r_4n-9J=w800-h600-no?authuser=0"
              width={800}
              height={600}
            />
          </div>
          <br />
          <br />
          {`From the Hickman Bridge trailhead, you'll quickly encounter a short interpretive loop that takes you to a natural bridge. Definitely walk this short loop -
                     no matter how many natural bridges I saw in in Utah, I was always down for at `}
          <i>least</i>
          {` one more.`}
          <br />
          <br />
          {`Past the natural bridge, the trail begins climbing up to the rim of the Waterpocket Fold. The views are increasingly gorgeous as you reach the top of the ridge,
                    and remain stunning all the way to Navajo Knobs. Along the way, you'll be amazed by sandstone domes, craggy waterpockets, and layers of colorful rock that cascades
                    all the way down to the Fremont River.`}
          <br />
          <br />
          {`Like many trails in Utah, keep your eye out for cairns as you hike - cairns are used to mark the path over sandstone stretches where the trail
                    is not otherwise visible.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Hiking the Waterpocket Fold in Capitol Reef National Park, Utah."
              src="https://lh3.googleusercontent.com/pw/AM-JKLVDMQIBepkS15RgEpj4fFtmSnkugxtHl9bGEDK98gGzkRyNEzsL3ZF4-RxNvLsegBKmRZmZqLgeNw2RSQ1d23T-NUCRS1_2leDrlmkpr3emmNLas0h3auSuy0jatYUffmw7PGVonh_F6YVi5kFP0JwY=w800-h600-no?authuser=0"
              width={800}
              height={600}
            />
          </div>
          <br />
          <br />
        </div>
        <div>
          {`The Navajo Knobs trail ends at a group of pillars or 'Knobs' of Navajo Sandstone. You can scramble to the top of the pillars for a better view, and a 
                    great lunch spot before your trek back. `}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Navajo Sandstone on the Waterpocket Fold in Capitol Reef National Park, Utah."
              src="https://lh3.googleusercontent.com/pw/AM-JKLUKHWyJP9nZy6dmhF6lapqBZHnxcFA7S_zW31aoL_j7J7iXopjTqB7GgU8tmAmuVoOVO0UsZeNC7MYuLjs5JUjxNtQIEDvzjOpWtoeCzFCn_6jR591ZxOoOfM6YXKatB8zCGVbNDsNglHaQ0T2OJETu=w800-h600-no?authuser=0"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
      <RelatedPosts metadata={metadata} tag="national park" />
    </Layout>
  );
}
