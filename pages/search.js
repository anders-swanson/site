import { useRouter } from "next/router"
import Layout from "../components/layout"
import PostBox from "../components/postbox"
import { Posts } from "../lib/metadata"
import { Matches } from "../lib/search"

export default function SearchPage({ allPostsData }) {
    const router = useRouter()
    const terms = router.query.terms
    let filteredPosts = allPostsData
    if (terms) {
      filteredPosts = terms.length === 0 ? allPostsData : Matches(terms, allPostsData)
    }

    return (
        <Layout>
            <PostBox
                posts={allPostsData}
                heading={`${filteredPosts.length} results for "${terms}"`}
                perPage={10}
            />
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = Posts()
    return {
        props: {
            allPostsData,
        }
    }
}
