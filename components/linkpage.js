import FeaturedPost from "../components/featuredpost";
import Layout from "../components/layout";
import LinkButton from "../components/linkbutton";
import RelatedPosts from "../components/related_posts";
import { Posts } from "../lib/metadata";
import utilStyles from "../styles/utils.module.css";
import { SocialIcon } from "react-social-icons";
import config from "../lib/config";
import HeaderText from "./header_text";
import { backgroundImageStyle } from "../lib/common";
import _const from "../lib/const";

const backgroundImage =
  "https://lh3.googleusercontent.com/pw/AL9nZEVYk7S03VbTbPmMXNWg61YYuZ_hQdE75O5_Cj2yRHu6t5KKuCLnkgW3PWGxz0nlH8jwzA4bUHFzFBNiDDKFAxbVHkm81yS19htj9X4FYVrhofToP2MZbjGPcschCRiytpfcARvEsV4rPvintQ7d4SK8=w600-h900-no?authuser=0";
const marginStyle = {
  maxWidth: "72rem",
  padding: "0 1rem",
  margin: "1rem auto",
  borderRadius: "0px",
};

export default function Links({ title, showSocial }) {
  const featuredPost = Posts()[0];
  return (
    <Layout headerImage={_const.noHeader} headerText={title}>
      <HeaderText styles={marginStyle} backgroundImage={backgroundImage}>
        <p
          key="info"
          className={utilStyles.floatyText}
          style={{ fontSize: "62px" }}
        >
          My Links
        </p>
        <div
          style={{
            fontFamily: 'font-family: "Poppins",sans-serif',
            fontWeight: "500",
            color: "white",
            margin: "auto",
            fontSize: "18px",
            marginRight: "50px",
            marginLeft: "50px",
            background: "rgba(0, 0, 0, .5)",
            maxWidth: "1200px",
            display: "flex",
            padding: "5%",
            lineHeight: "1.2",
          }}
        >
          <div>
            <br />
            <p>
              {`This page contains affiliate links, which means that by using these links, I will earn a small commission
                        at no additional cost to you. This helps support my adventures and allows me to make more resources like this for you. Thank you!`}
            </p>
            <p>{`- Lauren 💙`}</p>
          </div>
        </div>
        <br />
        <br />
      </HeaderText>
      <div
        className={`${utilStyles.coverContainer}`}
        style={{
          ...marginStyle,
          ...backgroundImageStyle(backgroundImage),
        }}
      >
        <br />
        <br />
        <div className={utilStyles.centeredRow} style={{ maxWidth: "800px" }}>
          <LinkButton
            title="Shop my LTK"
            body="Like my Outfits? They’re Linked Here! Can't find what you want? Just DM Me!"
            src="https://www.shopltk.com/explore/laurengastineau"
            animation={utilStyles.bounceAnimation}
          />
          <LinkButton
            title="My Backpacking Gear"
            body="Gear That's Lasted Me Over 1000+ Miles"
            src="/blog/guides/backpacking-gear-guide"
            animation={utilStyles.shakeAnimation}
          />
          <LinkButton
            title="Camera Clip"
            body="Keep Your Camera Out & Within Quick Reach. Attaches to your backpack strap"
            src="https://bit.ly/3W3IwTj"
          />
          <LinkButton
            title="REI Hipbelt Pocket"
            body="My Favorite Backpack Attatchment"
            src="https://bit.ly/3KkMTnp"
          />
          <LinkButton
            title="My Amazon Favorites"
            body="Items I Know & Love!"
            src="https://www.amazon.com/shop/laurensbigadventure"
          />
        </div>
        <br />
        <div
          style={{
            fontFamily: 'font-family: "Poppins",sans-serif',
            fontWeight: "500",
            margin: "auto",
            background: "rgba(255, 255, 255, .75)",
            maxWidth: "600px",
            padding: "5%",
            lineHeight: "1.2",
            borderRadius: "4px",
          }}
        >
          <FeaturedPost post={featuredPost} />
          <br />
          {showSocial && (
            <div
              className={utilStyles.centeredRow}
              style={{ marginBottom: "25px" }}
            >
              <SocialIcon url={config.social.instagram} />
              <SocialIcon url={config.social.tiktok} />
              <SocialIcon url={config.social.pinterest} />
            </div>
          )}
        </div>
        <br />
      </div>
      <div style={marginStyle}>
        <RelatedPosts
          text="Recommended Posts"
          metadata={{ title: "" }}
          tag="guides"
        />
      </div>
    </Layout>
  );
}
