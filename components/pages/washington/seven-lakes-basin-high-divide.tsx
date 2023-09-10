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
import { CentralCascadesWildernessPermit } from "../../../lib/common";
import CCPermitInfo from "../../snippets/cc-permits";
import Image from "next/image";
import WTPBackpacking from "../../snippets/what-to-pack-backpacking";
import { LinkT } from "../../tablink";
import OlympicPermits, { OlympicBears, OlympicPermitLink } from "../../snippets/olympic-permits";
import Link from "next/link";
const pageURI = "/blog/washington/seven-lakes-basin-high-divide";

const solDocTrailhead = "https://www.google.com/maps/place/Sol+Duc+Trailhead/@47.9548507,-123.8375154,17z/data=!4m6!3m5!1s0x548e444e250fd119:0x4bc624659a75ba4d!8m2!3d47.9548471!4d-123.8349405!16s%2Fg%2F11bwkyhqxc?entry=ttu"

//+metadata
export const metadata = {
  title: "Seven Lakes Basin High Divide Loop",
  date: "2023-08-24",
  image:
    "https://lh3.googleusercontent.com/pw/AIL4fc_bmb9Phi8EyXiTrE5264gU3bGYs_XVyx9jHOwsdaWuOMp0s77KxdxFDtUvJSEdLKVa-BsKYvrJiBiYeHYzxzFHfBjXq0an6sd46JPEAba3HE9dONZM6u5upi55OAaoQpV3dEj49rwh9586_6TXGu8S=w653-h653-s-no?authuser=0",
  tags: ["lakes", "washington", "backpacking", "national park"],
  preview:
    "Backpack the Seven Lakes Basin and High Divide loop in Olympic National Park.",
};

