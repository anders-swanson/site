import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import Link from "next/link";
import RelatedPosts from "../../../components/related_posts";
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
      description={`Explore trip ideas for 1-night beginner backpackers near Portlnad, Oregon.`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`We spent most of 2022 exploring northern Washington State, hiking a variety of trails in the North Cascades and in within British Columbia.
          We made a brief foray down to Oregon to hike the `}
          <Link href="/blog/oregon/timberline-trail">Timberline Trail</Link>
          {`, which I've included in this post.`}
          <br />
          <br />
          {`Enjoy reading our top 5 backpacking trips of 2022 - I hope our past trips inspire you to get out and backpack this year!.`}
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
      <RelatedPosts metadata={metadata} tag="guides" />
    </Layout>
  );
}
