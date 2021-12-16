export function FilterTag(posts, tag) {
    return posts.FilterTag((post) => {
        return post.includes(tag)
    })
}
