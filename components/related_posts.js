import PostBox from "./postbox";
import { Posts } from "../lib/metadata";

const posts = Posts()

export default function RelatedPosts({metadata, tag}) {
    const self = metadata.title
    const related = posts.filter((post) => {
            if (self === post.title) {
                return false
            }
            for (let i = 0; i < post.tags.length; ++i) {
                if (tag === post.tags[i]) {
                    return true
                }
            }
            return false
        }
    )
    return (
        <>
            <PostBox
                posts={related}
                search=""
                heading={"Related Posts"}
            />
        </>
    )
}
