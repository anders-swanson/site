import { useRouter } from "next/router";
import Layout from "../components/layout";
import PostBox from "../components/postbox";
import config from "../lib/config";
import { Posts } from "../lib/metadata";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";

const options = {
  keys: ["title", "preview", "tags", "id"],
};

const fuse = new Fuse([...Posts()], options);

function search(terms: string) {
  return fuse.search(terms).map((result) => result.item);
}

export default function SearchPage() {
  const { terms } = useRouter().query;
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (!terms) {
      return;
    }

    const termString = Array.isArray(terms) ? terms.join("") : terms;
    setResults(search(termString));
  }, [terms]);

  return (
    <Layout>
      <PostBox
        posts={results}
        heading={terms ? `Search results for "${terms}"` : "Loading..."}
        perPage={config.itemsPerFilterPage}
        idx={0}
      />
    </Layout>
  );
}
