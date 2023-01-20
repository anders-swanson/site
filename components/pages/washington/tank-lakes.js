import utilStyles from "../../../styles/utils.module.css";
import Pinnable from "../../pinit";
import Link from "next/link";
import MapEmbed from "../../maps";
import WTPBackpacking from "../../snippets/what-to-pack-backpacking";
import Contact from "../../contact";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";

const pageURI = "/blog/washington/tank-lakes";

//+metadata
export const metadata = {
  title: "Tank Lakes Backpacking",
  date: "2022-08-09",
  image:
    "https://lh3.googleusercontent.com/pw/AL9nZEWxLuzadNQTYTvoNNkiecQsizYqx3wpydluafg5-Rc8Lc6sAvZEzaynslU5OGeIeU6HE3W_hFXNC5lq-LMoQtwRtubErCoMaDIeahrhtdni5Ot4Avu6moA7miUgV68PBT9tLEH6Kv4vg2UfaKSRdRJk=s800-no?authuser=0",
  tags: ["lakes", "backpacking", "washington"],
  preview:
    "Camp at Tank Lakes high in Washington's picturesque Alpine Lakes Wilderness.",
  subText: "24 miles round-trip, 5,300+ feet gain",
};

const eastFossRiverTH =
  "https://www.google.com/maps/place/Necklace+Valley+Trailhead/@47.6606472,-121.2944193,15.08z/data=!4m5!3m4!1s0x549a8c9d5a0ce6cf:0xecb31ebbfc1ce76c!8m2!3d47.6651581!4d-121.2883488";

