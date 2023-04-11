import Image from "next/image";
import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import HikeInfo from "../../../components/hike_info";
import Contact from "../../../components/contact";
import LyleCherryOrchard from "../../../components/pages/shorts/lyle-cherry-orchard";
import DogMountain from "../../../components/pages/shorts/dog-mountain";
import CoyoteWall from "../../../components/pages/shorts/coyote-wall";

//+metadata
const metadata = {
  title: "My favorite moderate hikes near Portland",
  date: "2023-04-15",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8B4dSrNj81huqxNj3QwHsPjwBZcX8sls3dm-ovdW1bGw8jhWumezwGAw_Rt_V9ykRQTrjxtJtI6eYwK4LUarVCH9Z39YOSdBJMqJrN28vmgLu7NRcbJv0EaPNa-lEV_6wP3RuODa1YssKvG3NIJo1kY=w653-h653-s-no?authuser=0",
  tags: ["hiking", "oregon", "guides", "waterfall"],
};

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Hikes that aren't extremely steep, between 5-8 miles, and are within a 2 hour drive from Portland. Send this to your hiking buddy! 📤`}
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
        <h2 className={utilStyles.centered}>Columbia River Gorge</h2>
        <h3>{`Angel's Rest`}</h3>
        <h3>Wahkeena Falls to Multnomah Falls Loop</h3>
        <DogMountain />
        <h3>Hamilton Mountain</h3>
        <CoyoteWall />
        <LyleCherryOrchard />
        <h2 className={utilStyles.centered}>Southwest Washington</h2>
        <h3 className={utilStyles.justifyCenter}>Fall Creek Falls</h3>
        <h3 className={utilStyles.justifyCenter}>Silver Star</h3>
        <h2 className={utilStyles.centered}>Mount Hood</h2>
        <h3 className={utilStyles.justifyCenter}>Ramona Falls</h3>
        <h3 className={utilStyles.justifyCenter}>Burnt Lake</h3>
        <h3 className={utilStyles.justifyCenter}>Cloud Cap to Cooper Spur</h3>
        <h3 className={utilStyles.justifyCenter}>
          Timberline Lodge to ZigZag Lookout
        </h3>
        <h3 className={utilStyles.justifyCenter}>Top Spur to McNeil Point</h3>
        <h2 className={utilStyles.centered}>Oregon Coast</h2>
        <h3 className={utilStyles.justifyCenter}>Elk Flats to Cape Falcon</h3>
        <h3 className={utilStyles.justifyCenter}>{`God's Thumb`}</h3>
        <h3 className={utilStyles.justifyCenter}>
          Saddle Mountain (Looks like this hike is still closed 😞)
        </h3>
        <h2 className={utilStyles.centered}>Bonus Hike: Silver Falls</h2>
        <Contact />
      </div>
    </Layout>
  );
}
