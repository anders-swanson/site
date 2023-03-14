import utilStyles from "../../../styles/utils.module.css";
import Pinnable from "../../pinit";
import Contact from "../../contact";
import MapEmbed from "../../maps";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";
import HikeInfo from "../../hike_info";
import { BestSeason, HikeDifficulty } from "../../../lib/hike_info_types";

const pageURI = "/blog/washington/blue-lake";
const trailhead =
  "https://www.google.com/maps/place/Golden+Canyon+Trailhead/@36.4207527,-116.8487991,17z/data=!4m14!1m7!3m6!1s0x80c73e8ab49dc8e7:0x81181ab2667c4455!2sGolden+Canyon+Trailhead!8m2!3d36.4207484!4d-116.8466104!16s%2Fg%2F1tjdx578!3m5!1s0x80c73e8ab49dc8e7:0x81181ab2667c4455!8m2!3d36.4207484!4d-116.8466104!16s%2Fg%2F1tjdx578";

//+metadata
export const metadata = {
  title: "Golden Canyon in Death Valley National Park",
  date: "2023-03-14",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8AuGKAU-_AAZCQgqYYW250t7lLAJc0Rv2UP4IIv1oUC5JVlypDqb5_bs9kx6V4AlQGc0EYnoryuVtrqEbArCzmSLOfZLwQszepDuTQ8PE1X9RbV2TPx5OLFP-h-Kat-Bm-pugSyo7GjcgEJNHqky4i4=s653-no?authuser=0",
  tags: ["hiking", "national park", "death valley", "california"],
  preview:
    "Embark on a hike through Golden Canyon, a geological marvel renowned for its otherworldly landscape.",
};

