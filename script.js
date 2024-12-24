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


const person = {
    name : "Amit",
    age : 30,
    hobbies : ["Reading", "coding", "sexting"]
}
const {name, age, hobbies : [firstHobby, secondHobby]} = person;

console.log(name);
console.log(age);
console.log(firstHobby);
console.log(secondHobby);


function displayInfo({name, age, country = "India"}){
    console.log(`Name:${name}, age:${age} country:${country}`);   
}
const person = {name : 'Ravi', age :34 }
console.log(person);

const students = [
    {name:"Kali", age: 23},
    {name:"Mike", age: 24},
    {name:"Jhon", age: 22}
]
students.forEach(({name, age}) => {
    console.log(`${name} is ${age} years old`);
    
})

const person = {
    name: "Nina",
    contact: {
        phone: "123-456-7890",
        email: "nina@example.com"
    }
};

const { name, contact: { phone, email } } = person;

console.log(name);     
console.log(phone);    
console.log(email);    



const myMap =  new Map();
myMap.set ("name", "Alice");
myMap.set("age", 23)

for (let [key, value] of myMap){
    console.log(`${key} : ${value}`);
    
}

const mySet = new Set([1,2,3,4]);

for(let value of mySet){
    console.log(value);
    
}

const data = [1, [2, 3], 4, 5, 34, 34, 4,456, 76,4, 3543];
const [first,[second, third], ...rest] = data;
console.log(first);
console.log(second);
console.log(third);
console.log(rest);


const fruits = ["Apple", "Banana", "Mango", "Orange"]
const [ , fruit1, , fruit2] = fruits
console.log(fruit1);
console.log(fruit2);
 
const user = { firstName: "John", lastName: "Doe", age: 30 };
const {firstName : name1, lastName : name2} = user;
console.log(name1);
console.log(name2);


const profile = {
    name: "Amit",
    contact: {
        phone: "123-456-7890",
        email: "amit@example.com"
    }
};

const { name, contact: { phone, email } } = profile;

console.log(name);     
console.log(phone);    
console.log(email);    


const numbers = [10, 20, 30, 40, 50]
const [first, second, ...rest] = numbers
console.log(first);
console.log(second);
console.log(rest);

const user = { name: "Rohit", age: 25 }
const{name, age, country = "India" } = user
console.log(name);
console.log(age);
console.log(country);


const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);


function showProfile({ name, age }) {
    console.log("Name: " + name);
    console.log("Age: " + age);
}

showProfile({ name: "Rohit", age: 25 });


const person = { name: "Nina", age: 28 }
const newPerson = {...person, country: "India"}
console.log(newPerson);
