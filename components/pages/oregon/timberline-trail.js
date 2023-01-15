import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../layout";
import RelatedPosts from "../../related_posts";
import Pinnable from "../../pinit";
import Link from "next/link";
import links from "../../../lib/links";
import ReadMoreLink from "../../read_more_link";
import MapEmbed from "../../maps";
import Contact from "../../contact";

//+metadata
let metadata = {
  title: "Mt. Hood's Timberline Trail",
  date: "2022-09-09",
  image:
    "https://lh3.googleusercontent.com/pw/AL9nZEWXCF2hPa8fZMrTCKDZlPkbzrZuDjP0kvU_hpCslG0qi-5bwgac8O3ejUDV_ZTvhj-3pXYIxL9xVW6i5XaEVhWNnvGiKnGIk0AU5YrnJNJ9sZm_c0SzGfwefYkjV3WvIznubiCgnlToHxUB5v8NwXiY=s800-no?authuser=0",
  tags: ["lakes", "backpacking", "oregon", "guides"],
};

const cover =
  "https://lh3.googleusercontent.com/pw/AL9nZEUFQkxUG704mLPsypTmBDWj_H_Xj5mCNtBoKYOneX_zs0fv0Rtu7ilknKlmZWHB-NtUaFxMLSTjfUvNTYZghtdOTKp1poAppkWOaYegCYycYFlNl4lv-EaJK32dUfBDX5qQMCxyN45NwgVacxjnp3_Z=w800-h533-no?authuser=0";
const pageURI = "/blog/oregon/timberline-trail";

const timberlineLodgeTrailhead =
  "https://www.google.com/maps/place/Timberline+Lodge+Trailheads/@45.330945,-121.7101557,17.46z/data=!4m5!3m4!1s0x54be1c0003729767:0x78c190bba8454c33!8m2!3d45.330519!4d-121.709081?hl=en";

const ramonaFallsCamp =
  "https://www.google.com/maps/place/Ramona+Falls/@45.3519818,-121.7341398,13.67z/data=!4m5!3m4!1s0x54be1e08fce94dab:0x3d8e9a89b30dd7c6!8m2!3d45.3799133!4d-121.7767105?hl=en";
const highCamp = `https://www.google.com/maps/place/45%C2%B022'28.5%22N+121%C2%B039'40.2%22W/@45.3733636,-121.6592585,15.54z/data=!4m5!3m4!1s0x0:0xdad979c8aaf320b0!8m2!3d45.374591!4d-121.66116?hl=en`;
const meadowsCamp = `https://www.google.com/maps/place/45%C2%B019'50.6%22N+121%C2%B040'38.4%22W/@45.3307258,-121.6795277,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x658373299fd490ed!8m2!3d45.330722!4d-121.677339?hl=en`;
const elkCoveCamp = `https://www.google.com/maps/place/45%C2%B024'35.5%22N+121%C2%B041'51.5%22W/@45.4098557,-121.6998347,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x44ccbc45f6eb7d0a!7e2!8m2!3d45.409852!4d-121.6976462?hl=en`;
const cloudCapSaddle =
  "https://www.google.com/maps/place/Cloud+Cap+Saddle+Campground/@45.4171293,-121.6964975,13.08z/data=!4m5!3m4!1s0x54be02ccc7ad4907:0x20059b0c7995414c!8m2!3d45.40247!4d-121.65505?hl=en";
const paradiseParkCamp =
  "https://www.google.com/maps/place/Paradise+Park/@45.3506786,-121.746723,15.42z/data=!4m5!3m4!1s0x54be1e8139de8f91:0x48d2c21e3a7c8b37!8m2!3d45.352886!4d-121.7471435?hl=en";

