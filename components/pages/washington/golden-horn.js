import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../layout";
import RelatedPosts from "../../related_posts";
import Pinnable from "../../pinit";
import Link from "next/link";
import links from "../../../lib/links";
import MapEmbed from "../../maps";
import WTPBackpacking from "../../snippets/what-to-pack-backpacking";
import BearSafetyNC from "../../snippets/bear-safety-nc";
import Contact from "../../contact";
import ReadMoreLink from "../../read_more_link";

//+metadata
let metadata = {
  title: "Backpacking Snowy Lakes in the North Cascades",
  date: "2022-08-22",
  image:
    "https://lh3.googleusercontent.com/pw/AL9nZEVVUlfj77qjZ5umYnAraQ4Ima49vWuAW6xeKc4mLfsXzM_L-QbCiGHWv9DaRgcKijcH3HAZNvQR4wO_SaQ4yWGGMUZFVdaTCNeo1fQdjg0mU8e4wHN0hJ9QvYdDS5r8YURVUInUwKsfUoy1rlZ00JvP=s800-no?authuser=0",
  tags: ["lakes", "backpacking", "washington", "north cascades"],
};

const cover =
  "https://lh3.googleusercontent.com/pw/AL9nZEXGw25374hAKaC-wbDFevMC96m4QD0cQ-4c0Skaji8BApUQe-VCPhbjk71gq7T6c5FjM1nvigVMrW8aZ9RSIrsDdtvjyjWZHcHhwHoGHnL2BoHfrAvbVcW1qYxPjAunP-OLojDOpz73CC42DOpwY8Rj=w800-h533-no?authuser=0";
const pageURI = "/blog/washington/golden-horn";

const paciticCrestNorthTrailhead =
  "https://www.google.com/maps/place/Pacific+Crest+Trail+North+Trailhead/@48.5258689,-120.7382231,16.58z/data=!4m8!1m2!2m1!1sgolden+horn+trailhead!3m4!1s0x5484ade98ee8e437:0x54f63bb022e7f5b5!8m2!3d48.5246355!4d-120.7360385";

