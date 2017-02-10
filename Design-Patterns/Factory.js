/**
        Created a factory function that generates arrays populated with random primitive values.
**/

module.exports = (length) => {
    var array = []
    for (var i=0; i < length+1; i++) {
        array.push(chooseRandomPrimitive())
    }
    return array
}




function chooseRandomPrimitive () {
    const choiceValue = makeChoiceValue()
    if (choiceValue <= 30) {
        return makeRandomNumber()
    }
    else if (choiceValue > 30 && choiceValue <= 60) {
        return makeRandomString()
    }
    else {return makeRandomBool()}
}




function makeChoiceValue () {     
    var choiceValue = 91
    while (choiceValue > 90) {
        choiceValue = makeRandomNumber()
    }
    return choiceValue
}



function makeRandomNumber () {
    return Math.round(Math.random() * 100)
}



function makeRandomString () {
    const randomString = require("randomstring")
    return randomString.generate(5)
}



function makeRandomBool () {
    if (makeRandomNumber() < 50) {
        return true
    }
    else {return false}
}