export default function SevenLakesBasin({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="20-24 mile loop"
          elevation="5,400-6,000+ feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.SUMMER_FALL}
          trailhead={solDocTrailhead}
          permits={<OlympicPermitLink/>}
        />

        <div>
          {`Get ready to see some of the best and most accessible high country in Olympic National Park by hiking the Seven Lakes Basin / High Divide loop. 
          Packed with mountain lakes, alpine meadows, and tons of wildlife, this is amazing 1-3 night backpacking trip is a must-do in Olympic National Park.`}
          <br/><br/>
          {`If you're staying overnight, make sure to book an `}
          <Link href="/blog/washington/seven-lakes-basin-high-divide#permits">Olympic National Park wilderness permit</Link>
          {`, and read the park's `}
          <LinkT href="https://www.nps.gov/olym/planyourvisit/wilderness-food-storage.htm">food storage</LinkT>{` regulations before leaving.`}

        </div>

        <div>
          <Image
            alt="Trail Map"
            width={584}
            height={730}
            src="https://lh3.googleusercontent.com/pw/AIL4fc8t7iWUhLBLlNH-qBkEi9AEF8grk7-xbMwVMvLQoPAqpXSx_EnRA1y3-KNpxUSAnL58l5Zl7kk9SjBMnd6V3GcDSSH-kmIC5Tc0dNF-QHfPFmZVIYsUWfyPYwHTS9X5LFTjB1zMQRJHZcmGKdrlC3-L=w1039-h1039-s-no?authuser=0"
          />
        </div>
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AIL4fc-mlY6IjKxgtWQ7Nsq3fodTRw4Ekwqq3fBiVfI233fK1CGfJlQ3dNaqvOvrdqzlkNbprVUQiRc3DNPZlFCLO_QGWIn4D3ecTlupilgJ1y7cOLZuq4jMPFUfgTq9NlnMctpG1EawZAJ4qJufzgCOXY5h=w533-h799-s-no?authuser=0"
            width={533}
            height={799}
            alt="Broken Top crater and trail #10 sign"
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
            {`The hike starts at the `}
            <LinkT href={solDocTrailhead}>Sol Duc trailhead</LinkT>
            {`, around 3.5 hours from Seattle, and 5.5 hours from Portland. The trailhead is highly popular for for backpackers and day hikers alike, so expect
            competition for parking by mid-morning. When the main lot fills, find additional parallel parking on the entry road.`}
            <br/><br/>
            {`Accessing Sol Duc trailhead requires a national parks pass to access in addition to any overnight wilderness permits, payable upon entry at the guard station.`}
          </div>

          <MapEmbed query="Sol+Duc+Trailhead,+Sol+Duc+Road,+Port+Angeles,+WA,+USA" />

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>
          <div>
            {`The High Divide loop can be hiked in either direction, though I suggest hiking clockwise for easier access to the best campsites.
            The first mile is an easy hike through the forest, arriving at the start of the loop just before Sol Duc falls. Stay right at the fork
            to hike the loop clockwise, dropping down to Sol Duc falls.`}
          </div>
          <div>
            {`The trail climbs through a dense forest beyond Sol Duc falls, becoming much quieter as day hikers drop off. From bridge by the falls, it's about 2.5 miles of
            forested, uphill hiking until you reach Deer Lake, the first of the lakes you'll encounter on this hike.`}
            <br/><br/>
            {`There's camping available at Deer Lake, but you'll find much better places further on. We took a short break here before continuing our hike.`}
          </div>
          <div>
            {`The scenery gets ore interesting beyond Deer Lake, transitioning to heather meadows interspersed with ponds. Keep climbing through varied terrain
            for another 3.4 miles until you reach the Lunch Lake/Round Lake trail junction. Lunch Lake is one of the prettiest camping areas on the loop,
            and whether you have a spot there or not, I highly recommend hiking the scenic 0.8 miles down to the lake. There is clear signage at the junction for Lunch Lake on the left.`}
          </div>
          <div>
            {`From the Lunch Lake trail junction, it's about 1 mile more to the Hoh Lake trail turnoff, passing Bogachiel Peak. This is a gorgeous section of trail,
            with blooming wildflowers in July-August, and a view of glaciers peeking over a knife-edge ridge.`}
          </div>
          <div>
            {`If you've booked a campsite at Hoh Lake, take a right at the turnoff to hike 1.2 miles down to Hoh Lake. It's a steep trek down to Hoh Lake, but definitely worth it.
            We camped at Hoh Lake, and found it to be our favorite part of the hike, though not officially a part of the loop.`}

              </div>
              <div>
            {`If you're not camping at Hoh Lake, or just don't 
            want to be bothered with the extra milage and elevation, stay left at the Hoh Lake turnoff to keep on the High Divide trail. 
            The next destination on the High Divide trail is Heart Lake, 2.4 miles from the Hoh Lake turnoff. This is an excellent camping
            area, still in the alpine high country with plenty of views.`}
          </div>
          <div>
            {`Past Heart Lake, the trail steeply descends for 6.7 miles along the Sol Duc river, through a seemingly never-ending series switchbacks. Once you get out of the high country,
            there's not too much to see in this section besides trees, and it can start to feel like a slog. Eventually, you'll connect the loop back near Sol Duc falls, with about
            a mile of easy trail back to the parking lot.`}
          </div>

          <h1 id="best-campsites">
            Best Campsites
          </h1>
          <div>
            {`There's a lot of options for camping on the loop, but sites must be reserved ahead of time. I suggest camping at one of these sites (if they are available)
            to get the most out of your hike. Camping by a scenic lake is much better than a random spot in the forest, though sometimes you take what you can get!`}
            <br/><br/>
            {`Note that Hoh Lake will show up in the Hoh Zone instead of the Sol Duc Zone on the reservation site.`}
          </div>
          <div>
            <ul>
              <li>{`Lunch Lake: 0.8 miles off the loop`}</li>
              <li>Heart Lake</li>
              <li>{`Hoh Lake: 1.2 miles off the loop`}</li>
              <li>{`Deer Lake: last resort if the other lakes are taken!`}</li>
            </ul>
          </div>

          <h1 className={utilStyles.justifyCenter} id="permits">
            Permit Info
          </h1>
          <OlympicPermits/>

          <h1 className={utilStyles.justifyCenter} id="bear-saftey">
            Bear and Wildlife Safety
          </h1>
          <OlympicBears/>

          <WTPBackpacking uri={pageURI} />
          <br />
          <Contact />
        </ReadMoreLink>
      </div>
    </>
  );
}
