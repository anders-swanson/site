import Image from "next/image";
import Link from "next/link";
import { backgroundImageStyle } from "../lib/common";
import styles from "./image_grid.module.css";
import utilStyles from "../styles/utils.module.css";

export default function ImageGrid({
  backgroundImage,
  title,
  items,
  opacity = 0.1,
}) {
  return (
    <div
      className={`${utilStyles.coverContainer} ${utilStyles.floatyText}`}
      style={backgroundImageStyle(backgroundImage, opacity)}
    >
      <h1 className={styles.page_header}>{title}</h1>
      <div className={styles.grid_container}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.grid_item}>
            <div className={styles.grid_image}>
              <Link href={item.link} target="_blank">
                <Image alt={text} src={item.image} fill />
              </Link>
            </div>
            <div className={styles.grid_text}>{item.text}</div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
