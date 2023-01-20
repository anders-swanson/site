import Layout from "../../../components/layout";
import TimberlineTrail, {
  metadata,
} from "../../../components/pages/oregon/timberline-trail";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      subText={metadata.subText}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "backpacking",
      }}
    >
      <TimberlineTrail />
    </Layout>
  );
}
