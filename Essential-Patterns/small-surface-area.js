/**
        An example of the small surface area pattern, where                   responseManipulator is a response haandler granting clients
        access to manipulating the response through a callback. 
        Clients also have access to other functionality via the Event
        Emitter object, such as manipulating the output of the data           event handler during the end event.
**/

var responseManipulator = (req, res, callback) => {
    var EventEmitter = require('events')
    //Make callback the listener for the data event
    res.on('data', callback)
    return EventEmitter
}
