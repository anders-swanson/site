import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import Link from "next/link";
import Image from "next/image";
import Video from "../../../components/video";
import RelatedPosts from "../../../components/related_posts";
import { rawData } from "../../../lib/common";

//+metadata
let metadata = {
  title: "Four Columbia River Gorge Waterfall Hikes",
  date: "2022-04-23",
  image:
    "https://lh3.googleusercontent.com/pw/AM-JKLXNVS6gNP6V3_7o58uqNcpWjDZXpTDbGCB5TNNoo6rvrjvDEb0ki6YauKW0DURhzI-iUA2gSfa4mp2fNT0gqGIijxmCKOO-0HsA2vim1HmsfB1iqfT3T3xD_ehigFSem9a5alPM3k5Xe648r-sa7m4d=s1067-no?authuser=1",
  tags: ["hiking", "waterfall", "columbia river gorge", "oregon"],
};

const horsetailFallTrailhead =
  "https://lh3.googleusercontent.com/pw/AM-JKLXL2bm7k_rkcJ-P6EgMZGG7ZDzSH6BQ8JFPtl7m7AiRYMcakNMeUVHEkjyZFnhoFdvvTsOiR0ixc-qfbAC-t0sDmpNcrl94yQFnYmdtEMGIfa4IYdgl9C-_kOXSYufZcQsIK6ITRS0oPw2-kIpnb7-Y=w1597-h1067-no?authuser=1";
const wahclellaTrailhead =
  "https://www.google.com/maps/place/Wahclella+Falls+Trail/@45.6275453,-121.9609833,16.33z/data=!4m12!1m6!3m5!1s0x5495ebb5f0f38c49:0x13468bc61bf532a0!2sHorsetail+Falls+Trailhead!8m2!3d45.5901154!4d-122.069286!3m4!1s0x5495e88f1fa86cf9:0xa870b23bcf24acb0!8m2!3d45.6301652!4d-121.9539203";
const latourellTrailhead =
  "https://www.google.com/maps/place/Latourell+Falls+Trailhead/@45.5387739,-122.2189878,17.87z/data=!4m5!3m4!1s0x54959448385ea8e5:0xbcdb6b973e3d24a6!8m2!3d45.5388146!4d-122.2178862";
