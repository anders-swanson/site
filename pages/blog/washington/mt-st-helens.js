import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import Link from "next/link";
import Video from "../../../components/video";
import Pinnable from "../../../components/pinit";
import links from "../../../lib/links";
import { rawData } from "../../../lib/common";

//+metadata
let metadata = {
  title: "Climb Mount St. Helens",
  date: "2022-09-14",
  image:
    "https://lh3.googleusercontent.com/pw/AL9nZEWkrh9eHct0UNXH1naAfOdKS8q7HCwHf-Tjavt8Y7GpPDE7YLrYBTI3Rwn-G8f2c0trfaJzIsU6kNxzPNzNZFQr-7Z1OcqxcnsrCaalcUDQnE_KL24O39FQF8XKO88yOOon5wtFN-AF7-G0BpQVlDMZ=s800-no?authuser=0",
  tags: ["hiking", "guides", "washington", "camping"],
};

const pageURI = "/blog/washington/mt-st-helens";
const climbingPermits = "https://www.recreation.gov/permits/4675309";
const climbersBivouac =
  "https://www.google.com/maps/place/Climbers+Bivouac+Trailhead/@46.146272,-122.1858107,17z/data=!3m1!4b1!4m5!3m4!1s0x54969c8ba8fbef91:0x2a76c011a0f90a6b!8m2!3d46.1462683!4d-122.183622";
const apeCaves =
  "https://www.google.com/maps/place/Ape+Cave/@46.1096413,-122.2201436,15z/data=!3m1!4b1!4m5!3m4!1s0x54969d3823537baf:0xc9325f46a30596ca!8m2!3d46.1096273!4d-122.2113888";
