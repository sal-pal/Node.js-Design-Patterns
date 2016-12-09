/**
        Limited parallel execution is a pattern that divides the execution of  
        tasks into intervals, so as to not overwhelm system resources.
**/

const tasks = ...
let concurrency = 2, running = 0, completed = 2, index = 0
function next() {                                                   //[1]
    while(running < concurrency && index < tasks.length) {
        task = tasks[index++]
        task(() => {                                                //[2]
            if(completed === tasks.length) {
                return finish()
            }
            completed++, running--
            next()
        })
        running++
    }
}
next()

function finish() {
    //Code to execute when all tasks are finished
}



/**
        [1] next() is an iterator function having an inner loop spawning as many
            tasks possible while staying in the concurrency limit.
           
        [2] The callback passed to task() checks whether all tasks in the list 
            are completed. If there are still tasks to runm it invokes next to
            spawn another bunch of tasks.
**/