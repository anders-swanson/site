import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import { ImagePathBuilder } from "../../../lib/common";
import Link from "next/link";
import Image from "next/image";
import HikeInfo from "../../../components/hike_info";
import { BestSeason } from "../../../lib/hike_info_types";
import MapEmbed from "../../../components/maps";
import Contact from "../../../components/contact";

//+metadata
const metadata = {
  title: "Willow Creek Hot Springs",
  date: "2023-06-12",
  image:
    "https://lh3.googleusercontent.com/pw/AJFCJaWXplPsdSSnuh2Kf6CkpJ7WFWC0c3V8Okw_hzAL3q8SOLU0EL2oPwYRHGDDwFMVLKwZRcDGweW19rGX6jQckLQ_ls2hvDYeuEW4Ksktv02L4WwI1QAqL_rz4olOByA7PwEHthzblFHpq3JOAoBE5qvG=w653-h653-s-no?authuser=0",
  tags: ["camping", "hot springs", "steens", "oregon"],
  preview:
    "Camp at remote Willow Creek Hot Springs, in Oregon's Southeastern Desert",
};

const image = ImagePathBuilder("/images/oregon/willow-creek");
const campground =
  "https://www.google.com/maps/place/Willow+Creek+Campground/@42.3379617,-118.2464641,11z/data=!4m12!1m6!3m5!1s0x54b4152dfdcec47f:0x797819d31a0932a1!2sWillow+Creek+Hot+Springs!8m2!3d42.2755785!4d-118.2653128!3m4!1s0x0:0xe03ae29c68b15dcd!8m2!3d42.2751892!4d-118.2656014";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "hot springs",
      }}
    >
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          trailhead={campground}
          season={BestSeason.SPRING_SUMMER_FALL}
          permits="None, Free Camping"
        />
        <div>
          {`Willow Creek Hot Springs is a remote hot springs on public land, deep within the sparsely populated Southeastern Oregon desert.
          The best thing about these hot springs are their seclusion, being far from any major city, and the beauty of the surrounding area.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="Willow Creek Hot Springs, Southeastern Oregon"
              height={450}
              width={300}
              src={image("springs.jpg")}
            />
          </div>
          <h3>Getting There</h3>
          {`Willow Creek Hot Springs is in a remote area, the closest towns being Fields, Oregon (Pop 120), about an hour away.
        Fields is a 6-7 hour drive from Portland, totalling around 7.5 hours if you drive direct from Portland.`}
          <br />
          <br />
          {`The road to the hot springs is well-graded gravel from Fields, and dirt after the turn-off on Whitehorse Ranch Lane. Avoid this dirt road during or
          after rainstorms, as it will easily turn into thick, sticky mud. Otherwise, the road is passable for all vehicles - I drove there in a 2WD Mazda 3 sedan 
          without issue.`}
          <br />
          <br />
          {`DO NOT drive on the dirt road during or after heavy rain, as you run the risk of geting stuck
                    in extremely thick mud.`}
        </div>
        <MapEmbed place="ChIJf8TO_S0VtFQRoTIJGtMZeHk" />
        <div>
          {`I recommend stopping in Fields, Oregon for one of their famous milkshakes.
          Fields is also one of the few places for food or gas within several hours.`}

          <br />
          <br />
          <h3>Hot Springs and Campground</h3>
          {`The hot springs are located on BLM Land, with adjacent to a free, first-come, first-served campground. Be aware that the campground is very basic, having only fire rings,
          picnic tables and a pit toilet.
          Bring your own TP, as this campground is not serviced often. There are about six sites at the campground, right near the hot springs.`}
          <br />
          <br />

          <div className={utilStyles.centered}>
            <Image
              alt="Campsite at Willow Creek Hot Springs, Oregon"
              height={450}
              width={300}
              src={image("tent.jpg")}
            />
          </div>
          <br />
          <br />
          {`The hot springs is divided into two pools, hot and less hot. The hot pool was too hot for us stay in more than a couple minutes, and the cool pool was perfect for relaxing.
          Catching sunset while soaking in the hot springs is an amazing experience!`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="Sunset at the Willow Creek Hot Springs Campground, Oregon"
              height={600}
              width={900}
              src={image("cover.jpg")}
            />
          </div>

          <br />
          {`Because it's a long drive out, I suggest exploring the area and making a multi-day trip out of it.
        There are other hot springs in the area, such as the Alvord Hot Springs, and plenty of spectacular hiking within the Steens Mountain Wilderness.
        Check out our post on `}
          <Link href="/blog/oregon/steens-mountain">
            Exploring Steens Mountain
          </Link>
          {` for more information about this hidden corner of Oregon.`}
        </div>
        <Contact />
      </div>
    </Layout>
  );
}
