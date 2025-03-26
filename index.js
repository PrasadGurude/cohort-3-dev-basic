const fs = require('fs')

// this is the syncronance approch
const data = fs.readFileSync("a.txt","utf-8")
console.log(data)

//this is the asyncronance approch
fs.readFile('a.txt','utf-8', (err , data)=>{
    console.log(data)
})
