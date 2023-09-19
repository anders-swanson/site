import utilStyles from "../../../styles/utils.module.css";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";
import MapEmbed from "../../maps";
import Contact from "../../contact";
import HikeInfo from "../../hike_info";
import { BestSeason, HikeDifficulty } from "../../../lib/hike_info_types";
import Image from "next/image";
import WTPBackpacking from "../../snippets/what-to-pack-backpacking";
import { LinkT } from "../../tablink";
import OlympicPermits, {
  OlympicBears,
  OlympicPermitLink,
} from "../../snippets/olympic-permits";
import Link from "next/link";
const pageURI = "/blog/washington/seven-lakes-basin-high-divide";

const solDocTrailhead =
  "https://www.google.com/maps/place/Sol+Duc+Trailhead/@47.9548507,-123.8375154,17z/data=!4m6!3m5!1s0x548e444e250fd119:0x4bc624659a75ba4d!8m2!3d47.9548471!4d-123.8349405!16s%2Fg%2F11bwkyhqxc?entry=ttu";

//+metadata
export const metadata = {
  title: "Seven Lakes Basin High Divide Loop",
  date: "2023-09-11",
  image:
    "https://lh3.googleusercontent.com/pw/AIL4fc-PbiMCIBVUW_vuMd8r4zxV1pP_VlwS_q-8m2Jj_vY9_dQaJeL1s6xTCKzxGYvH-lHGeRiGbhwN10quX5HghrPLYXDFLXGWGLfejh15H2GLIx5EkXi6a_WmAoMqjtx3szyxPDSwKO1OHp9remUCkjMc=w653-h653-s-no?authuser=0",
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
          permits={<OlympicPermitLink />}
        />

        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AIL4fc-Hj_A2VvbtnHLJDrSEwCYxiUFMttzJNTYD8eHS_b51Qje5TB1H1reriTprzC5ryEMe0G7VwxLgHjYUfLyB_aostmG1H_CWyf11UMtdBb1TE_xa_KddQEISqR2RfzpWNSak2LL5GpjCuJ0826frdmB6=w799-h533-s-no?authuser=0"
            width={799}
            height={799}
            alt="Lunch and Round Lakes"
          />
        </div>

        <div>
          {`Get ready to see some the best high country in Olympic National Park has to offer by hiking the Seven Lakes Basin / High Divide loop. 
          You'll hike through alpine meadows, swim in mountain lakes, and see tons of wildlife on this must-do 1-3 night backpacking trip in Olympic National Park.`}
          <br />
          <br />
          {`If you're staying overnight, make sure to book an `}
          <Link href="/blog/washington/seven-lakes-basin-high-divide#permits">
            Olympic National Park wilderness permit
          </Link>
          {`, and read the park's `}
          <LinkT href="https://www.nps.gov/olym/planyourvisit/wilderness-food-storage.htm">
            food storage
          </LinkT>
          {` regulations before arriving.`}
        </div>

        <div>
          <Image
            alt="Trail Map"
            width={584}
            height={730}
            src="https://lh3.googleusercontent.com/pw/AIL4fc8t7iWUhLBLlNH-qBkEi9AEF8grk7-xbMwVMvLQoPAqpXSx_EnRA1y3-KNpxUSAnL58l5Zl7kk9SjBMnd6V3GcDSSH-kmIC5Tc0dNF-QHfPFmZVIYsUWfyPYwHTS9X5LFTjB1zMQRJHZcmGKdrlC3-L=w1039-h1039-s-no?authuser=0"
          />
        </div>

        <ReadMoreLink
          enabled={readMore}
          text="backpacking the High Divide Loop"
          uri={pageURI}
        >
          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There and Parking
          </h1>
          <div>
            {`The hike starts at the `}
            <LinkT href={solDocTrailhead}>Sol Duc trailhead</LinkT>
            {`, around 3.5 hours from Seattle, and 5.5 hours from Portland. The trailhead is popular for for backpackers and day hikers alike, so expect
            competition for parking by mid-morning. When the main lot fills, find additional parallel parking on the entry road.`}
            <br />
            <br />
            {`Accessing Sol Duc trailhead requires a national parks pass to access in addition to any overnight wilderness permits, payable upon entry at the guard station.`}
          </div>

          <MapEmbed query="Sol+Duc+Trailhead,+Sol+Duc+Road,+Port+Angeles,+WA,+USA" />

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc8JFskefEcisS_F6iPR50warE9VLXHAFW3pvk_NuQx673g0U95sGwQtdRLzdPOu-T9x3GPCsBK7g5unaOG6nT-gtz8sMDei1pGVbras2a34t5DJKoXb1qJni7jDP8qYroWvUunVeK-0spKf2yn_3rjQ=w565-h753-s-no?authuser=0"
              width={799}
              height={799}
              alt="Sol Duc Trailhead"
            />
          </div>

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
            <br />
            <br />
            {`There's camping available at Deer Lake, but you'll find much better places further on. We took a short break here before continuing our hike.`}
          </div>
          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc_S6dxxGOclKqt8fjx77a8e16BINhAlxhULs1HFlikF0lhSQOHfb01R_EuuvbQB8VqRLQYgeaLgwADudU8hKUQNmLCwIbrBY2cJmA4AjLfjnKa0bjNKCunEOHWezI7hUJ2mv4C9z0eXJr5Q0HWdLL5e=w533-h799-s-no?authuser=0"
              width={799}
              height={799}
              alt="Deer Lake"
            />
          </div>
          <div>
            {`The scenery gets more interesting beyond Deer Lake, transitioning to heather meadows interspersed with ponds. Keep climbing through varied terrain
            for another 3.4 miles until you reach the Lunch Lake/Round Lake trail junction. Lunch Lake is one of the prettiest camping areas on the loop,
            and whether you have a spot there or not, I highly recommend hiking the scenic 0.8 miles down to the lake. There is clear signage for Lunch Lake at the junction.`}
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc_UPC4wE1nGi1km59FzZFSPEqmTgPHsL50TWnlpf-hxpp1uvCq4gTF0nBqRAeeBa2zHahHEbFzspkYUvW7DVFcJ8tBpl_FRYb7w8g7eqvKHi8sKIeZV-duqCbR1AHT1JK1MvHbekFpEk5Ixcg9cMOAM=w533-h799-s-no?authuser=0"
              width={799}
              height={799}
              alt="Lunch Lake"
            />
          </div>
          <div>
            {`From the Lunch Lake trail junction, it's about 1 mile further to the Hoh Lake trail turnoff, passing Bogachiel Peak. This is a gorgeous section of trail,
            with blooming wildflowers in July-August, and a view of glaciers peeking over a knife-edge ridge.`}
          </div>
          <div>
            {`If you've booked a campsite at Hoh Lake, take a right at the turnoff to hike 1.2 miles down to Hoh Lake. It's a steep trek down to Hoh Lake, but definitely worth it.
            We camped at Hoh Lake, and found it to be our favorite part of the hike, though not officially a part of the loop.`}
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc9Bm1KtZOdcVj2cLQ0UU33WfxIydTVeV-BTHD0hQAKfiWDkkfZi0JSZ6BS7pkhXxlJJD1epp4gM0V8YmGT2eN6EwlETpAqVaKKZMDuZiwfIlMGAx8c1OE2p3Of4nbno6Mceyd0BVZkP-_kxa15nYjTz=w565-h754-s-no?authuser=0"
              width={799}
              height={799}
              alt="Hoh Lake"
            />
          </div>
          <div>
            {`If you're not camping at Hoh Lake, or just don't 
            want to be bothered with the extra milage and elevation, keep left at the Hoh Lake turnoff to stay on the High Divide trail. 
            The next destination is Heart Lake, 2.4 miles from the Hoh Lake turnoff. This is an excellent camping
            area, still in the alpine high country with plenty of views.`}
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc8v9QuBhZzfVvj-ypRMSYRTg1rBlfixFfYCz1UJ2J1PpO8HClAF9bG8bKrJPXKZAIedAbV6pa5F_BC5vhbBJziss293lyBVrU8QjRd50PSgJ5VFRK0qQ6dh9cjdu5XcpnSACocyHeRFwh5ovRLr63xX=w584-h730-s-no?authuser=0"
              width={799}
              height={799}
              alt="High Divide Trail"
            />
          </div>
          <div>
            {`Past Heart Lake, the trail steeply descends for 6.7 miles along the Sol Duc river, through a seemingly never-ending series switchbacks. Once you get out of the high country,
            there's not too much to see in this section besides trees, and it can start to feel like a slog. Eventually, you'll connect the loop back near Sol Duc falls, with
            a mile of easy trail back to the parking lot.`}
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc_OHpcsru6565GFQ5on7uZ62riATKo6HKyF3J7fDFLl5_Edmz7A9ceOpp7W9fdyiYylaZTdHAsTpmVVzJOcQHKoaF9zKMYfsra5jzmmuEQVPQai-BrCtggqXYl4yKUvNUxuVvvsUHlTaUhuFpdPixby=w799-h533-s-no?authuser=0"
              width={799}
              height={799}
              alt="Olympic peaks"
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="best-campsites">
            Best Campsites
          </h1>
          <div>
            {`There's a lot of camping options on the loop, but sites must be reserved ahead of time. I suggest camping at one of these sites (if they are available)
            to get the most out of your hike. Camping by a scenic lake is much better than a random spot in the forest, though sometimes you take what you can get!`}
            <br />
            <br />
            {`Note that Hoh Lake will show up in the Hoh Zone instead of the Sol Duc Zone on the reservation site.`}
          </div>
          <div className={utilStyles.justifyCenter}>
            <ul>
              <li>{`Lunch Lake: 0.8 miles off the loop`}</li>
              <li>Heart Lake</li>
              <li>{`Hoh Lake: 1.2 miles off the loop`}</li>
              <li>{`Deer Lake: last resort if the other lakes are taken!`}</li>
            </ul>
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc8uo4FHETiZybtpc9dN784suEJJ4tX-CXBW-JY61I-5LAXGporKDnwvZgZwNRZJPvC4a1jj3DnlnFeHCCL0n37xE8o90fkAKUWXw46ajcDfsywltIHYhDUTldVR7CSIoNfLYQX1GfTJoSEvOYCww2yx=w533-h799-s-no?authuser=0"
              width={799}
              height={799}
              alt="Lunch at Lunch Lake"
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="permits">
            Permit Info
          </h1>
          <OlympicPermits />

          <h1 className={utilStyles.justifyCenter} id="bear-saftey">
            Bear and Wildlife Safety
          </h1>
          <OlympicBears />

          <WTPBackpacking uri={pageURI} />
          <br />
          <Contact />
        </ReadMoreLink>
      </div>
    </>
  );
}
