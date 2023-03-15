import utilStyles from "../../../styles/utils.module.css";
import Pinnable from "../../pinit";
import Contact from "../../contact";
import MapEmbed from "../../maps";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";
import HikeInfo from "../../hike_info";
import { BestSeason, HikeDifficulty } from "../../../lib/hike_info_types";
import Link from "next/link";

const pageURI = "/blog/washington/blue-lake";
const trailhead =
  "https://www.google.com/maps/place/35%C2%B058'32.5%22N+116%C2%B043'38.3%22W/@35.9756946,-116.7286124,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.975692!4d-116.727311";

//+metadata
export const metadata = {
  title: "Room Canyon in Death Valley National Park",
  date: "2023-03-09",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8DIG-16s9Rfke25vlHl6eoPsTg1FaIH5cyB0-5pkLLe6ZyN7B5WShs5C1fhEYPFHKdnjUJNtHISpzXoiSNtYffhrnrD_i3GIisWS7lArNzT2-O914ynfdwD0ho_Mw6IO7YFJkQWgEc1U8SBnthVaxUj=s800-no?authuser=0",
  tags: ["hiking", "national park", "death valley", "california"],
  preview:
    "Adventure through the twists and turns of Room Canyon, a stunning slot canyon nestled in southern Death Valley.",
};

