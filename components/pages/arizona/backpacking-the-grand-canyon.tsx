import utilStyles from "../../../styles/utils.module.css";
import Pinnable from "../../pinit";
import Contact from "../../contact";
import MapEmbed from "../../maps";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";
import HikeInfo from "../../hike_info";
import { BestSeason, HikeDifficulty } from "../../../lib/hike_info_types";
import Link from "next/link";
import Image from "next/image";

const pageURI = "/blog/arizona/backpacking-the-grand-canyon";
const backcountryPermits = "https://www.nps.gov/grca/planyourvisit/backcountry-permit.htm"
const shuttleBus = "https://home.nps.gov/grca/planyourvisit/shuttle-buses.htm"
const southKaibabTrailhead = "https://www.google.com/maps/place/South+Kaibab+Trailhead-Kaibab+Rim+(Orange)+Route/@36.0529124,-112.0864696,17z/data=!3m1!4b1!4m6!3m5!1s0x87331079f9198911:0x4ff6b38ed0d72d58!8m2!3d36.0529081!4d-112.0838947!16s%2Fg%2F11ss74wvlr?entry=ttu"
const brightAngelTrailhead = "https://www.google.com/maps/place/Bright+Angel+Trailhead/@36.0586164,-112.1438958,15.54z/data=!4m14!1m7!3m6!1s0x87331079f9198911:0x4ff6b38ed0d72d58!2sSouth+Kaibab+Trailhead-Kaibab+Rim+(Orange)+Route!8m2!3d36.0529081!4d-112.0838947!16s%2Fg%2F11ss74wvlr!3m5!1s0x87331735570246ef:0x864e99540608b624!8m2!3d36.0574094!4d-112.1436028!16s%2Fg%2F1hc2c94yk?entry=ttu"

