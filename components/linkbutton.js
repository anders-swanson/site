import Link from "next/link";
import styles from "./linkbutton.module.css";

export default function LinkButton({ title, body, src, animation }) {
  return (
    <div
      className={
        animation ? `${styles.lbContainer} ${animation}` : styles.lbContainer
      }
    >
      <div className={styles.lbItem}>
        {title}
        <p className={styles.lbBody}>{body}</p>
      </div>
      <Link href={src} passHref target="_blank" rel="noreferrer">
      </Link>
    </div>
  );
}
