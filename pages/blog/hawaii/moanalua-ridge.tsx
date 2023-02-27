import Layout from "../../../components/layout";
import Moanalua, {
  metadata,
} from "../../../components/pages/hawaii/moanalua-ridge";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "hawaii",
      }}
    >
      <Moanalua />
    </Layout>
  );
}
