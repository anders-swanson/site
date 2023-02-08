import Link from "../node_modules/next/link";
import styles from "./burger_menu.module.css";

export default function BurgerMenu() {
  return (
    <>
      <div>
        <input id="toggle" className={styles.menu__toggle} type="checkbox" />
        <label className={styles.menu__btn} htmlFor="toggle">
          <span></span>
        </label>

        <ul className={styles.menu__box}>
          <li>
            <Link href="/">
              <a className={styles.menu__item}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={styles.menu__item}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/archive">
              <a className={styles.menu__item}>All Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={styles.menu__item}>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/filter/guides">
              <a className={styles.menu__item}>Guides</a>
            </Link>
          </li>
          <li>
            <Link href="/links#info">
              <a className={styles.menu__item}>Links</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
