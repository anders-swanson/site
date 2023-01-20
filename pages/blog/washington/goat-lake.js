import Layout from "../../../components/layout";
import { metadata } from "../../../components/pages/washington/goat-lake";
import GoatLake from "../../../components/pages/washington/goat-lake";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "backpacking",
      }}
    >
      <GoatLake />
    </Layout>
  );
}
