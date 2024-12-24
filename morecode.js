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


const numbers = [10, 20, 30, 40, 50];
const newNumbers = [...numbers, 60, 70, 80]
console.log(newNumbers);

const person = {name:"json",age : 23};
const updatePerson = {...person, country: "usa", age :45}
console.log(updatePerson);

const employee = {name:"Alice", positon:"SDE3", salery: 180000};
const {name, ...details} = employee;
console.log(name);
console.log(details);


function multiply(...numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}
console.log(multiply(2, 3, 4));
console.log(multiply(2, 4, 6, 7));


const arr1 = [1, 3, 5, 6]
const arr2 = [4, 8, 6, 3]
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);


const car = { make: "Toyata", model: "innova", year : 2022 };
const newCar = {...car, color: "black"}
console.log(newCar);
