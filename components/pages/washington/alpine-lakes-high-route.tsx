import utilStyles from "../../../styles/utils.module.css";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";
import MapEmbed from "../../maps";
import Contact from "../../contact";
import HikeInfo from "../../hike_info";
import {
  BestSeason,
  HikeDifficulty,
  NWForestPass,
} from "../../../lib/hike_info_types";
import Image from "next/image";
import { LinkT } from "../../tablink";
import WTPBackpacking from "../../snippets/what-to-pack-backpacking";
import Link from "next/link";
const pageURI = "/blog/washington/alpine-lakes-high-route";

const westFoss =
  "https://www.google.com/maps/place/West+Fork+Foss+Lakes+Trailhead/@47.634796,-121.3062778,17z/data=!3m1!4b1!4m6!3m5!1s0x549a8bb7daf57e01:0x354fa548cad72ad7!8m2!3d47.6347924!4d-121.3037029!16s%2Fg%2F11ckvf6w70?entry=ttu";
const necklaceValley =
  "https://www.google.com/maps/place/Necklace+Valley+Trailhead/@47.6594894,-121.2814476,15.54z/data=!4m6!3m5!1s0x549a8c9d5a0ce6cf:0xecb31ebbfc1ce76c!8m2!3d47.6651193!4d-121.2882634!16s%2Fg%2F11btx021fy?entry=ttu";

//+metadata
export const metadata = {
  title: "Alpine Lakes Wilderness High Route",
  date: "2023-09-25",
  image:
    "https://lh3.googleusercontent.com/pw/AIL4fc8ygeuIt2DP5W7cyQRpv4IRNefz6kryD-kcBpij0NIgfuVRUzDao0ipqIgQX40gJa8lX98YI7Id_2akLtJ2rbajf2i7Od4LUJWWghcU3FqZ5-ITr9dhp84tyOH04LNNPVVcsRQUOYnSkQu6JAeKETdc=w653-h653-s-no?authuser=0",
  tags: ["lakes", "washington", "backpacking"],
  preview:
    "Hike the high route on this breathtaking, 26+ mile section of Washington's Alpine Lakes Wilderness.",
};

