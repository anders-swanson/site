import utilStyles from "../../../styles/utils.module.css";
import Pinnable from "../../pinit";
import Contact from "../../contact";
import MapEmbed from "../../maps";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";
import WashingtonPassCamping from "../../snippets/washington-pass-camping";
import SnowyLakes from "./golden-horn";
import MaplePass from "./maple-pass";
import HikeInfo from "../../hike_info";
import { BestSeason, HikeDifficulty } from "../../../lib/hike_info_types";

const pageURI = "/blog/washington/blue-lake";

//+metadata
export const metadata = {
  title: "Blue Lake Golden Larches Hike",
  date: "2023-01-29",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8B7y3i9lmhwEbyw3OC1lj3aCvAWP59QdLFOuohWAHhrNAZR9jeIu3gPBr2_xx0lCF1laXcmEIoSQy-XCykn6VHTPhj_QIcXmyLd8OxS6fgSgT4Y7t7Zvc0G6p3_xdDUOlJUDUH-PGgNdnCJYYrsnZfZ=s800-no?authuser=0",
  tags: ["washington", "lakes", "camping", "north cascades"],
  preview:
    "Explore a beautiful lake hike that showcases Northern Washington's stunning fall colors.",
};

export default function BlueLake({ readMore }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="5 miles round-trip"
          elevation="1,000 feet"
          difficulty={HikeDifficulty.EASY}
          season={BestSeason.SUMMER_FALL}
          trailhead="https://www.google.com/maps/place/Blue+Lake+Trailhead/@48.4046689,-120.7173796,11.67z/data=!4m9!1m2!2m1!1sblue+lake+trailhead!3m5!1s0x5484ac56dff9a9d9:0x21d2336eec6f02ea!8m2!3d48.5189673!4d-120.6743626!15sChNibHVlIGxha2UgdHJhaWxoZWFkkgELaGlraW5nX2FyZWHgAQA"
        />
        <div>
          {`Hiking to Blue Lake in Washington's North Cascades is a breathtaking experience, especially during larch season.
           The 5-mile out-and-back trail winds through a forest of larch trees, which turn a brilliant golden yellow in autumn, 
           providing an incredible backdrop for the lake's reflective blue waters.`}
          <br />
          <br />
          {`To witness the fall colors at their peak, I recommend hiking to Blue Lake during the first couple weeks of October. 
          When planning your trip, it's best to check recent trip reports on websites like AllTrails to get an idea of current
           conditions. On our trip, we hiked Blue Lake on October 8th and the timing was perfect. Be aware that the timing
           may vary depending on the current weather.`}
          <br />
          <br />
        </div>

        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Blue Lake in the North Cascades"
            src="https://lh3.googleusercontent.com/pw/AMWts8BKTXF6nEqkq8Zr4gQe76AftrE3YLNP5D-IERxqrF2eemLog4sNFlOnLpJ87rVBXtmFj6yRhFEfk090oNrNfnnUkYe7CqadeK_qT73AHG9U37a6NjOWpILXoDZo4DyQTpEmZ8KdtpD5nmI3aYMUUpsK=w355-h533-no?authuser=0"
            width={355}
            height={533}
          />
        </div>
      </div>
      <ReadMoreLink enabled={readMore} text="hiking Blue Lake" uri={pageURI}>
        <div className={utilStyles.flexGapContainer}>
          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There and Parking
          </h1>
          <div>
            {`The Blue Lake trailhead is approximately a 3-hour drive from Seattle, and is a popular destination during Larch season. 
            The medium size parking lot may fill quickly on fall weekends, so be prepared to park on the shoulder of Highway 20 or 
            even walk up to 1/2 mile to the trailhead if you do not arrive early in the morning.`}
            <br />
            <br />
            {`On our visit, we arrived at the trailhead around 1 PM on a weekend and the closest available parking was over 1/2 mile from the trailhead.`}
            <br />
            <br />
            {`The following pin shows the location of the Blue Lake parking lot off Highway 20. Note that Highway 20 is closed seasonally from November through late spring.
            A Northwest Forest Pass or equivalent is required for parking, you may also self-issue a $5 day pass at the trailhead.`}
          </div>
          <MapEmbed lat="48.519591" long="-120.674131" />

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>

          <div>
            {`The 5-mile round trip passes through the colorful larch forest, switching back and forth as you gain around 900 feet of elevation towards Blue Lake.
            On the way up, you'll see the crags of the Early Winter Spires rising above the forest to your left.

            After reaching the lake, explore its surroundings from multiple rocky outcroppings that offer views of its amazingly reflective waters.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Reflections on Blue Lake"
                src="https://lh3.googleusercontent.com/pw/AMWts8CqFcIE8figBmvcqdX5-aD3kNsH5lKwHO1nT1BFn7bQgPIMtaHGaAhmxLnZ5JnrAWT1d0_9sb8vcEpovN8-rXrtt5frLRjlZb5z4fcaovHFeaBeAMAsaHQfuBiJt4BdywnYG77ctAdVsYwWATtdNt_u=w800-h533-no?authuser=0"
                width={800}
                height={533}
              />
            </div>
            <br />
            {`Once you've finished exploring Blue Lake, I recommend continuing your hike along the right side of the lake. This side path
            winds to a picturesque loop surrounding a shimmering tarn (a small mountain lake). This trail is quieter than the main trail,
            and is a relaxing spot to set down your pack and snap a few photos.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="A small tarn above Blue Lake"
                src="https://lh3.googleusercontent.com/pw/AMWts8BYBxG86xNDW_gVo-zrIV71K6rq9TNcniMQoWAkV36pZtqjmVyMFL9_X6L1USBwpKzhC4FVbgWN0MyD69FRgpEjxTfD8mavGC8OaxNPuzCPe4tGiHmJIsx-Kk4BI-_RZ9QlheJczM1hOZMqQr73y-E-=w355-h533-no?authuser=0"
                width={355}
                height={533}
              />
            </div>
            <br />
            <br />
            {`Return back down the same path, taking in the autumn colors one last time before reaching the trailhead.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Reflections on the tarn"
                src="https://lh3.googleusercontent.com/pw/AMWts8CQYPOx4A2U4u3Mye-QAPeTpsh8Q9v0bKc-c-A-vAfVqamXnbXCRpXb5jAIZQH1WIT9MXBf80xnzlF9rYMp6AG1uPyZYa4R4Z0e7v7dnoXovsqMvtI0RKnXXsYeisJ7Tn7USnzAZuo6IFs13MsapONR=w800-h533-no?authuser=0"
                width={800}
                height={533}
              />
            </div>
          </div>
          <WashingtonPassCamping pageURI={pageURI} />
          <h1 className={utilStyles.justifyCenter} id="other-info">
            Other Info
          </h1>
          <div>
            {`Blue Lake is close to many other breathtaking trails in the North Cascades. Continue reading for a couple more of our favorites.`}
          </div>
        </div>
        <MaplePass readMore={true} />
        <SnowyLakes readMore={true} />
        <Contact />
      </ReadMoreLink>
    </>
  );
}
