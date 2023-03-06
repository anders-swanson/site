import Layout from "../../../components/layout";
import EagleCreek, {
  metadata,
} from "../../../components/pages/oregon/eagle-creek-trail";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "waterfall",
      }}
    >
      <EagleCreek />
    </Layout>
  );
}
