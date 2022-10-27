export function FilterTag(posts, ...tags) {
    return posts.filter((post) => {
        for (let i = 0; i < tags.length; i++) {
            if (!post["tags"].includes(tags[i])) {
                return false
            }
        }
        return true
    })
}
