import { rawData } from "../../lib/common";
import Video from "../video";
import utilStyles from "../../styles/utils.module.css";

export default function ChocolateDates() {
  return (
    <div>
      {`Our favorite trail snack (and all-around amazing treat) is chocolate-covered peanut butter filled dates, AKA "healthy snickers".
          These taste amazing, are easy to prep, and pack well on trips.`}
      <br />
      <br />
      {`During warm weather the dates will get melty, so they are best packed in their own container.`}
      <br />
      <br />
      <div className={utilStyles.centered}>
        <Video src={rawData("hs.MP4")} controls width={337} height={600} />
      </div>
    </div>
  );
}
