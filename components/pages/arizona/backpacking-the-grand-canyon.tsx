import utilStyles from "../../../styles/utils.module.css";
import Pinnable from "../../pinit";
import Contact from "../../contact";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";
import HikeInfo from "../../hike_info";
import { BestSeason, HikeDifficulty } from "../../../lib/hike_info_types";
import Link from "next/link";
import WTPBackpacking from "../../snippets/what-to-pack-backpacking";

const pageURI = "/blog/arizona/backpacking-the-grand-canyon";
const backcountryPermits =
  "https://www.nps.gov/grca/planyourvisit/backcountry-permit.htm";
const shuttleBus = "https://home.nps.gov/grca/planyourvisit/shuttle-buses.htm";
const backcountryInfo =
  "https://www.nps.gov/grca/planyourvisit/upload/intro-bc-hike.pdf";
const southKaibabTrailhead =
  "https://www.google.com/maps/place/South+Kaibab+Trailhead-Kaibab+Rim+(Orange)+Route/@36.0529124,-112.0864696,17z/data=!3m1!4b1!4m6!3m5!1s0x87331079f9198911:0x4ff6b38ed0d72d58!8m2!3d36.0529081!4d-112.0838947!16s%2Fg%2F11ss74wvlr?entry=ttu";
const brightAngelTrailhead =
  "https://www.google.com/maps/place/Bright+Angel+Trailhead/@36.0586164,-112.1438958,15.54z/data=!4m14!1m7!3m6!1s0x87331079f9198911:0x4ff6b38ed0d72d58!2sSouth+Kaibab+Trailhead-Kaibab+Rim+(Orange)+Route!8m2!3d36.0529081!4d-112.0838947!16s%2Fg%2F11ss74wvlr!3m5!1s0x87331735570246ef:0x864e99540608b624!8m2!3d36.0574094!4d-112.1436028!16s%2Fg%2F1hc2c94yk?entry=ttu";
const backcountryOffice =
  "https://www.google.com/maps/place/Backcountry+Information+Center/@36.0535183,-112.1452067,17.08z/data=!4m6!3m5!1s0x8733174b4ffadcc5:0x73a814ac0a7d9d88!8m2!3d36.0525061!4d-112.1437556!16s%2Fg%2F11r8v1yrs?entry=ttu";

//+metadata
export const metadata = {
  title: "How to Backpack the Grand Canyon",
  date: "2023-06-01",
  image:
    "https://lh3.googleusercontent.com/pw/AJFCJaW_E1PSgLMrThx-3VMSsbFVE3cGXcMNnyGZSpu2laWq2WjYDSjElqQW1TW7c_nbOQ6NwBiz1XfpGQq29DXYfmgG_gQUDx7BabVzbwCbNFSldlJvBtO4jD2hNh1B5gbxSAvfE3NxiTrWJbuZlsiJ1Qhu=w653-h653-s-no?authuser=0",
  tags: ["backpacking", "national park", "grand canyon", "arizona", "guides"],
  preview:
    "Learn how to backpack to Bright Angel campground by the Colorado River from high on the Grand Canyon's South Rim.",
};

