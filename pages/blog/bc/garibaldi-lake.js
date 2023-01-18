import Layout from "../../../components/layout";
import Garibaldi, {
  metadata,
} from "../../../components/pages/bc/garibaldi-lake";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Discover, backpack, and enjoy beautiful Garibaldi Provincial Park in British Columbia.`}
      ogImage={metadata.image}
    >
      <Garibaldi />
    </Layout>
  );
}
