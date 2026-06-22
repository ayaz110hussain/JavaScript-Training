//Primitive

//7 Categories : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotheId = Symbol('123')

console.log(id === anotheId);

const bigNumber = 4214612412n



//Reference (Non Primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Ayaz",
    age: 32,
}

const myFunction = function (){
console.log("Hello World");
}

console.log(typeof myFunction);

//Reference
// https://262.ecma-international.org/5.1/#sec-11.4.3