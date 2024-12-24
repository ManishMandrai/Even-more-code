const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4,56]
console.log(arr2);

const user = {name : "Roshani", age: 22};
const newUser  = {...user, bfName : "Manish"}
console.log(newUser);

function sum(...numbers){
    let total = 0;
    for (let num of numbers){
        total += num;
    }
    return total;
}
console.log(sum(23,45,64,234,));
console.log(sum(34,6,3,2345,765,54));


const arr = [10,20,30,40,50,60,70,80,90,100];
const[first, second, ...rest] = arr;
console.log(first);
console.log(second);
console.log(rest);

const person = { name: "Amit", age: 30, country: "India" };
const { name, ...rest } = person; 
console.log(name);   
console.log(rest);   


const student = {name : "Rahul", age : 23};
const extraDetails = {country:"India", course:"Btech"};
const mergedStudent = {...student, ...extraDetails}
console.log(mergedStudent);

const arr1 = [1,2,3]
const arr2 = [8,7,6]
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);
