const fs = require('fs')
const path = require('path')
const metadataFlag = '//+metadata'
const conf = require('../lib/config')

// Get a sorted list of metadata from all pages in the blogDirectory
module.exports.getSorted = function(blogDirectory) {
    metadata = []
    const recurseMetadata = (currentDir, relDir) => {
        const files = fs.readdirSync(currentDir)
        files.map((fileName) => {
            const filePath = path.join(currentDir, fileName)
            if (fs.statSync(filePath).isDirectory()) {                
                recurseMetadata(filePath, relDir + '/' + fileName)
            } else if (isPostFile(fileName)) {
                addMetadata(metadata, relDir, fileName, filePath)
            } else {
                return
            }            
        })
    }

    recurseMetadata(blogDirectory, '')
    return metadata.filter(e => {
        return e != null
    }).sort((a, b) => {
        if (a.date < b.date) {
          return 1
        } else {
          return -1
        }
    })
}

function isPostFile(fileName) {
    return fileName.endsWith('.js') && !fileName.startsWith('[')
}

function addMetadata(metadata, relDir, fileName, filePath) {
    const id = relDir + '/' + fileName.replace(/\.js$/, '')
    let fileMetadata = getMetdata(filePath, id)
    if (!fileMetadata.hasOwnProperty("disabled")) {
        metadata.push(fileMetadata)
    }
}

// Read metadata from a blog post
function getMetdata(file, id) {
    const data = fs.readFileSync(file).toString('utf-8')
    const idx = data.indexOf(metadataFlag)
    if (idx === -1) {
        return {
            "error": "metadata not found"
        }
    }

    let objectFound = false
    let opens = 0, closes = 0, startIdx = 0, endIdx = 0
    for (let i = idx; i < data.length; i++) {
        if(data[i] === '{') {
            opens++
            if (!objectFound) {
                objectFound = true
                startIdx = i
            }
        }
        if (data[i] == '}') {
            closes++
        }

        if (objectFound && opens === closes) {
            endIdx = i
            break;
        }
    }

    if (startIdx < 1 || endIdx < 1) {
        return {
            "error": "non-terminal metadata"
        }
    }

    const metadataStr = data.substring(startIdx, endIdx + 1)
    let metadata = JSON.parse(metadataStr)
    metadata["id"] = id
    metadata["tags"] = metadata["tags"].sort()
    metadata["preview"] = loadPreview(data)
    return metadata
}

function loadPreview(data) {
    const previewStart = data.indexOf('{`')
    const previewEnd = data.indexOf('`}')
    if (previewStart < 0 || previewEnd < 0) {
        return ""
    }
    // return preview with whitespace filtered
    return data.substring(previewStart+2, previewEnd)
        .split(/(\s+)/)
        .filter( e => e.trim().length > 0)
        .join(' ')
}

module.exports.getPageParams = function (numPosts) {
    const numPages = Math.ceil(numPosts/conf.itemsPerPage)
    let pageParams = []
    for (let i = 0; i < numPages; ++i) {
        pageParams.push({
            'params': {
                'id': `${i+1}`,
            }
        })
    }
    return pageParams
}

module.exports.getTags = function (metadata) {
    let allTags = new Set()

    for (let i = 0; i < metadata.length; ++i) {
        tags = metadata[i]["tags"]
        for (let j = 0; j < tags.length; ++j) {
            allTags.add(tags[j])
        }
    }

    return Array.from(allTags).map(tag => {
        return {
            params: {
                id: tag
            }
        }
    }).sort((a, b) => {
        if (a.params.id > b.params.id) {
          return 1
        } else {
          return -1
        }
    })
}

module.exports.txt = function(blogDirectory) {
    let sortedMetadata = this.getSorted(blogDirectory)
    let tags = this.getTags(sortedMetadata)
    let pages = this.getPageParams(sortedMetadata.length)
    
    return `
export function Posts() {
    return ${JSON.stringify(sortedMetadata)}
}

export function Tags() {
    return ${JSON.stringify(tags)}
}

export function Pages() {
    return ${JSON.stringify(pages)}
}
`
}