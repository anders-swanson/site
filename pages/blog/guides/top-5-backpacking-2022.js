import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import TankLakes from "../../../components/pages/washington/tank-lakes";
import TimberlineTrail from "../../../components/pages/oregon/timberline-trail";
import GoatLake from "../../../components/pages/washington/goat-lake";
import SnowyLakes from "../../../components/pages/washington/golden-horn";
import Garibaldi from "../../../components/pages/bc/garibaldi-lake";
import WTPBackpacking from "../../../components/snippets/what-to-pack-backpacking";
import Contact from "../../../components/contact";

//+metadata
let metadata = {
  title: "Our Top 5 Backpacking Trips of 2022",
  date: "2023-01-17",
  image:
    "https://lh3.googleusercontent.com/pw/AL9nZEXUlyC6DS2e0rFRLK75_lvMIqgIo_llrp1desKKM7xh6k00FeQQVri8Jfs3lfm49xegBYiGxLSoq6vSmiVbzLMdThRlv49WpVbX9ps6Bw8v_M5JM9OvLs2-sLx4gdMi51NjI2qjKIDn7IuJC7X3BWOB=s800-no?authuser=0",
  tags: ["backpacking", "guides", "oregon", "washington"],
};

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Plan your next outdoor adventure with our top 5 must-see backpacking trips of 2022.`}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "guides",
      }}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`From the rugged peaks of the North Cascades to the serene lakes of British Columbia, 
          our top 5 must-see backpacking trips of 2022 offer a diverse range of experiences for backpackers of all skill levels. 
          Traversing some of the most beautiful wilderness we've ever encountered, these trips are guaranteed  to provide an unforgettable experience. So pack your essentials and gear up,
          and join us as we discover the great outdoors. We hope our past trips inspire you to get out and explore this year!`}
        </div>
      </div>
      <TankLakes readMore={true} />
      <br />
      <TimberlineTrail readMore={true} />
      <br />
      <Garibaldi readMore={true} />
      <br />
      <SnowyLakes readMore={true} />
      <br />
      <GoatLake readMore={true} />
      <br />
      <WTPBackpacking readMore={true} />
      <Contact />
    </Layout>
  );
}
