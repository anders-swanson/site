import { useRouter } from "next/router";
import styles from "./search.module.css";

export default function Search({ search, setSearch }) {
  const router = useRouter();
  return (
    <>
      <img alt="spyglass" className={styles.spyglass} src="/search.svg" />
      <input
        className={styles.searchBox}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={(e) => {
          if (search.length > 0 && e.key === "Enter") {
            router.push({
              pathname: "/search",
              query: {
                terms: search,
              },
            });
          }
        }}
      />
    </>
  );
}
