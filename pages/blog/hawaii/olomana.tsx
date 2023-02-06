import Layout from "../../../components/layout";
import Olomana, { metadata } from "../../../components/pages/hawaii/olomana";

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
      <Olomana />
    </Layout>
  );
}
