import Post from "./post";
import utilStyles from "../styles/utils.module.css";

export default function FeaturedPost({ post, txt = "" }) {
  return (
    <div className={utilStyles.centered}>
      <div
        className={utilStyles.flexGapContainer}
        style={{
          maxWidth: "600x",
          height: "fitContent",
        }}
      >
        <div>
          {`Do you like exploring the outdoors? Join us as we share recent hiking trips, camping suggestions, 
            and backcountry guides.`}
          <br />
          <br />
          {`Check out our most recent post for ideas planning your next trip.`}
          <br />
          {txt}
        </div>
        <br />
        <div>
          <Post item={post} imgSizing={280}/>
        </div>
      </div>
    </div>
  );
}
