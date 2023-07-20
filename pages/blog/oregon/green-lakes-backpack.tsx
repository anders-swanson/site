import Layout from "../../../components/layout";
import GreenLakes, {
  metadata,
} from "../../../components/pages/oregon/green-lakes-backpack";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "sisters",
      }}
    >
      <GreenLakes />
    </Layout>
  );
}
