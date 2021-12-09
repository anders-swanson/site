const fs = require('fs')
const path = require('path')

const blogDirectory = path.join(process.cwd(), 'pages/blog')
const metadataFlag = '//+metadata'
const metadataFile = 'lib/metadata.js'

// Get a sorted list of metadata from all pages in the blogDirectory
function getSortedMetadata() {
    const fileNames = fs.readdirSync(blogDirectory)
    const metadata = fileNames.map(fileName => {
        const fullPath = path.join(blogDirectory, fileName)
        const id = fileName.replace(/\.js$/, '')
        return getMetdata(fullPath, id)
    })

    // Sort metadata by Date
    return metadata.sort((a, b) => {
        if (a.date < b.date) {
          return 1
        } else {
          return -1
        }
    })
}

// Read metadata from a blog post
function getMetdata(file, id) {
    const data = fs.readFileSync(file).toString('utf-8')
    const idx = data.indexOf(metadataFlag)
    if (idx === -1) {
        console.log("foo")
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
        console.log("bar")
        return {
            "error": "non-terminal metadata"
        }
    }

    const metadataStr = data.substr(startIdx, endIdx - startIdx + 1)
    let metadata = JSON.parse(metadataStr)
    metadata["id"] = id
    return metadata
}

// Define the Posts function which returns a sorted array of post data
metadata = getSortedMetadata()
data = `
export default function Posts() {
    return ${JSON.stringify(metadata)}
}
`
console.log(data)

// Write the Posts function out to the metadata.js file
fs.writeFile(metadataFile, data, function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });

