import Layout from "../../../components/layout";
import TimberlineTrail, {
  metadata,
} from "../../../components/pages/oregon/timberline-trail";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Backpack a stunning 40 mile loop through the most scenic terrain on Mt. Hood.`}
      subText={`40+ miles, 10k+ gain`}
      ogImage={metadata.image}
    >
      <TimberlineTrail />
    </Layout>
  );
}