export default function TankLakes({ readMore }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <Pinnable
          page={pageURI}
          alt="Camping at Tank Lake, Alpine Lakes Wilderness, Washington."
          src="https://lh3.googleusercontent.com/pw/AL9nZEUbNo_YhJDC1eFxRpQRpuhgo6f1gsd7dZUsmHmadeyKF3JCHJDElv-t4GTT2ZnAp8ylt2fqaM1AC_FFL7bRpeCBu1vcWN5ePslAgBFrywoahqTQYRpQ_KGWlfov-fXaHxh0c4sJ8HNJkc0g9XYYkgsN=w800-h533-no?authuser=0"
          width={800}
          height={533}
        />
        <div>
          {`Tank Lakes is a backpacking destination high in Washington's Alpine Lakes Wilderness.
                    This incredible hike starts off unassumingly, ambling alongside the forested East Foss River before shifting gears and rapidly gaining 5,300 feet of elevation 
                    through rugged terrain dotted with lakes.`}
          <br />
          <br />
          {`It's 12 miles one-way to Tank Lakes, with sections of rugged trail near the end.
                    If you survive the climb to the top, you'll be rewarded with awe-inspiring views of towering snow-capped peaks, pristine alpine lakes, and plenty backcountry
                    exploring in a stunning section of Washington's Cascade Range.`}
          <br />
          <br />
          {`Bring your Northwest Forest Pass for parking at the `}
          <Link href={eastFossRiverTH}>Necklace Valley Trailhead</Link>
          {`, and self-issue a free wilderness permit at the trailhead kiosk. The trailhead parking area is small and will fill by mid morning - if the parking lot is full
          by the time you arrive,
          look for additional parking along the forest road shoulder.`}
        </div>

        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Alpine Lakes Wilderness."
            src="https://lh3.googleusercontent.com/pw/AL9nZEVNRFBChTIumuYXjdQ4Qpai_uGXG3pgt6cBdLom1jRj2SPAhYHSMnvF4MCG2eRUNiyB7xWWHg-Pthj5Jp90kd7sSvuz3m0jH8LuVtL-RtfCMNbGgp0MmhAmMzoRrfJqNKsa7ic213pHIDa10bYuCAvg=w450-h600-no?authuser=0"
            width={533}
            height={800}
          />
        </div>
        <ReadMoreLink uri={pageURI} text="Tank Lakes" enabled={readMore}>
          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There
          </h1>
          <div>
            {`Start your hike at the Necklace Valley Trailhead, also known as the East Foss River Trailhead 4.2 miles up Foss River Road off Highway 2. I've marked the location of the trailhead in the pin below.
          The gravel road to the trailhead is well-graded and passable by any vehicle.`}
          </div>
          <MapEmbed lat="47.665116" long="-121.288266" />
          <h1 className={utilStyles.justifyCenter} id="hiking-to-tank-lakes">
            Hiking to Tank Lakes
          </h1>
          <div>
            {`The Necklace Valley trail's first five miles are relatively flat and easy going, and you'll pass through a dense forest with the East Foss River on your right.
          Along the way, you'll spot multiple dispersed campsites near the East Foss River, which make decent lunch spots.`}
            <br />
            <br />
            {`Once you cross a foot bridge at the five mile mark, the trail begins to climb in earnest. In 3 miles of hiking you'll gain almost 2,500 feet of elevation
                    on a rough, rocky trail, after which you'll finally reach the southern end of Jade Lake. Jade Lake is the first lake in the 
                    Necklace Valley chain of lakes, which also includes Emerald Lake and Opal Lake.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Jade Lake north end, Washington."
                src="https://lh3.googleusercontent.com/pw/AL9nZEVfJ9-pdMIrPP2xKDrNNE-bw8Cmdl_Sm4Yrt3WsdkfNE4fH37nLExcJWDoCHc72AgOXe2P2RwN5BJrllDkZSL1inWWg_yYKHeYd8CyeqaCeRLzgdMFrI26IIVBNwQ3YXeqdoRWnZ7yXW12MxNof7MwD=w533-h800-no?authuser=0"
                width={266}
                height={400}
              />
            </div>
            <br />
            <br />
            {`Jade Lake has
                    a small campground on its northern end, and mountain peaks are visible to the north and the south.
                    We saw fingerling trout jumping in Jade Lake, and stopped to take a short swim to cool off from our climb up. Despite being mid-summer,
                    the water in Jade Lake is freezing cold, but the heat of the day made it feel refreshing.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Jade Lake south end, Washington."
                src="https://lh3.googleusercontent.com/pw/AL9nZEWrl0NLqM_afWXU38OzrpQKpcNqkXkU5L_tpakWVggh6wKZUhtCRgMa0MiBxP6Cg79fuaUjhPklp87eiuI3HXdqZLupVPOvzOu8NSHP0fMcjsSocAuvHn9A0pxbQ08pHTJY7Jv0JqjyhTuY0pEN8dy9=w533-h800-no?authuser=0"
                width={266}
                height={400}
              />
            </div>
            <br />
            {`Continuing past Jade Lake, you'll hike past the very rustic Necklace Valley cabin, Emerald Lake, and then Opal Lake. There are plenty of campsites spread around
          Emerald and Opal lakes, and you may also take a rest at the cabin. The cabin was built in 1950, and is a dirt-floored, wooden structure that
          provides some cover from the elements.`}
            <br />
            <br />
            {`The trail past Jade Lake is abundant with wildflowers, bubbling streams, and the occasional small waterfall - for weary hikers, it is also mercifully flat.
                    Take your time at the alpine meadows, and enjoy a brief respite: The remaining miles to Tank Lakes are a grueling climb over boulders, shale, and patches of snow.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="La Bohn Peak."
                src="https://lh3.googleusercontent.com/pw/AL9nZEXc1d_B-c2n9oM43JHWBS-gwnxBAqkH2T3qzwmU5wYSXCZubj2YD6PhQ3tdhAfGSC4A77p60oqM5C7of3gjh6pPXsmIxnuT7B7P3xWRbpT1gQyMCikxoxz_zVEca56pHa-4bmWXxNujnEuqoX4BWi_b=w800-h533-no?authuser=0"
                width={800}
                height={533}
              />
            </div>
          </div>
          <div>
            {`Beyond Opal Lake, you'll arrive at a fork in the trail. Take the right fork to continue towards Tank Lakes - past the fork, the trail becomes more rugged and difficult to follow.
          I strongly recommend using a GPS track past this point to aid with navigation. The following pin shows the location of the camping area at southern Tank Lake.`}
          </div>
          <MapEmbed lat="47.562367" long="-121.263879" />
          <div>
            {`The remaining 2-ish miles to Tank Lakes start off steep, scrambling up a brushy hillside that transitions into a boulder field.
                    The boulder field is dotted with rock cairns to help mark the way - follow the cairns
                    up and to your left for the easiest route. At this point, traces of trail will have all but disappeared, except for the
                    occasional cairn.`}
            <br />
            <br />
            {`Past the boulder field is a strenuous hike up a rocky hillside, with a view of La Bohn Peak on your left.
                    By this point in the trail we started to feel extremely fatigued, but knew it was only a mile or less to Tank Lakes. The reassurance
                    that we were closing in on our destination kept us in good spirits, and gave us the energy needed to push through this difficult trail section.`}

            <br />
            <br />
            {`One painfully tough climb later, you'll crest the rightmost arm of La Bohn peak and be rewarded with the view down to Tank Lake. This view is absolutely jaw-dropping,
          and I found Tank Lakes to be one of the most stunning places I've ever seen. The lake is a deep blue, surrounded by rocks, snow, 
          and Three Chief mountains. Glaciated Chimney Rock rises impressively beyond the lake - to see it in person is to truly appreciate its beauty.`}
            <br />
            <br />
            {`Be aware that the final part of the trail is extremely difficult, and requires navigation skills. Patches of snow may linger in this area as
                    late as August or September.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Lauren At Tank Lake"
                src="https://lh3.googleusercontent.com/pw/AL9nZEUkOU8lLO9dbeu59q0hNZUu6Qr4ta-fTwifMpD6ZDTyjT9SnwK7BnLH8Ua4i4822P0ozVSatW1Bl2TmXdDNEA7Tko5XViqtifUHlTMhn1HGjiF2jB0A2vaHIaV7WWvYLmQJNeB-8wQbQuDCO4g6RkxZ=w355-h533-no?authuser=0"
                width={355}
                height={533}
              />
            </div>
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Tank Lake, Washington."
                src="https://lh3.googleusercontent.com/pw/AL9nZEWmCLIhWCMT_h4Lf7SJg03PDmzhpWC3UTvygOg8If-Ssgq76_Z51qIJPypft6bYor6YzWezLGii72djD3gzIEgLioO4GFDg4Zb201NLefKB-r2Yawl5bcuvcY6g8RpefeyxMqZTgiRjNwGgZ__El_qP=w533-h534-no?authuser=0"
                width={533}
                height={534}
              />
            </div>
            <br />
            {`Tank Lakes has several campsites spread around the basin, all with an incredible view of the surrounding scenery. I recommend taking some 
          time to explore the basin plateau
                    for a view of Bear's Breast Mountain, Iron Cap Mountain, and Dutch Miller Gap.`}
            <br />
            <br />
            {`If you're looking for additional hiking at Tank Lakes, you could scramble up the side of La Bohn Peak for a top-down view of the area,
           or hike cross-country to northern Tank Lake. We were lucky enough to see a black bear close to northern Tank Lake, which scurried away shortly after noticing us.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Chimney Rock, Washington."
                src="https://lh3.googleusercontent.com/pw/AL9nZEXMkXbwXs7yzykr1uivjOt-D2XFujkz5zL-0GFIrTIGOJfZ1vidwBgLROY5wKI9HEFPBp9ipDmvWdznUSkWOB2u2S6VLCShL3snRESzlPdeY5YNg4lDiFIW-ploSLpXkdoyfdEFXONfTzOKRR6WHBsH=w533-h800-no?authuser=0"
                width={533}
                height={800}
              />
            </div>
            <br />
            {` If you're visiting Necklace Valley, pack along bug spray (such as DEET), and/or clothing with good coverage.
                   This area is notorious for mosquitoes and biting flies during the summer.`}
            <br />
            <br />
            {`The Alpine Lakes Wilderness is home to black bears, so please remember to pack bear-resistant containers, and store all food and scented items securely.`}
          </div>
          <WTPBackpacking />
          <Contact />
        </ReadMoreLink>
      </div>
    </>
  );
}
