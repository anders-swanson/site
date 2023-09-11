import Layout from "../../../components/layout";
import Enchantments, {metadata} from "../../../components/pages/washington/enchantments";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "washington",
      }}
    >
      <Enchantments />
    </Layout>
  );
}
