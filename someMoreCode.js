const name = "Amit";
const age = 23;
console.log(`Hello my name is ${name } and I am ${age} yeaars old`);

const multiLineString = `This is 
a multi-line 
string`
console.log(multiLineString);


const a = 30;
const b = 40;
console.log(`sum of a and b is ${a + b}`);

// const greet = (name) => `Hello, ${name}`
// console.log(greet("Rohit"));

// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

const firstName = "Manish"
const midName = "Kumar"
const lastName = "Mandrai"
const fullName = `${firstName} ${midName} ${lastName}`
console.log(fullName);


const poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!`;

console.log(poem);


const price = 345;
const discount = 34;
const finalPrice = `${price - discount} rupees`

console.log(`The final price of the product is ${finalPrice}`);


const greet = (name) => `Hello ${name}!`
const user = "manish"

console.log(`${greet (user)} Welcome to Amsterdam`);

const promise = new Promise((resolve , reject) => {
    let success = true;

    if(success) {
        resolve("kaam ho gya!")
    }else{
        reject("Error aayi");
    }
})
promise
    .then(result => console.log(result))
    .catch(result => console.log(error))



const fetchData = () => {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> {
            resolve("Data recived");
        }, 5000)
    })
}
fetchData()
    .then(data => console.log(data))
    .catch(data => console.log(error))

const getData = async () => {
    console.log("Fetching data ... ");
    const data = await fetchData();
    console.log(data);
}
getData()

const fetchData = () => {
    return new Promise ((resolve, reject)=>{
        const success = false;
        setTimeout(( ) => {
            if(success) {
                resolve("Data recived!")
            }else{
                reject("error occured")
            }
        }, 2000)
    })
}
const getData = async () => {
    try{
        console.log("fetching data...");
        const data = await fetchData();
        console.log(data);    
    }catch(error){
        console.log(error);
        
    }
}

getData()