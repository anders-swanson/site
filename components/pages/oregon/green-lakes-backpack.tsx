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
import links from "../../../lib/links";
import Link from "next/link";
import CCPermitInfo from "../../snippets/cc-permits";
import Image from "next/image";
import WTPBackpacking from "../../snippets/what-to-pack-backpacking";
import Video from "../../video";

const pageURI = "/blog/oregon/green-lakes-backpack";

//+metadata
export const metadata = {
  title: "Green Lakes Backpacking",
  date: "2023-07-15",
  image:
    "https://lh3.googleusercontent.com/pw/AIL4fc_qz8Syh0gGIZ5EvNZsSsJaaWaOuO6y47dF88uYiK11nKkaXldxMZfEcgiA0aGjJ_m9OAaS3_NJM9u9hn4ehE3jwvUKqFt3QfP72jnJ6xgpu6mQDgNzcvBGLHC3xDfke6YchUCRBm4Dd8oYQlgo9gdo=w653-h653-s-no?authuser=0",
  tags: ["waterfall", "lakes", "oregon", "backpacking", "sisters"],
  preview:
    "An easy, stunning backpack to an alpine lake basin in the heart of Oregon's Three Sisters Wilderness.",
};

export default function GreenLakes({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="9-10 miles out-and-back"
          elevation="1,600 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.SUMMER_FALL}
          trailhead="https://www.google.com/maps/place/Green+Lakes+Trailhead/@44.0310908,-121.7389698,17z/data=!3m1!4b1!4m6!3m5!1s0x54b8ac40ce8b6647:0x45000b3b0fe8dc40!8m2!3d44.031087!4d-121.7363949!16s%2Fg%2F11b8jd3nd_?entry=ttu"
          permits={
            <>
              <Link href={CentralCascadesWildernessPermit}>
                Central Cascades Overnight Permit
              </Link>
              {`, ${NWForestPass}`}
            </>
          }
        />

        <div>
          <Image
            alt="Three Sisters Wilderness sign"
            width={565}
            height={765}
            src="https://lh3.googleusercontent.com/pw/AIL4fc_oyzbiYi0keQfbSSabIVKKNqjIpeeahgRHL6MqRfjs_sMUeP3enQZLtR7vO_TlX3PLJth7Ot37-39kQpiQ5qX2f536lgOHDWjMiLPs39gXGbmlRkKE40umLLu2zT3XCElaQ7C3GsrUIIskjO8pGAeI=w565-h754-s-no?authuser=0"
          />
          <Image
            alt="South Sister from Green Lakes"
            width={565}
            height={765}
            src="https://lh3.googleusercontent.com/pw/AIL4fc9b8ex-31vce-pTvCKCkhJhuNijTBvDrQJM2ljmtqoritS0nh0J30Sgnsac7J0jiNNn2i6wRsCwnWs3R39m0OUq-6wruzuVDRPYnjJqaykElqb_5mVXGivWgfHKC14F5YYtZheNsd57OD7PeuXyKdK2=w565-h754-s-no?authuser=0"
          />
        </div>

        <div>
          {`Green Lakes is a classic, popular Central Oregon hike that's nestled in the heart of the Three Sisters Wilderness.
          This is one of my favorite to backpacking trails in all of Oregon, for stunning mountain views and pristine alpine lakes.`}
          <br />
          <br />
          {`The mountains of South Sister and Broken Top are especially prominent from Green Lakes, with the three lakes providing excellent swimming, and productive fishing from
          the largest lake.`}
        </div>

        <ReadMoreLink
          enabled={readMore}
          text="backpacking Green Lakes"
          uri={pageURI}
        >
          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc8giC2Yil1FPEbJfiERXHIa0biOSD89eT9olutG6eOWjtijcrSvFftHuKbh77zG6U2_u_7CJrasrR_QtOpBQGda13ZFLV_u5QYe3QqPfGPVrJxqH2deQtos8xFBqWaKT63dfgLN_sORAxipdJIlRAfi=w565-h754-s-no?authuser=0"
              width={500}
              height={800}
              alt="Lauren at Green Lakes"
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There and Parking
          </h1>

          <div>
            {`The Green Lakes trailhead is just off Cascade Lakes highway, a beautiful 30-minute drive from Bend, Oregon.
            Wildnerness permits are required here, so make sure to read up the current `}
            <Link href={`${pageURI}#permits`}>permit information</Link>
            {` before heading out. The upside of the permit system is that you'll find the trail less crowded, and should have no issues with parking at any time of the day.`}
          </div>

          <MapEmbed place="ChIJrWI3Xz-suFQRMuscwQ3WOMQ" />

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>

          <div>
            {`Green Lakes is a moderate, uphill backpack that follows a creek and ends at a breathtaking lake basin. On the way you'll cross small streams,
            and see the beautiful tumbling cascades of Fall Creek. You'll pass a couple trail junctions on the way up: at each junction, stay on the clearly marked Green Lakes Trail.`}
          </div>
          <div className={utilStyles.centered}>
            <Video
              height={600}
              width={337}
              src="https://raw.githubusercontent.com/anders-swanson/data/master/data/IMG_8210.mp4"
            />
          </div>

          <div>
            {`As you reach the upper section of the trail, South Sister and Broken Top mountains come into view, towering above both sides of the trail.
            The two mountains ring the lake basin, creating beautiful sunsets as fading light plays along the mountain slopes.`}
          </div>
          <div>
            <Image
              alt="Light fading against Broken Top"
              width={565}
              height={765}
              src="https://lh3.googleusercontent.com/pw/AIL4fc-kn-ibuw1mTwIptIFvbXGa-Owhp2luhos2bZBi3eid-mcu2ASAz3OFCL6bTiXmKwL9r6a13qU5V-jFIXYm8DfmCoJqNo8-HoGPh8k0ZElOIPbn2w_8PYm8z6UgqZYr_kSCq82PxoDT3pUJYM5dlh2R=w565-h754-s-no?authuser=0"
            />
          </div>
          <div>
            {`The Green Lakes camping area is in a relatively flat basin, with 22 designated camping areas scattered around the three lakes.
            If you find that all sites are occupied when you arrive, consider asking someone to share their site - most will happily agree to share.`}
            <br />
            <br />
            {`Note that you are likely to encounter persistent mosquitoes here from June through August. Bringing mosquito resistent clothing and/or `}
            <Link href={links.hiking.bugSpray}>bug repellent</Link>
            {` is highly recommended for an enjoyable experience!`}
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc8X-8gKOAKYnhjF6_v8-bKeN_1RHdHttE-O4tZ9c91JAadiN2_1n2eWHsbV1IKX-NI-A2XM7k0eT42ZBlkpndk3veOzFfxLHOOXwrL7D5ArRrlT66sTr8zte6HaMTGLYau0XO0eUMw-JFuZVcTzANrC=w565-h754-s-no?authuser=0"
              width={500}
              height={800}
              alt="Overlooking South Sister from Green Lakes"
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="permits">
            Permit Info
          </h1>
          <CCPermitInfo zone="Green Lakes" />

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc9bdPDEUMmJOKgRw6QL_Z-FwAAIyKd3g6DiKX4w5iw4gzvny9D5qKt6h_zkX0viiQ8qyK699W-zLJhKCkPQnz-4L9QBFH6tMAi2z7m-mPqM4904MUki-TKEJOL61qhZK_zjVzOST-GSn_TL1n_ZQmwI=w565-h754-s-no?authuser=0"
              width={500}
              height={800}
              alt="Fall Creek near the Green Lakes trailhead"
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
