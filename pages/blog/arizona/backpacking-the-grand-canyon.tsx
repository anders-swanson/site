import Layout from "../../../components/layout";
import BackpackingGrandCanyon, { metadata } from "../../../components/pages/arizona/backpacking-the-grand-canyon";

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
      <BackpackingGrandCanyon />
    </Layout>
  );
}
