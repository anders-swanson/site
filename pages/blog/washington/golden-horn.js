import Layout from "../../../components/layout";
import { metadata } from "../../../components/pages/washington/golden-horn";
import SnowyLakes from "../../../components/pages/washington/golden-horn";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      subText={metadata.subText}
      ogImage={metadata.image}
    >
      <SnowyLakes />
    </Layout>
  );
}
