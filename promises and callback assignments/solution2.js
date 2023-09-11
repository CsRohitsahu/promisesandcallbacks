function manipulateString(string){
    let stringUpperCase=string.toUpperCase();
    return ()=>{
        console.log("the manipulated string is :",stringUpperCase);
    }
}
let result =manipulateString("hello word")
result();