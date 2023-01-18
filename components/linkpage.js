import FeaturedPost from "../components/featuredpost";
import AffiliateDisclosure from '../components/affiliate_disclosure'
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
          style={{ fontSize: "6.0vmax" }}
        >
          My Links
        </p>
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
            body="Like my outfits? They’re linked here!"
            src="https://www.shopltk.com/explore/laurengastineau"
            animation={utilStyles.bounceAnimation}
          />
          <LinkButton
            title="My Backpacking Gear"
            body="Gear that's lasted me over 1000+ miles"
            src="/blog/guides/backpacking-gear-guide"
            animation={utilStyles.shakeAnimation}
          />
          <LinkButton
            title="REI Hipbelt Pocket"
            body="My Favorite Backpack Attatchment"
            src="https://bit.ly/3KkMTnp"
          />
          <LinkButton
            title="Camera Clip"
            body="Keep Your Camera Out & Within Quick Reach. Attaches to your backpack strap"
            src="https://bit.ly/3W3IwTj"
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
      <AffiliateDisclosure> </AffiliateDisclosure>
    </Layout>
  );
}
