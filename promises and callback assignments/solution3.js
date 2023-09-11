function ageInDays(person){
    let fulName=person.firstName+" "+person.lastName
    let age=person.age*365;

    let fulInfo="The person's full name is "+fulName+", and their age in day is "+age
    return ()=>{
        console.log(fulInfo);
    }

}

let person={
    firstName:"Rohit",
    lastName:"sahu",
    age:22
}

let result =ageInDays(person)
result()