
import Layout from "../../components/layout";

export default function Post() {
    return (
        <Layout headerImage="/images/cover.jpeg">

        </Layout>
    )

}

export async function getStaticProps() {
    const allPostsData = Posts()
    return {
        props: {
        allPostsData
        }
    }
}
