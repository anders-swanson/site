import Image from "next/image";
import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import { rawData } from "../../../lib/common";
import Link from "next/link";
import Video from "../../../components/video";
import Slider from "../../../components/slider";

//+metadata
let metadata = {
  title: "Columbia River Gorge Wildflowers",
  date: "2022-03-13",
  image:
    "https://lh3.googleusercontent.com/pw/AM-JKLXe8AqPQnAu5WMEfzYEdiiX67YL7i2ujDnG7UyNvDAxqlh4G7N2ETUZJgksfFwnxRf99IlOrZdFI0IXs0KriM4Anhft9QOECIaLRffu9gLq9moDNldiaPEpeVuzBOsbzqq7f9gzsKda8B1lNE_C86eV=s1067-no?authuser=0",
  tags: ["hiking", "wildflowers", "columbia river gorge", "oregon"],
};

const rowenaCrest =
  "https://www.google.com/maps/place/Rowena+Crest+Viewpoint/@45.6768915,-121.3049786,15.54z/data=!4m5!3m4!1s0x54961a222daa6039:0x6ff5db7101043183!8m2!3d45.6827367!4d-121.2992539";
const coyoteWall =
  "https://www.google.com/maps/place/Coyote+Wall+Trailhead/@45.7005925,-121.4037556,17z/data=!3m1!4b1!4m5!3m4!1s0x549610435a3707f1:0x6b0035cf329d6726!8m2!3d45.7005888!4d-121.4015669";
