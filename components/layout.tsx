import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Search from "./search";
import { useState, useEffect } from "react";
import { CapitalizeWords } from "../lib/common";
import Script from "next/script";
import config from "../lib/config";
import { Posts } from "../lib/metadata";
import PrevNextPost from "./prev_next_post";
import dynamic from "next/dynamic";
import BurgerMenu from "./burger_menu";

export const title = `Trails and Trekking`;
const defaultHeaderImage = "/cover.png";
const maxScroll = 5;

const DynamicPostBox = dynamic(() => import("./postbox"));
const DynamicRelatedPosts = dynamic(() => import("./related_posts"));
const DynamicAbout = dynamic(() => import("./mini_about"));
const DynamicFooter = dynamic(() => import("./footer"));

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
  home = false,
  allPostsData = null,
  postsHeading = "",
  ogImage = defaultHeaderImage,
  headerText = title,
  noHeader = false,
  subText = "",
  description = title,
  idx = 0,
  perPage = config.itemsPerPage,
  related = null,
  skipAbout = false,
}) {
  // State for the search box
  const [search, setSearch] = useState("");
  // State for the scroll effect
  const [isVisible, setVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navBarStyles, setNavBarStyles] = useState({
    top: "0px",
  });
  const [linkBarStyles, setLinkBarStyles] = useState({
    top: "10px",
  });
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

    if (window.scrollY > scrollPosition) {
      setNavBarStyles({
        top: "-55px",
      });
      setLinkBarStyles({
        top: "-55px",
      });
    } else {
      setNavBarStyles({
        top: "0px",
      });
      setLinkBarStyles({
        top: "10px",
      });
    }
    setScrollPosition(window.scrollY);
  };

  // use the scroll effect
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
      {config.google.gtag && (
        <>
          {" "}
          <Script
            id="gtag1"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${config.google.gtag}`}
          />
          <Script id="gtag2" strategy="afterInteractive">
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
        <Script id="pinit" strategy="afterInteractive">
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
        <link rel="icon" href="/logo.jpg" />
        <meta name="og:title" content={headerText ? headerText : title} />
        <meta name="og:image" content={ogImage} />
        <meta name="og:description" content={description} />
        <meta name="og:site_name" content={title} />
        <meta name="description" content={description} />
        <meta name="twitter:card" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="keywords" content="hiking, backpacking, oregon" />
      </Head>

      <div className={styles.headerBar} style={navBarStyles}>
        <BurgerMenu />
        {config.search.enabled && (
          <Search search={search} setSearch={setSearch} />
        )}
        <div className={styles.linkBar} style={linkBarStyles}>
          <Link href="/" className={styles.menu__item}>
            Home
          </Link>
          <Link href="/about" className={styles.menu__item}>
            About
          </Link>
          <Link href="/archive" className={styles.menu__item}>
            All Posts
          </Link>
          <Link href="/contact" className={styles.menu__item}>
            Contact
          </Link>
          <Link href="/filter/guides" className={styles.menu__item}>
            Guides
          </Link>
          <Link href="/links#info" className={styles.menu__item}>
            Links
          </Link>
        </div>
      </div>

      <br />
      <br />
      <div className={styles.container}>
        {!home && !noHeader && <PostHeader txt={headerText} stxt={subText} />}

        <main>{children}</main>
        {allPostsData && (
          <DynamicPostBox
            posts={allPostsData}
            heading={postsHeading}
            idx={idx}
            perPage={perPage}
          />
        )}
        {related && <PrevNextPost date={related.metadata.date} />}
        {related && (
          <DynamicRelatedPosts
            metadata={related.metadata}
            tag={related.tag}
            text={related.text}
            readMore={related.readMore}
          />
        )}
        {!skipAbout && (
          <>
            <DynamicAbout />
          </>
        )}
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
      <DynamicFooter />
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