export default function RoomCanyon({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="3 miles round-trip"
          elevation="400 feet"
          difficulty={HikeDifficulty.EASY}
          season={BestSeason.WINTER_SPRING}
          trailhead={trailhead}
        />
        <div>
          {`Nestled in the remote landscape of southern Death Valley National Park, Room Canyon offers hikers a thrilling adventure through a slot canyon with towering walls 
          that rise over 100 feet high.`}
          <br />
          <br />
          {`With its awe-inspiring rock formations and dramatic play of light, Room Canyon is a rewarding Death Valley hike for minimal effort.`}
          <br />
          <br />
        </div>

        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Hiking Room Canyon in Death Valley National Park"
            src="https://lh3.googleusercontent.com/pw/AMWts8BYxL1yYEvpvHv2fS3itzoKih0V00zymSAYs6jO8BkoFDdp7_n-81065_NPjSOnQ87NxqSzhiA2Q2bCljcAlqO2bu6lFAFtO2cKzQNLBoL6vlUNHUdMQ6enmDWdqcigJmgfyOJzRp-9CGrZlf2VOVIN=w533-h799-no?authuser=0"
            width={533}
            height={799}
          />
        </div>
      </div>
      <ReadMoreLink
        enabled={readMore}
        text="exploring Room Canyon"
        uri={pageURI}
      >
        <div className={utilStyles.flexGapContainer}>
          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There and Parking
          </h1>
          <div>
            {`The Room Canyon hike starts about 40 miles south of Furnace Creek off Badwater Road. There's no trailhead here, nor is there any signage, markers, or 
            any indication at all that there's a trail here. However, there is a great hike hiding here, and I've added a pin below to help you find its
            starting point.`}
          </div>
          <div>
            {`Once you arrive at the marker, pull your car to the side of the road and park on the shoulder. Room Canyon is due east from the pinned location.`}
          </div>
          <MapEmbed lat="35.975694" long="-116.727306" />

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>

          <div>
            {`The hike to Room Canyon starts on the east side of the road (on your left, driving from Furnace Creek), moving gently uphill through gravel and desert brush.
            There's no visible trail here, but you may see footprints heading east towards the canyon. Keep going and you'll get to the canyon after a short walk.`}
            <br />
            <br />
            {`The following photo shows the canyon's entrance after hiking up from the road. Sometimes it can be difficult to find the canyon. If you find yourself
            hiking steeply uphill or in a spot that doesn't match the photos, you're most likely in another canyon to the north or south of Room Canyon.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Room Canyon Entrance, Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8DUQJK24yxcyAWfmksq31Om2nQFr7uBpaCR3g-uq97-FffluD-K4xblUh_94G0ZSYdCisSaI3aPsd5g4ecZPQAvxDtbZa5Dxug6ndYXfk8vX3CdSjj1IwGux3K2l45EmJ7A2Yix-vFEbKkHvv2zfBWv=w799-h533-no?authuser=0"
                width={799}
                height={533}
              />
            </div>
            <br />
            {`When you're hiking in Room Canyon, there are two side passages to watch out for. The first fork is a short slot on your left, leading to a dead end.`}
            <br />
            <br />
            {`The second fork is a more important landmark. When you arrive at the second fork, make sure to take a left to get the "Room" section of Room Canyon.
            The passage to the right leads to a separate wash that isn't as interesting to see (most people skip the right fork).`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Room Canyon Fork, Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8CaTZVDBhzXq_R58IgVg6nHliKjgscy0Sb73g4ypyYsML-1ZopniVuzueaMyxfWxfkm2SLtJZulcPf2nvKyC_G03mfE2m0FrFlwLaIWYsEHQY09T_Ioown02cWDYApZsnMBTJHftzisRKo-5441xs0m=w799-h533-no?authuser=0"
                width={799}
                height={533}
              />
            </div>
            <br />
            <br />
            {`As you proceed along the left fork, the canyon walls grow steeper, and it begins to feel more like a slot canyon. There's a neat keystone here that you can walk under, and some fun
            enclosed spaces to squeeze through.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Admiring the walls of Room Canyon, Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8BL9Q0iFWGqsCirYrVrc_wkvBw6XUO1N8qZxBznvenTnq-349q9P5lj3iFbGLpkQLoZw1vMhdr5Hcg6XbM5lEtQRG5nLVUD9LdB6ytvFwAaExTOVNHf7fjHUPISrdRFxR34NFjRToBLtMXx5UpXIeqH=w533-h799-no?authuser=0"
                width={533}
                height={799}
              />
            </div>

            <br />
            <br />
            {`Getting further in, the canyon widens to a large "Room" with high walls. We decided to stop and have lunch here, admiring the rock formations.
            The afternoon sun was beginning to play in the canyon walls and light up the rock.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="The 'Room' of Room Canyon, Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8Bxy0XZ8IQQ_QMVogmI4bOmLYhaebcwPF7FV56rc6G_XezZzh9T4zhQ_AUEgn0jfUwcXlsPBlrMbgB49LRkF297I05knrMHkV1TGE7TZGibpr2-RpLdmEKqviNsoBtcO5RoNMocA5evJuZuwgZhvxm1=w799-h533-no?authuser=0"
                width={799}
                height={533}
              />
            </div>
            <br />
            <br />
            {`Past the Room, the canyon becomes more and more rocky, and there's a couple small scrambles to climb over. 
            You'll eventually arrive at a dryfall that marks the end of the trail.`}
            <br />
            <br />
            {` We scrambled up the dryfall to see if it was worth continuing, and found that the canyon becomes rocky, difficult to traverse, and much less impressive.
            After a quick rest at the dryfall, we turned around and hiked back to the car.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Dryfall towards the end of Room Canyon, Death Valley National Park"
                src="https://lh3.googleusercontent.com/pw/AMWts8DuRixGMquyAhEQ1NwahoF_0j04EBuvVzqrNZVRz5dRxzNb5afQbD0KZ9pQ6RslR7_4An8lUAEDtKP2EQA1qoa-rp0cguG8qeBW5VtQZj9FfbIht9OzLXzF5oKkJ1vFbiq_NpIz-lux6CVQMArtRy_0=w533-h799-no?authuser=0"
                width={799}
                height={533}
              />
            </div>
          </div>
          <h1 className={utilStyles.justifyCenter} id="other-tips">
            Other Tips
          </h1>
          <div>
            {`Room Canyon is a completely undeveloped trail, and may be difficult to navigate at times. If you find yourself in another canyon, backtrack in the direction of your
            car and try to reorient yourself in a more easterly direction. The canyon entrance should be in a nearly straight line east from the `}
            <Link href={trailhead}>waypoint</Link>
            {`.`}
            <br />
            <br />
            {`The best season to hike Room Canyon is the winter, to avoid the oppressive heat of Death Valley during the remainder of the year. Because of the 
            area's remoteness, it's not recommended to hike here during the summer. Please also be mindful not to leave any trash in the area: 
            any debris left in Room Canyon will remain until another hiker picks them up.`}
            <br />
            <br />
          </div>
        </div>
        <Contact />
      </ReadMoreLink>
    </>
  );
}
