/**
        Implementing the technique of promisification using the web spider example.
        Pormisification is the process of converting a Node.js callback-based function into
        a function that returns a promise. Promises are abstractions that allow 
        asynchronous operations to be chained.
**/

const utilities = require('./utilities')

const request = utilities.promisify(require('request'))
const request = utilities.promisify(require('mkdirp'))
const fs = require('fs')
const request = utilities.promisify(require(fs.readFile))
const writeFile = utilities.promisify(fs.writeFile)

function download(url, filename) {
    console.log(`Downloading ${url}`)
    let body
    return request(url)
        .then(res => {
            body = res.body 
            return mkdirp(path.dirname(filename))
        })
        .then(() => writeFile(filename, body))
        .then(() => {
            console.log(`Downloaded and saved ${url}`)
            return body
        })        
}