//+metadata
export const metadata = {
  title: "How to Backpack the Grand Canyon",
  date: "2023-06-01",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8DIG-16s9Rfke25vlHl6eoPsTg1FaIH5cyB0-5pkLLe6ZyN7B5WShs5C1fhEYPFHKdnjUJNtHISpzXoiSNtYffhrnrD_i3GIisWS7lArNzT2-O914ynfdwD0ho_Mw6IO7YFJkQWgEc1U8SBnthVaxUj=s800-no?authuser=0",
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
          {`From 7,000 feet high on the South Rim to the Colorado River, there's no shortage of spectacular scenary on this bucket-list worthy backpacking adventure in Grand Canyon
          National Park.`}
          <br/><br/>
          {`Backpacking the Grand Canyon requires a little planning; including reserving permits (or attempting walkups), and packing accordingly. Check our guide below
          for details on planning your Grand Canyon trip!`}
        </div>

        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Hiking Room Canyon in Death Valley National Park"
            src="https://lh3.googleusercontent.com/pw/AMWts8BYxL1yYEvpvHv2fS3itzoKih0V00zymSAYs6jO8BkoFDdp7_n-81065_NPjSOnQ87NxqSzhiA2Q2bCljcAlqO2bu6lFAFtO2cKzQNLBoL6vlUNHUdMQ6enmDWdqcigJmgfyOJzRp-9CGrZlf2VOVIN=w533-h799-no?authuser=0"
            width={533}
            height={799}
          />
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
            {`A `} <Link href={backcountryPermits}>Backcountry permits</Link>
            {` is mandatory when backpacking in Grand Canyon National Park. There are two types of permits for prospective campers, `}
            <b>Advance</b>{` and `}<b>Walk-up</b>{` permits. We'll cover both of these below.`}
            <h3>Advance Permits</h3>
            {`The National Park Service releases most backcountry permits via an advance reservation system. To apply, follow the `}
            <Link href={backcountryPermits}>backcountry permit instructions</Link>
            {` provided by the park service, mailing your request up to four months in advance of your trip.`}
            <br/><br/>
            {`Make sure to add a variety of possible itineraries
            when applying - this will increase your odds of being selected.`}
            <h3>Walk-up Permits</h3>
            {`Walk-up permits are released every day using a first-come, first-served system at the South Rim Village backcountry office.`}
            <br/><br/>
            {`Walk-up permits require a flexible schedule, with multiple days spent waiting at the South Rim..`}
            {`The following guide shows our recommended plan for getting walk-up permits:`}
            <ol>
              <li>{`Reserve around three nights at the Mather Campground, or at another nearby facility. This will be your base camp while waiting for a walk-up permit.`}</li>
              <li>{`When you arrive at the South Rim, apply for a wait list number at the backcountry office.
              The earlier in the day you apply, the better.`}</li>
              <li>{`The following morning, arrive at the backcountry office just before 8AM with your wait list number. The Park Rangers will call numbers and give out permits in order.`}</li>
              <li>{`Once you get a permit, it will be valid the day after you receive it. For example, if I get my permit Monday, I will camp Tuesday night at Bright Angel.`}</li>
            </ol>
            {`Be aware that it may take more than 1 day to get a permit, which is why I recommend staying for at least three nights somewhere nearby. When we
            got walk-up permits, we ended up spending two nights at the Mather Campground, getting our permit on the second day, and leaving for our hike on the third day.`}
            <br/><br/>
            {`If you do spend extra time at the South Rim waiting for permits, there's plenty to do in terms of day hiking, sightseeing, and more. The West Rim hike from Hermit's Rest is incredible, 
            as is the sunset from the South Rim.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Room Canyon Entrance, Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8DUQJK24yxcyAWfmksq31Om2nQFr7uBpaCR3g-uq97-FffluD-K4xblUh_94G0ZSYdCisSaI3aPsd5g4ecZPQAvxDtbZa5Dxug6ndYXfk8vX3CdSjj1IwGux3K2l45EmJ7A2Yix-vFEbKkHvv2zfBWv=w799-h533-no?authuser=0"
                width={799}
                height={533}
              />
            </div>
          </div>
          <h1 className={utilStyles.justifyCenter} id="hike-info">
            Hike Info
          </h1>
          <h3>Trailhead and access</h3>
          <div>
            {`While this trip can be done many ways, I recommend starting your backpacking trip at the `}
            <Link href={southKaibabTrailhead}>South Kaibab Trailhead</Link>
            {` and hiking down to stay at Bright Angel Campground near the Colorado River. For the return hike, take the Bright Angel
            trail back up to the `}
            <Link href={brightAngelTrailhead}>Bright Angel Trailhead</Link>
            {`.`}
            <br/><br/>
            {`Access between the two trailheads is faciliated by the `}
            <Link href={shuttleBus}>South Rim Shuttle Bus</Link>
            {`, a free shuttle around the South Rim. I recommend parking your car at the backcountry office, and taking the early morning hiker express bus
            to the South Kaibab Trailhead.`}
            <br/><br/>
          </div>
          <h3>Hiking Down South Kaibab Trail</h3>
          <div>
            {`The South Kaibab Trail is dry, rocky, but extremely beautiful with scenic vistas and red rock at every turn. You will see spots of wildflowers in the spring, and many gorgeous rock formations as 
            you descend to the Colorado River.`}
            <br/><br/>
            {`Be aware that there is no water on this trail, and almost no shade - pack more water than you think you will need. The temperature will increase as you descend,
             being 20-30F warmer at the bottom than the rim.`}
             <br/><br/>
             {`A general rule of thumb is that for every 1000 feet of elevation you lose, the temperature will go up 5 degrees.`}
          </div>
          <h3>Bright Angel Campground</h3>
          <div>
            {`Despite being in the backcountry, this is a developed campground. There are restrooms, potable water, and designated campsites. While there is water here, it's generally recommended to bring a water filter
            anyway, in case of emergency.`}
            <br/><br/>
            {`The campsites are spaced evenly on one side of Bright Angel Creek above where it joins the Colorado River.
            If you continue walking past the campground, you'll arrive at Phantom Ranch, where you can purchase drinks or snack (cash or card accepted).
            The North Kaibab Trail continues beyond Phantom Ranch, eventually terminating at the North Rim.`}
          </div>
          <h3>Back up the Bright Angel Trail</h3>
          <div>
            {`The Bright Angel Trail is the best way out from the bottom of the Grand Canyon, with multiple rest houses and places to refill your water, like Havasupai Gardens.`}
          </div>
          
          <h1 className={utilStyles.justifyCenter} id="other-tips">
            Other Tips
          </h1>
          <h3>Ribbon Falls Hike</h3>
          <div>
            {`If you're staying more than one night at Bright Angel, I recommend spending a day hiking the North Kaibab Trail up to Ribbon Falls. It's 13 miles
            round-trip to Ribbon Falls, and every step of the way is through exceptionally beautiful canyons. The trail starts off in a steep canyon lined with red rock,
            gradually opening up. Best of all, its relatively flat to Ribbon Falls, gaining only 1,200 feet over the 13 mile round-trip.`}
            <br/><br/>
            {`The Ribbon Falls day hike was the highlight of our trip to the Grand Canyon, chock full of spectacular scenery and wildflowers. Start your hike
            early to get the best views, before the sun glare washes out the rock colors.`}
          </div>
        </div>
        <Contact />
      </ReadMoreLink>
    </>
  );
}
