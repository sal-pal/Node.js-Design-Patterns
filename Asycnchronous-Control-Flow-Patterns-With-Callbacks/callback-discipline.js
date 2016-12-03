/**
        What the spider function looks like after applying callback
        discipline. The code is now modular (improving readability
        and resusability) and is nested shallowly. Both characteristics
        improve the overall quality of the code - making it easier to 
        maintain and modify.
**/


var fs = require('fs')
var request = require('request')
var mkdirp = require('mkdirp')
var path = require('path')
var utilities = require('./utilities')




function saveFile(filename, contents, callback) {
    mkdirp(path.dirname(filename), err => {
        if (err) {
            return callback(err)
        }
        fs.writeFile(filename, contents, callback)
    })
}


function download(url, filename, callback) {
    console.log(`Downloading ${url}`)
    request(url, response, body) => {
        if (err) {
            return callback(err)
        }
        saveFile(filename, body, err => {
            if (err) {
                return callback(err)
            }
            console.log(`Downloaded and saved: ${url}`)
            callback(null, body)
        })
    }
}


function spider(url, callback) {
    const filename = utilities.urlToFilename(url)
    fs.exists(filename, exists => {
        if (exists) {
            return callback(null, filename, false)
        }
        download(url, filename, err => {
            if (err) {
                return callback(err)
            }
            callback(null, filename, true)
        })
    })
}