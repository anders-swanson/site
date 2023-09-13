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
import WTPHiking from "../../snippets/what-to-pack-hiking";
const pageURI = "/blog/washington/enchantments";

const stuartLake =
  "https://www.google.com/maps/place/Stuart+And+Colchuck+Lake+Trailheads/@47.527826,-120.8235749,17z/data=!3m1!4b1!4m6!3m5!1s0x549a4517155aef99:0x17a2fe26e8cb29a9!8m2!3d47.5278224!4d-120.821!16s%2Fg%2F11bccgnrbb?entry=ttu";
const snowLakes =
  "https://www.google.com/maps/place/Snow+Lakes+Trailhead/@47.5356345,-120.7280067,14.08z/data=!4m6!3m5!1s0x549a4e550e740407:0x94a376353e3d826f!8m2!3d47.5440758!4d-120.7096568!16s%2Fg%2F11bx1h1k6l?entry=ttu";

//+metadata
export const metadata = {
  title: "Enchantments Through Hike",
  date: "2023-09-15",
  image:
    "https://lh3.googleusercontent.com/pw/AIL4fc_tVmQQjcrCWoVeqWYQm8QEHWCuG-P491qB6ejTAhFm3rz3Aw9jJkLsXJ_gxickMgfcbgh93G_IdUudKjdpl7TXZKuOQrXF2japxiyIwUzDjEl4pLnNUfoOHfmFf17z7QlxtCuoxIVS7OmmeLLIhHvK=w653-h653-s-no?authuser=0",
  tags: ["lakes", "washington", "guides"],
  preview:
    "Day hike the Enchantments, an incredible 18.8-mile hike in Washington's stunningly beautiful Alpine Lakes Wilderness.",
};

