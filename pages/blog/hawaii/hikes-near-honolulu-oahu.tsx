import Image from "next/image";
import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import HikeInfo from "../../../components/hike_info";
import { BestSeason, HikeDifficulty } from "../../../lib/hike_info_types";
import Contact from "../../../components/contact";
import Olomana from "../../../components/pages/hawaii/olomana";
import K1K2 from "../../../components/pages/hawaii/kalawahine-to-k2";
import Moanalua from "../../../components/pages/hawaii/moanalua-ridge";

//+metadata
const metadata = {
  title: "7 of Our Favorite Hikes Near Honolulu on O'ahu, Hawai'i",
  date: "2023-04-10",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8B4dSrNj81huqxNj3QwHsPjwBZcX8sls3dm-ovdW1bGw8jhWumezwGAw_Rt_V9ykRQTrjxtJtI6eYwK4LUarVCH9Z39YOSdBJMqJrN28vmgLu7NRcbJv0EaPNa-lEV_6wP3RuODa1YssKvG3NIJo1kY=w653-h653-s-no?authuser=0",
  tags: ["hiking", "hawai'i", "guides"],
};

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Get ready to scramble Oahu's trails with our favorite hikes near Honolulu.`}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "guides",
      }}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`If you're looking for a way to experience the natural beauty of Oahu, there's no better way than hiking the trails. 
          The island boasts a stunning landscape, with lush tropical forests, towering mountain peaks, and sweeping ocean views.`}
          <br />
          <br />
          {`Among the many hiking options available on Oahu, some trails stand out for their breathtaking scenery and unique features. 
          From steep ridges to cascading waterfalls, hiking these top 7 trails will take you on a journey through some of the most beautiful
           and diverse terrain the island has to offer.`}
        </div>
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AMWts8AnYDEFVPbXWOEhNWsnnzyKR9CXFS1Anj1J6TzeZkgaSjbApVINsgyg9sQhFrI5Gbh-Bgd7pyG5xPDJIq9MlufprBrKqxWV7BtqPiayr7FlB305JTyP9liMLUl5m12p7eW5i83dxU3aVosv3NCVfBkT=w533-h799-s-no?authuser=0"
            alt="Swimming at the upper pool of Waimano Falls."
            width={533}
            height={799}
          />
        </div>
        <Olomana readMore={true} />
        <K1K2 readMore={true} />
        <Moanalua readMore={true} />

        <h2 className={utilStyles.justifyCenter}>Waimano Falls</h2>
        <HikeInfo
          distance="3 miles round-trip"
          elevation="900 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.YEAR_ROUND}
          trailhead="https://www.google.com/maps/place/M%C4%81nana+Ridge+Trail/@21.4325135,-157.9392268,15.83z/data=!4m6!3m5!1s0x7c00688823ee72fb:0x40d02d372515187e!8m2!3d21.4301666!4d-157.9387916!16s%2Fg%2F11bzq3ll2w"
        />
        <div>
          {`We loved this relatively short hike to a multi-tiered waterfall, with upper, middle, and lower pools for swimming. The deeper lower pool is set with a 
          rope swing for jumping in. This hike was also surprisingly quiet. We had the waterfall to ourselves for almost an hour, and only saw other people as we were leaving.`}
          <br />
          <br />
          {`Although short, this definitely isn't an easy hike. It's extremely slippery hiking down to the falls, and you'll need to be prepared to get muddy.
          Once you're at the waterfall, there's a short, rocky scramble to get down to the pools.`}
          <br />
          <br />
          {`There is plenty of parking in the neighborhood near the trailhead. We did not have trouble finding a spot mid-afternoon.`}
        </div>
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AMWts8Bx0sy1CloYqCCTvms3GdDAF69WxQ-01EhaYj1PX4Ld_FWrosaOMg_hzA-OIualYctszGTUZiePdw-il6ISpfGYhl96DYTGwJ90pCUQMH79tcCQupZAj7NBBs1ouFYbA9TWUh5Nl6NFjPLLEAqz5Kgp=w533-h799-s-no?authuser=0"
            alt="Swimming at the upper pool of Waimano Falls."
            width={533}
            height={799}
          />
        </div>
        <h2 className={utilStyles.justifyCenter}>Wiliwilinui Ridge</h2>
        <HikeInfo
          distance="4.7 miles round-trip"
          elevation="1,700 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.YEAR_ROUND}
          trailhead="https://www.google.com/maps/place/Wiliwilinui+Ridge+Trail/@21.2990068,-157.7648383,17z/data=!3m1!4b1!4m6!3m5!1s0x7c006d34a758a5d1:0x5a7f2802644997d2!8m2!3d21.2990018!4d-157.7626496!16s%2Fg%2F11bxdz3_5n"
        />
        <div>
          {`This is a fun exposed ridge hike not far from Honolulu that climbs to the crest of the Ko'olau Range. From the summit, you get a sweeping view of O'ahu's eastern side.
          There's plenty of stairs, mud, and climbing on this hike, but overall we found it much easier than many others on this list!`}
          <br />
          <br />
          {`The trailhead is located in a gated community, and has an official parking lot. When you arrive at the gated community, pull up to the guard house and let them
          know you're there to hike the Wiliwilinui Ridge trail. The guard on duty will give you a free parking pass for the trailhead.`}
        </div>
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AMWts8AdiCYvNVD069k1Qlw-EHc6ag1fCA7yxiY5jpYigDudGZxKu9mXmBtH3oAtUE-e1lxoLZTTGuevVIs5oaCzjLPW5Xj3SlYHN5WeqFGWxLXyEtMOHeoCIMG0kEOFxK7U_GJiSacenA_FYhHxhcpHLXhc=w533-h799-s-no?authuser=0"
            alt="Plants catch the light along the Wiliwilinui Ridge Trail."
            width={533}
            height={799}
          />
        </div>
        <h2 className={utilStyles.justifyCenter}>Koko Head</h2>
        <HikeInfo
          distance="1.6 miles round-trip"
          elevation="1,000 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.YEAR_ROUND}
          trailhead="https://www.google.com/maps/place/Koko+Head+Trailhead+Parking+Lot/@21.2777959,-157.6946888,17z/data=!3m1!4b1!4m6!3m5!1s0x7c00126b75736da9:0x858a30a7bbc33cd!8m2!3d21.2777909!4d-157.6925001!16s%2Fg%2F11bv3mpc62"
        />
        <div>
          {`Koko Head is an extremely popular but gruelingly steep sunrise hike. While short, the hike is entirely uphill on an unused rail track that acts as a stairway.
          When I say this is steep, I mean it! As you push yourself to the top, both your lungs and legs will be cursing you.`}
          <br />
          <br />
          {`There is a large parking lot at the trailhead, but this large lot may fill in the morning. Arrive early if you aim to catch the sunrise. It generally takes 30-60 minutes
          to hike to the top, depending on your fitness level.`}
        </div>
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AMWts8CgAOoYIJnfNc8Bx06R2UR_AKDgw2zpswH60xp2_lX19B4igqghPFiFVvb8pMNXKs1YhfT-2sAaMlWkU52gnn0uLE9jWKrdOsGl3U8cGZ-9gYVOZaAD6HOC3V-GHiBzUcg368ZXmEWCXPUzWTjM42AM=w533-h799-s-no?authuser=0"
            alt="Lauren walks down the Koko Head stairway."
            width={533}
            height={799}
          />
        </div>
        <h2 className={utilStyles.justifyCenter}>Kuliouou Ridge</h2>
        <HikeInfo
          distance="5 miles round-trip"
          elevation="1,700 feet"
          difficulty={HikeDifficulty.MODERATE}
          season={BestSeason.YEAR_ROUND}
          trailhead="https://www.google.com/maps/place/Kuliouou+Ridge+Trail,+Kuli'ou'ou+Valley+Trail,+Honolulu,+HI+96821/@21.3038992,-157.7257739,17.33z/data=!4m6!3m5!1s0x7c0012fb15c65aed:0x631c8ec07eb0992f!8m2!3d21.303416!4d-157.7242656!16s%2Fg%2F11b77pt3vc"
        />
        <div>
          {`Kuliouou Ridge is a great, moderately difficult ridge hike that doesn't have much exposure. The climb up feels steep, but its absolutely beautiful and worth the effort.
          You'll have views down the valley as you hike up, and the summit overlooks the eastern side of O'ahu.`}
          <br />
          <br />
          {`This is a well developed trail that's relatively easy to hike compared to other ridges on O'ahu. Kuliouou Ridge is typically less muddy than other areas due to its drier weather.`}
          <br />
          <br />
          {`There is no parking directly at the trailhead, but you may park further back along Kalaau Road or the surrounding neighborhood.`}
        </div>
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AMWts8CbyFm8ChABNenU7pdFsKl-XQJKFTML9KIOMkeSaStrh125qBE9JWGthDJ3PheZEevhuRsoTeL7adzxAf3sFP2rzY8ILqJ1Kp4zDQrP3WN1-FoYIEKEX4Q8H7tgwoBAu1h4aULEeHjJbVX5oKG6YU0K=w533-h799-s-no?authuser=0"
            alt="Lauren climbs stairs near the summit of the steep Kuliouou Ridge Trail."
            width={533}
            height={799}
          />
        </div>
        <h2 className={utilStyles.justifyCenter}>{`O'ahu Hiking Tips`}</h2>
        <div>
          {`Trails on O'ahu are often, muddy, steep, and exposed. Some hikes (even popular hikes!) may be extremely difficult or outside your comfort zone.
          To avoid being surprised with a challenge you weren't expecting, do your best to learn about trail conditions before your hike.`}
          <ul>
            <li>{`Be prepared to get muddy. Many hikes on O'ahu are thick with mud.`}</li>
            <li>{`Don't hike ridges if its windy or rainy. The risk of slipping is too high.`}</li>
            <li>{`If you're afraid of heights, keep away from the ridge trails and their sharp, vertical drops.`}</li>
            <li>{`Check on parking before you go. Many trails have no signage or defined parking area.`}</li>
            <li>{`Have fun an enjoy the beautiful trails O'ahu has to offer!`}</li>
          </ul>
          <br />
          <br />
        </div>
        <Contact />
      </div>
    </Layout>
  );
}
