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
import Image from "next/image";
import { LinkT } from "../../tablink";
import WTPBackpacking from "../../snippets/what-to-pack-backpacking";
const pageURI = "/blog/washington/enchantments";

const westFoss =
  "https://www.google.com/maps/place/West+Fork+Foss+Lakes+Trailhead/@47.634796,-121.3062778,17z/data=!3m1!4b1!4m6!3m5!1s0x549a8bb7daf57e01:0x354fa548cad72ad7!8m2!3d47.6347924!4d-121.3037029!16s%2Fg%2F11ckvf6w70?entry=ttu";
const necklaceValley =
  "https://www.google.com/maps/place/Necklace+Valley+Trailhead/@47.6594894,-121.2814476,15.54z/data=!4m6!3m5!1s0x549a8c9d5a0ce6cf:0xecb31ebbfc1ce76c!8m2!3d47.6651193!4d-121.2882634!16s%2Fg%2F11btx021fy?entry=ttu";

//+metadata
export const metadata = {
  title: "Alpine Lakes Wilderness High Route",
  date: "2023-09-20",
  image:
    "https://lh3.googleusercontent.com/pw/AIL4fc_tVmQQjcrCWoVeqWYQm8QEHWCuG-P491qB6ejTAhFm3rz3Aw9jJkLsXJ_gxickMgfcbgh93G_IdUudKjdpl7TXZKuOQrXF2japxiyIwUzDjEl4pLnNUfoOHfmFf17z7QlxtCuoxIVS7OmmeLLIhHvK=w653-h653-s-no?authuser=0",
  tags: ["lakes", "washington", "backpacking"],
  preview:
    "Traverse a breathtaking section of Washington's Alpine Lakes Wilderness on this challenging 26+ mile loop.",
};

export default function AlpineLakesHighRoute({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="26+ mile loop, 1-3 nights"
          elevation="8,400+ gain"
          difficulty={HikeDifficulty.EXTREME}
          season={BestSeason.SUMMER_FALL}
          trailhead={westFoss}
          permits={NWForestPass}
        />
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AIL4fc9353ISeZvMJu3gOnmOKdyckLMbVpm7dwj9Di0uY7jojjRqdNZP2M4iPQ9HTXEWu-gV8UnbNDXLbl750lQaSzNvm80DsVqmcxlK2WyVGAIy5BLoT13qcMBTjq0pzBQ75s4pTJuSfoVzGtkd1D0V7cVB=w799-h533-s-no?authuser=0"
            width={799}
            height={799}
            alt="Enchantments lake"
          />
        </div>

        <div>
          {``}
        </div>
        <div>
          {`While incredibly beautiful, this hike is an extreme challenge. The 6.5 "off-trail" miles between Big Heart Lake and Tank Lakes should not be taken lightly, and will
          test all but the most physically fit hikers. Expect miles of granite boulders, constant route-finding, and gruelingly steep elevation changes.`}
        </div>

        <div>
          <Image
            alt="Trail Map"
            width={584}
            height={730}
            src="https://lh3.googleusercontent.com/pw/AIL4fc_mr4lwOZj18S03SwLHrLb3zRR9akrTTpnGjKbWGKXzUJ604gU754ibZE4LkdTmlFIPc9Sz_AsYqvz1w3jRREZTcMmEQd6IEZLfDd7RDFXNYBwNFk7Ic2lcUeQAz5-o7cKVVNd5ygkLulpdzAdhV5w2=w1039-h1039-s-no?authuser=0"
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
            {``}
          </div>

          <MapEmbed query="stuart%20lake%20trailhead" />

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>
          <div>
            {``}
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc8sQ79bVjPHHWwspcpcWCMBfduKynD6fyOFMQBfopUCrLQIb3PszyPQhUNveJxgIwXJ4bTPkvWrPLwIj80155_0Ns2AVYqDCItjl7a-0olbNcLVFd-an9P9WkoYQPmjI44DaNOq8Uv_dmOBfza4P7S_=w584-h730-s-no?authuser=0"
              width={799}
              height={799}
              alt="Core Enchantments"
            />
          </div>
          <h1 className={utilStyles.justifyCenter} id="need-to-know">
            Need To Know
          </h1>
          <div>
            {`Hiking the Enchantments in a day is much more difficult than its milage may suggest: many of the 18.8 miles
            are over challenging, rocky terrain, which sections of steep boulder scrambling. The trail is almost always rocky or rooted out, and consistently steep, both up and down.
            `}
            <br />
            <br />
            {`I only recommend attempting this trail if you're confident in your physical fitness -
             You'll need a good base fitness level, with the ability to lift yourself over large granite boulders.
            For reference we often hike or backpack trails of a similar distance, and it took us 12 hours (from 6:30AM to 6:30PM) to hike the Enchantments;
            including stops to take photos and swim in the lakes.`}
          </div>

          <div>
            {`If you're up for it and capable, this is a bucket-list worthy hike in the Pacific Northwest. I can't recommend it highly enough, and would happily due it again -
            even with the suck-factor of hiking out through Snow Lakes when you're dead tired from a long day!`}
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc94AgeBWRaOg5KBbyjIg1pMMK1_R9FWBK3Nstdl2h7eF5L2y0hfPAfJ2eEspU9YZXu5c7h3Hp0H6w65tsjgqHJapU0RVDoOfnqaTl15N3M6j9OzY0_bLZhTRe5_xisjDanTvGYVFhNArQ-edKIAbPh7=w584-h730-s-no?authuser=0"
              width={799}
              height={799}
              alt="Colchuck Lake"
            />
          </div>

          <WTPBackpacking />
          <br />
          <Contact />
        </ReadMoreLink>
      </div>
    </>
  );
}
