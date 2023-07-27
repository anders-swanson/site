import Layout from "../../../components/layout";
import JeffersonPark, {
  metadata,
} from "../../../components/pages/oregon/jefferson-park-backpack";

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
      <JeffersonPark />
    </Layout>
  );
}