const columbiaHills =
  "https://www.google.com/maps/place/Dalles+Mountain+Ranch+Trailhead/@45.6787477,-121.1082523,13.21z/data=!4m12!1m6!3m5!1s0x549621be76f4f723:0xe92aeaedd990341!2sColumbia+Hills+Historical+State+Park!8m2!3d45.642663!4d-121.1055748!3m4!1s0x54962108104d5799:0x9a00c48d774ea793!8m2!3d45.6802063!4d-121.0882866";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Explore our suggestions on where to find beautiful wildflowers in the Columbia River Gorge.`}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "wildflowers",
      }}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`Once you are past Hood River in the Columbia River Gorge, the trees begin to thin out and give way to grasslands. 
                    Starting in late April to early May, these grasslands bloom with wildflowers, and 
                    the hills are blanketed with a sea of yellow (Balsamroot), purple (Lupine), and flowers of other colors.`}
          <br />
          <br />
          {`These are my top three recommendations to view wildflowers in the gorge, along with hiking tips to get the most out 
                    of your trip. Honorable mentions go out to Lyle Cherry Orchard and Dog Mountain (Dog Mountain requires a permit May through October).`}
        </div>
        <h2 className={utilStyles.justifyCenter} id="rowena-crest">
          Rowena Crest
        </h2>
        <div>
          {`There are two shorter hikes you can do at `}
          <Link href={rowenaCrest}>Rowena Crest</Link>
          {`, both of which are good for viewing flowers.
                    If you head uphill from the parking lot, you'll have a quick (2.2 mile round trip) climb through an oak savannah to an overlook bluff.`}
          <br />
          {`The second hike is a little longer (~3 miles), and also worth doing. A winding trail traverses Tom McCall preserve, ending at a cliff
                    above the Columbia River. There are some nice lunch spots here to sit on the rocks and take in the view.`}
          <br />
          <br />
          {`Rowena is extremely popular due to its accessibility, so plan to get here early if you want to snag a parking spot. The bluff is exposed to
                    strong winds which are typical of the eastern gorge, though there are typically calm, sunny days if you get lucky in May. Watch for and know how
                    to identify/avoid Poison Oak, which always grows here in the oak savannah.`}
        </div>
        <Image
          src="https://lh3.googleusercontent.com/pw/AM-JKLWl4YxE5oQmUCeYUcnKCAeaiS707KPeHjNWWjSpoVg4ply1RUylQa_ycDtZ7UyQOnrsj5WO_uwZnVVyqS8vE_WBCSlwg3WAPN_rjuD35rwn1fM79nhDa2utRzkq-1jRmjQyhuwIx3JeepWjYNAubDcD=w801-h1067-no?authuser=0"
          width={400}
          height={550}
          alt="Balsamroot and Lupine Blooming in the Columbia River Gorge"
        />
        <Image
          src="https://lh3.googleusercontent.com/pw/AM-JKLV13v3KsKIqJ8yj8_h13V45AU-H_qjj1uzv7alqkxxXymbjQZKFm9CMOBHF_BTNI0DvyFUVvx2grP9WkZFWdJ8cwGk5kdyN9QBxZcStk0ui7vjAurdRJZ7SbJvGIu52VI2-ZEYyg3Sr_rAjMfUVGPbW=w801-h1067-no?authuser=0"
          width={400}
          height={550}
          alt="Paintbrush flowers blooming in the Columbia River Gorge"
        />
        <h2 className={utilStyles.justifyCenter} id="coyote-wall">
          Coyote Wall
        </h2>
        <div>
          {`A pretty eight mile loop with views of the Columbia and Mount Hood, `}
          <Link href={coyoteWall}>Coyote Wall</Link>
          {` can optionally be made longer
                    by including the Catherine Creek area. Besides the wildflowers, the cliffs and rock formations here are worth seeing.`}
          <br />
          <br />
          {`The best place here to view flowers are on the grassy slopes adjacent to the 'wall', a west-facing sheer cliff near the trailhead.
                    If your timing is perfect, these slopes will be flooded with flowers that descend towards the river. Besides the other flowers already mentioned,
                    desert parsley is prevalent here.`}
          <br />
          <br />
          {`The loop trail follows a closed road before climbing through a rocky area with small waterfalls known as the Labyrinth. The trail then crosses over 
                    west towards the 'wall', before descending down to the trailhead. You can do this loop in reverse if you want to see the best wildflower area first.`}
        </div>
        <Slider
          slides={[
            "https://lh3.googleusercontent.com/pw/AM-JKLVkoOqn34gGsnFw2hUsKyzhZPNJzxtzT1FshRZvKZGSQZX6M0NryWD9uTUiCecZPPOu042K2IRPitKFOIwa_86IKaOaI2Yc6OcpblM2Q938DcNwYt4D0-BHZc_-ySTPe3c5gTQAff9Dm-YnkWGocsK6=w1597-h1067-no?authuser=0",
            "https://lh3.googleusercontent.com/pw/AM-JKLVOiUpy6nMKjoHglfsjfkPkXBjqe7zFRbipqWgahAMA6Cd-4sHP-TTmEKcSSUWiuX3gnVWbTkDZqeDPV2jx6pQ-gkyDNSy7BznBriFC_tSHMMnlzVEDAv2um-ZChyxLRxxvzpfiJTIv-J3I5G7eOL_b=w1597-h1067-no?authuser=0",
            "https://lh3.googleusercontent.com/pw/AM-JKLWNWCo6ODzkaM3rxi3J5H3mhRxi235OovfFyaeW-8Odvsrl0OT_nOGtxuei2WV8U4do-KNk7w2dQFp7dfn4hzonlWvZZsWW2xmUhK7-JTFijtdXgVbRN9uMFe9OD1L_NwoJXHpmifdADSMZUiJl6Ajb=w1597-h1067-no?authuser=0",
          ]}
          width={1200}
          height={750}
        />
        <h2 className={utilStyles.justifyCenter} id="columbia-hills">
          Columbia Hills State Park
        </h2>
        <div>
          {`Probably my favorite of the three, `}
          <Link href={columbiaHills}>Columbia Hills State Park</Link>
          {` is also the furthest out from town,
                    across the river from the Dalles, on the Washington side of the gorge. There's a good amount of trail here, with possibilities for loops, out and backs, 
                    and more.`}
          <br />
          <br />
          {`If you're looking for sheer density of flowers, this is definitely the place to go. During peak bloom, 
                    you'll find glittering yellow fields of Balsamroot as far as you can see. The hiking options are great too, with two different buttes 
                    (Stacker and Horsethief buttes), endless fields of flowers, and an abandoned ranch (Dalles Mountain Ranch). I really can't overstate how astounding 
                    the wildflowers are here, and I put Columbia Hills State Park on a 'must-do' list for April/May.`}
          <br />
          {`Find a map and plan your trip! If you're looking for inspiration, check our post about the `}
          <Link href="/blog/oregon/dalles-mountain">
            Dalles Mountain Loop + Stacker Butte.
          </Link>
          <br />
          <br />
          <div className={utilStyles.flexWrapContainer}>
            <Video src={rawData("dm1.mp4")} width={300} height={450} />
            <Video src={rawData("dm3.mp4")} width={300} height={450} />
            <Video src={rawData("dm2.mp4")} width={300} height={450} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
