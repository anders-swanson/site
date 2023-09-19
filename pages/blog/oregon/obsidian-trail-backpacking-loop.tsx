import Layout from "../../../components/layout";
import ObsidianTrailLoop, {
  metadata,
} from "../../../components/pages/oregon/obsidian-trail-backpacking-loop";

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
      <ObsidianTrailLoop />
    </Layout>
  );
}
