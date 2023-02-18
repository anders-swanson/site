import Image from "next/image";
import Link from "next/link";
import { backgroundImageStyle } from "../lib/common";
import styles from "./image_grid.module.css";
import utilStyles from "../styles/utils.module.css";

export default function ImageGrid({
  backgroundImage,
  title,
  items,
  opacity,
  imageWidth,
  imageHeight,
}) {
  opacity = opacity ? opacity : 0.1;
  imageWidth = imageWidth ? imageWidth : 380;
  imageHeight = imageHeight ? imageHeight : 500;

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
                <Image
                  alt={idx}
                  src={item.image}
                  width={imageWidth}
                  height={imageHeight}
                />
              </Link>
            </div>
            <div
              className={styles.grid_text}
              style={{
                maxWidth: imageWidth,
              }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
