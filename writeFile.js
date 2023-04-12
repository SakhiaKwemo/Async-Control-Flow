const fs = require('fs')

console.log("We are beginning to write...")
// fs.writeFileSync('./hello.txt', "Sakhia")
fs.writeFile('./hello.txt', "Sakhia is not the best", (err) => {
    console.log('The file has been saved!');
  }); 

console.log("We have finished writing the file")