import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import Link from "next/link";
import Pinnable from "../../../components/pinit";
import { CentralCascadesWildernessPermit } from "../../../lib/common";

//+metadata
let metadata = {
  title: "Golden Lake Day Hike",
  date: "2022-07-28",
  image:
    "https://lh3.googleusercontent.com/pw/AM-JKLXyUxue64xix3GXgedkZD-DmcK4wFWovDx4wboO_BSBGLgAMPJXETpxxxM5cNK9yowXt3Kh-Bpon1qnhKury8LTKmhVl66_EnzsiGLITuP5zuWyq7Ynlx-Pc5cf9QNFjGUvHkgSh0CA7_g6QjuHlMkZUA=s800-no?authuser=0",
  tags: ["hiking", "lakes", "oregon", "sisters"],
  disabled: true,
};

const pageURI = "/blog/oregon/golden-lake";
const trailhead =
  "https://www.google.com/maps/dir/Current+Location/44.11766,-121.62827";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Day hike to a beautiful lake in the shadow of Broken Top near Sisters, Oregon.`}
      subText={`13.1 miles`}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "sisters",
      }}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`Starting at the `}
          <Link href={trailhead}>Park Meadows Trailhead</Link>
          {`, Golden Lake is a 13-mile out-and-back featuring a lake, a waterfall, and views of Oregon's central cascades.`}
          <br />
          <br />
          {`If you're backpacking this trail, remember to reserve an overnight permit in the `}
          <Link href={CentralCascadesWildernessPermit}>
            Central Cascades Wilderness Permit System
          </Link>
          {`. A permit is not required for Day Hikers.`}
        </div>
        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Broken Top and Ridge, Oregon."
            src="https://lh3.googleusercontent.com/pw/AM-JKLURy11oubzqusn--ZNkvz0Pzj_LGTAN-xSLqKdjewJbll5G8c1ZNfGhwKt8ymJl2X2mKWNgTki410i_tyWg7kZfYHMQZBIxRRwRpA8KZd5owPBj2-gYXarggs2z8hxL5m1DBFa09MG09zEZKDBiEB0E-Q=w800-h535-no?authuser=0"
            width={800}
            height={535}
          />
        </div>
        <h1 className={utilStyles.justifyCenter} id="golden-lake">
          Golden Lake from Park Meadows
        </h1>
        <br />
        <div>
          {`From the town of Sisters, follow the Three Creeks Lake Road/NF-16 to Park Meadows Trailhead The trailhead is not much more than a pull-off
                    on the gravel road with limited parking. I found the road to be in good condition as of 2022, and suitable for compact passenger vehicles.`}
          <br />
          <br />
          {`The beginning of this trail traverses a severely burned area, that has been slow to recover. You may spot patches of wildflowers
                    in the burn, including Lupine or Fireweed. By summer, this section of the trail becomes hot and dusty, the only reprieve being 
                    stream crossings at Snow Creek, Whychus Creek, and the East Fork Park Creek - all of which are great spots to refill your water
                    and cool down.`}
        </div>
        <br />
        <br />
        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Burned area on Park Creek Meadows Trail, Oregon."
            src="https://lh3.googleusercontent.com/pw/AM-JKLXf47Go_GEJFXe13ktG3xH8ti0yGU56evn3pyo_Vv-Lu95ydvnPXtcPVajZLRyU49gdHl-kQ4JalO5b6tKoyUEHamwA_74pHTQoAsBDkJumJGG0vGiMFB0Rc-69Q6J7KTOJXJK9Bh4Q5RtYgEMwbybwsw=w800-h637-no?authuser=0"
            width={800}
            height={637}
          />
        </div>
        <div>
          {`Shortly after you cross the East Fork Park Creek, you'll be past most of the burn and enter a thin forest. Early in the season, this
                    section can be infested by mosquitoes, so come prepared with bug spray and/or suitable clothing to keep the bugs off you.`}
          <br />
          <br />
          {`From the East Fork Park Creek crossing, it's approximately 1.1 miles to the Golden Lake trail junction. The trail to the lake will be on your left
                    and is most likely unmarked, but difficult to miss. Head 0.5 miles down the Golden Lake trail, and you'll arrive at the lake. Broken Top rises
                    impressively behind Golden Lake, and a wide meadow fills the shoreline. You'll most likely want to take a rest here, have
                    lunch, and take a dip in the lake.`}
        </div>

        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Golden Lake, Three Sisters Wilderness, Oregon."
            src="https://lh3.googleusercontent.com/pw/AM-JKLW6Yba588RttGOauelpCQVqTQNISv5vLx7biyC1Ln6S-l8rCHsxpD9Ly2D2kenUNqXDWBa1GHsx5_mqgBC04i76pQUpmUlNCXZEngLh7w7AypgITzwRLSoFtzslqyJd9A4VP1MOpVofRfeDr6H9kcypiw=w600-h800-no?authuser=0"
            width={600}
            height={800}
          />
        </div>

        <h1 className={utilStyles.justifyCenter} id="extending-the-hike">
          Extending the Hike
        </h1>
        <div>
          {`If you haven't had enough by the time you've reached Golden Lake, you're in luck - there are a couple options to 
                    further your trip!`}
          <br />
          <br />
          {`The first option is straightforward: After you've had your fill of Golden Lake, return to the Green Lakes trail
                    and continue uphill. After 0.5 miles of climbing on the Green Lakes Trail, you'll arrive at a viewpoint of the South, Middle,
                    and North Sister mountains. Past this point, the trail rapidly descends to Green Lakes some 650 feet below.`}
          <br />
          <br />
          {`For the more extreme hikers, a small user trail begins on the south side of the Golden Lake's meadow, quickly turning into a scramble
                    on the far side of the lake. This unmaintained trail reaches two small lakes on the flank of Broken Top after about 1 mile.
                    I only recommend attempting this side trail if you are a strong hiker who has no difficulty with harsh terrain.`}
          <br />
          <br />
          {`Happy Trails!`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Golden Lake, Oregon."
              src="https://lh3.googleusercontent.com/pw/AM-JKLX9Uo1vGbF10LfJAj3ejujWpP-Ig3-wTrewJVZbLiQDvT06MD5fnNtY75vqe3rsuOc9PwzcNKEAgYW-nFnsm_KZ5ZWu9LBjzDB0Kb7cz_76XParq_J5NuuqmdguskADCdlYxghY8FH1IlTN7cYULs8BZA=w800-h535-no?authuser=0"
              width={800}
              height={535}
            />
          </div>
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Broken Top North Aspect, Oregon."
              src="https://lh3.googleusercontent.com/pw/AM-JKLU5hPLVBRkaUaCW5W06qoOEWUXKM7phgcWCcyQuD0gEdJZp9T6VGPBh2WvgqrN66mkRogkvlSCSFSM0bdYYaWNmhhSiUj0_xjPyKRPfGb3SjojhsHLvJVOWlaO21Ywcj1jgOE2j4sAoqSDUnoykVk5I4A=w800-h535-no?authuser=0"
              width={800}
              height={535}
            />
          </div>
          <br />
          <br />
        </div>
      </div>
    </Layout>
  );
}
