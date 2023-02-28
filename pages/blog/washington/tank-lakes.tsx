import Layout from "../../../components/layout";
import TankLakes, {
  metadata,
} from "../../../components/pages/washington/tank-lakes";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "backpacking",
      }}
    >
      <TankLakes />
    </Layout>
  );
}
