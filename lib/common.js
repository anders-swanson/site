
export function CapitalizeWords(s) {
    return s.split(' ').map((word) => {
        return word[0].toUpperCase() + word.substr(1)
    }).join(' ')
}

export function ImagePathBuilder(src) {
    return (image) => {
        return src + '/' + image
    }
}