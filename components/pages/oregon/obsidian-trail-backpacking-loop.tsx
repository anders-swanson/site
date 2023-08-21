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
import Link from "next/link";
const pageURI = "/blog/oregon/obsidian-trail-backpacking-loop";

const obsidianTH =
  "https://www.google.com/maps/place/Tam+McArthur+Rim+Trailhead/@44.0970423,-121.6310223,15.83z/data=!4m6!3m5!1s0x54b8b36b44082b3b:0xa3a7ff4c2458e3e3!8m2!3d44.100786!4d-121.6224637!16s%2Fg%2F1pp2tljll?entry=ttu";

//+metadata
export const metadata = {
  title: "Obsidian Trail Backpacking Loop",
  date: "2023-08-18`",
  image:
    "https://lh3.googleusercontent.com/pw/AIL4fc-awxAdn6vnSKakkIvc3FsqJaIPH17sgZxEwtTNdpluEMrs_Au8kL9SMMD8g3fk3No7bJZngLPQwC-fUvn6h8u1lx5NnM1ewX60fy316Ownx78D34qG6nzMNEN-JrPoDg0ZEcpkkEFlMAnNv47HQKAJ=w653-h653-s-no?authuser=0",
  tags: ["lakes", "oregon", "backpacking", "waterfall", "sisters"],
  preview:
    "Explore an easy backpacking lollipop loop near Middle Sister and discover a hidden lake.",
};

