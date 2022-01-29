// Utility functions
export function CapitalizeWords(s) {
    return s.split(' ').map((word) => {
        return word[0].toUpperCase() + word.substr(1)
    }).join(' ')
}

// Image path shortcuts
export function ImagePathBuilder(src) {
    return (image) => {
        return src + '/' + image
    }
}

export const CentralCascadesWildernessPermit = 'https://www.fs.usda.gov/detail/willamette/passes-permits/recreation/?cid=fseprd688355'

export function rawData(file) {
    return 'https://raw.githubusercontent.com/anders-swanson/data/master/data/' + file
}