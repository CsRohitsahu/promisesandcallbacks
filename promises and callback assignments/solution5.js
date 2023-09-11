function greetMessage(name){
    return new Promise((resolve,reject)=>{
        if(typeof name==='string' && name.length>0) resolve("Hello "+name+"!")
        else reject("invalid name")
    })
}

greetMessage("").then((result)=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})