export default function BackpackingGrandCanyon({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="17 mile loop"
          elevation="5,000 feet"
          difficulty={HikeDifficulty.HARD}
          season={BestSeason.SPRING_FALL}
          trailhead={southKaibabTrailhead}
          permits={<Link href={backcountryPermits}>Backcountry Permits</Link>}
        />
        <div>
          {`From 7,000 feet high on the South Rim to the Colorado River, there's no shortage of spectacular scenery on this bucket-list worthy backpacking adventure in Grand Canyon
          National Park.`}
          <br />
          <br />
          {`The best time of year to backpack the Grand Canyon is during the spring and fall, when the temperatures are more mild.
          The summer is dangerously hot, while snow and ice can be experienced during the winter. Note that the weather can be unpredictable at any time of the year.`}
          <br />
          <br />
          {`Backpacking the Grand Canyon requires a little planning; including reserving permits (or attempting walkups), and packing accordingly. Check our guide below
          for details on planning your Grand Canyon trip!`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Views on the South Kaibab Trail"
              src="https://lh3.googleusercontent.com/pw/AJFCJaXKxo75nkjjdGR_UMYgFET1rO7WTivx2HUbpxkSrRvQ7JH1_25pgFIQfiSDPtjXiEm_7W5gDhsR8JabfWu1wwOYPZeVOUEpjg2jt5ikkLf2XxmqD0y9uGq4-TtluM0VVEjHHbsv5vpAM1ZEQE10DlQn=w533-h799-s-no?authuser=0"
              width={533}
              height={799}
            />
          </div>
        </div>
      </div>
      <ReadMoreLink
        enabled={readMore}
        text="backing the Grand Canyon"
        uri={pageURI}
      >
        <div className={utilStyles.flexGapContainer}>
          <h1 className={utilStyles.justifyCenter} id="permit-information">
            Overnight Permits
          </h1>
          <div>
            {`A `} <Link href={backcountryPermits}>Backcountry permit</Link>
            {` is mandatory for backpacking Grand Canyon National Park. There are two types of permits available to prospective campers, `}
            <b>Advance</b>
            {` and `}
            <b>Walk-up</b>
            {` permits. We'll cover both of these permit types below.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Hikin in the Grand Canyon"
                src="https://lh3.googleusercontent.com/pw/AJFCJaUc24QXsMCA5JttX6rhus4c-WwBrhu_rkko1K7H3noxxUrt2yMVQYjr_6KsQMYJk3hsM2PGCjmzIKypbasrCqStKanhui3tnyVybY_unikoe9W6iB0a4TTWxApvKQESjmuintz4SLCT8JTjHRAa44SP=w799-h533-s-no?authuser=0"
                width={799}
                height={533}
              />
            </div>
            <h3>Advance Permits</h3>
            {`The National Park Service releases most backcountry permits via an write-in reservation system. To apply, follow the `}
            <Link href={backcountryPermits}>
              backcountry permit instructions
            </Link>
            {` provided by the park service, mailing your request up to four months in advance of your trip.`}
            <br />
            <br />
            {`To increase your odds of being selected for a backcountry permit, add a variety of possible itineraries and dates to your application.
            `}
            <h3>Walk-up Permits</h3>
            {`For walk-up permits, show up to the `}
            <Link href={backcountryOffice}>backcountry office</Link>
            {` at 8AM least two days before you intend to backpack to inquire about permits. If permits are sold out (they typically will be)
            before you are called, the rangers will give you a wait-list number. You can return the next day (or as long as it takes) with your wait-list number to re-apply for permits.`}
            <br />
            <br />
            {`Once your number gets called, you'll be awarded a permit for the next day. Due to this system, I recommend spending 3-4 nights at the South Rim to have a good chance
            at securing a walk-up permit. It took us two nights to get ours, but we got a little lucky - another camper was willing to share their site with us, pushing us up a couple places in line.`}
            <br />
            <br />
            {`This is the general flow of getting a backcountry permit using the walk-up system:`}
            <ol>
              <li>{`Reserve around three nights at the Mather Campground, or at another nearby facility. This will be your base camp while waiting for a walk-up permit.`}</li>
              <li>{`When you arrive at the South Rim, apply for a wait list number at the backcountry office.
              The earlier in the day you apply, the better.`}</li>
              <li>{`The following morning, arrive at the backcountry office just before 8AM with your wait list number. If the permits sell out before your number is called, you'll receive a new number and may re-apply the next day.`}</li>
              <li>{`Permits are valid the day after you receive them, meaning you'll generally have a couple days to kill at the South Rim.`}</li>
            </ol>
            {`If you do spend extra time at the South Rim waiting for permits, there's plenty to do in terms of day hiking, sightseeing, and more. The West Rim hike from Hermit's Rest is incredible, 
            as is sunset at the South Rim.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Sunset from the Grand Canyon South Rim"
                src="https://lh3.googleusercontent.com/pw/AJFCJaWFesdAisKySHV68alH6v1yDktnurETi2sgEh2iBVGHMbrMt-9muu1EqzK8Yst2DGr-T1TCGeomErrZ8I0BYNw_5Qy_Yz_nW_PkLzp5o029NohAp4usiJwx3CuXqP9xbmvn0tJGA_Qo38PvM86RukSX=w584-h730-s-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
          </div>
          <h1 className={utilStyles.justifyCenter} id="hike-info">
            Hike Info
          </h1>
          <h3>Trailhead and Access</h3>
          <div>
            {`While this trip can be done many ways, I recommend starting your backpacking trip at the `}
            <Link href={southKaibabTrailhead}>South Kaibab Trailhead</Link>
            {` and hiking to Bright Angel Campground near the Colorado River for at least one night. For the return hike, take the Bright Angel
            trail back up to the `}
            <Link href={brightAngelTrailhead}>Bright Angel Trailhead</Link>
            {`.`}
            <br />
            <br />
            {`Access between the two trailheads is faciliated by the `}
            <Link href={shuttleBus}>South Rim Shuttle Bus</Link>
            {`, a free shuttle around the South Rim. I recommend parking your car at the backcountry office, and taking the early morning hiker express bus
            to the South Kaibab Trailhead.`}
            <br />
            <br />
          </div>
          <h3>South Kaibab Trail</h3>

          <div>
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Starting the South Kaibab Trail"
                src="https://lh3.googleusercontent.com/pw/AJFCJaXNCjqSdXpFB_mAGPyl8FIYpnVE5wAOFrcEf1b-2aKouResg__UvsPVRkfKtISY-hZYQRQuNIiwo1L_fv65QF7yCLvNyS64XrPsC8SFLlTnLXZdjnSoKWLdQSPgPmf5UNpUFnk4fOCDuA4Mthh6JQL-=w533-h799-s-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
            <br />
            <br />
            {`The South Kaibab Trail is dry, rocky, but extremely beautiful with scenic vistas and red rock at every turn. You will see spots of wildflowers in the spring, and many gorgeous rock formations as 
            you descend to the Colorado River.`}
            <br />
            <br />
            {`Be aware that there is no water on this trail, and almost no shade - pack more water than you think you will need. The temperature will increase as you descend,
             being 20-30F warmer at the bottom than the rim. A general rule of thumb is that for every 1000 feet of elevation you lose, the temperature will go up 5 degrees.`}
            <br />
            <br />
            {`After losing 5,000 feet of elevation over 7 miles, you'll arrive at the Colorado River. Pass through a tunnel and across a bridge, and you've only got about 1/2 mile
             to Bright Angel Campground.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Descending the South Kaibab Trail"
                src="https://lh3.googleusercontent.com/pw/AJFCJaX0FxeToIccfOd-5UJ9AeKEc2TXv5XiDdlvhn3VAeb12rD3aCjCe2pV8beJNBWU_mMlCjjTqX269XdChBbaEJtHO0gmU8Va55tub1HpwAFHLGX92RxDhiFUml6ffURpY-Zme6Kg2nLBGw1DPoSY-tVi=w533-h799-s-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
          </div>

          <h3>Bright Angel Campground</h3>
          <div>
            {`This campground is in a canyon alongside Bright Angel Creek, uphill from where it joins the Colorado River. After you arrive, choose an unoccupied site
            and place your permit in the drop-box. Each site has a picnic table, a backpack hang, and a metal box for food storage. Make sure not to leave any food out,
            as the local squirrels are hungry!`}
            <br />
            <br />
            {`Despite being in the backcountry, this is a developed campground. There are restrooms and potable water - note that it's still recommended to bring a water
            filter, in case of emergency.`}
            <br />
            <br />
            {`If you walk past the campground up Bright Angel Creek, you'll arrive at Phantom Ranch, where drinks or snacks can be purchased (cash or card accepted). Phantom Ranch
            is a historic hotel which originally opened in 1922.
            The North Kaibab Trail begins beyond Phantom Ranch, climbing up until it eventually reaches the North Rim.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Bright Angel Campground"
                src="https://lh3.googleusercontent.com/pw/AJFCJaWNQY8x2CpOK9v0UTxXqzTVoS_1B6cjkjAj-koLs--LBXFp0bqdaq2PjXYsGAysYvU2LRJiY07ChTbz0cYpQPhQkEm_18HuwPCWTnZ0kNTQBdHRyQJYQ4dqVozRcO4mO6esl7R32whcB6XShBTBgMkY=w533-h799-s-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
          </div>

          <h3>Bright Angel Trail</h3>

          <div>
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Looking down at the Bright Angel Trail from the West Rim Trail"
                src="https://lh3.googleusercontent.com/pw/AJFCJaURDRjJVer9f2h_vgPK8wOPaKIJP1lqkkdDp5pmOErBG-GOhtlIE21dRHIbABcaueHH9qZD_XzIAJIar1gcp1kBOX0FQWEGvgxTo2Upm7D8sQbj1m9X0H5fK3KG3paSTntMM0jgi8Rhtc8hHz47BsM-=w584-h730-s-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
            <br />
            {`The Bright Angel Trail is the best way to hike out of the Grand Canyon, with multiple rest houses and places to refill your water, like Havasupai Gardens.
            While longer than the South Kaibab Trail, there's more shade, water, and the grade is less steep (though still extremely steep).`}
            <br />
            <br />
            {`From Bright Angel Campground, the trail starts by crossing a suspension bridge, and follows the Colorado River for a ways. From the river, it's 9.5 miles and 4,500 
            feet of gain to reach the South Rim. Enjoy endless switchbacks as you traverse up from the river, taking plenty of time to enjoy the views during your ascent.
            It's a stunning trail, and well worth the effort.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Hiking the Bright Angel Trail"
                src="https://lh3.googleusercontent.com/pw/AJFCJaVSHomdU48xhzTTJBQDjUdskQDrTuN11TM7BKojwJ4TO1f2fCB4kwEE_WAVoHTFMvNiabm7rzt_v9Gd3w0RIdCfgUFLhAeFDpydGiOgrfXDgmtlG1Jukje7fJzqnaw7AEpHn9UhidN74i1nhmtUBeu7=w533-h799-s-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
            <br />
            <br />
            {`This is the most popular trail in the Grand Canyon, and the crowds get thicker the closer you are to the top. You're also likely to see mule trains on their way up or down
            the canyon,
            carrying supplies or boarders bound for Phantom Ranch. Make sure to give the mules right-of-way when you're hiking.`}
          </div>
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Mules on the Bright Angel Trail"
              src="https://lh3.googleusercontent.com/pw/AJFCJaXoWI_iCyFAcKBoxlbafUtpwhUsfTZnA4UMp_wdMZ0mQMZHM6QgkQhx58-p5JCi8tyzWrDbHMpFyfWivGw7D0jicWuf_FeWdYFCkV6Q_8L6pCTBqoUUwWQOhRzwLY8oa7HqZvXeucvmbEWoKZAKB5Nf=w799-h533-s-no?authuser=0"
              width={799}
              height={533}
            />
          </div>
          <h1 className={utilStyles.justifyCenter} id="more-info">
            More Info
          </h1>
          <h3>Start Hiking Early</h3>
          <div>
            {`It gets hot in the Grand Canyon, even during springtime. Seriously hot. Starting as early as you can will help limit hiking during the hottest part of the day,
            from 10AM to 4PM. Pack plenty of water, electrolytes, and salty snacks help your body accommodate the loss of fluids from hiking in hot weather.
            A good way to stay cool during hot days is by immersing yourself in water a creeks and rest stops - really soak yourself, so evaporation will keep you cool.`}
            <br />
            <br />
            <Link href={shuttleBus}>The Grand Canyon shuttle busses</Link>
            {` typically start before dawn, allowing you to reach the trailhead for an early start.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Crossing the Colorado River"
                src="https://lh3.googleusercontent.com/pw/AJFCJaUXBZZwRbDZLbrvX8brBZkOdFglKK7KQc6qoHmnKw9lyt1x1s1pLvj_1kX6EwtEtf7wLNivMgbnUmNlMmbVisUfBvQyQAPnhSGHNTBJAXZQ1HHi8QiUkkHroDhk_RPzj-k82IKt92Yvm8CUXfonxAXK=w533-h799-s-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
          </div>

          <h3>Prepare accordingly</h3>
          <div>
            {`Hiking down to the Colorado River is an amazing experience, but also one that should not be taken lightly. This is a difficult trail, and is known for having many
            rescues every year.`}
            {`Check out the `}
            <Link href={backcountryInfo}>NPS Hiking Guide</Link>
            {` for more information on hiking the Grand Canyon.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Lauren at the Colorado River"
                src="https://lh3.googleusercontent.com/pw/AJFCJaUKHOMmVcqD85LT5FE8F9-W3WuV4j3Kni1eJplItL3N492GukIh3zlDe56a_XQ1BBTLLR4XAJvKRxR15CKdOs57hxeWAa7aR57CsJ5dK3jCyMvkS3zTRJ-sRKqcXE-mPKvYAl38SDHN3ZgAmsNkgST_=w533-h799-s-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
          </div>

          <h3>Ribbon Falls Hike</h3>
          <div>
            {`If you're staying more than one night at Bright Angel, I recommend spending a day hiking the North Kaibab Trail up to Ribbon Falls. It's 13 miles
            round-trip to Ribbon Falls, and every step of the way is through exceptionally beautiful canyons. The trail starts off in a steep canyon lined with red rock,
            gradually opening up. Best of all, its relatively flat to Ribbon Falls, gaining only 1,200 feet over the 13 mile round-trip.`}
            <br />
            <br />
            {`The Ribbon Falls day hike was the highlight of our trip to the Grand Canyon, chock full of spectacular scenery and wildflowers. Start your hike
            early to enjoy the best views: later in the day, the sun glare will wash out color from the beautiful rock walls.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Bridge crossing Bright Angel Creek on the North Kaibab Trail"
                src="https://lh3.googleusercontent.com/pw/AJFCJaWTkv-GKm4IPTwGCtcgEB0vwp7yMu45iDnXXwWW5FTdcOQ7hoFGPkjza-zypGr8_7xkQ2PU7UprzRdbGhgxFAEwX2XZzxC_Is-9g351tMfLY4Lcfijz-p05Nnhxt7E_2SMbdf48KVac_o4t6Z5kHNrT=w533-h799-s-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="North Kaibab Trail near Ribbon Falls"
                src="https://lh3.googleusercontent.com/pw/AJFCJaW-JwhLpjo-8GQvQMD5nKIwUaSxhYHiVk3JYFq152QjvXYR5fJjg_nRiM_813m3iRoJvheEO944Q4NWmHf_z7cIFViuZwNJRZ2axeKnJaD4kEY50ZB3M8IuC0GbuSX7odsTRqGzyTbSPaP21bePElqn=w799-h533-s-no?authuser=0"
                width={799}
                height={533}
              />
            </div>
          </div>

          <WTPBackpacking uri={pageURI} />
        </div>

        <Contact />
      </ReadMoreLink>
    </>
  );
}
