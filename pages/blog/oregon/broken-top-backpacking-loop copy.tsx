import Layout from "../../../components/layout";
import BrokenTopLoop, {
  metadata,
} from "../../../components/pages/oregon/broken-top-backpacking-loop";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "sisters",
      }}
    >
      <BrokenTopLoop />
    </Layout>
  );
}
