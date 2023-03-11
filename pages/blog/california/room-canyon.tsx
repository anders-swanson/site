import Layout from "../../../components/layout";
import RoomCanyon, {
  metadata,
} from "../../../components/pages/california/room-canyon";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={metadata.preview}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "national park",
      }}
    >
      <RoomCanyon />
    </Layout>
  );
}
