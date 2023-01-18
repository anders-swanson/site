import Layout from "../../../components/layout";
import { metadata } from "../../../components/pages/washington/golden-horn";
import SnowyLakes from "../../../components/pages/washington/golden-horn";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Join us on an adventure through the mountains of Washington's North Cascades as we backpack to Snowy Lakes.`}
      subText={`20 miles round-trip`}
      ogImage={metadata.image}
    >
      <SnowyLakes />
    </Layout>
  );
}
