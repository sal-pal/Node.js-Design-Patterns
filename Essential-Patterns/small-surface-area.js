/**
        Goal: Implement an asynchronous function that emits events.
            +Can register listeners.
            +What is an easy example? Something where a function is
             needed, but allows for manipulation of its events
                +Could use book's example of reading a file then 
                 performing manipulations after the file is read.
                 +Look for abstracts that are asynchronous.
                    -After response recieved and u
                 +Create function that executes after response 
                  recieved.
                    +Then collects all the data.
                    +Once all data collected, manipulate data.
                 +Does this process achieve goal?
                    -Create asynchronous function
                    -Emit event after something completed
                        +End event is default. Want to have custom
                         event created through EventEmitter class
                    -Listen to event 
**/