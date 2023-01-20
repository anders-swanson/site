import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Burger from "./burger";
import PostBox from "./postbox";
import Search from "./search";
import { useState, useEffect } from "react";
import { CapitalizeWords } from "../lib/common";
import Script from "next/script";
import config from "../lib/config";
import { Posts } from "../lib/metadata";
import RelatedPosts from "./related_posts";

export const title = `Trails and Trekking`;
const name = title;
const defaultHeaderImage = "/cover.jpeg";
const maxScroll = 5;

export function PostHeader({ txt, stxt }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "40px" }} className={styles.headerText}>
        {CapitalizeWords(txt)}
      </h1>
      <h1 style={{ fontSize: "25px" }} className={styles.statsText}>
        {stxt}
      </h1>
    </div>
  );
}

export default function Layout({
  children,
  home,
  allPostsData,
  postsHeading,
  ogImage,
  headerText,
  noHeader,
  subText,
  description,
  idx,
  perPage,
  related,
}) {
  let txt = headerText ? headerText : name;
  let stxt = subText ? subText : "";
  // State for the search box
  const [search, setSearch] = useState("");
  // State for the scroll effect
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    // set visibility if page is refreshed on a scroll position
    setVisible(!isScrolled());
  }, []);

  // set isVisible property to false if the viewport is past maxScroll pixels
  const onScroll = () => {
    if (isScrolled()) {
      isVisible && setVisible(false);
    } else {
      setVisible(true);
    }
  };

  // use the scroll effect
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const descriptionText = description ? description : title;

  return (
    <>
      {config.google.gtag && (
        <>
          {" "}
          <Script
            id="gtag1"
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${config.google.gtag}`}
          />
          <Script id="gtag2" strategy="lazyOnload">
            {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${config.google.gtag}', {
          page_path: window.location.pathname,
      });
  `}
          </Script>
        </>
      )}

      {config.pinterest.enabled && (
        <Script id="pinit" strategy="lazyOnLoad">
          {`!function(a,b,c){var d,e,f;d="PIN_"+~~((new Date).getTime()/864e5),a[d]?a[d]+=1:(a[d]=1,a.setTimeout(function(){e=b.getElementsByTagName("SCRIPT")[0],f=b.createElement("SCRIPT"),f.type="text/javascript",f.async=!0,f.src=c.mainUrl+"?"+Math.random(),e.parentNode.insertBefore(f,e)},10))}(window,document,{mainUrl:"https://assets.pinterest.com/js/pinit_main.js"});`}
        </Script>
      )}

      <Head>
        {config.google.siteVerification && (
          <meta
            name="google-site-verification"
            content={config.google.siteVerification}
          />
        )}

        <title>{headerText ? headerText : title}</title>
        <link rel="icon" href="logo.jpg" />
        <meta name="og:title" content={headerText ? headerText : title} />
        <meta
          name="og:image"
          content={ogImage ? ogImage : defaultHeaderImage}
        />
        <meta name="og:description" content={descriptionText} />
        <meta name="og:site_name" content={title} />
        <meta name="description" content={descriptionText} />
        <meta name="twitter:card" content={descriptionText} />
        <meta name="twitter:description" content={descriptionText} />
        <meta name="keywords" content="hiking, backpacking, oregon" />
      </Head>
      <div className={styles.headerBar}>
        <div className={styles.linkBar}>
          <Link href="/">Trails And Trekking</Link>
        </div>
      </div>
      <Burger />
      {config.search.enabled && (
        <Search search={search} setSearch={setSearch} />
      )}

      <br />
      <br />
      <div className={styles.container}>
        {!home && !noHeader && <PostHeader txt={txt} stxt={stxt} />}

        <main>{children}</main>
        {allPostsData && (
          <PostBox
            posts={allPostsData}
            heading={postsHeading}
            idx={idx}
            perPage={perPage}
          />
        )}
        {related && (
          <RelatedPosts
            metadata={related.metadata}
            tag={related.tag}
            text={related.text}
            readMore={related.readMore}
          />
        )}
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = Posts();
  return {
    props: {
      allPostsData,
    },
  };
}

function isScrolled() {
  const currentScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  return currentScroll > maxScroll;
}
