import Layout from "../../../components/layout";
import MaplePass, {
  metadata,
} from "../../../components/pages/washington/maple-pass";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      subText={metadata.subText}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "washington",
      }}
    >
      <MaplePass />
    </Layout>
  );
}
