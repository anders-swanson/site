const fs = require('fs')
const path = require('path')

const blogDirectory = path.join(process.cwd(), 'pages/blog')
const pagesDirectory = path.join(process.cwd(), 'pages')
const metadataFlag = '//+metadata'
const metadataFile = 'lib/metadata.js'
const sitemapFile = 'public/sitemap.xml'
const robotsFile = 'public/robots.txt'
const domain = 'https://www.trailsandtrekking.com'

function getSiteMap() {
    metadata = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
    const recurseMetadata = (currentDir, relDir) => {
        const files = fs.readdirSync(currentDir)
        files.map((fileName) => {
            const filePath = path.join(currentDir, fileName)
            if (fs.statSync(filePath).isDirectory()) {                
                recurseMetadata(filePath, relDir + '/' + fileName)
            } else if (fileName.endsWith('.js') && !fileName.startsWith('_') && !fileName.startsWith('[')) {
                const id = relDir + '/' + fileName.replace(/\.js$/, '')
                const mtime = fs.statSync(filePath).mtime
                metadata = metadata + `
  <url>
    <loc>${domain}${id}</loc>
    <lastmod>${mtime.getFullYear()}-${mtime.getMonth()}-${mtime.getDate()}</lastmod>
  </url>`
            } else {
                return
            }            
        })
    }

    recurseMetadata(pagesDirectory, '')
    return metadata + `
</urlset>`
}

// Get a sorted list of metadata from all pages in the blogDirectory
function getSortedMetadata() {
    metadata = []
    const recurseMetadata = (currentDir, relDir) => {
        const files = fs.readdirSync(currentDir)
        files.map((fileName) => {
            const filePath = path.join(currentDir, fileName)
            if (fs.statSync(filePath).isDirectory()) {                
                recurseMetadata(filePath, relDir + '/' + fileName)
            } else if (fileName.endsWith('.js')) {
                const id = relDir + '/' + fileName.replace(/\.js$/, '')
                metadata.push(getMetdata(filePath, id))
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
    return metadata
}

function getTags(metadata) {
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
    })
}

function writeFile(f, d) {
    fs.writeFile(f, d, function (err, d) {
        if (err) {
            return console.log(err);
        }
        console.log(d);
    });
}

// Define the Posts function which returns a sorted array of post data
metadata = getSortedMetadata()
tags = getTags(metadata)
data=`
export function Posts() {
    return ${JSON.stringify(metadata)}
}

export function Tags() {
    return ${JSON.stringify(tags)}
}
`
// Write the Posts function out to the metadata.js file
writeFile(metadataFile, data)
// Create the sitemap.xml
writeFile(sitemapFile, getSiteMap())


robotsTxt = `User-agent: *
Allow: /
Sitemap: ${domain}/sitemap.xml
`
// Create the robots.txt
writeFile(robotsFile, robotsTxt)