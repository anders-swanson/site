import Layout from "../../../components/layout";
import BlueLake, {
  metadata,
} from "../../../components/pages/washington/blue-lake";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      subText={metadata.subText}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "lakes",
      }}
    >
      <BlueLake />
    </Layout>
  );
}
