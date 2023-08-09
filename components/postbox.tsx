import utilStyles from "../styles/utils.module.css";
import styles from "./postbox.module.css";
import { CapitalizeWords } from "../lib/common";
import Post from "./post";
import config from "../lib/config";
import Link from "next/link";

const selectedStyles = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "black",
  backgroundColor: "#d6dedf",
};

export default function PostBox({
  posts,
  heading,
  postBoxClass = styles.postBox,
  perPage = config.itemsPerPage,
  idx = 0,
}) {
  const pages = [];
  for (let i = 0; i < posts.length / perPage; i++) {
    pages[i] = i;
  }
  idx = idx > 0 ? idx - 1 : 0;

  const start = idx * perPage;
  const stop = start + perPage;
  const items = [];
  for (let i = start; i < stop && i < posts.length; i++) {
    items.push(posts[i]);
  }
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <div id="recent">
        {heading && (
          <h2 className={`${utilStyles.centered} ${utilStyles.headingLg}`}>
            {CapitalizeWords(heading)}
          </h2>
        )}
      </div>
      {items.length > 0 && (
        <div className={postBoxClass}>
          {items.map(({ ...item }) => (
            <Post key={item.id} item={item} />
          ))}
        </div>
      )}
      <br />
      <br />
      {pages.length > 1 && (
        <div className={styles.pageNums}>
          {pages.map((pageNum) => (
            <Link
              key={pageNum}
              href={`/blog/page/${pageNum + 1}#recent`}
              style={pageNum === idx ? selectedStyles : {}}
            >
              <div className={styles.num}>{`${pageNum + 1}`}</div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