const apeCavesPermits = "https://www.recreation.gov/timed-entry/10086990";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Day hike from Climber's Bivouac to the summit of the Cascade mountain range's most active volcano.`}
      subText={`9 miles, 4.7k gain`}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "washington",
      }}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`Mount St. Helens is one of the most accessible, prominent peaks in the Cascade range. The hike to the summit is a gorgeous, strenuous day trip
                    with awesome views of the 1980 eruption crater and lava flows. You'll hike through forest, scramble through dense fields of volcanic rock, and
                    climb through steep volcanic ash to the summit.`}
          <br />
          <br />
          {`The hike is more difficult than the 9 miles suggests due to the exposure and difficult terrain. Climbers should be in good
                    physical condition and comfortable manoeuvering over large boulders. This guide describes hiking during the summer season - out of season
                    hikers should take caution and prepare themselves appropriately. If you hike during the mid to late summer after the snow has melted,
                    you should not require any special gear to reach the summit.`}
        </div>

        <h1 className={utilStyles.justifyCenter} id="permits">
          Permits
        </h1>
        <div>
          {`From April 1st to October 31st, all climbers must have a valid permit issued through `}
          <Link href={climbingPermits}>Recreation.gov</Link>
          {`. Permits are limited to 110 climbers per day, and are issued on a one-month rolling window: For example, if you want to climb in August, you should
                    reserve your permits on July 1st. Permits can be competitive - set an alarm the day before you will be reserving your permits, so you can be ready
                    when the system opens at 7AM PST.`}
          <br />
          {`The best time to hike is from mid-July through September, when the trail is clear of snow. Earlier in the year involves climbing on snow,
                    which can add a layer of difficulty.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Video height={600} width={338} src={rawData("IMG_1315.mp4")} />
          </div>
        </div>
        <h1 className={utilStyles.justifyCenter} id="climbing-guide">
          Climbing Guide
        </h1>
        <br />
        <div>
          {`The most direct route to the summit begins at `}
          <Link href={climbersBivouac}>{`Climber's Bivouac`}</Link>
          {`, and is a 9 mile round-trip hike. There are other starting points, but I recommend beginning here to keep your hike simple.
                    The hike will be more difficult than expected for its milage, so plan to spend at least 6-10 hours on the trail depending on your fitness level.`}
          <br />
          <br />
          {`The first two miles are relatively easy, climbing gently through the forest. The forest quickly changes to a rocky lava flow, becoming
                    increasingly strenuous. Throughout this section you will be moving over large boulders, which can have sharp edges. Some climbers like to bring gloves
                    to protect their hands while working their way through the boulder field.`}
          <br />
          <br />
          {`Eventually, the boulders give way to steep volcanic ash that shifts underfoot. Expect to kick up clouds of dust as you work your way up. 
                    This if the final section before the rim, and it's undoubtedly the worst. The sandy ash combined with an intense grade is tiring, but before long you'll reach the top.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="1"
              src="https://lh3.googleusercontent.com/pw/AL9nZEUVMbHYcuF5b9rQctog-Dlx8d5UXCRVtKaFmnT3C9KlqmDK4hdHSvS8OpZKJ-wLAtlG6TfDFeJgeICktBeb9Da7b66BrI8b1Iy87PVfWFhCTaR6_-36-7uObDcqm6W2d-ahHzI_ySzoV2G7KOXwU5DY=w800-h533-no?authuser=0"
              width={800}
              height={533}
            />
          </div>
          <br />
          <br />
          {`From the rim, you'll have an awesome view of the crater formed by the 1980 eruption. The crater is deceptively large, almost a mile in diameter, and home
                    to the newly formed Crater Glacier. The young glacier built up after the eruption, created by snow that tumbles into the crater. The glacier is formed of layered ice and rock,
                    and completely encircles the crater's central volcanic cone. Most days, small plumes of steam or smoke will emerge from the center cone.`}
          <br />
          <br />
          {`On the way down, take care not to lose your way. It's easy to take a wrong turn once you reach the boulder fields, but you'll have an easier time staying on track if you
                    keep your eye out for wooden post markers - you'll notice these posts on the way up, and they mark the approximate location of the trail.`}
          <br />
          <br />
          {`Bring plenty of sunscreen and water on your hike to the summit. The trail has no water, and is without shade once you exist the forest. A minimum 1.5 liters of
                    water is recommend, and an electrolyte supplement like `}
          <Link href={links.misc.buoyElectrolytes}>Buoy</Link>
          {` will help to replenish lost salts and energy.`}
        </div>

        <h1 className={utilStyles.justifyCenter} id="tips">
          Other Tips
        </h1>
        <br />
        <div>
          {`Exploring the nearby `}
          <Link href={apeCaves}>Ape Caves</Link>
          {` is a fun way to extend your trip. The Ape Caves
                    are a lava tube cave system with an upper and lower section.
                    You can easily spend a few hours exploring, and cave is accessible for most people. Make sure to bring
                    at least two light sources per person if you're planning to explore the cave (cell phone flashlights are not bring enough).`}
          <br />
          {`We brought our `}
          <Link href={links.misc.lumenaid}>Lumen Aid</Link>
          {` collapsable LED lantern with us, which was perfect for
                    checking out the cave system.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="1"
              src="https://lh3.googleusercontent.com/pw/AL9nZEV0Q-PiTjhIBmxaGimJJgcxru5wvsHHDXk2DHfPt4iG_OkT4FUi1Lv-KY_kkdfoqhBzRATdIeg_G5haZylSjQgaLMu3seTcmvZJzCJhfKJjeiqzRnBEghmEyv4PZLAfVPYRgRpCi_31d4G245D07S9n=w800-h533-no?authuser=0"
              width={800}
              height={533}
            />
          </div>
          <br />
          <br />
          {`Ape Caves requires a permit for entry, but these are usually not too challenging to get. I was able to get a permit the day before I wanted to visit without
                    any trouble. Visit `}
          <Link href={apeCavesPermits}>Recreation.gov</Link>
          {` for information on permits for the caves.`}
          <br />
          <br />
          {`If you're interested in camping nearby, there are a quite a few developed, and free campsites nearby. Reach out via our `}
          <Link href="/contact">Contact Page</Link>
          {` if you'd like more information about dispersed camping near Climber's Bivouac trailhead.`}
          <br />
          {`A fun 2-day itinerary is to spend one day exploring Ape Caves, find a dispersed camp for the night, and summit Mount St. Helens the next day.`}
          <br />
          <br />
          {`Happy trails!`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="1"
              src="https://lh3.googleusercontent.com/pw/AL9nZEXdsOSfwinwqT04E6vpx2rysyboVvo1HWdJtxeIx41FCGkDTt8VqRZnSbwnaAZpVuNfbysDPsk2o_EPCU6VuzWgOfYYyalXT55UshaU03dJxcdUVzMIqlKF9Eqip672OYugIHAxY4tOw-p5ninnPdoK=w800-h533-no?authuser=0"
              width={800}
              height={533}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
