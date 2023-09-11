/* Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.*/

function doubled(arr,callback){
    let arr1=[];

    for(let i of arr){
        arr1.push(callback(i))

    }
    return arr1;


}

function help(number){
    return number*2;
}


let arr=[2,3,4,7,1,8]
console.log("original array is ",arr);
let result =doubled(arr,help)

console.log("doubled array is :",result);