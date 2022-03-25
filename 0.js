const fs = require('fs')

const jsFiles = [...fs.readdirSync(__dirname + '/javascript_version')].map(item => item.replace('.js', ''))
const tsFiles = [...fs.readdirSync(__dirname + '/typescript_version')].map(item => item.replace('.ts', ''))
const tsFilesLen = tsFiles.length
const tsFilesSet = new Set(tsFiles.slice(0, tsFilesLen - 2))
const unHaveTsFiles = []

for (let i = 0; i < jsFiles.length; i++) {
    const jsFile = jsFiles[i]
    if (!tsFilesSet.has(jsFile)) {
        unHaveTsFiles.push(jsFile)
    }
}

// console.log(unHaveTsFiles.map(Number).sort((x, y) => x - y))

fs.writeFile(
    "unHaveTsFiles.txt",
    JSON.stringify(unHaveTsFiles.map(Number).sort((x, y) => x - y)),
    (error, data) => {
        if (error) {
            throw error
        }
    }
)

// console.log(jsFiles)
// console.log(tsFilesSet)

// console.log(__dirname)
