const fs = require("fs")

fs.readFile("first.txt",({flag:"w"}),(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})