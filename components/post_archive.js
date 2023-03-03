import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "./postbox.module.css";
import archiveStyles from "./post_archive.module.css";
import { useState } from "react";
import { FilterTag } from "../lib/post_filter";
import { CapitalizeWords } from "../lib/common";

const imgSizing = 100;

export default function Archive({ posts, tags }) {
  const [tagList, setTagList] = useState([]);

  const handleChange = (tag) => {
    const newTagList = [...tagList];
    const idx = newTagList.indexOf(tag);
    if (idx > -1) {
      newTagList.splice(idx, 1);
    } else {
      newTagList.push(tag);
    }
    setTagList(newTagList);
  };

  const tagListItems = () => {
    return tagList.map((_, idx) => (
      <div
        key={idx}
        className={archiveStyles.tagBox}
        onClick={() => {
          handleChange(tagList[idx]);
        }}
      >
        {CapitalizeWords(tagList[idx])}
      </div>
    ));
  };

  return (
    <div>
      <div className={archiveStyles.flexGap}>
        <label htmlFor="tags">{`Filter by tag: `}</label>
        <select
          className={archiveStyles.tagSelector}
          id="tags"
          onChange={(e) => handleChange(e.target.value.trim())}
        >
          <option style={{ display: "none" }} />
          {tags.map(({ params }) => (
            <option
              style={{ cursor: "pointer" }}
              key={params.id}
              value={`${params.id} ${getSelectedSymbol(tagList, params.id)}`}
            >
              {`${params.id} ${getSelectedSymbol(tagList, params.id)}`}
            </option>
          ))}
        </select>
      </div>
      <div className={archiveStyles.tagListItems}>{tagListItems()}</div>
      <br />
      <div className={archiveStyles.flexGap}>
        {FilterTag(posts, ...tagList).map(({ ...item }) => (
          <div style={{ display: "flex" }} key={item.id}>
            <div
              style={{
                display: "block",
                marginRight: "10px",
              }}
            >
              <Link href={`/blog${item.id}`}>
                <Image
                  alt={item.id}
                  src={item.image}
                  className={utilStyles.borderRounded}
                  height={imgSizing}
                  width={imgSizing}
                />
              </Link>
            </div>

            <div
              style={{
                width: "300px",
              }}
            >
              <Link
                href={`/blog${item.id}`}
                className={styles.postLink}
                style={{ fontSize: "18px" }}
              >
                {item.title}
              </Link>
              <div className={styles.description}>
                <Link style={{ color: "black" }} href={`/blog${item.id}`}>
                  {item.preview}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getSelectedSymbol(o, key) {
  if (o.includes(key)) {
    return "🗸";
  }
  return "";
}
