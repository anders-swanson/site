import Layout from "../../../components/layout";
import { metadata } from "../../../components/pages/washington/goat-lake";
import GoatLake from "../../../components/pages/washington/goat-lake";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Experience the wild beauty of Goat Lake, nestled in the shadow of Mt. Baker in Washington's North Cascades.`}
      ogImage={metadata.image}
    >
      <GoatLake />
    </Layout>
  );
}