export default function ObsidianTrailLoop({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="12 mile loop"
          elevation="2,200 feet"
          difficulty={HikeDifficulty.EASY}
          season={BestSeason.SUMMER_FALL}
          trailhead={obsidianTH}
          permits={
            <>
              <LinkT href={CentralCascadesWildernessPermit}>
                Central Cascades Overnight Permit
              </LinkT>
              {`, ${NWForestPass}`}
            </>
          }
        />

        <div>
          {`The Obsidian trail is a lollipop loop on the west side of the Three Sisters in Central Oregon's cascades. Expect excellent mountain views of North and Middle Sister on this
          trail, and a beautiful bloom seasonal wildflowers. Explore the upper loop
          to find fields of obsidian, a waterfall, and a picturesque lake tucked away off-trail.`}
          <br />
          <br />
          {`While doable as a longer day hike, I highly recommend the Obsidian trail for beginner backpackers
          or for more experienced backpackers looking for a relaxing night out. Read below for a detailed description, and for tips on how to find the secret lake!`}
        </div>

        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AIL4fc8zE0xIxLGY3NiOOPrvq_uih9LokUzQN0uabtoUuzlej_-U1t7pAgpXHNNtvohTZ6suOFRUEn9GjbemMjzMq1G4AsGtAxYUhcLP46oZw8AEkBEKtfPLLQVCSlROsLyGffmej-jhdwavFpyGaOlWaAsw=w533-h799-s-no?authuser=0"
            width={533}
            height={799}
            alt="Broken Top crater and trail #10 sign"
          />
        </div>
        <div>
          <Image
            alt="Trail Map"
            width={584}
            height={730}
            src="https://lh3.googleusercontent.com/pw/AIL4fc-kFRq9r6QOS3vo7sLYEd7rlytbxdULu0dVEEpT3PAucGUN44qCPNT5kcZIGbqL-mpuCPhloyw0wsT7QbVn6WZe3Marlct_7vyomqjN02kKalRhTj7wdyPf1LZnVflidwMc-dld_33mLKLeM6i2WAgK=w689-h618-s-no?authuser=0"
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
            {`The `}
            <LinkT href={obsidianTH}>Obsidian Trail</LinkT>
            {` is located off the McKenzie Highway, just below McKenzie Pass on the west side of the central cascades. If you're coming from Sisters, enjoy the scenic but narrow drive
            through McKenzie Pass, stopping at the Dee Wright Observatory for mountain and Belknap lava flow views.`}
            <br />
            <br />
            {`Day and overnight visitors to the Obsidian trailhead are required to pre-purchase a `}
            <LinkT href={CentralCascadesWildernessPermit}>
              Central Cascades Wilderness Permit
            </LinkT>
            {`. Find more information about `}
            <Link href="/blog/oregon/obsidian-trail-backpacking-loop#permits">
              permits in the section below.
            </Link>
          </div>

          <MapEmbed place="ChIJN1E58wVQv1QRWAcWFjoHsGQ" />

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>

          <div>
            {`For the first two to three miles, the trail gradually climbs uphill through a dense evergreen forest. 
            As you climb, the forest begins to open up to meadows, and a rugged lava flow. If you're hiking in July, expect a varied wildflower bloom throughout the meadows.`}
          </div>
          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc8gAk-q3BD5_AB4ph57St6JqLf2b3NiVUtNYzPKqrWQJjqdM6p8H7N1CpUYcFkk9gAEyp2eLJqZUuBThjrQfQSM8a560qXj_mH3DqVE_4aduEJxCS3dgSKPGRPeihvT6PSKQbiJvnvl_ROpA0X-ux8h=w533-h799-s-no?authuser=0"
              width={799}
              height={799}
              alt="Wildflowers"
            />
          </div>

          <div>
            {`After about 3.5 miles on the Obsidian Trail, you'll cross a small stream, arriving at the lollipop loop junction. Take a left at the fork to hike the loop clockwise,
            following signage for Glacier Way. Hike 0.8 miles on the The Glacier Way trail until it joins with the PCT, turning right on the PCT to continue the loop.`}
          </div>

          <div>
            {`If you're backpacking, the best campsites are on the upper loop off the PCT. After roughly 0.5 miles along the PCT, you'll come to a user trail 
            that veering left and crossing a stream (Glacier Creek). The wooded area beyond the stream has many amount of campsites along the user trail, and good access to water from the stream.`}
          </div>

          <div>
            {`To find the lake, continue up the user trail, past the campsites in the trees. The trail will exit the trees into a rocky area, with a steep cliff on your right. F
            Follow the trail through the rocks for about 0.5 miles, then taking a sharp right to double back towards the cliff you say before. This path follows the sharp U-shaped 
            line on the map above.`}
          </div>

          <div>
            {`Once you find the small lake, soak in the views of Three Sisters mountains reflected on its glassy surface. There are numerous campsites scattered around the lake,
            so you may choose to camp here as well.`}
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc9-Hsk2np4rX8aTSxxhWYDKCblhU-LtCAmC4OxwjACBVPIwPMhI2MIljQKnN15dBn_KjkTVI4uAtz4a--rLN6hn5mrf-bOcNB5oyd9xDaG-9en4o_yW2rKYmpKidGsyA6B3mUxzrB-IsZCAjxUcYDm7=w799-h533-s-no?authuser=0"
              width={799}
              height={799}
              alt="Hidden Lake"
            />
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc-2XY2xBKOTRormJzE5RQ4S5hZFzu5YoSC--bkBTLMjcXCSabQ5AZyS7MCEL7xlcV5n5tRomE_Yor6yEq9HVIcs4IYjfwtrUevJn7r44jZCF5spUqbhDCIDMxMIZcJerljYiMcMgfRRHk-zmnjkmILZ=w799-h533-s-no?authuser=0"
              width={799}
              height={799}
              alt="Flowers along the trail"
            />
          </div>

          <div>
            {`To complete the loop, follow the PCT until it meets the Obsidian trail farther down. You'll pass Obsidian Falls and several more wildflower meadows on your way to the main trail.
            Once you've rejoined the main trail, it's 3.5 miles on a familiar route back to the parking lot.`}
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc_nnyUQxhby22jKIOnfyox9wBlA7o04ji_5BDD076UySsMU17B10ct3IworqLCeMDGp3waZxgI_wtLMUd7qY_2bUeeytXp1RkK2llwLln6A6Kf7G8pqi4pEcaTq2pGk0zh7bkZUtCiP3XzdKkeRpIvL=w584-h730-s-no?authuser=0"
              width={533}
              height={799}
              alt="Obsidian Falls"
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="permits">
            Permit Info
          </h1>
          <CCPermitInfo zone="the Obsidial Trail" />

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc9KfLGavM6MPlO_R19RDCaSOljWRRmQKpNjo_nLPmr-GL-m9LtvRcvnb8sgIyNE3dbNta50dGsIJvbSODzJTBEA1IgeQnNCEgyowfHcttomKkwOuzPVFWLRzTUDYFYwqj1oZJ6wU1vbddOrsrHOm2Ws=w799-h533-s-no?authuser=0"
              width={799}
              height={799}
              alt="Bend Glacier close up"
            />
          </div>

          <WTPBackpacking uri={pageURI} />
          <br />
          <Contact />
        </ReadMoreLink>
      </div>
    </>
  );
}
