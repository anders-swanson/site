import Layout from "../../../components/layout";
import K1K2, {
  metadata,
} from "../../../components/pages/hawaii/kalawahine-to-k2";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      subText={metadata.subText}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "hawaii",
      }}
    >
      <K1K2 />
    </Layout>
  );
}
