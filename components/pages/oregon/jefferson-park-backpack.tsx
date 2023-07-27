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
import {
  CentralCascadesDayUse,
  CentralCascadesWildernessPermit,
} from "../../../lib/common";
import Link from "next/link";
import CCPermitInfo from "../../snippets/cc-permits";
import Image from "next/image";
import WTPBackpacking from "../../snippets/what-to-pack-backpacking";
const pageURI = "/blog/oregon/jefferson-park-backpack";

const woodpecker =
  "https://www.google.com/maps/place/Woodpecker+Trailhead/@44.6831898,-121.8961897,15z/data=!4m10!1m2!2m1!1swoodpecker+ridge+trail!3m6!1s0x54bf07d6a91dc781:0x1dc3b119fa6684c8!8m2!3d44.6812147!4d-121.8872255!15sChZ3b29kcGVja2VyIHJpZGdlIHRyYWlsWhgiFndvb2RwZWNrZXIgcmlkZ2UgdHJhaWySAQtoaWtpbmdfYXJlYZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VNNE1rcFRheTFSUlJBQuABAA!16s%2Fg%2F11bxb9z99c?entry=ttu";
const pamelia =
  "https://www.google.com/maps/place/Pamelia+Lake+Trailhead/@44.6600208,-121.8917059,17z/data=!3m1!4b1!4m6!3m5!1s0x54bf08646d19d74b:0xe4833d6e63f4ff1f!8m2!3d44.660017!4d-121.889131!16s%2Fg%2F11bx2mvvkj?entry=ttu";

//+metadata
export const metadata = {
  title: "Jefferson Park One Night Backpack",
  date: "2023-07-26",
  image:
    "https://lh3.googleusercontent.com/pw/AIL4fc_iOvzWHG5KwrZJ1i0PLlLwjqkCRCQJ37P0hMPXikjG7BlKj2F8RImmJf4oXhfStFD878KROKUS0ePJ2tvrcuWnqZaF6d6N3Df2Jhc9eoKr-CNc-94YPmPbMoM6beBDRFaxLWY7DO6MXRI8JASceJnR=w653-h653-s-no?authuser=0",
  tags: ["lakes", "oregon", "backpacking"],
  preview:
    "Backpack to an alpine meadow with five lakes on Mt. Jefferson's northwest slope.",
};

