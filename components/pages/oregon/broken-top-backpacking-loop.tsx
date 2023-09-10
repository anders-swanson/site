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
const pageURI = "/blog/oregon/broken-top-backpacking-loop";

const tamMcArthurRim =
  "https://www.google.com/maps/place/Tam+McArthur+Rim+Trailhead/@44.0970423,-121.6310223,15.83z/data=!4m6!3m5!1s0x54b8b36b44082b3b:0xa3a7ff4c2458e3e3!8m2!3d44.100786!4d-121.6224637!16s%2Fg%2F1pp2tljll?entry=ttu";

//+metadata
export const metadata = {
  title: "Broken Top Backpacking Loop",
  date: "2023-08-01",
  image:
    "https://lh3.googleusercontent.com/pw/AIL4fc_bmb9Phi8EyXiTrE5264gU3bGYs_XVyx9jHOwsdaWuOMp0s77KxdxFDtUvJSEdLKVa-BsKYvrJiBiYeHYzxzFHfBjXq0an6sd46JPEAba3HE9dONZM6u5upi55OAaoQpV3dEj49rwh9586_6TXGu8S=w653-h653-s-no?authuser=0",
  tags: ["lakes", "oregon", "backpacking", "sisters"],
  preview:
    "See the best of the Three Sisters Wilderness on this challenging multi-day backpacking loop around Broken Top.",
};

