import styles from "./iframe.module.css";

export default function IFrame({ src }) {
  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.frame}
        loading="lazy"
        src={src}
        allowFullScreen="allowfullscreen"
        allow="fullscreen"
      ></iframe>
    </div>
    //<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFL73GWXp8&#x2F;view?utm_content=DAFL73GWXp8&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Backpacking Gear Guide</a> by Lauren Gastineau
  );
}
