// Post filtering based on textual comparisons
export function Matches(term, posts) {
    const terms = term.split(' ').map((t) => {
        return t.trim().toLowerCase()
    })

    return posts.filter((post) => {
        for (let i = 0; i < terms.length; ++i) {
           if (isMatch(terms[i], post)) {
               return true
           }
        }

        return false
    })
}

// Compare post text with term for matches
// 1. check title contains term
// 2. check description contains term
// 3. check at least one tag contains term
function isMatch(term, post) {
    if (post.title.toLowerCase().includes(term)) {
        return true
    }

    if (post.desc.toLowerCase().includes(term)) {
        return true
    }

    for (let i = 0; i < post.tags.length; ++i) {
        if (post.tags[i].toLowerCase().includes(term)) {
            return true
        }
    }

    return false
}
