import Link from "next/link";
import links from "../../lib/links";
import utilStyles from "../../styles/utils.module.css";

export default function BearSafetyNC() {
  return (
    <>
      <h1 className={utilStyles.justifyCenter} id="bear-safety">
        Bear Safety
      </h1>
      <div>
        {`When exploring Washington's beautiful North Cascades, it's important to be aware of and prepared for bear encounters. 
            The North Cascades are home to both black and grizzly bears, which can be dangerous if approached or encountered unexpectedly.`}
        <br />
        <br />
        {`To stay safe, always make noise while hiking to alert bears to your presence and avoid surprising them. Keep your campsite clean and store all food, 
            trash, and scented items in `}
        <Link href={links.hiking.bearVault}>bear-resistent containers</Link>
        {`, `}
        <Link href={links.hiking.ursack}>bear bags</Link>
        {`, or hung at least 10 feet off the ground and 4 feet from tree trunks.`}
        <br />
        <br />
        {`If you do encounter a bear, stay calm and give it plenty of space. Don't approach, feed, or try to get a closer look at the bear. 
            If the bear approaches you, make yourself look as big as possible and try to scare it away by shouting or clapping. 
            If the bear persists or acts aggressively, deploy your bear spray if you have it and try to retreat slowly and calmly. 
            By following these guidelines and being bear aware, you can help ensure a safe and enjoyable trip to the North Cascades.`}
      </div>
    </>
  );
}