export default function BrokenTopLoop({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="24 mile loop"
          elevation="2,400 feet"
          difficulty={HikeDifficulty.VERY_HARD}
          season={BestSeason.SUMMER_FALL}
          trailhead={tamMcArthurRim}
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
          <Image
            src="https://lh3.googleusercontent.com/pw/AIL4fc_FVe68mEGfO8LhB9U8l2a0Ps5IekjhI-bIS1MSsasyYeYlEYmF2MQjaKws0HA1QtLOuyO14VLa2ugo1A53qLjp1jhvwSnCPceqTSQzrm1fskP8sZS63Mplu-1SJ4AdJX3BJUS7Qdvzb-9gJz1biwzv=w584-h730-s-no?authuser=0"
            width={533}
            height={799}
            alt="Bend Glacier on Broken Top"
          />
        </div>

        <div>
          {`Looking for a challenging, but highly rewarding multi-day backpacking trip in Oregon? The Broken Top loop showcases some of Central Oregon's best scenery,
          packed with alpine meadows, lakes, and exceptional views of the surrounding cascade peaks. Hike in mid summer for the best wildflower display,
          typically in peak bloom by mid to late July.`}
          <br />
          <br />
          {`This isn't an easy hike due to numerous trail hazards - If you can conquer the downed trees and rocky slopes of scree,
          you'll be treated to an absolutely beautiful, one of a kind adventure.`}
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
            {`The Broken Top Loop is best started from the `}
            <LinkT href={tamMcArthurRim}>{`Tam McArthur Rim Trailhead`}</LinkT>
            {`, at Three Creek Lake. The gravel road to Three Creek Lake was rebuilt in 2023, and should be passable to all vehicles. Note that Three Creek Lake is also a popular recreation
            area for camping, fishing, and day hiking.`}
            <br />
            <br />
            {`Make sure to bring your NW Forest Pass for parking at the trailhead, in addition to a `}
            <LinkT href={CentralCascadesWildernessPermit}>
              Central Cascades Permit
            </LinkT>
            {` for camping within the wilderness boundary.`}
            <br />
            <br />
            {`Note that you may start this hike from other trailheads, such as Park Meadows, Todd Lake, or Green Lake. Be prepared for a longer, more difficult
            loop if starting from another point.`}
          </div>

          <MapEmbed place="ChIJOysIRGuzuFQR4-NYJEz_p6M" />

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>

          <div>
            {`I recommend hiking the loop clockwise, starting from the Tam McArthur Rim Trailhead. This lets you spread the mileage out more evenly, allowing access to the best campsites.`}
            <br />
            <br />
            {`From the Tam McArthur Rim Trailhead, the trail begins climbing steeply along the ridge towards Broken Top. Gradually, the trees thin out, and you'll be treated with
            several viewpoints of the Three Sisters and fields of wildflowers.`}
          </div>
          <div>
            <Image
              alt="Three Sisters from Tam McArthur Rim"
              src="https://lh3.googleusercontent.com/pw/AIL4fc_tPlIeMLQAKITvsJRriiLRwD4nnuE3REEJuKXTrmmV0iiN8QAoRgfKztCf00YtF9a80TW5TNiOnvoCOuLXcnkTJ7HMBy9fQ5HJOZXpuZ8pUceUZW8sRjoSHC1MdVMy-hORBAXEJLtnkTFwxe1cODcx=w584-h730-s-no?authuser=0"
              width={533}
              height={799}
            />
          </div>
          <div>
            {`After about 4.6 miles of hiking up the rim, you'll arrive at a large spire of rock known as Broken Hand. This one of the main obstacles on the trail, and can be very difficult to navigate early in the season.
            Expect a very narrow trail of loose rock, with a sharp drop off on one side. The right-hand path is easier to cross once the snow has melted off.`}
            <br />
            <br />
            {`Once past Broken Hand, you'll get a glimpse of No Name Lake's cloudy blue water, nestled in a cirque below Broken Top.
            The coloration comes from rock flour deposited by melting snow. Carefully make your way down to No Name Lake - this will be slow going
            due to the steep, rocky nature of the trail.`}
          </div>
          <div>
            <Image
              alt="No Name Lake with paintbrush"
              src="https://lh3.googleusercontent.com/pw/AIL4fc_A1wpedPSzFrVSVjdj7TGBOQLrQxtzq2NeDid4N-ueJYbQDTQCuipsP6EDgM3QVVHZx0_Yc0VDZZhMAKdLlQnTsU8h1S9jmAT_bRTVPGh3Tv2txl_8jzUqV5CMvIGxYqGttyums0QplFuCKL824CNS=w584-h730-s-no?authuser=0"
              width={533}
              height={799}
            />
          </div>
          <div>
            {`Camping is prohibited within 1/4 of No Name Lake, but you'll find plenty of campsites beyond the boundary tucked into groups of trees off trail.
            I suggest camping somewhere between the No Name Lake camping boundary and Soda Creek Meadows further below. You shouldn't have trouble finding a suitable campsite in this area,
            and there are nearby creeks to draw water from year-round. Soda Creek Meadows has an exceptional wildflower bloom in July, among the most beautiful on the entire Broken Top Loop.`}
          </div>
          <div>
            <Image
              alt="Lupine at Soda Creek Meadows"
              src="https://lh3.googleusercontent.com/pw/AIL4fc9di8gfjXiu2YQ4OXWLRq3bzJXOHVWhM0p6HIMpUheLQFQ8nILtGdapt-dR90wUGsLtbkJ61-zAWJq3IOQPgywxV_lF0Nsu0KD1jmhYSEiP1bd1Z6ZAy9MSItcJQD4t1wlosJ6qAa6PIviBOSf4n_AD=w584-h730-s-no?authuser=0"
              width={533}
              height={799}
            />
          </div>
          <div>
            {`Hiking from Soda Creek Meadows, the next main destination is Green Lakes - a beautiful lake basin nestled between South Sister and Broken Top
            that's very popular with backpackers and day hikers. Note that Green Lakes is about 6 miles from No Name Lake along the Broken Top trail,
            and has 22 designated campsites. When camping at Green Lakes, you are required to setup your tent within 15' of a marked camping stake.`}
          </div>
          <div>
            <Image
              alt="View of South Sister from Green Lakes"
              src="https://lh3.googleusercontent.com/pw/AIL4fc8Cohz3MqZyQFm82k0GU0vQOt9n_1kuTzm06jL1Ul0efrzxCFru_zb2mznU_5cg6NCzkGIGxxFk0yKwoFqWtGoHkO2LuKjVBfqa65T6z0gh3C6oPB4ickVsKj6VJEEHdk_L6HRR_-5EzuriJQ5EL_kA=w584-h730-s-no?authuser=0"
              width={533}
              height={799}
            />
          </div>
          <div>
            {`Continue the loop by heading north on the Green Lakes trail, staying along the right-hand side of the lake. The trail gently rises to a ridge, before descending to Golden Lake.
            From Green Lakes, it's 3.5 miles in total to Golden Lake. Expect wildflowers and beautiful mountain views in this section.`}
          </div>
          <div>
            <Image
              alt="Wildflowers growing between Green Lakes and Golden Lake"
              src="https://lh3.googleusercontent.com/pw/AIL4fc91cFw-gVPp5pKg3dLFhcBGAKRgUXB4Rh797x_UDZlPV01ieuLX-s6Hi12W61LmpBUbecz8Lb9ptJUy_u0NfMpcFwyhQjGykIJGbNkB_rq5ayEO_25upo0R9bg7qYJ_5cXvEjWIHPT3g_ufvPM_rxrA=w584-h730-s-no?authuser=0"
              width={533}
              height={799}
            />
          </div>
          <div>
            {`When approaching Golden Lake, keep an eye out for the cutoff trail, which is easy to miss. The cutoff to Golden Lake will be on your right-hand side,
            and is unmarked. By the cutoff trail, it's about 0.5 miles further to Golden Lake - a remarkable, remote spot in the Three Sisters Wilderness that feels 
            almost untouched by humans. Broken Top towers prominently behind the small lake, giving an impressive backdrop to the beautiful scene. Search the outskirts of the lake to find campsites,
            remembering that camping is prohibited within 250' of the lake. There are about 5 established campsites here, northeast and northwest of the lake.`}
          </div>
          <div>
            <Image
              alt="View of Broken Top from Golden Lake"
              src="https://lh3.googleusercontent.com/pw/AIL4fc_qiQXig2MPf116d5CV-aJBq53xTx-MGdIBNdUbhY2-iLjXoT-lsmV5JSXMbbW7ZbQ7buuvYJilezYfMoPg-FyTWWUmcXgkfA4TwKBp0XDBBLe83tNj-t003O7hQiBy8pYhd9oE2x6UVw2RQY8YMT5s=w533-h799-s-no?authuser=0"
              width={533}
              height={799}
            />
          </div>
          <div>
            {`The section of trail beyond Golden Lake is extremely challenging. Be prepared for intense blow down spanning almost 9 miles, from Golden Lake to Three Creek Lake.
            Shortly after leaving the meadows near Golden Lake, the forest transitions to a severe burn with almost no shade. This is the most difficult part of the hike, navigating around
            and climbing over innumerable fallen trees. A severe windstorm felled many trees in the winter of 2022, and the trail is currently unmaintained (as of summer 2023).`}
            <br />
            <br />
            {`Keep your patience on this section, take plenty of breaks at stream crossings, and slowly make your way back to Three Creek Lake. Follow the Green Lakes Trail,
            turning right onto the Park Meadow Trail. After 3 miles on the Park Meadow Trail, turn right at the 4-way junction for the Park Meadow Tie. From here, its about 3 miles
            further to Three Creek Lake, where you'll wrap up the loop.`}
          </div>
          <div>
            <Image
              alt="Camping near Broken Top"
              src="https://lh3.googleusercontent.com/pw/AIL4fc8LxhYgxC0mzmomMQPDKMC0HUvdN_YqLGTNdVkFMe-yQ9nzkiuPOeIlDZ7h5eZgBqv6py2w50PrvoqgiZvDaSgYWs_DLzkMmENnZNWE1RiBLGiSlshNNV-zK4GE9ho9D_vmUULYKctM1yh6N_lancn5=w489-h870-s-no?authuser=0"
              width={533}
              height={799}
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="permits">
            Permit Info
          </h1>
          <CCPermitInfo zone="Broken Top" />

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
