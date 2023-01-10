import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import RelatedPosts from "../../../components/related_posts";
import Pinnable from "../../../components/pinit";
import Contact from "../../../components/contact";
import MapEmbed from "../../../components/maps";
import BearSafetyNC from "../../../components/snippets/bear-safety-nc";
import WTPBackpacking from "../../../components/snippets/what-to-pack-backpacking";

//+metadata
let metadata = {
  title: "Backpacking Goat Lake on Mt. Baker",
  date: "2023-01-07",
  image:
    "https://lh3.googleusercontent.com/pw/AL9nZEU1CmjLIhK8lhIfEtKnmH5LzD30ZavQLlXdUIvSyRbBo8Qg6a5GoW1FfMDQdtqH_51O9BB4fG3cthT4Wv794w3dwwKu14tq3Y2stMINK545OomZ4lOhcNdVthvQGGCUPBxqkbP0NE7kpBRTdEhNcDVC=s800-no?authuser=0",
  tags: ["washington", "lakes", "backpacking", "north cascades"],
};

const pageURI = "/blog/washington/goat-lake";
const relatedTag = "backpacking";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Experience the wild beauty of Goat Lake, nestled in the shadow of Mt. Baker in Washington's North Cascades.`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Camping at Goat Lake"
            src="https://lh3.googleusercontent.com/pw/AL9nZEXkFNyN5i7OOKVNVd9PAVGL_dZ-okxAhRmfFFnVzhe5HcOg9yAzriFcumiimEyCxi_p9gbk04iRYVdlvgEJKz5ja31MqwxJLxnsZnKxnpKPuKAEkv1vgIx06lbqB4V3a2brYSShCvwK6fd-2D3lqgTa=w800-h533-no?authuser=0"
            width={800}
            height={533}
          />
        </div>
        <div>
          {`Are you ready for an unforgettable backpacking adventure? Look no further than Goat Lake on Mt. Baker! 
                    Tucked between Mt. Shuksan and Mt. Baker, Goat Lake is a picturesque backpacking destination that offers the perfect mix of adventure and relaxation.
                    Whether you're a seasoned hiker or a first-timer, a one-night trip to Goat Lake is an experience you won't soon forget.`}
        </div>
        <h1 className={utilStyles.justifyCenter} id="getting-there">
          Getting There
        </h1>
        <div>
          {`The Goat Lake trail starts at the Chain of Lakes trailhead, located near Artist's Point, and 
                    has a one-way distance of approximately 5.3 miles while gaining 1.5k feet in elevation.
                    The road leading to the trailhead is usually open from June to October, but may close earlier due to heavy snowfall. 
                    To check the current road conditions, you can call the US Forest Service at the Glacier Public Service Center. Please be 
                    aware that this area experiences heavy winter snowfall, which can make the trails impassable for several weeks or even months after the spring opening`}
        </div>
        <MapEmbed query="Ptarmigan+Ridge+Trailhead/@48.8475561,-121.6924061,18.04z/data=!4m5!3m4!1s0x5484f78a92345021:0x8b3c693994e6e328!8m2!3d48.8469133!4d-121.6922099" />
        <div>
          {`To find the trailhead, walk to the west end of the Chain of Lakes parking lot - this will be at the far end as you drive in. Shortly after starting your hike,
                    you'll pass a sign for the Chain of Lakes trail.
                    After hiking on the Chain of Lakes trail for 1.1 miles, turn left onto the unmarked Ptarmigan Ridge trail. 
                    If you continue right, you'll stay on the Chain of Lakes trail, which will eventually lead you back to the lower parking lot near the Mt. Baker Ski Area.`}
        </div>
        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Mt. Shuksan with smoke"
            src="https://lh3.googleusercontent.com/pw/AL9nZEXwpgpMdOqpxw6oLT8VcHqpv0GOnG0imUiNAcCJ8RtmIr51ZyEIF1XcV5WvigHSa9NAZ1pkbVbStGK-BZgAn--lCr5H6_46hung0gs8LnS2xIyJ7FQOvEFVk6TJWrurXJanv0IDkiMv7cGetLCg7mzJ=w800-h533-no?authuser=0"
            width={800}
            height={533}
          />
        </div>
        <div>
          {`Continue your hike on the Ptarmigan Ridge trail for approximately 2.2 miles, approaching Mt. Baker to the west with Mt. Shuksan looming behind you.
                    The Ptarmigan Ridge trail is a popular route, so you may encounter other hikers, backpackers, and climbers on your way.
                    Along the trail, you'll find plenty of oval-leaf blueberries, which are ripe and ready to pick by September. Take a break and enjoy a snack of these sweet, 
                    juicy berries while taking in the beautiful views. Once you've snacked on enough berries and soaked in the ridge views, resume hiking towards Goat Lake.`}
          <br />
          <br />
          {`As you near the rocky spire known as Coleman Pinnacle, about 2.2 miles into the Ptarmigan Ridge Trail, look to your left for a smaller hiker trail
                    that descends to Goat Lake. The trail down to the lake is rocky and steep in sections, but easy enough to find. 
                    It's about 1 mile further from here to the lake, where you can set up camp for the night or turn around and retrace your steps.`}
          <br />
          <br />
          {`The following pin shows the approximate location of the camping area near Goat Lake.`}
        </div>
        <MapEmbed lat="48.808790" long="-121.732103" />
        <h1 className={utilStyles.justifyCenter} id="need-to-know">
          Need To Know
        </h1>
        <div>
          <h2>Hiking</h2>
          {`The best time to hike Goat Lake is typically from 
                    August through September, when the weather is mild and the majority of the snow has melted. Because of Goat Lake's high altitude and location, 
                    it's important to be prepared for changing weather conditions at any time. Depending on the year, fair weather may persist into early fall:
                    In 2022, we were able to camp at Goat Lake in mid-October due to an exceptionally warm and dry fall season that extended the backpacking season. 
                    The week after our trip, snow began to fall and the Forest Service closed the road to Artist's Point for the season.`}
          <br />
          <br />
          <h2>Camping</h2>
          {`There are no facilities or developed campsites at Goat Lake: please pack out all waste, and camp in areas that are clear of vegetation. You
                    can find flat, rocky areas to pitch your tent on the east side of the lake.
                    In addition to the flat, rocky areas on the east side of the lake, you can also find good camping spots on the ridge between Goat Lake and Mt. Shuksan.
                     Goat Lake is a reliable source of water throughout the summer, but it may stay frozen over until mid-August. 
                     If you plan to drink from the lake, be sure to purify or filter the water before consuming it`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Another sunrise at Goat Lake"
              src="https://lh3.googleusercontent.com/pw/AL9nZEVDlt3_k2Ykf6yT4wL7OF7AaIqmja6OE-jPArgBxmdvor0K0saTZ8daWOgmAfmiqi7Y8sTis1IlSVvJ-Zqrk4y0XnOsc0tAIrJXNQRfdjKa2VMab4SkArQ3hwGEwdz0mfQtfk82PEUq3kmvBC6_rk5H=w450-h600-no?authuser=0"
              width={450}
              height={600}
            />
          </div>
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Lauren enjoying sunrise at Goat Lake"
              src="https://lh3.googleusercontent.com/pw/AL9nZEWJ9-8AtLHS8N6hKiqEMh-zko623D3NG65r5P5cBnBlNLfROOfB4KFwNKaFKNpmTtis4v93A4mVBB7V_jcm803ocaqqm9Y3HQ1x6RA_P9o2CHDzKIAuXkyduMCdEf8PLmzUH1WE2vrP9qDepVO21ARx=w533-h800-no?authuser=0"
              width={533}
              height={800}
            />
          </div>
        </div>

        <h1 className={utilStyles.justifyCenter} id="other-tips">
          Other Tips
        </h1>
        <div>
          {`The sunrise and sunset at Goat Lake are both breathtaking. Make sure to arrive before sunset to catch the sun dipping behind Mt. Baker,
                    and set an alarm early enough to scramble the eastern ridge before sunrise. At sunrise, gorgeous alpenglow spills over Mt. Baker, 
                    illuminating the glaciers for a precious few minutes before it dissipates. `}
          <br />
          <br />
          {`If you're looking for other hikes in the area, the very popular Chain of Lakes loop trail starts from the same trailhead as the Goat Lake backpack.
                    I suggest returning to Artist's Point another time to complete this hike, as you certainly won't be disappointed.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Sunset at Goat Lake"
              src="https://lh3.googleusercontent.com/pw/AL9nZEXj5Hn9k_HI80jokCRuc5x5nQnhFCPRr-LRRu9_9XTEFVuMtyVhIe7OeGBmNjEAn6fATy-HmKFp0PKjtOaGrkKErgHJ7RJHSvbKyiDPYs2-Rl2WyaRONFImikHuv246kxBZ_Nr_B0G-mALyeCC4yTAH=w800-h600-no?authuser=0"
              width={800}
              height={600}
            />
          </div>
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Sunrise at Goat Lake"
              src="https://lh3.googleusercontent.com/pw/AL9nZEXGKLuYEm_tSh7olZCFASdOZ2uBLNXTp9QAprdeb7AraJrKmurqD8iTFYUBcvL7AvC7LEEBfYdnXDYIGgqSEnrlPCCMd0ijC6vieRuGBMlP9nnW03AM9UOYNT40YSyBjWWLWkofEjjxaSxhoizsAMy9=w800-h600-no?authuser=0"
              width={800}
              height={600}
            />
          </div>
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Sun dipping behind Mt. Baker"
              src="https://lh3.googleusercontent.com/pw/AL9nZEWeBtNuRIGoIPmo1C0DK5pm4DIVcSLt97gaE35pSNJXtlxjmm7WckC7hReNZsdq24WomwVgMpBo-AFYBQhsRB3Os_30RWSyA8BYyDNDeuzfigbirZBsfI2ClUHGy8Y8ypmdj36E0tbFKrbENx8egL87=w800-h533-no?authuser=0"
              width={800}
              height={533}
            />
          </div>
        </div>

        <WTPBackpacking uri={pageURI} />

        <h1 className={utilStyles.justifyCenter} id="bear-safety">
          Bear Safety
        </h1>
        <div>
          <BearSafetyNC />
          <br />
          <Contact />
        </div>
      </div>
      <RelatedPosts metadata={metadata} tag={relatedTag} />
    </Layout>
  );
}