export default function Enchantments({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="18.8 mile point-to-point"
          elevation="5,000 gain, 7,000 loss"
          difficulty={HikeDifficulty.VERY_HARD}
          season={BestSeason.SUMMER_FALL}
          trailhead={stuartLake}
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
          {`Considered the crown jewel of Washington's Alpine Lakes Wilderness and one of the top rated hikes in the entire state, the Enchantments through hike is an
          epic 18.8 mile trek through a jaw-dropping mountain wilderness, complete with rugged granite peaks and an abundance of crystal clear alpine lakes.`}
          <br />
          <br />
          {`The Enchantments is also a superb backpacking destination, but the `}
          <LinkT href="https://www.recreation.gov/permits/233273">
            highly competitive lottery system
          </LinkT>
          {` requires a fair bit of luck. 
          For this reason, most visitors choose to day hike, whether it's an out-and-back to Colchuck Lake,
          or by trekking the entire trail system from Stuart Lake trailhead to Snow Lakes.`}
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
            {`The Enchantments hike is best started from the `}
            <LinkT href={stuartLake}>Stuart Lake trailhead</LinkT>
            {`, ending at the `}
            <LinkT href={snowLakes}>Snow Lakes trailhead</LinkT>
            {`. Hiking point-to-point requires a shuttle service or two cars, leaving one at the lower trailhead. I suggest using a shuttle service, 
            due to the lack of parking at Stuart Lake trailhead - expect a full lot by 6AM on the weekend.`}
          </div>
          <div>
            {`Shuttles can be booked ahead, typically at around $25/person. The shuttle services pick up
            at Snow Lakes, and drop off at Stuart Lake trailhead. We took the 6AM Loop Connector shuttle from Snow Lakes, and were on the trail by 6:30AM.`}
          </div>
          <div>
            {`Larch season is often the busiest and most chaotic time to visit the Enchantments. 
            When the Larches are peaking in early October, parking and shuttle availability may be very limited. Plan accordingly if you are considering a visit during this time!`}
          </div>

          <MapEmbed query="stuart%20lake%20trailhead" />

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>
          <div>
            {`The hike begins at Stuart Lake trailhead, starting with a gradual climb through the forest and ascending to Colchuck Lake. After 2 miles of hiking, you'll arrive
            at the Stuart Lake/Colchuck Lake junction. Keep left to head towards Colchuck lake, another 1.6 miles from the junction. Most of the 1.6 miles are steep switchbacks, 
            eventually giving way to lake views and towering mountains.`}
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc94AgeBWRaOg5KBbyjIg1pMMK1_R9FWBK3Nstdl2h7eF5L2y0hfPAfJ2eEspU9YZXu5c7h3Hp0H6w65tsjgqHJapU0RVDoOfnqaTl15N3M6j9OzY0_bLZhTRe5_xisjDanTvGYVFhNArQ-edKIAbPh7=w584-h730-s-no?authuser=0"
              width={799}
              height={799}
              alt="Lauren at Colchuck Lake"
            />
          </div>
          <div>
            {`Soak in the views of Jabberwocky, Witches Tower, and Dragontail peaks from Colchuck Lake as you follow the trail skirting the right-hand shoreline.
            Colchuck Lake is an extremely popular destination, and many day hikers will turn around here for the day - expect slightly fewer hikers from here on out.`}
          </div>
          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc-BVV74sPAWrC0xe8XSnHNoB9S_K48EYa7n-EAD8UXLmkU_KurKB8QyB0uBqS5H3HNrjj66HAmwkDELJryqQ4N7rippFvQc2JDZ6_vayyssqD14GQLq_eAXxa4qrjmS8Wi0bo6uf9RwDT7Q4STxfX2t=w584-h730-s-no?authuser=0"
              width={799}
              height={799}
              alt="Looking down at Colchuck Lake from Asgard Pass"
            />
          </div>
          <div>
            {`For those that are continuing on, the trail traverses a boulder field at the far end of the lake, beginning the precipitous climb up Asgard Pass.
            The path up the pass is the most difficult trail section you'll encounter: it's rough, rocky, and excruciatingly steep.
            On your way up, take plenty of breaks, and look back towards Colchuck Lake for a stunning view. You may also see mountain goats 
            as you stop to catch your breath!`}
          </div>
          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc-7_Pdu63tDwl9gIwSjFkbWWAEN68xama1gBHZC3aRlaz51xDpGbNYA-CKihxxaRxgxs2zuwvMOXn1mMr_B8hNtIHx-4oi5YSOMa0i06pJzbXon6SJ7UYoiNk_aiGXZ8daf0LyDhTrRVBwqc7tNbhoF=w584-h730-s-no?authuser=0"
              width={799}
              height={799}
              alt="Mountain Goat at Asgard Pass"
            />
          </div>
          <div>
            {`By cresting the you enter the "Core" Enchantments, known as the most scenic area in the wilderness. Packed with lakes, larches, and beautiful granite peaks,
              this is a breathtaking area to visit. I recommend taking your time here (if you can afford it), and exploring as much as you can. Taking a dip in one of the
              lakes can be extremely refreshing after the grueling climb up Asgard Pass.`}
          </div>
          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc-Gd-sd2dyfoCArq3_FEfGuoWfoZNRyGQ0pHUeIGfZ1XafmaCRNv0B_MLN4Z2zR2k3gowj1pWVEpue8oiBgaa62LeoyE-8eIS1VpEAU1vMB37CNuUJrHdM7oVd232IsJLscR9uBz4LvoXL8O1mzL-jO=w584-h730-s-no?authuser=0"
              width={799}
              height={799}
              alt="Tranquility Lake"
            />
          </div>
          <div>
            {`While it's impossible to go wrong in the core, my favorite place to stop was Perfection Lake, about 1.7 miles from Asgard Pass. However,
              all the other sites are worth stopping to take pictures.`}
          </div>
          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc_9X9atQqZUVSaLwWLb6TCIvdTWeroRKsoNCewaKNMT9xRog2-wzc8tFxoWXSSmG7inI7Mr2Ym70PMXvJ8qk_jkUjCqiVVLMEnyfvIJQFzeLPW91r5kfqqo1PdagwebQWCokTkFr_fn56rk8Hf7C43r=w584-h730-s-no?authuser=0"
              width={799}
              height={799}
              alt="Perfection lake"
            />
          </div>

          <div>
            {`Once you get past Lake Viviane below Perfection Lake the trail begins to a sharp descent, rapidly dropping to Snow Lakes. This is a difficult section of trail,
              with sheer granite to scramble down.`}
          </div>
          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc8b6RIk4uH3Z5bKDKTo_Nsm4cjAD0nIwQYuhbjHvboCGOVJilTqArl3YQsyrFo8seGZsgw4HTE6ha_97FJxM4JOG2K5xY7d6f-BGatwGCkLClSIyzAoFVupQvBIgMIqrsqcz5nt_ylhX1p0p_M25dP_=w533-h799-s-no?authuser=0"
              width={799}
              height={799}
              alt="Prusik Peak"
            />
          </div>
          <div>
            {`The last 9-ish miles from Lake Viviane to the Snow Lakes trailhead feel like a never-ending slog - you're past the most scenic parts of the trail,
              and will spend more time in the forest or with lesser views. The trail is much smoother here than the Core Enchantments, with a constant downhill grade.`}
          </div>

          <div>
            {`On the way down, you'll pass Upper/Lower Snow Lakes and Nada Lake, which are good spots to rest and refill water.
              Eventually the hike winds down and you'll pop out at the Snow Lakes parking lot at the end of the hike.`}
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AIL4fc-owqgS_Z8LGZo8IC7cpMnT8BVY6uqyaG12mM2L-ne_CPcFzwGKdTuqlavlNR2svUq71V7srbLgzMR-05how6UM76q7vZHcjkV9bi-KDQTr5B2Ss9IWZ90awUsh_tMeFIa_uZdL_AgcwCCsudrSoo-C=w799-h533-s-no?authuser=0"
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

          <WTPHiking />
          <br />
          <Contact />
        </ReadMoreLink>
      </div>
    </>
  );
}
