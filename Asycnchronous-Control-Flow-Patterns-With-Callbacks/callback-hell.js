/**
        An example of callback hell - an anti pattern
        that is the excessive use of closures and  
        in-place callback definitions. This results in
        the code's poor readability, along with potential 
        confusion around callbacks of different scopes having 
        the same variable name (for example, two variables in
        this code are both named error).
**/


var fs = require('fs')
var request = require('request')
var mkdirp = require('mkdirp')
var path = require('path')
var utilities = require('./utilities')


var spider = (url, callback) => {
    const filename = utilities.urlToFilename(url)
    fs.exists(filename, exists => {
        if (!exists) {
            console.log(`Downloading ${url}`)
            request(url, (err, response, body) => {
                if (err) {
                    callback(err)
                }
                else {
                    mkdirp(path.dirname(filename), err => {
                        if (err) {
                            callback(err)
                        }
                        else {
                            callback(null, filename, true)
                        }
                    })
                }
            })
        }
        else {
            callback(null, filename, false)
        }
    })
}