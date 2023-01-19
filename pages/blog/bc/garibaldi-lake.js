import Layout from "../../../components/layout";
import Garibaldi, {
  metadata,
} from "../../../components/pages/bc/garibaldi-lake";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      ogImage={metadata.image}
    >
      <Garibaldi />
    </Layout>
  );
}
