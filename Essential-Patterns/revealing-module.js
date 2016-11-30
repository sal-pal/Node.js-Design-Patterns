/**
    The revealing module pattern solves the problem of Javascript not  
    having a built-in namespacing feature. This is done by creating   
    a self-invoking function that exports an API, while all variables 
    in the function remain private.
**/

var sameName = "I am not a number"

var module = (() => {
    var sameName = 0
    
    var addByOne = (arg) => {
        sameName = arg + 1
        return sameName
    }

    return addByOne
})()


console.log(module(5))
console.log(sameName)