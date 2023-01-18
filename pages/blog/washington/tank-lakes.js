import Layout from "../../../components/layout";
import TankLakes, {
  metadata,
} from "../../../components/pages/washington/tank-lakes";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Camp at Tank Lakes high in Washington's picturesque Alpine Lakes Wilderness.`}
      subText={`24 miles round-trip, 5,300+ feet gain`}
      ogImage={metadata.image}
    >
      <TankLakes />
    </Layout>
  );
}
