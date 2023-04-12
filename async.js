const fs = require('fs')

console.log("1")

/* Initializing a Function ---> Cake Recipe */
const HOF = (callback) => {
    callback()
    console.log("We are beginning to write...")
    fs.writeFile('./hello.txt', "Sakhia is not the best", (err) => {
        console.log('The file has been saved!');
      }); 
    
    console.log("We have finished writing the file")
}

/* Calling a Function ---> Baking That Cake */
HOF(() => {
    console.log("3")
})

console.log("4")

//1432 (everybody)
//1324 (2)
//1342 (1)


// Sync Function inside of Async Function executes async.
// Async Function inside of Sync Function executes async. 