export default function JeffersonPark({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="12-13 miles out-and-back"
          elevation="2,200 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.SUMMER_FALL}
          trailhead={woodpecker}
          permits={
            <>
              <Link target="_blank" href={CentralCascadesWildernessPermit}>
                Central Cascades Overnight Permit
              </Link>
              {`, ${NWForestPass}`}
            </>
          }
        />

        <div>
          <Image
            alt="Jefferson Park Golden Hour"
            width={584}
            height={730}
            src="https://lh3.googleusercontent.com/pw/AIL4fc-nvHgOawXjT5wzsOrpS-mvhwYhiyL31q_ldfoEHHoKjGVXVp3pbXi6HjgCaLPs-03Ww4CdkS5hpsG2irfzLdrkt5yAhfXfg6uQhU2olTdJdzaF0e7xR4pTONxiPt6mO80v8Fzqph4F0EJBpjqsOwwY=w584-h730-s-no?authuser=0"
          />
        </div>

        <div>
          {`Hike to Jefferson Park, one of the most stunning backcountry camping aresa in the Mt. Jefferson Wilderness. Packed with wildflowers, lakes, and mountain views, 
          you'll be treated to a breathtaking sunset display right from your campsite.`}
          <br />
          <br />
          {`Jefferson Park was reopened in 2022, and largely spared from the 2020 Lionshead Fire that scorched the surrounding area. You may notice a few burn scars as you explore the alpine meadow, soaking
          in the wildflowers and five swimmable lakes.`}
        </div>

        <ReadMoreLink
          enabled={readMore}
          text="backpacking Green Lakes"
          uri={pageURI}
        >
          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc-A_WmNwT1Z900hTbwbjraKU5pYb2PAbksE6nXInNz9dE9py7NH3ZvqlbGkX-lUbzXAPxiFEbYWgTLhhMUMyvQrtMVuOeQg_FKNezPriRZBSRi2W1zq5Kt_g6EPYP2aSZamzvdGlw9vIks00g4wOEDv=w533-h799-s-no?authuser=0"
              width={533}
              height={799}
              alt="Beargrass Flowering in Mt. Jefferson Wilderness burn scar"
            />
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc_yMgTIy5vG-Wb4Ps4APhsynATXL1Anddg-mauWrVvBMZasGxWBiiwynqN-3GrObvMu_dL5END1uoayHJwh8jeNaTpEv687CXyxZ9W7BZGZk5N6rgdbQhn2nGW2q2QslbnM0u4Dndx4prKdBvj043Xi=w533-h799-s-no?authuser=0"
              width={533}
              height={799}
              alt="Small Lake on the way to Jefferson Park"
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There and Parking
          </h1>

          <div>
            {`For easiest access to Jefferson Park, start your hike at the `}
            <Link target="_blank" href={woodpecker}>
              Woodpecker Trailhead
            </Link>
            {` near Detroit, Oregon in the Mt. Jefferson Wilderness.
            To camp at Jefferson Park, you'll need a current wildnerness permit - check out the `}
            <Link target="_blank" href={`${pageURI}#permits`}>
              permit information
            </Link>
            {` to reserve your trip.`}
          </div>
          <div>
            {`You may also start your hike at `}
            <Link target="_blank" href={pamelia}>
              Pamelia Lake Trailhead
            </Link>
            {`, several miles  south off the PCT. If you start from Pamelia Lake, be prepared for a 22+ mile round trip.
            Jefferson Park was previously accessible from the Whitewater, Triangulation Peak, and Breitenbush trailheads, but these trailheads are unfortunately closed because of
            the 2020 Lionshead Fire (as of 2023).`}
          </div>

          <MapEmbed query="woodpecker%20trailhead" />

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>

          <div>
            {`From the Woodpecker Trailhead, you'll hike uphill through successive burns, approaching the PCT junction after 1.7 miles. Once you reach the PCT,
            turn left (north), and continue for 4.1 miles until you reach Scout Lake at Jefferson Park.`}
          </div>
          <div>
            {`There are many campsites scattered around Jefferson Park, but I recommend camping by either Scout Lake, or Russel Lake. Both lakes have unobstructed views of
            Mt. Jefferson.`}
          </div>
          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc-uAo3o73TJCmA9BUKE249j5hZqkHVbK9o6bKh6VZDRxcAAu_N1D60uvTw3qvR0kAh8xPXKRVEJWe-jvjjk1c4a_9ZiQBErRiNtmtv3cTnTya2ma1iQKc7I5hvQGTVduAjjnG6wYhEQdKnD9PJx3cAD=w584-h730-s-no?authuser=0"
              width={584}
              height={730}
              alt="Campsite at Russel Lake with mountain views"
            />
          </div>
          <div>
            {`
            You'll find Scout Lake immediately off the PCT as you enter Jefferson Park, and Russel Lake being an additional 0.7 miles farther north on the PCT. Social trails
            and postage signage leads to both lakes.
            Further exploring of Jefferson Park will lead you to Park, Rock, and Bays Lake. All five named lakes are swimmable, with relatively warm water by midsummer.`}
          </div>
          <div>
            {`Be aware that Oregon's central cascades are prime mosquito country, usually peaking in numbers by mid-July. By August and September, the amount of bugs will 
          have thinned considerably. When visiting Jefferson Park, please remain on the main trails and camp in posted campsites - doing so will help to avoid degradation of the fragile alpine meadow environment.`}
          </div>

          <h1 className={utilStyles.justifyCenter} id="permits">
            Permit Info
          </h1>
          <CCPermitInfo isDayUse={false} zone="Jefferson Park" />
          <div>
            {`The Pamelia Lake trailhead additionally requires a `}
            <Link href={CentralCascadesDayUse}>day use permit</Link>
            {`.`}
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc-rKXORAWUNNfKHkuzqOviTznb1OjAGjdNZz4YlrSBTqlSPaPoRYw-0mWX4QynvG_PqQLy8Z28pGy_GSUXfXXm1UDdWJro-uA3ewlMnlpqh7g7PT1qSl6yZIOmxZ9F9NAvgcz2G9cI6pI62-NssleIU=w533-h799-s-no?authuser=0"
              width={533}
              height={799}
              alt="Sunset on Mt. Jefferson near Russel Lake"
            />
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc90_qpTzz1E0jwhWhBkEUELgIvROBjd_zCJuUvgL6sZRMOGNIV8pGZj4m2B5P5LNeFnqWDYFg_hCFWRhJNifkwF6hTLd4ZEATDv1Iu9c2RwTvgAeXzniK_rnjBDMwqu3JXMbdhkE6UW3YZV-rOl5gSK=w533-h799-s-no?authuser=0"
              width={533}
              height={799}
              alt="Mt. Jefferson from Jefferson Park"
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