export default function GoldenCanyon({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="6-8 miles loop"
          elevation="1000+ feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.WINTER_SPRING}
          trailhead={trailhead}
        />
        <div>
          {`Golden Canyon is a must-do loop hike in Death Valley Park, displaying the desert's stark beauty at its finest. This 6 mile loop features towering rock formations, winding canyons, 
          and breathtaking vistas that showcase some of the most scenic and accessible parts of Death Valley.
          `}
          <br />
          <br />
          {`With a trailhead that's only 5 minutes from the Furnace Creek, there's really no reason not to try this amazing hike if you're visiting Death Valley!`}
        </div>

        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="walking the ridge above Red Cathedral, Death Valley National Park"
            src="https://lh3.googleusercontent.com/pw/AMWts8A8hy1HLRgAKGVmJuE9sDLAwao4GoIBKANQ94-ry6Dv5znh0-OJ59Tb7gvPVlBsDdC_qRhZZsJFOcAg9nxCeWjeYNnWlxcTKBUZB-b7dk2gQvnj3maUhTshzfuublnseIRImBzRetDCD7pT3lfQTJ4r=w799-h533-no?authuser=0"
            width={799}
            height={533}
          />
        </div>
      </div>
      <ReadMoreLink
        enabled={readMore}
        text="exploring Room Canyon"
        uri={pageURI}
      >
        <div className={utilStyles.flexGapContainer}>
          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There and Parking
          </h1>
          <div>
            {`The Golden Canyon trailhead is easy to find, being just off Badwater Road 5 minutes south of Furnace Creek. There is a small parking lot at the trailhead, with plenty
            of additional parking on the road shoulder. The parking lot typically fills by mid-morning in the winter, and overflow cars will stack up on the shoulder.`}

            <br />
            <br />
            {`Check the following pin to find the trailhead's location in Death Valley National Park.`}
          </div>
          <MapEmbed query="Golden+Canyon+Trailhead/@36.4207527,-116.8487991,17z/data=!4m6!3m5!1s0x80c73e8ab49dc8e7:0x81181ab2667c4455!8m2!3d36.4207484!4d-116.8466104!16s%2Fg%2F1tjdx578" />

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>

          <div>
            {`The Golden Canyon loop is best hiked clockwise, starting in the canyon and proceeding to the towering walls of Red Cathedral. You may also hike counter-clockwise, beginning with Gower Gulch,
            but I recommend clockwise for a more scenic hike.`}
            <br />
            <br />
            {`Starting the loop clockwise, you'll hike about 1 mile through Golden Canyon to the Red Cathedral Junction. Surrounded on both sides by hills and canyons, this is a beautiful and easy section of trail without much incline.`}
            <br />
            <br />
            {`If you're up for exploring, there are numerous small side canyons and washes branching off the main canyon that can be hiked into.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Golden Canyon, Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8BAJkkxWonNOrKpQACyw_wZloapENAAnD5_JXoTAlVeMPJtOfvpBKK2uyxXyC8i_95gCiSH3SprCnyfKTPR5jw7Mn8f3k705cmC3rdvUlnlD4bv59sun0GyU0b9Rijh9Y0wR_UhcRAbAOywYDiXMzID=w533-h799-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
            <br />
            {`At the Red Cathedral Junction, take a left to hike the 1 mile total out-and-back to Red Cathedral. While not part of the loop, hiking the out-and-back is highly recommended to see the stunning walls of Red
            Cathedral up close.`}
            <br />
            <br />
            {`There's a very short, enclosed section of trail right before you reach Red Cathedral that requires some light and easy scrambling. Most people should be able to squeeze through this without much difficulty.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Trail approaching Red Cathedral, Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8AZCScqlFvdXhoAzqOe7rD_oB2S7B2w5UeUzOqXXWd06A_BOgJIXQeqnXfGSd0rns7h9IbsVrlrtXQiPYU1JLSEWpIabJrBxXsoDJ_YYP7DZd4xI8yOadYf_lJNKzdI-XyBh2gvF_MZgo61CjleOMwu=w533-h799-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
            <br />
            <br />
            {`Slip through small slot and climb up to the viewpoint. This is my favorite part of the Golden Canyon Loop, and definitely shouldn't be missed!
            We spent about an hour here during our hike; exploring side trails, soaking in the view, and taking photos.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Viewpoint from Red Cathedral, Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8DhkjVf6WnQod9nb2IOWXCqIX_XBV9A3lyJOknlo_-rwQ4c875d3l9omT63B5LKOUFmw_5qcL1EF-VpNeFpqUMFCVwSXQQ2qvI4GR4lO2NI54l0AewE6bi01SBpO06CUFeg0WRvxDeQbT07G7fGMoxu=w584-h730-no?authuser=0"
                width={533}
                height={799}
              />
            </div>

            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Selfie at Red Cathedral, Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8Drk29Gp9McuYKlJlcxgxwMnKc6YICp_XfmoXDpYK0pROZd0BeWIFpfiP6FKl7L5eaPuRFUV5KOsScDCvPmvRzpY215m_G__73DVDlFRgljSFX73RBZOS78D1WB9EB4JWrs8Ovax62Gx3_AyHqaO15N=w565-h754-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
            <br />
            <br />
            {`After you've finished checking out Red Cathedral, head back to the prior junction and continue the loop.`}
            <br />
            <br />
            {`Past the junction, the trail climbs by Manly Beacon (a prominent rocky outcropping beside the trail)
            before descending into the Badlands, an awe-inspiring scene of sprawling hills.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="The Badlands, Golden Canyon Loop in Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8DM6a1iFYnoV4UkGwoXfoKWKRMsx52pT1qAlSlOhBxOk1YLlkeY86kMUVd3Lz3sIgxbACTX5QKxsIJIWNGlDVh85SYc_GYaAk29iZ8TlXMdH2K4gZqltXtzwHVSeKvJJY-cdKVl_qKLjFl77xnIrnuQ=w584-h730-no?authuser=0"
                width={533}
                height={799}
              />
            </div>

            <br />
            <br />
            {`At the next fork (about 0.7 miles from the Red Cathedral junction), keep left to continue your hike towards the popular Zabriskie Point. The fork to the right is a cutoff back to the trailhead via Gower Gulch.
            The trail to Zabriskie Point winds through the hills of the Badlands, with small offshoots to viewpoints. Follow the signage here to stay on the designated trail and help prevent erosion.`}
            <br />
            <br />
            {`At Zabriskie Point, there's typically larger crowds. For a quieter experience, try scrambling the ridge north of Zabriskie Point (on your the left as you approach). Walking along the ridge takes you above
            Red Cathedral, and you'll get a sweeping view of Death Valley, including Golden Canyon and the Badlands.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Ridge above Zabriskie Point, Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8C3zRP0ZcyOUcj5orAvZg4RODi3bGEe25KuDm23uxV5beAJxCG0u785c2TwOlCzRlBvR4ub6yFCkt5Sdf-nATF4Nqp7VmJ3JrPbxYxFshI6bKcZqJ37UUY3CF30WARoJAT60lP9VOmCmSSQZmisBYA9=w799-h533-no?authuser=0"
                width={799}
                height={533}
              />
            </div>
            <br />
            <br />
            {`To wrap up the loop from Zabriskie Point, retrace your steps to the Badlands, and then take either of the two marked trails for Gower Gulch. These two trails will join together, following a large wash
            before going through a rocky narrows.
            As you approach the narrows, look up a small hill on your right to find an old, closed-off mine entrance.`}
            <br />
            <br />
            {`After passing through Gower Gulch, it's a flat and easy walk to the parking lot. There isn't much sightseeing along the last section of trail, besides a view over Badwater Basin
            with the Panamint Mountains behind.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Heading back from Golden Canyon in Gower Gulch, Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8Bb4C-s554gxyECpJJ1G5FB0ayhM4akwSAr4i6plkV_p3zQctqrO-Jq91nxZ0K2pwbQaVtYNuuXOjlXjVubAbNfZXh-GEfCsA3lrbHOGP6tckMShKf1J1twtsSnZZv-LQCIZJAkQnJQ7QmARjCGQqtJ=w730-h584-no?authuser=0"
                width={730}
                height={584}
              />
            </div>
          </div>
          <h1 className={utilStyles.justifyCenter} id="other-tips">
            Other Tips
          </h1>
          <div>
            {`Golden Canyon is scorchingly hot during the spring, summer, and fall - Hot enough that during the day, hiking the full loop becomes dangerous. It's best to hike Golden Canyon
            during the winter, taking advantage of the mild weather.`}
            <br />
            <br />
            {`For those of you looking for a shorter hike, turn around at Red Cathedral to turn the loop into a 2.5 mile out-and-back. While you don't get the full experience of the 
            loop, this shorter hike is still an excellent adventure with plenty to see.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Red Cathedral, Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8BZ4DX7MlChrgLjxqUKNqa0quWHiflZhA7V-9Y1DPIrFy2-TMlU6qthQu1BPCND4S5cdCSqx1t4kRcvKn4n2OzlQ_OcHPr942W5C9vbmuI9FtZaBoS-mpwyCWl8bAZ8jKEqdlBljYtmAvirxmtaG8MV=w799-h533-no?authuser=0"
                width={799}
                height={533}
              />
            </div>
            <br />
            <br />
          </div>
        </div>
        <Contact />
      </ReadMoreLink>
    </>
  );
}
