import utilStyles from "../../../styles/utils.module.css";
import Link from "next/link";
import Pinnable from "../../pinit";
import Contact from "../../contact";
import Slider from "../../slider";
import MapEmbed from "../../maps";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";
import WashingtonPassCamping from "../../snippets/washington-pass-camping";

const pageURI = "/blog/washington/maple-pass";

//+metadata
export const metadata = {
  title: "Maple Pass Loop",
  date: "2022-10-18",
  image:
    "https://lh3.googleusercontent.com/pw/AL9nZEWibEdZnXniowowo_BwOCztCjde2LaympWEJu6mMs8wtTwss0u6krwrJ-SY9964iTAh_fGuH1T-ca2sZlWSq-AeSqs06TMH1bYlke-tDxZFQ301vhHop1lTDrastQ107wU7d7IH-iNe3htClFOASNAb=s800-no?authuser=0",
  tags: ["washington", "lakes", "camping", "north cascades"],
  preview:
    "Hike an 8-mile loop to discover astounding fall colors in Washington's North Cascades.",
  subText: "8 miles, 2k feet gain",
};

export default function MaplePass({ readMore }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`Get ready to be mesmerized by the natural beauty of larch season at the stunning Maple Pass Loop in Washington's North Cascades. 
                    This 8-mile loop hike offers the perfect blend of breathtaking views and autumnal splendor as the larch trees transform into a sea of golden hues.
                    With alpine lakes, jagged peaks, and plenty of photo ops around every bend, the Maple Pass Loop is a must-do for any nature lover.`}
          <br />
          <br />
          {`The best time to hike the Maple Pass Loop is the first or second week of October, when the Larches are at their prime. Make sure to check trip
                    reports before you depart, so you have a good idea of the current conditions.`}
        </div>

        <div className={utilStyles.centered}>
          <Slider
            slides={[
              "https://lh3.googleusercontent.com/pw/AL9nZEWb2GADoJRIM3jZyUgq7VtaUbwsQqug8Xvi7_fzlBsjC8s0-MjTXS5Yj5d52DL9tFDfI73ljbO1Ss1cdtqQZRuu_9_7yb52BnXQe5AAR3e_w_0I8i09F84ftRhKK1jD8zZhY5wcwbH6AUqckfgfWaGq=w533-h800-no?authuser=0",
              "https://lh3.googleusercontent.com/pw/AL9nZEV706SfdNhTP3jFLrOr3I4a_DoM64zDX2MIArJsPuNC6SykM5b-BO_XAXVT5IdecbHpC4ePIVG27t_QQe2T7EE7KKzp7eehWD7hTJMq_GadwbobKNltmhNpnpvl4IM-OohkVOKympPSbU8ZzMAjKGWK=w533-h800-no?authuser=0",
              "https://lh3.googleusercontent.com/pw/AL9nZEXy36_p2G92xR_XhSPGahe1DlQVMam6YyoL8ENbuIQ89pZdna5duIqCF25VzMdNJ87CzSHoAiwKmKmrdgffZxxnSnq4YldPjE1tu_vINUU1tL0g0QVeTJ15nHpJ8Dzaks2KGKTjLe1j71JABQ0C5Hzm=w533-h800-no?authuser=0",
            ]}
            width={533}
            height={800}
          />
        </div>
        <ReadMoreLink enabled={readMore} text="hiking Maple Pass" uri={pageURI}>
          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There and Parking
          </h1>
          <div>
            {`The Maple Pass trailhead is located in Washington's North Cascades, about a 3-hour drive from Seattle. Expect large crowds at the trailhead and on
                    the trail - I really can't stress enough the importance of arriving early to this hike. We hiked this trail during the first week of October and found
                    the parking lot already full by 6:30 AM, mainly with hikers who had camped in their cars overnight. If you're unable to find a spot in the main parking lot,
                    there is ample parking on both sides of Highway 20, the road that leads to the trailhead. Just be prepared to hike an additional 1/2 mile from highway parking
                    to the trailhead.`}
            <br />
            <br />
            {`The following pin shows the trailhead location off of Highway 20. Be aware that Highway 20 is closed seasonally from November through late spring.`}
          </div>
          <MapEmbed query="Maple+Pass+Trailhead/@48.5210248,-120.7449716,15.42z/data=!4m5!3m4!1s0x5484ad9309b675f7:0x2381397e1ecc2bac!8m2!3d48.5162!4d-120.7354" />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Hiking Maple Pass in the North Cascades"
              src="https://lh3.googleusercontent.com/pw/AL9nZEWK86Rl3IMIsLiP0rEZ7HFzAipGg_KVAu7QqByX4dP7ix17vKOzwwjDDxntKwzrwtqIfb-3u3cMPsKt4Fvij0u15j8p0Ea3UF5yY1tU-4MihpWy0FCd86FxPTxgg_9nu3eUmi6rcyn9JPoJbXDS-wsi=w800-h533-no?authuser=0"
              width={800}
              height={533}
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>
          <div>
            {`The Maple Pass Loop trail is an 8-mile loop that gains approximately 2,000 feet of elevation over the course of the hike.
                    Most hikers do the loop counter-clockwise, and I suggest the same. Due to the number of people on the trail, it's easier to
                     go with the flow of traffic. If you hike clockwise, you may pass hundreds of people going the other way. Starting early can 
                     help you beat the crowd - hitting the trail by 6:30 AM allowed us to get ahead of the pack and avoid most of the congestion. 
                     Bring a headlamp if you plan to start early, especially in the fall, when there's little natural light until after 7 AM.`}
            <br />
            <br />
            {`About 1.5 miles into the loop (going counter-clockwise), you'll come to the Lake Ann spur on your left. The spur is plainly
                    marked and leads to Lake Ann, a cirque lake nestled in a basin surrounded by larches. The fall color display at Lake Ann is
                    astounding, and I highly recommend you take this short out-and-back detour. The views of the lake and the surrounding peaks
                    are worth the extra effort.`}
            {`Continuing past Lake Ann, the trail consistently climbs for 2.5 miles until it reaches the crest of a ridge.
                    As you climb, take in the trail's most beautiful scenery - a series of switchbacks takes you through multiple groves of larches,
                    interspersed with breathtaking views of the mountainous North Cascades.`}
            <br />
            <br />
            {`There is a large, flat area at the top of the ridge, which makes a pleasant resting point spot before you start your descent. Lake Ann is visible below
                    you, as are many mountain peaks throughout the wilderness.
                    The descent from the ridge summit to the end of the loop is relatively rapid, taking you through a meadow with several more viewpoints before entering the
                    treeline. The final section of the loop is paved and flat, and eventually returns you to the trailhead where you started.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Golden Larches at Maple Pass"
                src="https://lh3.googleusercontent.com/pw/AL9nZEU3bRraoN2erM5PUtzc7QTFSG4GOwKlu77ieavIq93oruiQ_PRhQOWCoDBWYRs87rN0hI6tEh9icR3JRfeAVjmSMthw8PGRu8d0im9NRiH69yPDW6CsLstqq0PHIW8npPc_xAd5tVMkNUz1ZskHFmZr=w800-h533-no?authuser=0"
                width={800}
                height={533}
              />
            </div>
            <br />
            <br />
          </div>

          <WashingtonPassCamping pageURI={pageURI} />
          <div className={utilStyles.justifyCenter}>
            <Slider
              slides={[
                "https://lh3.googleusercontent.com/pw/AL9nZEVAHq8iTZyx8AM3DhAzFkD0S7NcTU_KoIhNAvfKfPiYqwer6QKqfwrZI_qFhXXK4el29ZC7jFerDqf-MVylGZ6XJ4FCbdIrdQU0wOt6GDvaBKVKOQb0RmFkX-ivGQu9IPLoEiNKDG0412yC2Sb1HuLL=w533-h800-no?authuser=0",
                "https://lh3.googleusercontent.com/pw/AL9nZEW6vvDgy-90b7ILNJGbZP0lLKi23xduqmdk9cybd4gZ5mhuLQrplO8L0WP8lWuqUrqiSoWcatUbJlPJYYVpsG100CajJ6FeMnsoli0C9V2po4r-8oib-pBkdKJmdWHeW4BjuY9WBQWB1lydxjV6u5G-=w533-h800-no?authuser=0",
                "https://lh3.googleusercontent.com/pw/AL9nZEVlx17Gz51Y8mxXNi4jm9lu_nJ5zk5jBMdZfwaJqAJjaBZSMGq5TYauEuTFb76_jJdOOcU772TGkzLB_UPDPgNZnqg6xGMGvlDv5-tyFI9Ck4HD6rpxbaTTI-lMhhy2LVm8zBxaHjzHsmnxzkdoIQmL=w533-h800-no?authuser=0",
              ]}
              width={533}
              height={800}
            />
          </div>
          <h1 className={utilStyles.justifyCenter} id="other-info">
            Other Info
          </h1>
          <div>
            {`The Blue Lake and Snowy Lakes trails are within close proximity to Maple Pass, as well as others.
                    The Blue Lake trail is a 4.4 mile out-and-back hike that offers great larch viewing opportunities. 
                    It's a moderate trail that climbs through forests and meadows before reaching the Blue Lake. 
                    If Maple Pass seems like too long of a hike, or if you want to add something extra to your day, this is a great option.`}
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Tarn above Blue Lake"
                src="https://lh3.googleusercontent.com/pw/AL9nZEWlg7lNbnnw4G594FFQtLBDqJ7QcnC4GqaRWLfZi_bKqBCu-rwewNPZwQ5Wa3Kquvq3mRXbn-QUPZn-fYRDKRRse_78yjd_wYFYNBCIPuoA6aDDpdp5NdcQYe1vYL20F2ychkMMwfABarT-1oDBkxod=w800-h533-no?authuser=0"
                width={800}
                height={533}
              />
            </div>
            {`For more information about hiking Snowy Lakes, check our our blog post, `}
            <Link href="/blog/washington/golden-horn">
              Backpacking Snowy Lakes and Golden Horn
            </Link>
            {`. I've included pins for both trailheads below. The trail to Snowy Lakes starts at the Pacific Crest North Trailhead as shown, across 
                    Highway 20 from the Maple Pass Trailhead.`}
          </div>
          <MapEmbed lat="48.524617" long="-120.736078" />
          <MapEmbed query="Blue+Lake+Trailhead/@48.516372,-120.6922761,14.21z/data=!4m5!3m4!1s0x5484ac56dff9a9d9:0x21d2336eec6f02ea!8m2!3d48.5189673!4d-120.6743626" />

          <div>
            <Contact />
          </div>
        </ReadMoreLink>
      </div>
    </>
  );
}
