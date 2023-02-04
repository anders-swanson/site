import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import Contact from "../components/contact";
import RelatedPosts from "../components/related_posts";
import React from "react";
import About from "../components/about";

export default function Post() {
  return (
    <Layout headerText={"About Us"} skipAbout={true}>
      <About />
      <br />
      <div className={utilStyles.flexGapContainer}>
        <Contact />
      </div>
      <RelatedPosts
        text="Suggested Posts"
        tag="guides"
        metadata={{ title: "" }}
      />
    </Layout>
  );
}
