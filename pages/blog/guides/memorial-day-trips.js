import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import Image from "next/image";
import Link from "next/link";
import RelatedPosts from "../../../components/related_posts";

//+metadata
let metadata = {
  title: "Spring Backpacking in Oregon",
  date: "2022-05-02",
  image:
    "https://lh3.googleusercontent.com/pw/AM-JKLUylk_UAqZ4M-vLAFvIJHqRTilndXouWRBpsznAtoS5WQrZ22ggfsj_rECSj-ClI43nKEormgAZ5OxVtlMu_ub_HK37C0sbjmdvZZWz0EC61wjbU56TUafrUoJpDDx0sTsQG_RSgnodWraTDErSgeOZ=w796-h798-no?authuser=0",
  tags: ["backpacking", "guides", "oregon"],
};

const rogueRiverTrail =
  "https://www.google.com/maps/place/Rogue+River+National+Recreation+Trail/@42.6522736,-123.607442,14.62z/data=!4m8!1m2!2m1!1srogue+river+trail!3m4!1s0x54c5092d96ca97b7:0xe67a995c036f7ea!8m2!3d42.650836!4d-123.5865435";
const rogueRiverBLM =
  "https://www.blm.gov/visit/rogue-river-national-recreation-trail";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Kick off the spring season in style with our suggestions for early-season backpacking that avoids the snow!`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`There's plenty of opportunity for early-season backpacking in Oregon - while most of the state's high country doesn't melt out until
                    July or later, routes can be planned in central or Southern Oregon that bypass lingering snow. When searching for early season trails,
                    look for areas below 5000' - most spots above this will be difficult to pass due to snow. This rule changes a bit depending on where
                    you're planning to travel: some sections of eastern and southern Oregon melt out faster.`}
          <br />
          {`The following trip ideas are inspired by Memorial Day backpacking trips we've taken in the past. If you're willing to explore, the perfect long
                    weekend trip is out there.`}
        </div>

        <h1 className={utilStyles.justifyCenter} id="rogue-river">
          Rogue River Trail
        </h1>
        <br />
        <div>
          {`The 40.5-mile long `}
          <Link href={rogueRiverTrail}>Rogue River National Scenic Trail</Link>
          {` follows the Rogue River from Graves Creek towards the
                    Pacific Ocean, and is a 4 hour drive from Portland. This beautiful trail is typically not too crowded, has plentiful campsites, and is home to gorgeous 
                    river scenery. The BLM has an excellent guide to the `}
          <Link href={rogueRiverBLM}>Rogue River trail</Link>
          {`, complete with mileage and general 
                    guidance. We used the BLM website for planning our trip, and finding campsites.`}
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="rogue 1"
              src="/images/rogue-river.png"
              width={1200}
              height={800}
            />
          </div>
          {`A popular method of hiking the Rogue is to run a shuttle from Graves Creek and hike ~40 miles point-to-point. When I last hiked this in 2019,
                    we hiked a section from Graves Creek and did a 54 mile out-and-back, camping two nights at Meadow Creek. This made for a 13.5 mile day to Meadow Creek,
                    a 27 mile out-and-back day past Marial and back to Meadow Creek, and then 13.5 miles to return to the trailhead.`}
          <br />
          <br />
          {`The Rogue is a perfect trail to do early in the season, as the lower Rogue River valley can become unbearably hot in the summer. Even in May, the sun felt intense
                    and we stripped down to shorts/t-shirts by late morning. The weather can be variable in spring, but the lower Rogue is typically drier and warmer. The trail has
                    a slight downgrade from Graves Creek, and is overall light on elevation change.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="rogue 2"
              src="https://lh3.googleusercontent.com/pw/AM-JKLW1u2dGEfxO0X_ekXsDxyg2Wzq-Q-eR0qHN97e-xYVg_FQTcY5ntVqNgQxyux_kncoMqZE9Tj205gqtMywycv42o00wYJlQGcEUcfcxr_vmUn30zJ-dWvZrHiSGYoATZdXx8wDj2r1YNS3ZhxCCeBaB=w600-h800-no?authuser=0"
              width={450}
              height={600}
            />
          </div>
          <br />
          <br />
          {`The lower Rogue is tick country, so make sure to check yourself for any unwanted companions after a day of hiking. On the trail you'll see plenty of landmarks
                    named after bears - this is because the Rogue is has a healthy black bear population. Plan to pack a bear canister or bag, as most campgrounds do not have
                    secure food storage. On our trip, we didn't see any bears, but did suffer one tick bite at the end of the trip (it was easy to remove).`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="rogue 3"
              src="https://lh3.googleusercontent.com/pw/AM-JKLVNaEqFIIFS3zeHkPyHMBrEL3oDVALpsFXRv20Px97PDVJDAkOhz2y-jVEkn6jgT18puSy7AZ0TA5i1FPs0fXNZW72S-uJxjzR71xTmjR956omZuvjlkkr5xglh9wuGoSgzgFBr-PzA_nvvl-f2y92K=w450-h600-no?authuser=0"
              width={450}
              height={600}
            />
          </div>
        </div>

        <h1 className={utilStyles.justifyCenter} id="mckenzie-river">
          McKenzie River Trail
        </h1>
        <br />
        <div>
          {`Our 2021 Memorial Day backpacking trip followed the McKenzie River, a pristine cold water river that originates from underground springs high in central
                    Oregon's Cascades. The McKenzie hosts waterfalls, lava tubes, hot springs, and more - it's a truly amazing hike, and well worth doing. The trail spans 27 miles
                    from it's high point at Clear Lake to McKenzie Bridge. For our Memorial Day hike in 2021, we started a Clear Lake and did an out and back to Deer Creek hot springs.
                    The trail's most scenic elements can be found on the upper sections, standouts including Clear Lake, the waterfalls loop, and Blue Pool.`}
          <br />
          <br />
          {`Check out our post on `}
          <Link href="/blog/oregon/mckenzie-river-backpack">
            Backpacking the McKenzie River
          </Link>
          {` for more details about the trail!`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="McKenzie River"
              src="https://lh3.googleusercontent.com/pw/AM-JKLUQZRlAHL9D2uKSfsPfrFmePMbaR61IzwR6did5pb3Eh2SG5aVjZz8mjQ2ZeGD_D4Efd67gvpdRZRf7_j-4YkdM5mb9A6eRe1vICc77IC3CzDEYSX7EOCATwdMMaWRbUGhtPIKvWdTsiRLvUCPdAzFZ=w800-h535-no?authuser=0"
              width={800}
              height={525}
            />
          </div>
        </div>
        <h1 className={utilStyles.justifyCenter} id="upper-rogue-river">
          Upper Rogue River Trail
        </h1>
        <br />
        <div>
          {`In 2020, we hiked a 47 mile out-and-back from the North Fork dam near Prospect, Oregon to Farewell Bend just past Union Creek. The trail can also be easily
                    shuttled - park one car near Union Creek/Farewell Bend, and the other at North Fork dam, which should be your starting point. 
                    The upper Rogue River trail is a moderate hike with interesting water features, including a section of the river that travels underground through a lava tube.
                    Along the trail there are a mix of developed and dispersed camping options - we opted to try both, staying for one night in the Farewell Bend campground.
                    The developed campgrounds support a small number of walkup campers, and we never had trouble finding a campsite.`}
          <br />
          <br />
          {`At Natural Bridge (where the river enters and exits a lava tube), the trail forks and continues as #1034 on the north side of the river,
                    and #1034A on the south side. We were tempted to cross the river here and follow trail #1034, but we quickly found it was covered in blow down and
                    almost impassable. After covering about 1/2 of a mile, we doubled back and continued on #1034A to Farewell Bend.`}
          <br />
          {`Unless you've got a high appetite for scrambling over brush, I'd recommend to stay on the #1034A trail.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="upper rogue"
              src="https://lh3.googleusercontent.com/pw/AM-JKLW313ooD6YsaSF1--GPEvngIafet_ZblQCOXfKPiX_iDzxeftbTDR5M9uLuB9v_5s1b-VN5x4y_Yl7HFSKvtnjthx-jVcvMpUKeXhYpIVes0IbvhodZH-K2rs--mAXMV5s-LERWjNaHM27V62Recu4R=w800-h600-no?authuser=0"
              width={800}
              height={600}
            />
          </div>
          <br />
          <br />
          {`The Upper Rogue is is an excellent trail to bring your fishing gear on. The trail closely follows the river for its span, and there are lots of
                     sandy bars to setup camp and cast your line. We didn't have our gear with us, but saw many others fishing.`}
          <br />
          {`In the lower section of the trail (first ~10 miles from Prospect), we found abundant Morel and King Bolete mushrooms. Both are delicious, edible wild mushrooms,
                    which we used to spice up our backpacking meals. I was surprised at how many mushrooms there were, and how easy they were to find - all the Morels
                    were readily visible from the trail.`}
          <br />
          {`Note: please only harvest wild mushrooms if you're confident in your ability to identify them. Wild mushrooms can be poisonous
                    or even deadly.`}
        </div>
        <div className={utilStyles.centered}>
          <Image
            alt="upper rogue 1"
            src="https://lh3.googleusercontent.com/pw/AM-JKLXme1zos1v6J22zCl4ggHK0biPrhNKs_tJ1NCw-miWnNLFZI-FIpqRuiM03f2QjaMIi0fGEgHe10SCWtKN23RPtk-Cz8zpQoDuF8Q7ChEiPwLjB2h2x36QHZqFHR0_cjUVVBvvbWZpS4AbzJhjaaMj5=w600-h800-no?authuser=0"
            width={450}
            height={600}
          />
          <Image
            alt="upper rogue 2"
            src="https://lh3.googleusercontent.com/pw/AM-JKLW_QVt7lYtSpNrsKJE0zlOH3KKIOn1Dwe7Hconbabdh3tieJ6wLYwENjvqG6fo9qqfpeyiT_ASG_JR9mGJyg8P-t8GEd3TDGaULQlt_6d_914Ps-qfaEfg6dF3kls3i-AyBf-jnJ91YaDIOoNpK1A_w=w450-h600-no?authuser=0"
            width={450}
            height={600}
          />
        </div>
        <h1 className={utilStyles.justifyCenter} id="north-umpqua">
          North Umpqua Trail
        </h1>
        <br />
        <div>
          {`In 2022, we plan to hike the North Umpqua trail - we'll have details on this trail after we complete it! In the meantime,
                    check out the BLM's website covering the `}
          <Link href="https://www.blm.gov/or/districts/roseburg/recreation/umpquatrails/">
            North Umpqua Trail
          </Link>
          {` if you're interested in learning more. Happy trails!`}
        </div>
      </div>
      <RelatedPosts metadata={metadata} tag="guides" />
    </Layout>
  );
}
