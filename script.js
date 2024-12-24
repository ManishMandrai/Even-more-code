const numbers = [ 1, 2, 3, 4 ,5 ];
const[first, second] = numbers;
console.log(first, second);

const nummbers = [10, 20, 30, 40];
const [, secoond, , fourth] = nummbers;
console.log(secoond, fourth); 


const fruits = ["Apple", "Banana", "Cherry", "Date"];
const [first, ...rest] = fruits;
console.log(first);
console.log(rest);


const user = {name : 'Alice', age : 23, city : "Delhi"}
const {name, age} = user;
console.log(name, age);


const user = { name: "John", age: 30 };
const { name: fullName, age: years } = user;
console.log(fullName, years); // Output: John 30

 
const nari = {name : "Emily", age : 23, country : "USA", sex : "female"}
const {name, ...details} = nari ;
console.log(name);
console.log(details);


function sum ([a, b]) {
    return a + b;
}
console.log(sum([3234,456]));


function greet ({name, age}){
    return`Hello ${name}, you are ${age} years old`;
}
console.log(greet({name: "Sophia", age : 23}));


const scores = [99, 82, 74, 64, 55];
const [ , second , , fourth] = scores;

console.log(second);
console.log(fourth);

const data = [1, 2, 3, 4, 5];
const [, , ...rest] = data;
console.log(rest);


const person = { name: "Amit", age: 30, country: "India" };
const {age, country : nation} = person;

console.log(age);
console.log(nation);


const user = { name: "Rohit", age: 25 };
const {name, age, city = "Delhi"} = user;
console.log(city);
