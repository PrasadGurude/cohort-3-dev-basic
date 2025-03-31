const fs = require('fs')

// // this is the syncronance approch
// const data = fs.readFileSync("a.txt","utf-8")
// console.log(data)

// //this is the asyncronance approch
// fs.readFile('a.txt','utf-8', (err , data)=>{
//     console.log(data)
// })

async function random(r){
    const cont = await fs.readFile('a.txt','utf-8')
    console.log(cont);
    
    r(); 
}

function callback(){
    console.log("hi");  
}

let p = new Promise(random);
p.then(callback)
