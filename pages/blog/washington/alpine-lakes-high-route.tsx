import Layout from "../../../components/layout";
import AlpineLakesHighRoute, {
  metadata,
} from "../../../components/pages/washington/alpine-lakes-high-route";

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
      <AlpineLakesHighRoute />
    </Layout>
  );
}
