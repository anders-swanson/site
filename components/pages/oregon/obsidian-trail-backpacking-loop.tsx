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
const pageURI = "/blog/oregon/obsidian-trail-backpacking-loop";

const obsidianTH =
  "https://www.google.com/maps/place/Tam+McArthur+Rim+Trailhead/@44.0970423,-121.6310223,15.83z/data=!4m6!3m5!1s0x54b8b36b44082b3b:0xa3a7ff4c2458e3e3!8m2!3d44.100786!4d-121.6224637!16s%2Fg%2F1pp2tljll?entry=ttu";

//+metadata
export const metadata = {
  title: "Obsidian Trail Backpacking Loop",
  date: "2023-08-18`",
  image:
    "https://lh3.googleusercontent.com/pw/AIL4fc_bmb9Phi8EyXiTrE5264gU3bGYs_XVyx9jHOwsdaWuOMp0s77KxdxFDtUvJSEdLKVa-BsKYvrJiBiYeHYzxzFHfBjXq0an6sd46JPEAba3HE9dONZM6u5upi55OAaoQpV3dEj49rwh9586_6TXGu8S=w653-h653-s-no?authuser=0",
  tags: ["lakes", "oregon", "backpacking", "waterfall", "sisters"],
  preview:
    "Explore a unique, backpackable lollipop loop near Middle Sister and discover a hidden lake.",
};

export default function ObsidianTrailLoop({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="12 mile loop"
          elevation="2,200 feet"
          difficulty={HikeDifficulty.MODERATE}
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
          {`The Obsidian Trail accesses a lollipop loop on the west side of central cascades, with ample views of North and Middle Sister. Explore the upper loop
          to find fields of obsidian, a waterfall, and a hidden lake off-trail.`}
          <br />
          <br />
          {`Perfect for a longer day hike, or an easy one-night backpacking trip with two 6 mile days. I Highly recommended for beginner backpackers
          or those who want an easy night out on the trail - read below for a detailed description, and for tips on how to find the secret lake!`}
        </div>

        <div>
          <Image
            alt="Trail Map"
            width={584}
            height={730}
            src="https://lh3.googleusercontent.com/pw/AIL4fc9Vs4PW8etzMp5ny1uqjmfTVMUaBhUFDTTG4QbalzOtGYdzKWT3suCnx6pIM1eB8UGYNYmHjC7m0oizlAJA5pdxax6VF7BiLaB0bePmqOtrkXMPGtW-e404m_ahfcQhZ9v8K1ASS4Dc55sg_Q09LWz1=w952-h952-s-no?authuser=0"
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
            {`The `}
            <LinkT href={obsidianTH}>Obsidian Trail</LinkT>
            {` is off the McKenzie Highway, just below McKenzie Pass on the west side of the central cascades. The McKenzie highway is a beautiful drive from Sisters,
            passing through the Belknap lava flows on a narrow, scenic stretch of road.`}
            <br/><br/>
            {`There's limited parking at the trailhead, but since the induction of the `}
            <LinkT href={CentralCascadesWildernessPermit}>permit system</LinkT>
            {`, finding a parking spot should not be an issue.`}
          </div>

          <MapEmbed place="ChIJOysIRGuzuFQR4-NYJEz_p6M" />

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>

          <div>
            {`The first 2-3 miles are a moderate uphill climb through dense, evergreen forest. Gradually, the forest opens up at a lava flow, transitioning to meadows.
            In July, there's an excellent wildflower bloom at the meadows which dries out by August.`}
          </div>
          <div>
            {`After about 3.5 miles on the Obsidian Trail, you'll cross a small stream and arrive at the loop junction. Take the left fork with signage for Glacier Way to
            hike the loop counter-clockwise for the best views. The Glacier Way trail joins with the PCT after 0.8 miles - turn right on the PCT to continue the loop.`}
          </div>

          <div>
            {`If you're camping, the best spots are just off the PCT on the upper loop. Hike for 0.5 miles along the PCT, until you come to a user trail veering off to the left.
            The trail crosses a stream (Glacier Creek), and enters a wooded area with many campsites. There's probably about 20 campsites in the trees here, scattered along the user trail.`}
          </div>

          <div>
            {`If you want to find the secret lake, continue up the user trail exiting the trees into a rocky area with a steep cliff on the right. It's about 1 mile to the lake from here,
            through rocky and rough terrain, though the trail remains visible the entire way.`}
          </div>

          <div>
            {`There are several more campsites at the lake`}
          </div>

          <h1 className={utilStyles.justifyCenter} id="permits">
            Permit Info
          </h1>
          <CCPermitInfo zone="the Obsidial Trail" />

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc-xr5G3CTNb9m4W_w2f46DdFf-Nbw-0dBa712dj0BUTAA1zr0G8WmHQoGjreyBAlrvqFYgByzhOp-Q_IFColcsLOXRIY6vz1m80nK0FP9uC8ViIuq3Nz6M5MqIe1SAx1AnnucfzLZgkqDQs3B4UTG8W=w533-h799-s-no?authuser=0"
              width={533}
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
