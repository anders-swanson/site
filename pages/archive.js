import Layout from "../components/layout";
import { Posts } from "../lib/metadata";


export default function ArchivePage({ posts }) {
    return (
        <Layout
            allPostsData={posts}
            archive="true"
            description={`Post Archive.`}
            ogImage="/images/cover.jpeg"
            headerImage="/images/cover.jpeg"
            headerText="Archive"
        >
        </Layout>
    )
}

export async function getStaticProps() {
    return {
        props: {
            posts: Posts(),
        }
    }
}
