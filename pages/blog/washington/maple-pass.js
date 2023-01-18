import Layout from "../../../components/layout";
import MaplePass, {
  metadata,
} from "../../../components/pages/washington/maple-pass";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Hike an 8-mile loop to discover astounding fall colors in Washington's North Cascades.`}
      subText={`8 miles, 2k feet gain`}
      ogImage={metadata.image}
    >
      <MaplePass />
    </Layout>
  );
}
