import Layout from "../../../components/layout";
import SevenLakesBasin, {
  metadata,
} from "../../../components/pages/washington/seven-lakes-basin-high-divide";

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
      <SevenLakesBasin />
    </Layout>
  );
}
