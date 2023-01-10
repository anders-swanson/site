import PostBox from "./postbox";
import { Posts } from "../lib/metadata";
import styles from "./related_posts.module.css";
import config from "../lib/config";

const posts = Posts();
const defaultText = "Related Posts";

export default function RelatedPosts({ metadata, tag, text }) {
  const self = metadata.title;
  const related = posts.filter((post) => {
    if (self === post.title) {
      return false;
    }
    for (let i = 0; i < post.tags.length; ++i) {
      if (tag === post.tags[i]) {
        return true;
      }
    }
    return false;
  });
  return (
    <>
      <PostBox
        posts={related}
        search=""
        heading={text ? text : defaultText}
        postBoxClass={styles.scroll}
        perPage={config.useScroll}
      />
    </>
  );
}
