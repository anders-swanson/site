import fs from 'fs'
import path from 'path'

const blogDirectory = path.join(process.cwd(), 'pages/blog')
const metadataFlag = '//+metadata'

export function getSortedMetadata() {
    // const fileNames = fs.readdirSync(blogDirectory)
    // const allMetadata = fileNames.map(fileName => {
    //     const fullPath = path.join(blogDirectory, fileName)
    //     const id = fileName.replace(/\.js$/, '')
    //     return getMetdata(fullPath, id)
    // })
    // return allMetadata

    // Sort metadata by Date
    return metadata.sort((a, b) => {
        if (a.date < b.date) {
          return 1
        } else {
          return -1
        }
    })
}

let tags = {
    camping: "Camping",
    hiking: "Hiking",
    backpacking: "Backpacking",
    hot_springs: "Hot Springs"
}

let metadata = [
    {
        id: "foo",
        title: "Foo Page",
        desc: "Foo!",
        date: "2020-01-01",
        image: "/images/cover.jpeg",
        tags: [tags.backpacking]
    },
    {
        id: "bar",
        title: "Bar Page",
        desc: "This is Bar Page :)",
        date: "2020-01-02",
        image: "/images/profile.jpg",
        tags: [tags.camping, tags.hot_springs]
    }
]

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