export default function TimberlineTrail({ readMore }) {
  return (
    <Layout
      headerImage={cover}
      headerText={metadata.title}
      description={`Traverse a breathtaking 40 mile loop through Mt. Hoods most scenic terrain on .`}
      subText={`40+ miles, 10k+ gain`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Mt. Hood near Cooper's Spur, Oregon."
            src="https://lh3.googleusercontent.com/pw/AL9nZEUyB57H0GJbqLm9mTjguF-K--3zW8iq1uiXgb2tdDsbwoZq44R0T3sv3lA19K-537NiyD288zTqNsUgvfc3ssJn0ukySsFk0rFCp-N3CDOPfAtcDXsAIC40vgMOcUUBzuCJ8XzB5wO7whZ-XXADN7fP=w800-h533-no?authuser=0"
            width={800}
            height={533}
          />
        </div>

        <div>
          {`The Timberline Trail is arguably the most iconic and beautiful trail in the Mt. Hood area. Keeping true to its name, the 
          roughly 40-mile loop is stays almost completely above the treeline as it encircles snow-capped Mt. Hood. On this popular trail,
          you'll trek through innumerable meadows of vibrant wildflowers, ford roaring glacier-fed rivers, and camp in the towering shadow of Mt. Hood.`}
          <br />
          <br />
          {`The loop has several different access points, and can be hiked in a variety of ways - the most popular of which start at `}
          <Link href={timberlineLodgeTrailhead}>Timberline Lodge.</Link>
          {`, or Cloud Cap.`}
          <br />
          <br />
          {`Over the course of the trail, you'll hike more than 40 miles, and gain 10,000+ feet of elevation. We measured 44 miles of hiking on our last trip, and 12,000
           feet of elevation gain via GPS.`}
        </div>

        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Timberline Trail Signage on Mt. Hood."
            src="https://lh3.googleusercontent.com/pw/AL9nZEVflKKfuzA04-Awx-w2taM-TexT70iDfGbzsGHImTRJwg8Jr3Phr4uQ-n_3jUesUfcBj4AiBV1jfeyjHiSKrgL0jmFmLmCyRZNEsqVfsYS3KFvMSJHppU2QILIFtOLca_WW1O1Y54LoNC3_241H5A6W=w533-h800-no?authuser=0"
            width={533}
            height={800}
          />
        </div>

        <div>
          {`The following pin shows the trailhead at Timberline Lodge. Hiking west will take you around the loop clockwise, in the direction of Ramona Falls. If head east, you'll hike counter-clockwise towards
          Mt. Hood Meadows and Cloud Cap.`}
        </div>
        <MapEmbed lat="45.332888" long="-121.711246" />
        <ReadMoreLink
          uri={pageURI}
          enabled={readMore}
          text="backpacking Mt. Hood's Timberline Trail"
        >
          <h1 className={utilStyles.justifyCenter} id="routes">
            Hiking the Timberline Trail
          </h1>
          <div>
            {`The Timberline Trail is most commonly hiked clockwise from `}
            <Link href={timberlineLodgeTrailhead}>Timberline Lodge</Link>
            {`, in 3-5 or more days. 
                    Another popular starting point is `}
            <Link href={cloudCapSaddle}>Cloud Cap</Link>
            {`. Note that the Cloud Cap trailhead requires 30-45 minutes of
                    extra driving on a gravel road - it's a rutted, washed out, and generally beat up road, but any car should be able to make it if you are a careful driver.`}
            <br />
            <br />
            {`To hike the Timberline Trail, you'll need to pick a starting point and decide where you'd like to camp.
           I suggest starting at Timberline Lodge, and have outlined a few possible backpacking routes below.`}
            <h2>Hiking Clockwise from Timberline Lodge</h2>
            {`  The best places to camp are at Ramona falls, Cairn Basin, Eden Park, Elk Cove, Cloud Cap, and near Mt. Hood Meadows. For a 3-night
                    trip, you'll be hiking around 10 miles per day. For a 2-night trip, it'll be closer to 15 miles per day. For 4-night or longer trips, you'll be hiking somewhere in the range
                    of 5-8 miles per day.`}
            <br />
            <h2>Hiking Counter-Clockwise from Timberline Lodge</h2>
            {` Similar to the above, but in reverse. I prefer this route for its pacing, and the fact that you avoid the very steep, sandy climb up from White River, which
          is tiring to hike up at the end of a backpacking trip.`}
            <br />
            <h2>One Night from Cloud Cap (Extreme But Fun)</h2>
            {` This route can hardly be considered backpacking and the per-day mileage is extremely high, but it's too fun not to mention.
                    Park your car at Cloud Cap, and hike 26 miles counter-clockwise to Timberline Lodge. Book at a room at the resort, enjoy dinner, a hot shower, and a relaxing bed for the night.
                    In the morning, enjoy the lodge's breakfast buffet before hiking the remaining 15 miles to your car at Cloud Cap. If you hike this route, you should pack as minimally as possible:
                    sleeping/eating at Timberline Lodge can reduce your pack size to something near a day pack. Please only attempt this route if you're capable of hiking high mileage and are 
                    confident in your abilities.`}

            <h2>Timberline Lodge Buffet</h2>
            {`If you end your hike at Timberline Lodge, I highly recommend their delicious and filling lunch buffet. The buffet is open 12-2PM, costs $25/person, and is the 
                    tastiest way to finish a multi-day backpacking trip. Knowing we had the buffet waiting for us at the end of the trail provided an extremely strong motivator 
                    to reach the lodge by noon!`}
          </div>

          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Ramona Falls, Oregon."
              src="https://lh3.googleusercontent.com/pw/AL9nZEUa-zLQzwE4Pj_R1zK7h3v3Jt7vY3R6JHGM-5josJEm2V2kruze-eZvSzEOxEqL6ZUOSOqE5WheRJ1JfjEupZg-G00OMZ9K6eBvzGrVTlRAg1PICQ6ALGtawztyj3KrdILXxSJp6dhNSZGC4pJcBqND=w533-h800-no?authuser=0"
              width={533}
              height={800}
            />
          </div>

          <div>
            <h2>Our Backpacking Route</h2>
            {`We hiked counter-clockwise from Timberline Lodge in two nights, camping at Cloud Cap, and Ramona Falls. Day 1 was about 15 miles,
                    day 2 was 17.5 miles, and day 3 was 11 miles. The extra mileage comes from the necessary stream crossings, and small detours that vary year-to-year. 
                    If you are hiking during wildflower season, I recommend taking the Paradise Park detour. This detour is on the west side of Mt. Hood, and is clearly marked -
                    overall hiking Paradise Park should only add about 1 extra mile to your trip, and is well worth it. Paradise Park has the best collection of wildflowers
                    on the mountain, and excellent views of Mt. Hood's west facing aspect.`}
          </div>

          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Mt. Hood from Elk Cove, Oregon."
              src="https://lh3.googleusercontent.com/pw/AL9nZEU7JNjuWdI5_-b2Hq5oOSqoXfqT1nZd-exVt-JiC2kZ1a36VXslBL6f0PknxwDvgELQQpXmu-mFOtZuF1K4vgayV91wLv4trG8JNsvMejV_MBphTHbvyG4Ipy4Y3IHUotB6DsieYJwqRNf25XegrR5S=w533-h800-no?authuser=0"
              width={533}
              height={800}
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="campsites">
            Camping on the trail
          </h1>
          <div>
            {`Although the trail is highly popular and may feel crowded at times, competition for campsites is typically minimal due to their abundance. As you hike the trail,
                    you'll spot campsites here and there, mostly near water sources. I've listed my favorite campsites below, in no particular order.
                    Click the link on each campsite to see its GPS location.`}
            <ul>
              <li>
                <Link href={meadowsCamp}>Meadows Campsite: </Link>
                {` is located on the western outskirts of Mt. Hood Meadows. There is one site, slightly off trail
                        surrounded by flowering meadows with a view of Mt. Hood. There is a small stream nearby for filtering water`}
                .
              </li>
              <li>
                <Link href={highCamp}>High Camp:</Link>
                {` near 7,000 feet, this camp is well above the treeline and has an awesome view. There is a stream shortly down the 
                        trail which runs year-round. Due to the camp's exposure, you may experience strong winds here. The two established sites have small rock walls built around
                        them to mitigate the wind somewhat.`}
              </li>
              <li>
                <Link href={cloudCapSaddle}>Cloud Cap Saddle:</Link>{" "}
                {`developed campground with 6-7 sites at around 6,000 feet. There are tables, a pit toilet, and potable water 
                        here. This is the only paid campsite on the Timberline Trail, and costs $14 per night (by concessionaire). Sites are first come first served. While staying here,
                        you may visit the historic Cloud Cap Inn for a beautiful view of Cooper Spur.`}
              </li>
              <li>
                <Link href={elkCoveCamp}>Elk Cove:</Link>
                {` highly popular, Elk Cove has a number of dispersed sites. The Elk Cove area is a hiker favorite
                        for its meadows and bubbling streams.`}
              </li>
              <li>
                <Link href={ramonaFallsCamp}>Ramona Falls:</Link>
                {` just past the falls are a large group of campsites. While popular during with day hikers, Ramona Falls
                        clears out rapidly by evening and is a pretty, quiet place to make camp.`}
              </li>
              <li>
                <Link href={paradiseParkCamp}>Paradise Park:</Link>
                {` probably my favorite place anywhere on Mt. Hood, Paradise Park is home to sprawling, expansive flowering meadows.
                        There are a lot of campsites dispersed throughout the aream and plenty of water. As you hike through Paradise Park, keep your eye out
                        for small user trails leading to and from established campsites. Hiking to Paradise Park is off the main trail, but only adds 0.5 miles to your trip (and 500 feet of elevation gain).
                        The Paradise Park Trail will rejoin the Timberline Trail ahead of its fork so you can continue the loop after exploring.`}
              </li>
            </ul>
            {`Note that all water on the Timberline Trail should be purified. While all the campsites I've listed have a reliable water source, 
          be aware that water from larger streams will be too silty to filter. That said, the Timberline Trail is abundant with water sources,
          and it's not difficult to find filterable streams.`}
          </div>

          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Eliot Creek Crossing, Oregon."
              src="https://lh3.googleusercontent.com/pw/AL9nZEU3I5XlTDxG1AeFLvbQu4hbpPBXoy_chf2thtzfPWNz6rFXmQEnvd4XMVbCq8iTKicGrKhAY37XMilFWhn78dovNVoAMhj1oE4N7pAkSHn7TqGe-FWEr8ZNn67hx0moKdT-kROOVplzpGTZfN3PljDj=w533-h800-no?authuser=0"
              width={533}
              height={800}
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="stream-crossings">
            Need To Know and Stream Crossings
          </h1>
          <div>
            {`The Timberline Trail is best hiked from mid-July through September. Be aware that depending on the year's snowpack, 
          snow and ice may linger on the trail through July.
                    Early season hiking is not recommended and may be incredibly hazardous: the trail's many stream crossings swell to raging torrents with
                    spring meltwater. These glacier-fed streams are not to be underestimated, and must be approached with caution even during the summer.`}
          </div>
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Newton Creek Crossing, Oregon."
              src="https://lh3.googleusercontent.com/pw/AL9nZEXs7fUkmgyG_hyktrcgxBs4IKe_W3EztNGYm9HR3fpnrZI8xeMfFfcbgJbTzpcu6ZFNfLTYOh1sod0F9ufltmXP2kQYpKY8bFYTKfDfuwuVTo4W_6SGC6O_-gSu0mSBXzO6sqejanU8eZmCFHOeSIKv=w533-h800-no?authuser=0"
              width={533}
              height={800}
            />
          </div>
          <div>
            {`The Timberline Trail has 6 notable glacier-fed stream crossings: White River, Newton Creek, Eliot Creek, Coe Branch, Muddy Fork, and the Sandy River.
                    The water volume on these streams will vary greatly through the hiking season due to snowmelt, weather, and time of day: the water level will be
                    highest during hot afternoons, and lowest in the early morning.`}
            <br />
            <br />
            {`Depending on the season, it's possible to cross many of these streams by rock hopping, but don't be surprised if you need to get your feet wet.
                    The water level is often be mid-calf to waist deep, and may be deeper during a wet season.`}
            <br />
            <br />
            {`The White River and Eliot Creek crossings are typically the most difficult to ford, but being prepared will increase your confidence for river crossings.`}
            <ul>
              <li>{`Using sturdy hiking poles may help with balance.`}</li>
              <li>{`Before fording a stream or river, un-clip your pack. Unclipping your pack will reduce the risk of getting swept away by its weight if you fall over.`}</li>
              <li>{`Pack a pair of well fitting sandals or water shoes, and change into them before river crossings.`}</li>
            </ul>
          </div>

          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Snow Arch on Stream, Timberline Trail, Oregon."
              src="https://lh3.googleusercontent.com/pw/AL9nZEUwkYnXscjGbASaA8uxhlO9hBjQxRs9FA7bi7ZDmP3a-6Tn3DiXK7hQjJaYJ9Zt4sRpdLledl-ZoxaV8IwvVhl0AafS9MOWaCsLN_jFWv13MW3WTKH60whtdgAeL-KTmYGG99ksoy7u2mfBAXR_uRAG=w800-h533-no?authuser=0"
              width={800}
              height={533}
            />
          </div>
          <div>
            {`Bugs are present through August, but typically not in high numbers. Bring protective clothing and/or `}
            <Link href={links.hiking.bugSpray}>repellent like DEET</Link>
            {` just in case. A cortizone-based ointment such as `}
            <Link href={links.hiking.afterbite}>Afterbite</Link>
            {` will help alleviate the irritation from 
                    any bites you do get.
                    Most of the trail is exposed and above the treeline, so definitely pack enough sunscreen. Almost all of the hiking will be in full sun.`}
          </div>
          <Contact />

          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Mt. Hood from Lamberson Butte, Oregon."
              src="https://lh3.googleusercontent.com/pw/AL9nZEUT8DtCmMn_v3jJB5PgGNdX9M4AkY_A62nv_rOW5WibmW3eoLr8l6QkIlVR9Q2PJhKX0mJYOA2l6ExPQ-DxNEi0Er1OC8FQX9-dfpH9nJgw0FHfqCq3nM3e6VFRKDvrW6gSEhCRQRee8UkV7uGB2Z5Z=w800-h533-no?authuser=0"
              width={800}
              height={533}
            />
          </div>
        </ReadMoreLink>
      </div>
      <RelatedPosts metadata={metadata} tag="backpacking" readMore={readMore} />
    </Layout>
  );
}