export default function SnowyLakes({ readMore }) {
  return (
    <Layout
      headerImage={cover}
      headerText={metadata.title}
      description={`Join us on an adventure through the mountains of Washington's North Cascades as we backpack to Snowy Lakes.`}
      subText={`20 miles round-trip`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt={`Snowy Lakes, Washington.`}
            src="https://lh3.googleusercontent.com/pw/AL9nZEXp6wbW7nlsHLwbPiG2ovlM0zRmSrqQEVyFCblbIl_Td9HWDug3e_TjxYaGNx5c8YBUjmPmwtlzaG1gAuPwmwuDajjOcXs9FLJKaQfyUdYzZ7Z9wqXGqDSL6RadEx9Kl1jE1r0y7Q30BJ_S2QDcnOX1=w800-h533-no?authuser=0"
            width={800}
            height={533}
          />
        </div>
        <div>
          {`Explore stunning landscapes and the natural beauty of northern Washington with a backpacking trip to Snowy Lakes. These high alpine lakes
          are an ideal backpacking destination, tucked deep in the heart of the North Cascades and surrounded by a multitude of snowy peaks.`}
          <br />
          <br />
          {`On this 20-mile out and back, you'll spend the majority of your hiking time well above the treeline, taking in constant views of the Cascade Range.
          Wildlife is also abundant on this trail, which you may be lucky enough to see (we saw mountain goats and a solitary black bear). While Snowy Lakes is 
          suitable as a day hike for experienced hikers, it's best experienced as a backpacking trip. This will allow you to spread out your miles and 
          fully experience the gorgeous campsites at Snowy Lakes.`}
          <br />
          <br />
          {`The trail starts at the `}
          <Link href={paciticCrestNorthTrailhead}>
            Pacific Crest North Trailhead
          </Link>
          {` across Highway 20 from Rainy Pass, just outside the North Cascades National Park. Campsites at Snowy Lakes are first come, first serve, and there are no
                    required permits for backcountry camping along this stretch of the Pacific Crest Trail (PCT).`}
        </div>
        <ReadMoreLink
          enabled={readMore}
          uri={pageURI}
          text="backpacking to Snowy Lakes in Washington's North Cascades"
        >
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Pacific Crest Trail headed north and Mt. Hardy"
              src="https://lh3.googleusercontent.com/pw/AL9nZEVYwrCW3rD0stVlOECQCYQrMueM39mrGcOgfVYbKl1HVKFgJopEUZBduA4fV-stdaT9WSj_zyKsnb5FpDthOL8xaeJlIAMTqrM9v21HZPf29xlMIl1VPCtbT5a803XxXYCTXY9cLid4EO03d9P6qfSv=w800-h533-no?authuser=0"
              width={800}
              height={533}
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There
          </h1>
          <div>
            {`The trail to Snowy Lakes begins at the Pacific Crest North trailhead on the north side of Highway 20. There is a decent-sized dirt parking lot
          at the trailhead capable of parking at least 30 vehicles. Be aware that while this trailhead is not usually too busy, it may fill up
          with hikers going to the Maple Pass trail on the other side of the highway during peak season (near the end of September/beginning of October).`}
            <br />
            <br />
            {`The following pin shows the location of trailhead.`}
          </div>
          <MapEmbed lat="48.524680" long="-120.736027" />

          <h1 className={utilStyles.justifyCenter} id="snowy-lakes-details">
            Snowy Lakes Hiking Details
          </h1>
          <div>
            {`The first five miles of PCT takes you through dense forest, as the trail gradually climbs and opens up to expansive views. 
          Along the way, you'll encounter several small stream crossings that are easily traversed by mid-August. 
          At the five-mile mark, you'll reach Cutthroat Pass, a high point that offers a stunning view of a mountainous 
          lake basin. Take a moment to look for Cutthroat Lake, which lies far below the pass.`}
            <br />
            <br />
            {`As you reach Cutthroat Pass, there are plenty of flat areas to stop and rest. I suggest taking a break here to have a snack or eat lunch.`}
            <br />
            <br />
            {`We saw the most wildlife in the trail section before Cutthroat Pass. We even came across a black bear just 50 yards off the
           trail on our way up, and ran into a mountain goat by the pass on our return trip.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="North Cascades below Cutthroat Pass"
                src="https://lh3.googleusercontent.com/pw/AL9nZEWp5OrhYkkwCKFXcRcI7YhUvyeI_G-u-sf0a5eMJwKbnzgx0toOssq-xLs2ZIuaYX6tMXL2EMc7MSkGc5SSWnW8xAltnc7yXnlGVX_CIfkaIwU6ZwwlAsqJeVsw5sR9_4aBe7AAQZPC7KF0q9CPXgdE=w800-h533-no?authuser=0"
                width={800}
                height={533}
              />
            </div>
            <br />
            {`Past Cutthroat Pass, continue hiking for around 2 more miles along a high ridge line that eventually drops down to Granite Pass. Beyond Granite Pass,
          the trail continues a few miles more through the gorgeous high country before
                    to reaching the Snowy Lakes cutoff trail, which is clearly marked. On your approach, you will see the peaks of Mt. Hardy, Golden Horn, and The Tower.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt={`Washington's North Cascades.`}
                src="https://lh3.googleusercontent.com/pw/AL9nZEUl0jbbb8dAn6Wf0V7XX6dY242pndZPc6wCnMOSOmPovHa9FONXHY_qhCIZvsqrri0XZ-9CBpevdhY6nRdf0R_zPSluyFCWiPLlhCMNYpxtHiP6_csn290HaLNA54ILNvYzY9ZOUo7xlzXG_4KRJmzD=w533-h800-no?authuser=0"
                width={533}
                height={800}
              />
            </div>
            <br />
            <br />
            {`Take the Snowy Lakes trail off the PCT, and climb up 500 feet in 0.8 miles to Lower Snowy Lake, with Upper Snowy Lake being 0.2 miles further.
           Both lakes offer established campsites, but finding a favorite spot may be difficult as both lakes are astoundingly beautiful. We stayed two nights here, 
           camping at both the upper and lower lakes. I recommend camping just past the upper lake, where you can enjoy sunset views of Mt. Hardy.`}
            <br />
            <br />
            {`The campsites at Snowy Lakes are basic backcountry sites with minimal facilities. Pit toilets have been constructed at both lakes 
          (look for signs to find the trail to the toilets), and water can be filtered/purified from either lake. Be sure to pack extra bug spray 
          and sunscreen for your trip as there are usually mosquitoes present at the lakes and there is no shade.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt={`Lower Snowy Lakes, Washington.`}
                src="https://lh3.googleusercontent.com/pw/AL9nZEWhBJh_o91YMSQWArsUcTk_QSVSCI6Yr9ymRmVmzj6YG9QGtIv4js82QVinO_c-WIBxVp_UNPlaTGx4F7O9rr0pI_wkqeoulKjfBy2rzahk0V8OwjNhde08Ap4niqYt0pqlWn8J_fn11LwdNtYXsTjx=w800-h533-no?authuser=0"
                width={800}
                height={533}
              />
            </div>
            <br />
            {`If you have extra time at the lakes, scrambling the ridges around Snowy Lakes leads to even better views overlooking the lake basin. The spur towards Mt. Hardy is 
          rocky and full of scree, but the trek behind the lakes is not too bad. You'll find a very light trail to a saddle between the mountain peaks of Golden Horn 
          and The Tower, with some minimal route finding. The view from just below the saddle was the best we saw on the entire trip.`}
            <br />
            <br />
            {`If you decide to continue your hike on the PCT, know that the next 8-10 miles descend steeply into thick forest. We spent the better
          part of a day exploring this section of the trail, and found no remarkable landmarks beyond Methow Pass, which is shortly past Snowy Lakes on the PCT.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt={`Snowy Lakes, Washington.`}
                src="https://lh3.googleusercontent.com/pw/AL9nZEXukXznEOx5pZvGF6ID3m1kDV86EoFKOIj_hRtAeexyZvm1PCs6AL7kI_nbTI4T84ZjTPQUOjBs8-Eflb7ZjWbmj_x3M1SQrFoEQFq-7wJPnSMSk4UOq7m9yyvTe96P0KT4PeQlGUqqTpXml2mS_I0k=w800-h533-no?authuser=0"
                width={800}
                height={533}
              />
            </div>
          </div>
          <div>
            {`Snowy Lakes is best hiked from August through the end of September. The hiking season is kept short by the lake's high elevation and position on the cold,
         northeastern slopes of the Cascade Range. Be aware that hiking this trail in the snow and ice is incredibly dangerous, as there are many steep 
         drop-offs and ledges that would become quite hazardous to pass.`}
          </div>
          <div>
            {`You're likely to encounter PCT thru-hikers along the trail, who will be completing the last leg of their journey to Canada. 
        I suggest stopping to chat with these hikers, as they often have interesting stories to tell from
         their months of hiking, and recommendations for backpacking trips you might never have heard of.`}
          </div>
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt={`Washington's North Cascades.`}
              src="https://lh3.googleusercontent.com/pw/AL9nZEXr8EGJtIQsN-iItxKV29KLYRcoaTS4QY_KPyYZIpGHvkECgmuD8IT6mQvBWgP0iXsjkFYLqbiCtTj0xHHWEZ6_uV4ekg3S7dDfemFDVUBJkf7h8MCZclJIL-377Xm5v-o1jIgf3elGM5O_Z0XW5bd9=w800-h533-no?authuser=0"
              width={800}
              height={533}
            />
          </div>
          <WTPBackpacking />
          <div>
            {`In addition to your regular backpacking gear, I strongly recommend bringing the following extra items on your trip to Snowy Lakes:`}
            <ul>
              <li>
                {`A `}
                <Link href={links.hiking.bearVault}>bear canister</Link>
                {` or `}
                <Link href={links.hiking.ursack}>
                  bear bag such as an Ursack
                </Link>
                {`. Black bears are commonly spotted nearby.`}
              </li>
              <li>
                <Link href={links.hiking.bugSpray}>DEET</Link>
                {` and/or `}
                <Link href={links.hiking.afterbite}>Afterbite</Link>
                {` - bugs can be annoying at the lakes, especially depending on the season.`}
              </li>
              <li>{`Plenty of sunscreen and/or sun protective clothing. Exposure is high, and you'll mostly be in the sun.`}</li>
              <li>{`Swimwear for the lakes - they'll be freezing cold, but it's fun to take a plunge!`}</li>
            </ul>
          </div>
          <BearSafetyNC />
          <Contact />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt={`Golden Horn, Washington.`}
              src="https://lh3.googleusercontent.com/pw/AL9nZEViOd9NJm8PMWG11gWT57sVAZOzWV0xHX8oAMsy_WlioZP3bVvKhdPtVfXO70SerOXnRNRcC79Ba2FDSQmgf2m2F2D80gSuFj2l998xaOJuAGT9agxgkwQSGou9V_MnCq3AABjFgARvBoopkPm-Rv-H=w533-h800-no?authuser=0"
              width={533}
              height={800}
            />
          </div>
        </ReadMoreLink>
      </div>
      <RelatedPosts metadata={metadata} tag="backpacking" readMore={readMore} />
    </Layout>
  );
}
