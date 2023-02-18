import utilStyles from "../styles/utils.module.css";
import styles from "./postbox.module.css";
import { CapitalizeWords } from "../lib/common";
import Post from "./post";
import config from "../lib/config";
import Link from "next/link";

const imgSizing = 280;
const selectedStyles = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "black",
};

export default function PostBox({
  posts,
  heading,
  postBoxClass,
  perPage,
  idx,
}) {
  const pbClass = postBoxClass ? postBoxClass : styles.postBox;
  const headingUpper = CapitalizeWords(heading);
  const itemsPerPage = perPage ? perPage : config.itemsPerPage;
  const pages = [...Array(Math.ceil(posts.length / itemsPerPage)).keys()];
  idx = idx ? idx - 1 : 0;

  const start = idx * itemsPerPage;
  const stop = start + itemsPerPage;
  let items = [];
  for (let i = start; i < stop && i < posts.length; i++) {
    items.push(posts[i]);
  }
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <div style={{ display: "flex" }} id="recent">
        <h2 className={utilStyles.headingLg}>{headingUpper}</h2>
      </div>
      <hr />
      {items.length > 0 && (
        <div className={pbClass}>
          {items.map(({ ...item }) => (
            <Post key={item.id} item={item} imgSizing={imgSizing} />
          ))}
        </div>
      )}
      <br />
      <br />
      {pages.length > 1 && (
        <div className={styles.pageNums}>
          {pages.map((pageNum) => (
            <Link key={pageNum} href={`/blog/page/${pageNum + 1}#recent`} style={pageNum === idx ? selectedStyles : {}}>
              {`${pageNum + 1}`}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
