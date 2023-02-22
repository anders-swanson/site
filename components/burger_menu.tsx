import Link from "next/link";
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
            <Link href="/" className={styles.menu__item}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.menu__item}>
              About
            </Link>
          </li>
          <li>
            <Link href="/archive" className={styles.menu__item}>
              All Posts
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.menu__item}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/filter/guides" className={styles.menu__item}>
              Guides
            </Link>
          </li>
          <li>
            <Link href="/links#info" className={styles.menu__item}>
              Links
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
