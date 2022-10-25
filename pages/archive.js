import Layout from "../components/layout";
import Archive from "../components/post_archive";
import { Posts, Tags } from "../lib/metadata";


export default function ArchivePage({ posts }) {
    return (
        <Layout
            archive="true"
            description={`Post Archive.`}
            ogImage="/images/cover.jpeg"
            headerImage="/images/cover.jpeg"
            headerText="Archive"
        >
            <Archive
                posts={posts}
                tags={Tags()}
            />
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
