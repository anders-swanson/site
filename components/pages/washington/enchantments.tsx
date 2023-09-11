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
const snowLakes = "https://www.google.com/maps/place/Snow+Lakes+Trailhead/@47.5356345,-120.7280067,14.08z/data=!4m6!3m5!1s0x549a4e550e740407:0x94a376353e3d826f!8m2!3d47.5440758!4d-120.7096568!16s%2Fg%2F11bx1h1k6l?entry=ttu"

//+metadata
export const metadata = {
  title: "Enchantments Through Hike",
  date: "2023-09-10",
  image:
    "https://lh3.googleusercontent.com/pw/AIL4fc_bmb9Phi8EyXiTrE5264gU3bGYs_XVyx9jHOwsdaWuOMp0s77KxdxFDtUvJSEdLKVa-BsKYvrJiBiYeHYzxzFHfBjXq0an6sd46JPEAba3HE9dONZM6u5upi55OAaoQpV3dEj49rwh9586_6TXGu8S=w653-h653-s-no?authuser=0",
  tags: ["lakes", "washington"],
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
          {`Considered the crown jewel of Washington's Alpine Lakes Wilderness, and one of the top-rated hikes in the entire state, The Enchantments is not to be missed!
          Hike point-to-point on an epic, strenuous 18.8 mile trek through a jaw-dropping mountain wilderness, complete with rugged granite peaks and a plethora of crystal clear alpine lakes.`}
          <br/><br/>
          {`The Enchantments is also a superb backpacking destination, but the `}
          <LinkT href="https://www.recreation.gov/permits/233273">highly competitive lottery system</LinkT>
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
            {`The Enchantments are best hiked by starting from the `}
            <LinkT href={stuartLake}>Stuart Lake trailhead</LinkT>
            {`, ending at the `}
            <LinkT href={snowLakes}>Snow Lakes trailhead</LinkT>
            {`. Hiking point-to-point will require a shuttle service, or bringing two cars. I suggest using a shuttle service, 
            as the Stuart Lake trailhead is extremely busy with minimal parking - expect a full lot by 6AM on the weekend.`}
          </div>
          <div>
            {`Shuttles can be booked ahead, typically costing around $25/person. Most shuttle services pick up
            at Snow Lakes, and drop off at Stuart Lake trailhead to start the hike. We took the 6AM Loop Connector shuttle from Snow Lakes, and were on the trail by 6:30AM.`}
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
            {`The hike begins at Stuart Lake trailhead with a gradual climb through the forest, ascending to Colchuck Lake. After about 2 miles, you'll arrive
            at the Stuart Lake/Colchuck Lake junction. Stay left to head towards Colchuck lake, which is another 1.6 miles further. After besting a series of steep switchbacks, the
            Colchuck Lake will come into view with towering peaks behind it.`}
            
          </div>
          <div>
            {`Take in the views of Jabberwocky, Witches Tower, and Dragontail peaks from Colchuck lake as you skirt the right-hand shoreline.
            Colchuck Lake is an extremely popular destination, and many day hikers will turn around here for the day.`}
            </div>
            <div>
            {`For those that are continuing on, the trail traverses a boulder field at the far end of the lake before beginning a precipitous climb straight up Asgard Pass.
            This is the most difficult trail section you'll encounter: the path up Asgard Pass is rough, rocky, and excruciatingly steep.
            Take plenty of breaks, and look back towards Colchuck Lake for a stunning view. You may also see mountain goats in the area,
            as you stop to catch your breath.`}
            </div>
            <div>
              {`Once you crest the pass you enter the "Core" Enchantments, known as the most scenic area. Packed with lakes, larches, and beautiful granite peaks,
              this is a breathtaking area to visit. I recommend taking your time here (if you can afford it), and exploring as much as you can. Taking a dip in one of the
              lakes can be extremely refreshing after the grueling climb up Asgard Pass.`}
            </div>
            <div>
              {`While it's impossible to go wrong in the core, my favorite place to stop was Perfection Lake, about 1.7 miles from Asgard Pass. However,
              all the other sites are worth stopping to take pictures.`}
            </div>
            <div>
              {`Once you get past Lake Viviane, below Perfection Lake, The trail begins to a sharp descent, rapidly dropping to Snow Lakes. This is a difficult section of trail,
              with sheer granite to scramble down. Thankfully, when you finally reach Snow Lakes you're graced with an even and gradually sloped trail.`}
            </div>
            <div>
              {`The last 9-ish miles from Lake Viviane to the Snow Lakes trailhead will feel like a slog - you're past the most scenic parts of the trail,
              and will spend more time in the forest or with lesser views. A constant downhill grade is kept the entire way, with a much smoother trail
              than the high section in the Core Enchantments.`}
            </div>
            <div>
              {`On the way down, you'll pass Upper/Lower Snow Lakes and Nada Lake, which are good spots to rest and refill water.
              Eventually the slog winds down, and you'll pop out at the Snow Lakes parking lot and the end of the hike.`}
            </div>
          <h1 className={utilStyles.justifyCenter} id="need-to-know">
            Need To Know
          </h1>
          <div>
            {`Hiking the Enchantments in a day is much more difficult than its milage may suggest: many of the 18.8 miles
            are over challenging, rocky terrain, which sections of steep boulder scrambling. The trail is almost always rocky or rooted out, and consistently steep, both up and down.
            `}
            <br/><br/>
            {`I only recommend attempting this trail if you're confident in your physical fitness -
             You'll need a good base fitness level, with the ability to lift yourself over large granite boulders.
            For reference we often hike or backpack trails of a similar distance, and it took us 12 hours (from 6:30AM to 6:30PM) to hike the Enchantments;
            including stops to take photos and swim in the lakes.`}
          </div>
          <div>
            {`If you're up for it and capable, this is a bucket-list worthy hike in the Pacific Northwest. I can't recommend it highly enough, and would happily due it again -
            even with the suck-factor of hiking out through Snow Lakes when you're dead tired from a long day!`}
          </div>


          <WTPHiking/>
          <br />
          <Contact />
        </ReadMoreLink>
      </div>
    </>
  );
}
