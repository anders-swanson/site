import Image from "next/image";
import config from "../lib/config";
import styles from "./pinit.module.css";

const baseURI = "https://www.pinterest.com/pin/create/button";
export default function Pinnable({ src, width, height, alt, page }) {
  return (
    <>
      {(config.pinterest.enabled && (
        <div className={styles.parent}>
          <span className={styles.child}>
            <a
              data-pin-do="buttonPin"
              data-pin-round="true"
              href={pinitURL(src, page, alt)}
            >
              <Image alt="pinit" src="/pinit.png" width={25} height={25} />
            </a>
          </span>
          <div className={styles.imageChild}>
            <Image src={src} alt={alt} width={width} height={height} />
          </div>
        </div>
      )) || (
        <div className={styles.imageChild}>
          <Image src={src} alt={alt} width={width} height={height} />
        </div>
      )}
    </>
  );
}

function pinitURL(src, page, alt) {
  return encodeURI(
    `${baseURI}/?url=${config.domain}${page}&media=${src}&description=${alt}`
  );
}
