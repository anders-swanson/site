import Image from "next/image";
import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import HikeInfo from "../../../components/hike_info";
import { BestSeason, HikeDifficulty } from "../../../lib/hike_info_types";
import Contact from "../../../components/contact";
import EagleCreek from "../../../components/pages/oregon/eagle-creek-trail";

//+metadata
const metadata = {
  title: "Eight Incredible Day Hikes near Portland, Oregon",
  date: "2023-04-10",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8B4dSrNj81huqxNj3QwHsPjwBZcX8sls3dm-ovdW1bGw8jhWumezwGAw_Rt_V9ykRQTrjxtJtI6eYwK4LUarVCH9Z39YOSdBJMqJrN28vmgLu7NRcbJv0EaPNa-lEV_6wP3RuODa1YssKvG3NIJo1kY=w653-h653-s-no?authuser=0",
  tags: ["hiking", "oregon", "guides", "waterfall"],
};

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Discover eight stunning day hikes within driving range of Portland, Oregon.`}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "guides",
      }}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>{`.`}</div>
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AMWts8AnYDEFVPbXWOEhNWsnnzyKR9CXFS1Anj1J6TzeZkgaSjbApVINsgyg9sQhFrI5Gbh-Bgd7pyG5xPDJIq9MlufprBrKqxWV7BtqPiayr7FlB305JTyP9liMLUl5m12p7eW5i83dxU3aVosv3NCVfBkT=w533-h799-s-no?authuser=0"
            alt="Swimming at the upper pool of Waimano Falls."
            width={533}
            height={799}
          />
        </div>
        <EagleCreek readMore={true} />
        <h2 className={utilStyles.justifyCenter}>Fall Creek Falls</h2>
        <HikeInfo
          distance="3 miles round-trip"
          elevation="900 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.YEAR_ROUND}
          trailhead="https://www.google.com/maps/place/M%C4%81nana+Ridge+Trail/@21.4325135,-157.9392268,15.83z/data=!4m6!3m5!1s0x7c00688823ee72fb:0x40d02d372515187e!8m2!3d21.4301666!4d-157.9387916!16s%2Fg%2F11bzq3ll2w"
        />
        <Contact />
      </div>
    </Layout>
  );
}
