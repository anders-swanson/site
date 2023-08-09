import styles from "./postbox.module.css";
import Link from "next/link";
import { CapitalizeWords } from "../lib/common";
import Image from "next/image";

export default function Post({ item, postStyle = styles.post }) {
  const blogLink = `/blog${item.id}`;
  return (
    <div
      className={postStyle}
      style={{
        color: "white",
      }}
    >
      <div style={{}}>
        <Image
          style={{ filter: "brightness(0.8)" }}
          src={item.image}
          alt={item.preview}
          fill
        />
      </div>

      <Link href={blogLink} className={styles.postLink} />
      <div className={styles.postText}>
        <Link href={blogLink}>
          <div style={{ fontSize: "18px" }}>{`${item.title}`}</div>
          {`${truncatePreview(item.preview)}`}
        </Link>
        <div className={styles.tag}>
          {item.tags.map((t) => (
            <Link href={"/filter/" + t} key={`${item.id}-${t}`}>
              {CapitalizeWords(t)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function truncatePreview(preview: string): string {
  const max = 200;
  let p = preview;
  if (p.length > max) {
    p.substring(0, max - 3);
    p += "...";
  }

  return p;
}
