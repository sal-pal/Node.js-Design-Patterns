/**
        The substack pattern grants a single entrance point into a module. 
	Simplicity is the guiding principle behind this practice, which is a major 
	aim of programming in general.
**/

module.exports = (name) => {
    if (typeof name === "string") {
        console.log(`Your name is ${name}`)
    }
    else {
        console.log("Please enter a string")
    }
}