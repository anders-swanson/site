import Layout from "../../../components/layout";
import GoldenCanyon, {
  metadata,
} from "../../../components/pages/california/golden-canyon-loop";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "national park",
      }}
    >
      <GoldenCanyon />
    </Layout>
  );
}
