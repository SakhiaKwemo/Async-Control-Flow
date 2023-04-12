const fs = require('fs')

console.log("beginning...")
// const file = fs.readFileSync('./hello.txt', "utf-8")
// console.log("file content: " + file)
fs.readFile('./Hello.txt', {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    console.log("file content: " + data)
  }); 

console.log("finished...")