const wahkeenaTrailhead =
  "https://www.google.com/maps/place/Wahkeena+Falls+Day+Use%2FPicnic+Area%2FTrailhead/@45.5752216,-122.1283098,18.75z/data=!4m5!3m4!1s0x5495eadf7c66919d:0x9ca4b92b7a4f7715!8m2!3d45.576025!4d-122.127828";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Find four beautiful and accessible waterfall hikes in the Columbia River Gorge.`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <h1 id="horsetail-falls">Horsetail, Ponytail, and Triple Falls</h1>
        <div>
          {`At a moderate 3.6 miles out-and-back, the `}
          <Link href={horsetailFallTrailhead}>Triple Falls Hike</Link>
          {` starts you off with the 
                    stunning Horsetail Falls right next to the parking lot, before climbing to Ponytail Falls, and Triple Falls further along. 
                    As you hike, you'll spot Upper Oneonta Falls, but the view from the trail is not as direct as the other falls mentioned.`}
          <br />
          <br />
          {`Plan to get here early, because the trailhead parking lot fills up quick and easily becomes congested. This hike is excellent
                    on rainy days if you can tolerate getting wet. In early spring, the falls are at their most beautiful, and you'll beat the crowds that swarm
                    in during the popular summer months.`}
          <br />
          <br />
          {`The trail follows Oneonta Gorge, and shows a snapshot of the burn and recovery process from the 2017 Eagle Creek Fire. If you're interested in a
                    longer hike, you can connect this trail with several others in the area - such as Franklin Ridge, or the Bell Creek Loop. These hike extensions have substantially 
                    higher mileage and may be difficult to traverse due to damage from the 2017 burn.`}
        </div>
        <div className={utilStyles.flexWrapContainer}>
          <Video src={rawData("IMG_5701.mp4")} width={300} height={450} />
          <Image
            alt="triple falls"
            src="https://lh3.googleusercontent.com/pw/AM-JKLUXRx5xqIBsLJHM94qX1apD7XHkEKLQCqyQialABS1LBxdk80sYH7T2-7-nJFe55K_tieG0HwgbEY2ZMHQ1d7sgbLHvDJSBMIDmXmzwre9vGchXvUhxNNaS9aeUxrBzrkSmZ4YM6L5-r3P_PEt72TVh=w801-h1067-no?authuser=1"
            width={300}
            height={450}
          />
          <Video src={rawData("IMG_5698.mp4")} width={300} height={450} />
        </div>
        <h1 className={utilStyles.justifyCenter} id="wahclella-falls">
          Wahclella Falls
        </h1>
        <div>
          {`Probably the best hike for the distance, the 2.4 miles out-and-back to Wahclella Falls is some of the best waterfall and lush canyon
                    scenery in the entire gorge. Shoot for an early morning or late afternoon start to beat the crowds - you'll want to take this hike at your
                    own pace and enjoy the views unobstructed. Weekday mornings are a prime time to visit, especially after a heavy rain: beautiful seasonal waterfalls appear
                    after a downpour.`}
          <br />
          <br />
          {`Parking at the `}
          <Link href={wahclellaTrailhead}>Wahclella Falls Trailhead</Link>
          {` is limited, but there is a lot of additional space along the access road.
                    This area is known for car prowlers/break ins, so take caution and leave nothing (especially not any valuables) in your car.`}
        </div>
        <Image
          alt="wahclella"
          height={650}
          width={1000}
          src="https://lh3.googleusercontent.com/pw/AM-JKLV2XGi4GsQisZTCqJTqwUAIHLjUOhKJNWJ0HbvZcClSl2jCbhFKsRSXSisB1zVhDKmgabE8En4jNvMf6j1w-tCyZPiUOMlWb46fN82MFgldvGFVmYwbnivxrjozh4W2VXF1dUxHUXSIVUTvbkVUzXbL=w1597-h1067-no?authuser=1"
        />
        <h1 className={utilStyles.justifyCenter} id="latourell-falls">
          Upper and Lower Latourell Falls
        </h1>
        <div>
          {`This 2.4 mile loop trail starts at the towering 249-foot Latourell Falls, and climbs a canyon to meet the smaller, but still pretty upper falls. Start at the 
                    `}
          <Link href={latourellTrailhead}>Latourell Falls Trailhead</Link>
          {` and take the loop path on the right - it'll take you to the top of Latourell Falls first
                    and give the best views.`}
          <br />
          <br />
          {`Latourell Falls is one of the closest gorge waterfalls to Portland, and it's also one of the most beautiful. Brilliant green lichen adorns columnar basalt
                    behind the waterfall's steep drop. Extremely accessible, the lower falls is viewable a short walk from the main parking lot.`}
          <br />
          <br />
          {`If you're up for another short trip after Latourell Falls, the Gorge Vista House is a short drive up the hill from Corbett. The aptly named Vista House
                    has a nice view up and down the Columbia River, and the interior is usually open for visitors.`}
        </div>
        <Image
          alt="latourell"
          height={1000}
          width={650}
          src="https://lh3.googleusercontent.com/pw/AM-JKLU9NTNEBphj3drkI3Rt4XucNB1Vwd8V2rYhi_WmjGPYQr9AvtteDfkhmI8yTiMym_v-HAHQgESDR_K5ahzMIOC2Ev-2e_LHTIXNZ_9E55q0nSnuwoCmE2rlm0TF6A3GMZ6J2rYV3mUD0T2yICLFTR6c=w714-h1067-no?authuser=1"
        />
        <h1 className={utilStyles.justifyCenter} id="wahkeena-falls">
          Wahkeena Falls to Upper Multnomah Falls
        </h1>
        <div>
          {`Wahkeena and Multnomah Falls can be traversed starting at either the Wahkeena or Multnomah trailheads. You can loop this, or do an out-and-back. Either way, it'll net you
                    around 8-9 miles and views of six stunning waterfalls, including Multnomah Falls - the tallest waterfall in Oregon at 620 feet.`}
          <br />
          <br />
          {`Beginning at `}
          <Link href={wahkeenaTrailhead}>Wahkeena Falls Trailhead</Link>
          {`, hike up the Wahkeena Trail to Wahkeena Falls, and Fairy Falls.
                    Pass the Vista Point Trail (the first left), and continue along the Wahkeena Trail to a T-Junction. You'll be taking a left here, but it's worth 
                    exploring a little on the right to see Wahkeena Springs, as it's only a 300 foot detour. After checking out Wahkeena Springs, double back and follow 
                    the Wahkeena Trail east to meet the Larch Mountain Trail.`}
          <br />
          <br />
          {`Once you reach the Larch Mountain Trail, hike down towards towards Multnomah Falls. Along the way you'll pass Ecola, Weisendanger, and Dutchman
                    Falls. From the top of Multnomah Falls you can decide to either head back the way you came, or complete the loop by continuing to Multnomah Falls Lodge
                    and taking the Return Trail (#442) back to Wahkeena.`}
        </div>
        <div className={utilStyles.flexWrapContainer}>
          <Video
            src="https://raw.githubusercontent.com/anders-swanson/data/master/data/IMG_1944.mp4"
            width={300}
            height={450}
          />
          <Image
            alt="image"
            height={450}
            width={300}
            src="https://lh3.googleusercontent.com/pw/AM-JKLWHSFuTbVi-5jE8A1GeknS9KZH8mKIJEmFqw5So8ZOfPfwDU555IYFBU0u6BfY0fI3rSB-qXsQoJBY6n5ARJFHlOY4Sd0jWwwkir10-UbdlrFqvxQcNyeIiJVukFjpRajo2a1DBFt4yz4_wdJKQaDZN=w714-h1067-no?authuser=1"
          />
        </div>

        <div>
          {`Checkout our post `}
          <Link href="/blog/guides/crg-best#eagle-creek">
            Classic Hikes in the Columbia River Gorge
          </Link>
          {` for more hiking ideas, including my personal
                    favorite (and most picturesque) gorge hike, Eagle Creek to Tunnel Falls.`}
        </div>
      </div>
      <RelatedPosts metadata={metadata} tag="columbia river gorge" />
    </Layout>
  );
}