export default function AlpineLakesHighRoute({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="26+ mile loop, 1-3 nights"
          elevation="8,400+ gain"
          difficulty={HikeDifficulty.EXTREME}
          season={BestSeason.LATE_SUMMER}
          trailhead={westFoss}
          permits={NWForestPass}
        />
        <div>
          {`The Alpine Lakes Wilderness is home to over 700 mountain lakes nestled among snow-capped peaks. Known for its beauty, variety of terrain,
           and proximity to Seattle, the Alpine Lakes Wilderness is a major backpacking destination for beginner to expert hikers.`}
        </div>
        <div>
          {`While incredibly beautiful, this route is an extreme challenge with off-trail elements. Expect route-finding, miles of granite boulders, and gruelingly
          steep elevation changes will test all but the most physically fit hikers or trail runners.`}
        </div>

        <div>
          <Image
            alt="Chimney Rock"
            width={800}
            height={800}
            src="https://lh3.googleusercontent.com/pw/AIL4fc_96SxtJ_p0MuCZsjvv0paWge-lVykCENg6pnpwCFiOgj-5LXRULc-_xbG3F94NGspd1vRx49vwtggv_pDyQEEWJRZ3Tv8S405n92qCWRSJ9jdsvF1_sxtHp13FXCS7l2bQKa1MSyuh59R2zrQvIH6i=w533-h799-s-no?authuser=0"
          />
        </div>

        <div>
          <Image
            alt="Trail Map"
            width={800}
            height={800}
            src="https://lh3.googleusercontent.com/pw/AIL4fc9_-_1ChAroFeNLpZTfz-D_cMa_Wos6U2yvc_1DrsTF-kAJu41G4iRDgc6CQ41LGpWxhMjFMhrR0vSlz4BZtSKDmIiiX0rc--zDuSf1vhpHMPNtkagy7QBhbp0M1LwL21JN2wK2JoTGy3pjc553wb0o=w814-h1039-s-no?authuser=0"
          />
        </div>

        <ReadMoreLink
          enabled={readMore}
          text="backpacking the Broken Top Loop"
          uri={pageURI}
        >
          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There and Parking
          </h1>
          <div>
            {`The Alpine Lakes High Route can be started one of two trailheads, the `}
            <LinkT href={westFoss}>West Fork Foss Lakes Trailhead</LinkT>
            {` or the `}
            <LinkT href={necklaceValley}>Necklace Valley Trailhead</LinkT>
            {`. I recommend beginning at the West Fork Foss Lakes Trailhead and hiking the loop clockwise, ending at the 
            Necklace Valley Trailhead.`}
          </div>
          <div>
            <Image
              alt="West Fork Foss Lakes Trailhead"
              width={800}
              height={800}
              src="https://lh3.googleusercontent.com/pw/AIL4fc8GbzfIx9KV_tc9LaWZls5sFENaTb8rzOAtDzdh0iAIrxkMP3AG9cPIbezRvmweKBQ56foqlfFb1DyZe6sRQcvryOvNVKmG4mMeKdrrgZ-t-810iPM3v2N9wtEhdM2xOGOcRuvQQzV84lZSEc_o1kil=w799-h533-s-no?authuser=0"
            />
          </div>
          <div>
            {`Note that the two trailheads are separated by a 2.5 mile gravel road, which must be shuttled, walked, or hitch-hiked. When we backpacked this, we left our packs with
            one person at the Necklace Valley Trailhead, while the other jogged to pick up our car from the West Fork Foss Lakes Trailhead.`}
          </div>
          <div>
            {`If you plan on hitching a ride, you're more likely to find one earlier in the day. By mid-afternoon, I ended up jogging all the way to the car.`}
          </div>

          <MapEmbed place="ChIJAX712reLmlQR1yrXykilTzU" />

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>
          <div>
            {`Hiking the Alpine Lakes High Route requires navigation skills, the use of maps or following GPS tracks, and excellent physical conditioning.
            The off-trail sections are extremely difficult, and shouldn't be attempted by novice backpackers.
            Backpacking `}
            <Link href="/blog/washington/big-heart-lake">Big Heart Lake</Link>
            {`, `}
            <Link href="tank-lakes">Tank Lakes</Link>
            {`, or Chetwoot Lake can be a great alternative if you're not up for the full loop!`}
          </div>
          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc9cGUhyZEau8JI_y51BIOxVMg0EY0HWwRdTMhE87qoB-oo4XY9xTTWW-l6VKYjg74mZX_9s8ErQePgmkAGIy6i5uBpdqGSrpvZRtqo58QP-nwwIANnb4tdWtWbdNZMTeMdXB1KyKuOvYVYRj0SPhukV=w799-h533-s-no?authuser=0"
              width={799}
              height={799}
              alt="Big Heart Lake"
            />
          </div>
          <div>
            {`Starting from the West Fork Foss Lakes Trailhead, the trail ambles for 1.5 miles through the forest until you arrive at Trout Lake. Trout Lake
            is the first of many lakes you'll encounter on the Alpine Lakes Loop, popular for day hikers and fishermen. If you had a late start, there are several
            decent campsites near the lake.`}
          </div>
          <div>
            <Image
              alt="Trout Lake"
              width={800}
              height={800}
              src="https://lh3.googleusercontent.com/pw/AIL4fc8WL5du1-NLzqOYPWHnwNs8hEPob2DVlbwoyyVrOWNyMrYmMxTWqqto-psMha1WCtF8ewE4fa6WmgMBgBC5mpSUQdx1bez1vTRmh2LBGAm2jg1L2PnwJ-WWho7xHkrAwM02qnlSeoZEC7fi2ts7RPSN=w533-h799-s-no?authuser=0"
            />
          </div>
          <div>
            {`The elevation gain picks up after Trout Lake, ascending a series of switchbacks for 2.5 miles to Copper Lake.
            Copper Lake is a popular camping area, and often fills up with backpackers on summer weekends.`}
          </div>
          <div>
            {`The trail hugs the southeast edge of Copper Lake before climbing to Big Heart Lake. You'll cover 2.7 miles of trail from Copper Lake to Big Heart Lake,
            with the much smaller Little Heart Lake en route. Big Heart Lake is a well-known, well loved backpacking destination
            and one of my favorite places to camp in the wilderness.`}
          </div>
          <div>
            <Image
              alt="Big Heart Lake"
              width={800}
              height={800}
              src="https://lh3.googleusercontent.com/pw/AIL4fc8jyQwKTLHItVkm87BgyUwPnPGG8vofVwbJsoh7YjQgVKchO-EbVJc8POodD4oRIxZ8WPJ2upzTnggJCZp1smn-AI8UrbdGskT-P_ASgIZV4CI6k589ppvl86O5VhGsxsuEFypz8RbXx7rYy8U9yCPx=w799-h533-s-no?authuser=0"
            />
          </div>
          <div>
            {`There are a few campsites immediately as you reach Big Heart Lake, with the majority being across the logjam on social trails as you climb up from the lake.
          Competition for campsites can be fierce, so I suggest arriving earlier in the day or on weekdays if you want a choice spot close to the lake. The swimming 
          and fishing are great here, though the water is cold!`}
          </div>
          <div>
            <Image
              alt="Big Heart Lake 2"
              width={800}
              height={800}
              src="https://lh3.googleusercontent.com/pw/AIL4fc-HRn8CKmBDo6_9CMlP4OGfFdWpd_kez0iAUNyDTu5gKPQ_GoRFdpE7L6sUuYTIj63JyFhAOt7aqaTQMLK73xvP1gdfTlZFuM0YcpVX4SS8mpwaw4wbW1fbbxGPqjDh2SzsKshl0l9Zsl79m0cm68ZG=w533-h799-s-no?authuser=0"
            />
          </div>
          <div>
            <Image
              alt="Trail to Chetwoot"
              width={800}
              height={800}
              src="https://lh3.googleusercontent.com/pw/AIL4fc85IiAPPH7T1aWA9KBn3je7tih0CYzuZsL2G6v5rczh2hMhaPEjqWKZg0M0NERaoZaa27Z7SAlIy5p0Rai5MlA6srWTtjks7Tl58U2RD158MAvZull1LS8fVwlXZXpGbzGt1OIjfcrPPXAcdi4lz0N-=w533-h799-s-no?authuser=0"
            />
          </div>
          <div>
            {`The trail grows more rugged beyond Big Heart Lake, with rapid changes in elevation and patches of boulders - a hint of what's to come. For 2.6 miles, follow the ridge
          between Big Heart Lake and Angeline Lake until you reach Chetwoot Lake. The trail down to Chetwoot is precipitous, and can be difficult if you have a heavy pack.
          Right before you reach Chetwoot Lake, it's easy to get turned around - if you find yourself dropping down to Angeline Lake, double back over the small stream 
          out of Little Chetwoot Lake, then manoeuver the boulders along the GPS track.`}
          </div>
          <div>
            <Image
              alt="Chetwoot Lake"
              width={800}
              height={800}
              src="https://lh3.googleusercontent.com/pw/ADCreHcoYHhS-LZfnsOxTgW9MUhjfnbKNBz6gbiFgDoZNNdKooXSLQM0ULV3so9XSyVgTsH9wI3vy3I3GLwKfJuhvOANLWtKDR7SrcqE0rWtioN0b8h6VmI0pYTj8ST7TX6goV9PBhHgSptdU2CxMkxLVAQ_=w799-h533-s-no?authuser=0"
            />
          </div>
          <div>
            {`Chetwoot Lake is stunningly beautiful, a great destination itself and has several wonderful campsites. We stopped here for a lunch and a swim, and rested in the sun for a while. 
          Beyond Chetwoot Lake the already faint trail nearly disappears, being replaced primarily with cairns. Navigation skills are critical here, as you will be
          following cairns or a GPS track over jagged granite boulders.`}
          </div>
          <div>
            <Image
              alt="Going up from Chetwoot"
              width={800}
              height={800}
              src="https://lh3.googleusercontent.com/pw/ADCreHdCqGK3XhPW2S_lkezTrPeZNRpuAWFIraKE1JpNJR5V65Cl5FQyI26j6K8gJSK2E1X5NRrZN92taberAVTVCKkD_Enu-3UgrTCQjqgrSIcXSI2aG9dbEIuQ1PxGkowbZjFbngaoGOs-cX6VWQB9fDAr=w551-h772-s-no?authuser=0"
            />
          </div>
          <div>
            {`The 1.2 miles from Chetwoot Lake to Iron Cap Lake are entirely over granite, following cairns the whole way. 
          It's slow going (unless you're an expert trail runner), and took us nearly 2 hours to hike with our backpacks. As you climb over the rocks,
          make sure to watch your footing for loose or slippery stones.`}
          </div>
          <div>
            <Image
              alt="En route to Iron Cap Lake"
              width={800}
              height={800}
              src="https://lh3.googleusercontent.com/pw/AIL4fc_sCby9IBpM-2oVRvlMnLHHSKVegG_NJGXKnHVKb0-E36Q5EeubCGiwzXklJrRxHYuQ2BGBrYmvwEIWzppvMpRl_DzFKmHxTUeCQXtsZuZFM1u12eCBHMwFqgx3Ac_YYAqBPbAefKy1SVC1Eb5c9YLK=w533-h799-s-no?authuser=0"
            />
          </div>
          <div>
            {`The route rises to Iron Cap Lake, tucked in a cirque below Iron Cap mountain. This is a great spot to rest and refill your water before making the push to Tank Lakes.
          Iron Cap Lake is iced much of year excepting late summer or particularly warm years, and the water is very cold. Keep to the north side of the lake, exiting the cirque
          near its outlet.`}
          </div>
          <div>
            <Image
              alt="Iron Cap Lake"
              width={800}
              height={800}
              src="https://lh3.googleusercontent.com/pw/ADCreHeLOemxZJ2SddZ_3BNbllBVnRhV4rejacJ5I6eX-wR6-5s_ph70rYY-BbhpLKrLkDWmZxXWZNVJd1NSdyX_4HzkJ4etK6NORoU7hGxlE0xhevUnkKQI_I3My9jPlEcUrNGR9lBiiQbaRwxcwQk_WsXN=w584-h730-s-no?authuser=0"
            />
          </div>
          <div>
            {`The route hugs the side of Iron Cap, dipping steeply before beginning the climb to Tank Lakes. It's a grueling 2.4 mile slog through
          rough terrain, continuously going up or down rocky slopes. As you come within 1 mile of Tank Lakes, the path levels out and becomes easier for the final push.`}
          </div>
          <div>
            <Image
              alt="Iron Cap Lake"
              width={800}
              height={800}
              src="https://lh3.googleusercontent.com/pw/ADCreHfxNqdJzQ7a3qFxbsESvlB7UCCHM_9lVqdXFldD7y7xk6AbDBprKGQneOek2CPExAQ7gnUU1aH9HHcnV4vzWI1tyWhlsifNG-USAZNRf1Kolxl6TiICCXTxMsG8F6_beNDsqtp1dw8G5fXgJmoyiPsg=w489-h870-s-no?authuser=0"
            />
          </div>
          <div>
            {`By the time we reached Tank Lakes, we were absolutely exhausted, quickly setting up camp to have dinner and take a refreshing dip in the lake.
          Tank Lakes is my favorite spot on the hike, with a jaw-dropping view of multiple peaks across Dutch Miller Gap. I highly recommend camping here,
          though it can get busy with other backpackers out of Necklace Valley.`}
          </div>
          <div>
            <Image
              alt="Tank Lake"
              width={800}
              height={800}
              src="https://lh3.googleusercontent.com/pw/ADCreHdfUnwOQlyZ8Ir9VIYdI8CLath7km1Vp0GJXBs5Y6ECvLB5nmP4wbSqMNak6KhUsq-oKPuc15wM7wmBuTQSM7bBaLT75wgf8ylY09q31yH4YWBludPAnE3mPV9lvdwvQZQ-UnWuvxDCz11JymBMwuu6=w799-h533-s-no?authuser=0"
            />
          </div>
          <div>
            <Image
              alt="Tank Lake breakfast"
              width={800}
              height={800}
              src="https://lh3.googleusercontent.com/pw/AIL4fc9HTIYNwPr5xWUGBwPU6E_JtoLbme3m5XyWxIXN5HFauzWKkclJ1z5ANPlnzxqK_n_8zBuhv1lIdq3LQ6EXrtodn1xb8nbPJv1E0aouBVnuh74HRbPA1ZcNHxdjDs2tR94SLAbXvArV99faKbLs3Bw7=w584-h730-s-no?authuser=0"
            />
          </div>
          <div>
            {`As you hike out from Tank Lakes, the path drops rapidly through a granite field, continuing down until it meets the Necklace Valley
          trail. As you exit the final boulder field an enter the trees, keep an eye on your GPS track to avoid getting turned around. There are a lot of
          social trails here, dispersing in random directions.`}
          </div>
          <div>
            <Image
              alt="Tank Lake pond"
              width={800}
              height={800}
              src="https://lh3.googleusercontent.com/pw/AIL4fc_LMslgA25cXFMX4DyXRvz8W3UOZ4ajYEVGJMzbrsJeAZhmP1qtFWdhtwtvYAuS34gmSQoCu33lQKfPsJFZZMLxiTZL6WxLSlisaS7F0I8eklVDoKzIoEgXGBiglfOw3AhAOOWZ1i3nRWowZWiLMWiT=w799-h533-s-no?authuser=0"
            />
          </div>
          <div>
            {`From the last boulder field you have about 9 miles to hike out to the Necklace Valley Trailhead. The first mile passes through the Necklace Valley,
          with several small lakes (Opal, Emerald, and Jade). There's plentiful camping opportunities here if you're wanting to stay another night.
          Thankfully, there's an actual trail here which is easy to follow.`}
          </div>
          <div>
            {`Once you reach Jade Lake, the trail descends over 4 miles to cross the East Fork Foss River. The 5 miles to the Necklace Valley Trailhead are relatively flat,
          easy going through the forest.
          At the Necklace Valley Trailhead, you either have your shuttle car waiting, or a 2.5 mile gravel road walk to the West Fork Foss River Trailhead.`}
          </div>
          <div>
            {`This was one of my top backpacking trips of the year, but it's difficult to recommend due to its difficulty. If you're up for a challenge, and have experience
          navigating on rougher terrain, the scenery in the Alpine Lakes Wilderness will be some of the best you can find in Washington State.`}
          </div>
          <WTPBackpacking uri={pageURI} />
          <br />
          <Contact />
        </ReadMoreLink>
      </div>
    </>
  );
}
