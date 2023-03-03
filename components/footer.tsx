import styles from "./footer.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import config from "../lib/config";
import Socials from "./socials";

export default function Footer() {
  return (
    <div className={`${styles.footer} ${utilStyles.centered}`}>
      <div
        className={utilStyles.flexGapContainer}
        style={{
          minHeight: "100px",
        }}
      >
        {config.social.github && (
          <div
            style={{
              paddingTop: "8px",
            }}
          >
            <Socials github={config.social.github} height={30} width={30} />
          </div>
        )}
        <div>
          <Link href="/archive">All Posts</Link>
        </div>
        <div>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <Link href="/filter/guides">Guides</Link>
        </div>
        <div>
          <Link href="/links">Links</Link>
        </div>
      </div>
    </div>
  );
}
