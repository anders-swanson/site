const fs = require('fs')
const path = require('path')
const http = require('https')

const ignored = {
    node_modules: true,
    '.next': true,
    '.git': true,
    scripts: true,
    public: true,
    '.gitignore': true,
    'LICENSE.md': true,
    'package-lock.json': true,
}

const ignoredURL = {
    'https://www.amazon.com/shop/laurensbigadventure': true,
    'https://kamofitness.com/LAURENG': true,
    'https://fonts.googleapis.com': true,
    'https://fonts.gstatic.com': true,
    'https://raw.githubusercontent.com/anders-swanson/data/master/data/': true,
}

const urlRegex = /[http|https]+:\/\/[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_:%&@!,\+\-;\?\#\/.=]+/g

function findAllURLs(directory) {
    urls = new Map()
    const recurseURLs = (currentDir, relDir) => {
        const files = fs.readdirSync(currentDir)
        files.map((fileName) => {
            const filePath = path.join(currentDir, fileName)
            if (ignored[fileName])  {
                return
            }

            if (fs.statSync(filePath).isDirectory()) {                
                recurseURLs(filePath, relDir + '/' + fileName)
            } else {
                addURLsInFile(filePath, urls)
            }            
        })
    }
    recurseURLs(directory, '')

    return [...urls.keys()]
}

function addURLsInFile(filePath, urls) {
    const matches = fs.readFileSync(filePath).toString('utf-8').match(urlRegex)
    if (matches) {
        matches.map((m) => {
            if (!ignoredURL[m]) {
                urls.set(m, '')
            }
        })
    }  
}

function checkURLs(urls) {
    urls.map((u) => {
        
        try {
            http.request(u, { method: 'HEAD' }, (res) => {
                
                if (res.statusCode != 200 && res.statusCode != 204 && res.statusCode != 301 && res.statusCode != 308) {
                    console.log(res.statusCode)
                    console.log(u)
                }
            }).on('error', (e) => {
                console.log(e)
               console.log(u)
            }).end();
        } catch(e) {
            console.log(e)
        }

    })
}

console.log('Finding all dead URLs...')
const u = findAllURLs('.')
checkURLs(u)
