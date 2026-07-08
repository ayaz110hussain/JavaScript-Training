//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0, 23)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2026, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2026-01-23")
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("01-23-2026")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000)); //timestamp in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

//console.log(`${newDate.getDay()} and the time is ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);

newDate.toLocaleString('default', { weekday: 'long' }) // Thursday