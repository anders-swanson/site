import utilStyles from "../../../styles/utils.module.css";
import { BestSeason, HikeDifficulty } from "../../../lib/hike_info_types";
import HikeInfo from "../../hike_info";
import Image from "next/image";
import MapEmbed from "../../maps";
import Slider from "../../slider";

export default function CoyoteWall({ h3 = false }) {
  return (
    <>
      {(h3 && (
        <h3 id="coyote-wall">
          Coyote Wall Loop
        </h3>
      )) || (
        <h2 className={utilStyles.justifyCenter} id="coyote-wall">
          Coyote Wall
        </h2>
      )}

      <HikeInfo
        distance="7 mile loop"
        elevation="1,700 feet"
        difficulty={HikeDifficulty.MODERATE}
        season={BestSeason.SPRING}
        trailhead="https://www.google.com/maps/place/Coyote+Wall+Trailhead/@45.7005925,-121.4037556,17z/data=!3m1!4b1!4m6!3m5!1s0x549610435a3707f1:0x6b0035cf329d6726!8m2!3d45.7005888!4d-121.4015669!16s%2Fg%2F11gfc0pt35"
      />
      <div>
        {`Coyote Wall is a popular loop hike for viewing spring wildflowers that's 1 hour 45 minute from Portland by car.
          This is a fun hike even when its not wildflower season, but during spring it becomes absolutely astounding.
          On clear, sunny days, you'll get a spectacular view of the Columbia River Gorge and Mt. Hood.`}
        <br />
        <br />
        {`The Coyote Wall loop starts out on a closed road before climbing through a rocky trail section with small waterfalls known as the Labyrinth.
          After hiking through the Labyrinth, the trail traverses back through flower-filled meadows on its return to the trailhead.`}
      </div>
      <div>
        <Image
          src="https://lh3.googleusercontent.com/pw/AMWts8AKJxkI7oSllHfiXkwRVa3DXahvLUKRAL_wW0zq2BQItAUC5f6qnYnwTgJqxg-pu-WKru5oduYwk5OdluI5f9XsnnF6jd7C1bVN1GJ1_zBRV5fOGTKbRbIVSDKf9omk-_dpxxHCpDrRDbTp8ViKiZba=w798-h533-s-no?authuser=0"
          width={798}
          height={533}
          alt="Coyote Wall"
        />
      </div>
      <div>
        {`The latter section of the loop near Coyote Wall (an impressive cliff by the trailhead) is where you'll see the most wildflowers.
          If you've timed your trip just right, the grassy slopes will be carpeted with colorful flowers of many varieties.`}
        <br />
        <br />
        {`I've linked the trailhead and parking below. Plan to arrive early on weekends, when cars overflow onto the highway by late morning.`}
      </div>
      <MapEmbed lat="45.700598" long="-121.401522" />
      <Slider
        slides={[
          "https://lh3.googleusercontent.com/pw/AM-JKLWNWCo6ODzkaM3rxi3J5H3mhRxi235OovfFyaeW-8Odvsrl0OT_nOGtxuei2WV8U4do-KNk7w2dQFp7dfn4hzonlWvZZsWW2xmUhK7-JTFijtdXgVbRN9uMFe9OD1L_NwoJXHpmifdADSMZUiJl6Ajb=w1597-h1067-no?authuser=0",
          "https://lh3.googleusercontent.com/pw/AM-JKLVOiUpy6nMKjoHglfsjfkPkXBjqe7zFRbipqWgahAMA6Cd-4sHP-TTmEKcSSUWiuX3gnVWbTkDZqeDPV2jx6pQ-gkyDNSy7BznBriFC_tSHMMnlzVEDAv2um-ZChyxLRxxvzpfiJTIv-J3I5G7eOL_b=w1597-h1067-no?authuser=0",
        ]}
        width={1200}
        height={750}
      />
    </>
  );
}
