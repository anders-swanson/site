import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import Link from "next/link";
import RelatedPosts from "../../../components/related_posts";
import { CentralCascadesWildernessPermit } from "../../../lib/common";
import Pinnable from "../../../components/pinit";

//+metadata
let metadata = {
  title: "Obsidian Trail",
  date: "2022-06-18",
  image:
    "https://lh3.googleusercontent.com/pw/AM-JKLVvWyI-5ilACE2LZEb-luC_6m1fb7cwnRfp3vUO36TtJ0WVH3tcEZ9q74mfi1SBCjv5oZHhjFiD1cTYYUBiubTv_L1wNZdKLRWncVJ6BfBFa7qMxGxnMd0eXb6qMf47MO4IXC4hZXIYOSsCx0hMWi6l=s800-no?authuser=0",
  tags: ["hiking", "oregon", "sisters"],
  disabled: true,
};

const trailhead =
  "https://www.google.com/maps/place/Obsidian+Trailhead/@44.2051449,-121.8726616,17z/data=!3m1!4b1!4m5!3m4!1s0x54bf5005f3395137:0x64b0073a16160758!8m2!3d44.2051411!4d-121.8704729";
const pageURI = "/blog/oregon/obsidian-trail";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Hike through fields of obsidian stone with mountain views on this Central Oregon day trip.`}
      subText={`11.5 miles, 1.5k gain`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`The `}
          <Link href={trailhead}>Obsidian Trail</Link>
          {` is a lollipop loop on the west side of the Three Sisters Wilderness, best visited from July through November. The area is unique and beautiful, and 
                    popular enough to require a permit for overnight and day trips. If you are thinking of hiking the Obsidian Trail, check the latest permit information with `}
          <Link href={CentralCascadesWildernessPermit}>the Forest Service</Link>
          {`. Besides the day permit, a Northwest Forest pass is also required to park at the
                    Obsidian Trailhead.`}
          <br />
          <br />
          {`The trail is accessed from the Old McKenzie Highway, a scenic drive that connects the town of Sisters with highway 126. If you're coming from Sisters, you'll
                    pass the Dee Wright Observatory on the way, at the McKenzie Pass summit (5,325 ft.). The Observatory is built on a massive lava bed, constructed
                    from that same volcanic rock during the Great Depression. It's a spectacular place to pull over on your way to the trailhead - there are great views
                    of the central cascades here. You can also walk a short interpretive trail through the lava beds with informational placards.`}
        </div>

        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="North Sister from the Dee Wright Observatory on McKenzie Pass."
            src="https://lh3.googleusercontent.com/pw/AM-JKLULR5H8nvIPY3sSZOD5RtPfXV-cY7Kbped41uHQ-iaLQa3aZs3DNIt-jdZVw-Xk4cYfWG6Bt_7Npu0wnhFnpR4vWe6_h7wdumLqZwlVNzWqWkwcrKecjJT5xk5YxjDVyGaHTX0It1FpBjagjYjcoyIe=w800-h535-no?authuser=0"
            width={800}
            height={535}
          />
        </div>

        <h1 className={utilStyles.justifyCenter} id="obsidian-trail">
          Hiking the Obsidian Trail
        </h1>
        <br />
        <div>
          {`The Obsidian trail starts from a gravel loop parking lot, climbing through old burn, lava beds before connecting with a loop trail. The loop is clearly marked,
                    and connects with the Pacific Crest Trail (also clearly marked). Most people hike the loop counter-clockwise.
                    The section through the lava beds is fairly interesting, but the lollipop loop at the end of the trail is the best and most scenic. As you hike on the trail, 
                    take note of the ground at your feet - glassy chunks of obsidian are scattered about, remnants of volcanic activity from millennia past.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Sister creek winding through a meadow below North Sister."
              src="https://lh3.googleusercontent.com/pw/AM-JKLUuBa0vlw6safJD7Aj7z0dH4UuH0EnuFJ3DkbtOQzk3wKlM0cgI-pq1DPxIWtZkSv5QlDM67lOlxyBh1dbL45A_I_dTrMRofxhzic_Nqgg_Ebdqy8y-EFzBw76KPxgpEBEOItkMATBGzQQxtjE8pjko=w450-h600-no?authuser=0"
              width={450}
              height={600}
            />
          </div>
          <br />
          <br />
          {`The lollipop loop features a waterfall and a magnificent lunch spot by Sister Spring with views of North Sister and surrounding snow fields. If you have the
                    time, it's worth exploring or hanging out near Sister Spring. The meadows here are beautiful, and there's plenty of great views to take in.`}
          <br />
          <br />
          {`If you're hiking with dogs, this may not be the loop for you. Obsidian is glassy, sharp, and almost everywhere on the upper sections of the trail.
                    Consider leaving your dogs at home for this hike unless you have dog boots or similar paw protection.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Alpine meadow on the Obsidian Trail, Three Sisters Wilderness."
              src="https://lh3.googleusercontent.com/pw/AM-JKLXZt6LxC0PfgSUG8Oi74djgLftdaJUJRr_urQXFFhOTx0RgI6__HZb_Ln5vkA2q6bNTXou4AXoo-78uq3vy88lMEiCeVciQXlXiUDhUTO3A_WLFs6YMS2Idt9uEmZLgYN_acyN9IJUcPvv3OSaZrFoe=w800-h535-no?authuser=0"
              width={800}
              height={535}
            />
          </div>
          <br />
          <br />
        </div>
        <div>
          {`The McKenzie Highway is a narrow, seasonally open road and is not recommend for large vehicles or those with trailers (there's a turnaround point outside Sisters).
                    Note that the road is typically closed to motorized traffic from November through July, though this changes year to year depending on snowfall.`}
          <br />
          {`A gorgeous bike trip can be had by visiting the McKenzie highway just before it opens for motorized traffic. On the Sisters side (north),
                    drive your car to the highway gate, and then bike from the gate McKenzie Pass summit. For best results, try to time your trip after snow has
                    melted out but before the highway is opened to cars. I wouldn't recommend biking this once the road is open because of how narrow it is
                    (there's almost no shoulder).`}
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Obsidian Trail, Three Sisters Wilderness."
              src="https://lh3.googleusercontent.com/pw/AM-JKLXNMW8TL-8xrGW_qU69jKliEhCxmHAjgPFttbpeF9o5nhHfXVHaEmRDJO61AMwyCkXnDrf9-fxJ4kRffHNGz4G-BGnLKBs5tBrTKE0md8ia2Jq288iVkBrM25q1jBPZwxdFQW0rgwy_iQKNb_nhsaFD=w800-h535-no?authuser=0"
              width={800}
              height={535}
            />
          </div>
        </div>
      </div>
      <RelatedPosts metadata={metadata} tag="sisters" />
    </Layout>
  );
}
