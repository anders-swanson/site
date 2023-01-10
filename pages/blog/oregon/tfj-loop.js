import Image from "next/image";
import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import { ImagePathBuilder } from "../../../lib/common";
import Link from "next/link";
import RelatedPosts from "../../../components/related_posts";

//+metadata
let metadata = {
  title: "Three Fingered Jack Loop",
  date: "2021-07-24",
  image: "/images/oregon/tfj-loop/thumbnail.jpg",
  tags: ["backpacking", "lakes", "oregon", "sisters"],
};

const subText = "35.68 miles, 4,623 feet gain, 1 night";
const image = ImagePathBuilder("/images/oregon/tfj-loop");
const trailhead =
  "https://www.fs.usda.gov/recarea/deschutes/recreation/hiking/recarea/?recid=81745&actid=51";

export default function Post() {
  return (
    <Layout
      headerImage={image("cover.jpg")}
      headerText={metadata.title}
      subText={subText}
      description={`Share our pain on this grueling 35+ mile backpacking loop that we hiked in the intense heat of summer.`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`Three Fingered Jack is a shield volcano in Oregon's Cascade Range, between Mt. Jefferson and the Mt. Washington. At 7,844 feet, it's overshadowed
                    by the nearby Three Sisters, but is still a prominent peak in the area.`}
        </div>
        <div className={utilStyles.textBlock}>
          We started our loop around Three Fingered Jack at{" "}
          <Link href={trailhead}>Round Lake Trailhead</Link> in the Mt.
          Jefferson Wilderness. While there are many access points to this loop,
          we picked Round Lake because we were lucky enough to snag an overnight
          permit there (everything else was taken).
          <br />
          <br />
          {`If you're starting at Round Lake, don't follow Google Maps to the trailhead! You'll get onto a very rough road, 
                    which is not passable by passenger cars with low clearance. We ended up having to park 2.5 miles from the 
                    trailhead, adding a total of 5 miles to the round trip. Instead of following Google Maps, turn left onto NF-1210 from Jack Lake Road,
                    and continue on NF-1210 for 5.8 miles. At Round Lake, turn right onto NF-600, driving a short distance to the trail marker
                    near the Round Lake Wilderness retreat. This route is slightly longer, but much better graded.`}
        </div>
        <Image
          alt="square lake"
          height={450}
          width={600}
          src={image("square-lake.jpg")}
        />
        <div className={utilStyles.textBlock}>
          {`We looped clock-wise around Three Fingered Jack, making detours for Summit lake and Canyon Creek meadows. Canyon Creek meadows
                    is a great spot to view wildflowers, and get close-up views Three Fingered Jack's eastern face. If you're willing to make the scramble,
                    you can also climb to the summit near here.`}
          <br />
          <br />
          {`As you make your way around the loop, you'll get panoramic views of the Mt. Jefferson wilderness, and views down to Mt. Washington 
                    and the Three Sisters in the south. A large portion of the loop is through scrubby, open burn, and can be excruciatingly
                    hot on summer days. Thankfully, the route is punctuated by a large amount of lakes and meadows
                    and it is never too far to a water source.`}
        </div>
        <Image
          alt="square lake with lauren"
          height={450}
          width={600}
          src={image("square-lake2.jpg")}
        />
        <div className={utilStyles.flexWrapContainer}>
          {`There's good camping all around the loop, mostly at the various lakes. We ended up camping at Wasco lake, which is popular with backpackers. 
                    All the camping areas along this route are primitive.`}
          <br />
          <br />
          {`The second day back to the car was a bit of a slog - we had much farther to hike than planned,
                    and the temperatures were creeping into the nineties by afternoon. By the time we made it back to the car, we were exhausted, 
                    dusty, and dead-tired from the heat, but thankful for our time in the beautiful Mt. Jefferson Wilderness.`}
        </div>
      </div>
      <hr />
      <div className={utilStyles.flexWrapContainer}>
        <Image
          alt="canyon creek meadows"
          height={450}
          width={600}
          src={image("canyon-creek-meadows.jpg")}
        />
        <Image
          alt="three fingered jack"
          height={450}
          width={600}
          src={image("tfj.jpg")}
        />
        <Image
          alt="Lauren Meadow"
          height={800}
          width={600}
          src={image("lauren-meadow.jpg")}
        />
        <Image
          alt="Lauren Meadow 2"
          height={800}
          width={600}
          src={image("lauren-meadow-2.jpg")}
        />
      </div>
      <RelatedPosts metadata={metadata} tag="lakes" />
    </Layout>
  );
}
