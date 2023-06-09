import FeaturedPost from "../components/featuredpost";
import AffiliateDisclosure from "../components/affiliate_disclosure";
import Layout from "../components/layout";
import LinkButton from "../components/linkbutton";
import { Posts } from "../lib/metadata";
import utilStyles from "../styles/utils.module.css";
import config from "../lib/config";
import { backgroundImageStyle } from "../lib/common";
import Socials from "./socials";

const backgroundImage =
  "https://lh3.googleusercontent.com/pw/AL9nZEVYk7S03VbTbPmMXNWg61YYuZ_hQdE75O5_Cj2yRHu6t5KKuCLnkgW3PWGxz0nlH8jwzA4bUHFzFBNiDDKFAxbVHkm81yS19htj9X4FYVrhofToP2MZbjGPcschCRiytpfcARvEsV4rPvintQ7d4SK8=w600-h900-no?authuser=0";
const marginStyle = {
  maxWidth: "72rem",
  padding: "0 1rem",
  margin: "1rem auto",
  borderRadius: "0px",
};

export default function Links({ title, showSocial = false }) {
  const featuredPost = Posts()[0];
  return (
    <Layout
      headerText={title}
      noHeader
      related={{
        text: "Recommended Posts",
        metadata: { title: "" },
        tag: "guides",
      }}
    >
      <div
        className={`${utilStyles.coverContainer}`}
        style={{
          ...marginStyle,
          ...backgroundImageStyle(backgroundImage),
        }}
      >
        <p
          key="info"
          className={utilStyles.floatyText}
          style={{ fontSize: "80px" }}
        >
          Where would you like to go next?
        </p>
        <div className={utilStyles.centeredRow} style={{ maxWidth: "800px" }}>
          <LinkButton
            title="My REI Favorites"
            body="Gear That's Lasted Me Over 1000+ Miles"
            src="https://bit.ly/40uPjZc"
            animation={utilStyles.bounceAnimation}
          />
          <LinkButton
            title="Latest Youtube Video"
            body="2 Week Arizona Road Trip - HIKING SEDONA & GRAND CANYON CAMPING"
            src="https://youtu.be/ygTuuuXGlPI"
            animation={utilStyles.shakeAnimation}
          />
          <LinkButton
            title="Favorite Backpacking & Travel Instant Coffee"
            body="Code LAURENG10 for $10 off your 1st order"
            src="https://bit.ly/3m2ZBki"
          />
          <LinkButton
            title="Amazon Backpacking Favorites"
            body="Items I Know & Love!"
            src="https://www.amazon.com/shop/laurensbigadventure"
          />
          <LinkButton
            title="My Hawaii Swimsuit"
            body="Save 15% with code LAUREN84928"
            src="https://bit.ly/3iCkTmP"
          />
          <LinkButton
            title="Shop my LTK"
            body="Like my Outfits? They’re Linked Here! Can't find what you want? Just DM Me!"
            src="https://www.shopltk.com/explore/laurengastineau"
          />
        </div>
        <br />
        <div
          style={{
            fontFamily: 'font-family: "OpenSans",sans-serif',
            fontWeight: "400",
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
              <Socials
                instagram={config.social.instagram}
                tiktok={config.social.tiktok}
                pinterest={config.social.pinterest}
              />
            </div>
          )}
        </div>
        <br />
      </div>
      <AffiliateDisclosure />
    </Layout>
  );
}
