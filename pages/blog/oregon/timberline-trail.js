import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import RelatedPosts from '../../../components/related_posts'
import Pinnable from '../../../components/pinit'
import Link from 'next/link'
import links from '../../../lib/links'

//+metadata
let metadata = {
    "title": "Mt. Hood's Timberline Trail",
    "date": "2022-09-09",
    "image": "https://lh3.googleusercontent.com/pw/AL9nZEWXCF2hPa8fZMrTCKDZlPkbzrZuDjP0kvU_hpCslG0qi-5bwgac8O3ejUDV_ZTvhj-3pXYIxL9xVW6i5XaEVhWNnvGiKnGIk0AU5YrnJNJ9sZm_c0SzGfwefYkjV3WvIznubiCgnlToHxUB5v8NwXiY=s800-no?authuser=0",
    "tags": ["lakes", "backpacking", "oregon", "guides"]
}

const cover = 'https://lh3.googleusercontent.com/pw/AL9nZEUFQkxUG704mLPsypTmBDWj_H_Xj5mCNtBoKYOneX_zs0fv0Rtu7ilknKlmZWHB-NtUaFxMLSTjfUvNTYZghtdOTKp1poAppkWOaYegCYycYFlNl4lv-EaJK32dUfBDX5qQMCxyN45NwgVacxjnp3_Z=w800-h533-no?authuser=0'
const pageURI = '/blog/oregon/timberline-trail'

const timberlineLodgeTrailhead = 'https://www.google.com/maps/place/Timberline+Lodge+Trailheads/@45.330945,-121.7101557,17.46z/data=!4m5!3m4!1s0x54be1c0003729767:0x78c190bba8454c33!8m2!3d45.330519!4d-121.709081?hl=en'

