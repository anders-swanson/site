import Layout from "../../../components/layout";
import BackpackingLunch from "../../../components/pages/guides/lunch-while-backpacking";
import { metadata } from "../../../components/pages/guides/lunch-while-backpacking";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "guides",
      }}
    >
      <BackpackingLunch />
    </Layout>
  );
}
