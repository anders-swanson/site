import utilStyles from "../styles/utils.module.css";
import styles from "./postbox.module.css";
import Link from "next/link";
import Date from "./date";
import Image from "next/image";
import { CapitalizeWords } from "../lib/common";

export default function Post({
  item,
  imgSizing = 280,
  postStyle = styles.post,
  showDate = false,
}) {
  const blogLink = `/blog${item.id}`;
  return (

          <div className={postStyle} style={{
      backgroundImage: `url(${item.image})`,
    }}>
      <Link href={blogLink} className={styles.postLink}/>
      <div className={styles.postText}>
      <Link href={blogLink}>
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
  const max = 200
  let p = preview
  if(p.length > max) {
    p.substring(0, max-3)
    p += "..."
  }

  return p
}