const ramonaFallsCamp = 'https://www.google.com/maps/place/Ramona+Falls/@45.3519818,-121.7341398,13.67z/data=!4m5!3m4!1s0x54be1e08fce94dab:0x3d8e9a89b30dd7c6!8m2!3d45.3799133!4d-121.7767105?hl=en'
const highCamp = `https://www.google.com/maps/place/45%C2%B022'28.5%22N+121%C2%B039'40.2%22W/@45.3733636,-121.6592585,15.54z/data=!4m5!3m4!1s0x0:0xdad979c8aaf320b0!8m2!3d45.374591!4d-121.66116?hl=en`
const meadowsCamp = `https://www.google.com/maps/place/45%C2%B019'50.6%22N+121%C2%B040'38.4%22W/@45.3307258,-121.6795277,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x658373299fd490ed!8m2!3d45.330722!4d-121.677339?hl=en`
const elkCoveCamp = `https://www.google.com/maps/place/45%C2%B024'35.5%22N+121%C2%B041'51.5%22W/@45.4098557,-121.6998347,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x44ccbc45f6eb7d0a!7e2!8m2!3d45.409852!4d-121.6976462?hl=en`
const cloudCapSaddle = 'https://www.google.com/maps/place/Cloud+Cap+Saddle+Campground/@45.4171293,-121.6964975,13.08z/data=!4m5!3m4!1s0x54be02ccc7ad4907:0x20059b0c7995414c!8m2!3d45.40247!4d-121.65505?hl=en'
const paradiseParkCamp = 'https://www.google.com/maps/place/Paradise+Park/@45.3506786,-121.746723,15.42z/data=!4m5!3m4!1s0x54be1e8139de8f91:0x48d2c21e3a7c8b37!8m2!3d45.352886!4d-121.7471435?hl=en'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Traverse a 40+ mile loop through Mt. Hood's most scenic terrain.`}
            subText={`40+ miles, 10k+ gain`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`The Timberline Trail is arguably the most beautiful and iconic trail near Mt. Hood. The roughly 40-mile loop encircles Mt. Hood, traversing meadows of wildflowers,
                    glacier-fed streams, and carved out moraines.`}
                    <br/><br/>
                    {`The loop has many access points, and can be hiked in a variety of ways - the most popular of which start at `}
                    <Link href={timberlineLodgeTrailhead}>Timberline Lodge.</Link>
                    {` Over the course of the trail, you'll hike more than 40 miles (we measured 44 via GPS, it may vary), and gain 10,000+ feet of elevation.
                    Permits and regulations are light in this area: self-issued, free wilderness permit are available at all access points, and most trailheads only require
                    a Northwest Forest pass to park. Note that you may park at the Timberline Lodge overnight lot for free during the summer.`}
                </div>

                <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Mt. Adams from the Timberline Trail, Mt. Hood, Oregon."
                            src='https://lh3.googleusercontent.com/pw/AL9nZEXMluiYj7jw3JQGuAHcomRuxBXoF3Au3yJCrHDxOwutFgRNHnTQgrzSH3Qde9_Ug0tHhVdBkcnDCPLuX4DG5_HqjyU628E9quuGx15yHw8oBV7UMCk4AujhD_LCcf6p56_BdiiUz3MD_xvymm58t0Bm=w800-h533-no?authuser=0'
                            width={800}
                            height={533}
                        />
                </div>

                <div>
                    {`The trail is best hiked from mid-July through September. Snow may linger at high elevations through July, but this is also dependent
                    on that year's snowpack. Hiking earlier in the season is ill-advised and incredibly hazardous: stream crossings become more dangerous,
                    and there is high avalanche risk.`}
                    <br/><br/>
                    {`Bugs are present through August, though usually not in high numbers. Bring protective clothing and/or `}
                    <Link href={links.hiking.bugSpray}>repellent like DEET</Link>
                    {` just in case. A cortizone-based ointment such as `}<Link href={links.hiking.afterbite}>Afterbite</Link>{` will help alleviate the irritation from 
                    any bites you do get.
                    Most of the trail is exposed and above the treeline, so definitely pack enough sunscreen. Almost all of the hiking will be in full sun.`}
                </div>
                
                <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Mt. Hood from Elk Cove, Oregon."
                            src='https://lh3.googleusercontent.com/pw/AL9nZEU7JNjuWdI5_-b2Hq5oOSqoXfqT1nZd-exVt-JiC2kZ1a36VXslBL6f0PknxwDvgELQQpXmu-mFOtZuF1K4vgayV91wLv4trG8JNsvMejV_MBphTHbvyG4Ipy4Y3IHUotB6DsieYJwqRNf25XegrR5S=w533-h800-no?authuser=0'
                            width={533}
                            height={800}
                        />
                </div>

                <h1 className={utilStyles.justifyCenter} id='campsites'>Camping on the trail</h1>
                <div>
                    {`Although the trail is popular, there is usually little contention for campsites due to their abundance. As you hike the trail,
                    you'll find campsites here and there, mostly near water sources. I've listed my favorite campsites below, in no particular order.
                    Use the link on each campsite to see its GPS location.`}
                    <ul>
                        <li><Link href={meadowsCamp}>Meadow Campsite: </Link>{` is located on the western outskirts of Mt. Hood Meadows. There is one site, slightly off trail
                        surrounded by flowering meadows with a view of Mt. Hood. There is a small stream nearby for filtering water`}.</li>
                        <li><Link href={highCamp}>High Camp:</Link>{` near 7,000 feet, this camp is well above the treeline and has an awesome view. There is a stream shortly down the 
                        trail which runs year-round. Due to the camp's exposure, you may experience strong winds here. The two established sites have small rock walls built around
                        them to mitigate the wind somewhat.`}</li>
                        <li><Link href={cloudCapSaddle}>Cloud Cap Saddle:</Link> {`developed campground with 6-7 sites at around 6,000 feet. There are tables, a pit toilet, and potable water 
                        here. This is the only paid campsite on the Timberline Trail, and costs $14 per night (by concessionaire). Sites are first come first served. While staying here,
                        you may visit the historic Cloud Cap Inn for a beautiful view of Cooper Spur.`}</li>
                        <li><Link href={elkCoveCamp}>Elk Cove:</Link>{` highly popular, Elk Cove has a number of dispersed sites. The Elk Cove area is a hiker favorite
                        for its meadows and bubbling streams.`}</li>
                        <li><Link href={ramonaFallsCamp}>Ramona Falls:</Link>{` just past the falls are a large group of campsites. While popular during with day hikers, Ramona Falls
                        clears out rapidly by evening and is a pretty, quiet place to make camp.`}</li>
                        <li><Link href={paradiseParkCamp}>Paradise Park:</Link>{` probably my favorite place anywhere on Mt. Hood, Paradise Park is home to sprawling, expansive flowering meadows.
                        There are a lot of campsites dispersed throughout the aream and plenty of water. As you hike through Paradise Park, keep your eye out
                        for small user trails leading to and from established campsites. Hiking to Paradise Park is off the main trail, but only adds 0.5 miles to your trip (and 500 feet of elevation gain).
                        The Paradise Park Trail will rejoin the Timberline Trail ahead of its fork so you can continue the loop after exploring.`}</li>
                    </ul>
                </div>

                <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Ramona Falls, Oregon."
                            src='https://lh3.googleusercontent.com/pw/AL9nZEUa-zLQzwE4Pj_R1zK7h3v3Jt7vY3R6JHGM-5josJEm2V2kruze-eZvSzEOxEqL6ZUOSOqE5WheRJ1JfjEupZg-G00OMZ9K6eBvzGrVTlRAg1PICQ6ALGtawztyj3KrdILXxSJp6dhNSZGC4pJcBqND=w533-h800-no?authuser=0'
                            width={533}
                            height={800}
                        />
                </div>

                <h1 className={utilStyles.justifyCenter} id='routes'>Trail Routes</h1>
                <div>
                    {`The Timberline Trail is most commonly hiker clockwise from `}<Link href={timberlineLodgeTrailhead}>Timberline Lodge</Link>{`, in 3-5 or more days. 
                    Another popular starting point is `}<Link href={cloudCapSaddle}>Cloud Cap</Link>{`. Note that the Cloud Cap trailhead requires 30-45 minutes of
                    extra driving on a gravel road - it's a rutted, washed out, and generally beat up road, but any car should be able to make it if you are a careful driver.`}
                    <br/>
                    <br/>
                    <b>Clockwise from Timberline Lodge:</b>{`  camp at Ramona falls, Cairn Basin, Eden Park, or Elk Cove, Cloud Cap, and near Mt. Hood Meadows. For a 3
                    night trip, you should be hitting around 10 miles per day. For a 2 night trip, it'll be closer to 15 miles per day. For longer trips, you'll be in the range
                    of 5-8 miles per day.`}
                    <br/>
                    <b>Counter-Clockwise from Timberline Lodge:</b>{` Similar to the above, but in reverse. I like this route because you hike down to White River at the start,
                    rather than up at the end. The steep sand by White River is tiring to hike up.`}
                    <br/>
                    <b>One Night from Cloud Cap:</b>{` This route can hardly be considered backpacking and the per-day milage is high, but it's still insanely fun.
                    Park your car at Cloud Cap, and hike 26 miles counter-clockwise to Timberline Lodge. Book at a room at the resort, enjoy dinner, a hot shower, and a relaxing bed for the night.
                    In the morning, enjoy the lodge's breakfast buffet before hiking the remaining 15 miles to your car at Cloud Cap. If you hike this route, you'll want to pack minimally:
                    eating/sleeping at Timberline Lodge will reduce your pack size to something near a day pack.`}
                    <br/><br/>
                    {`If you're ending your hike at Timberline Lodge, I highly recommend their lunch buffet. The buffet is open 12-2PM, $25/person, and is the best 
                    possible way to finish your hike. The buffet has a rotating menu that was absolutely delicious when we visited - it also provided 
                    a motivator to get back to the car by noon!`}
                </div>

                <div>
                    {`On our most recent trip, we hiked the trail counter-clockwise from Timberline Lodge in two nights, camping at Cloud Cap, and Ramona Falls. Day 1 was about 15 miles,
                    day 2 was 17.5 miles, and day 3 was 11 miles. The extra mileage comes mostly from stream crossings, and various small detours. My favorite trail sections
                    are Mt. Hood Meadows and Paradise Park, but the entire trail is gorgeous. I highly recommend to take the Paradise Park detour if you're hiking
                    during wildflower season.`}
                </div>

                <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Mt. Hood near Cooper's Spur, Oregon."
                            src='https://lh3.googleusercontent.com/pw/AL9nZEUyB57H0GJbqLm9mTjguF-K--3zW8iq1uiXgb2tdDsbwoZq44R0T3sv3lA19K-537NiyD288zTqNsUgvfc3ssJn0ukySsFk0rFCp-N3CDOPfAtcDXsAIC40vgMOcUUBzuCJ8XzB5wO7whZ-XXADN7fP=w800-h533-no?authuser=0'
                            width={800}
                            height={533}
                        />
                </div>

                <h1 className={utilStyles.justifyCenter} id='stream-crossings'>Stream Crossings</h1>
                <div>
                    {`The Timberline Trail has 6 notable glacier-fed stream crossings: White River, Newton Creek, Eliot Creek, Coe Branch, Muddy Fork, and the Sandy River.
                    The water volume on these streams will vary greatly through the hiking season due to snowmelt, weather, and time of day: the water level will be
                    highest during hot afternoons. Depending on the season, you may be able to cross these streams by hopping on rocks, but many times you will need to get 
                    your feet wet. The water level can be mid-calf to waist deep, and deeper if you hike earlier in the season (because of snow melt).`}
                    <br/><br/>
                    {`White River and Eliot Creek are typically the most difficult streams to ford.
                    Before crossing any stream, un-clip your pack in case of falling over. Hiking poles may also help with balance, as well as comfortable shoes with good
                    traction for the water. I bring a pair of well-fitting sandals when I know there will be difficult stream crossings on the trail.`}
                    <br/><br/>
                    {`Happy trails!`}
                </div>
                
                <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Eliot Creek Crossing, Oregon."
                            src='https://lh3.googleusercontent.com/pw/AL9nZEU3I5XlTDxG1AeFLvbQu4hbpPBXoy_chf2thtzfPWNz6rFXmQEnvd4XMVbCq8iTKicGrKhAY37XMilFWhn78dovNVoAMhj1oE4N7pAkSHn7TqGe-FWEr8ZNn67hx0moKdT-kROOVplzpGTZfN3PljDj=w533-h800-no?authuser=0'
                            width={533}
                            height={800}
                        />
                </div>

                <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Newton Creek Crossing, Oregon."
                            src='https://lh3.googleusercontent.com/pw/AL9nZEXs7fUkmgyG_hyktrcgxBs4IKe_W3EztNGYm9HR3fpnrZI8xeMfFfcbgJbTzpcu6ZFNfLTYOh1sod0F9ufltmXP2kQYpKY8bFYTKfDfuwuVTo4W_6SGC6O_-gSu0mSBXzO6sqejanU8eZmCFHOeSIKv=w533-h800-no?authuser=0'
                            width={533}
                            height={800}
                        />
                </div>

                <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Snow Arch on Stream, Timberline Trail, Oregon."
                            src='https://lh3.googleusercontent.com/pw/AL9nZEUwkYnXscjGbASaA8uxhlO9hBjQxRs9FA7bi7ZDmP3a-6Tn3DiXK7hQjJaYJ9Zt4sRpdLledl-ZoxaV8IwvVhl0AafS9MOWaCsLN_jFWv13MW3WTKH60whtdgAeL-KTmYGG99ksoy7u2mfBAXR_uRAG=w800-h533-no?authuser=0'
                            width={800}
                            height={533}
                        />
                </div>

                <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt="Mt. Hood from Lamberson Butte, Oregon."
                            src='https://lh3.googleusercontent.com/pw/AL9nZEUT8DtCmMn_v3jJB5PgGNdX9M4AkY_A62nv_rOW5WibmW3eoLr8l6QkIlVR9Q2PJhKX0mJYOA2l6ExPQ-DxNEi0Er1OC8FQX9-dfpH9nJgw0FHfqCq3nM3e6VFRKDvrW6gSEhCRQRee8UkV7uGB2Z5Z=w800-h533-no?authuser=0'
                            width={800}
                            height={533}
                        />
                </div>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="backpacking"
            />
        </Layout>
    )
}
