export function FilterTag(posts, tag) {
    return posts.filter((post) => {
        return post["tags"].includes(tag)
    })
}
