import Link from "next/link";
import styles from "./burger.module.css";
import { slide as Menu } from "react-burger-menu";

const bmBackground = "#e5e5e5";

const menuStyles = {
  bmBurgerButton: {
    zIndex: "9999",
    position: "fixed",
    width: "18px",
    height: "12px",
    left: "25px",
    top: "18px",
    transition: "top 0.3s",
  },
  bmBurgerBars: {
    borderRadius: "1.5px",
    background: "#000",
    height: "3px",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    backgroundColor: bmBackground,
    fontSize: "1.15em",
    paddingTop: "50px",
  },
  bmMorphShape: {
    fill: bmBackground,
  },
  bmItemList: {
    color: bmBackground,
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

export default function Burger() {
  return (
    <Menu styles={menuStyles}>
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <br />
        <Link href="/about">About</Link>
        <br />
        <Link href="/archive">All Posts</Link>
        <br />
        <Link href="/contact">Contact</Link>
        <br />
        <Link href="/filter/guides">Guides</Link>
        <br />
        <Link href="/links#info">Links</Link>
        <br />

        <div className={styles.footer} style={{ color: "black" }}>
          <p>© {new Date().getFullYear() + `, trailsandtrekking.com`}</p>
        </div>
      </div>
    </Menu>
  );
}
