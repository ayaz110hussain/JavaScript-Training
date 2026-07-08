//array

const myArr = [1, 2, 3, 4, 5];
const myHeroes = ["Ironman", "Spiderman", "Thor", "Hulk", "Black Panther"];
const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[1]);

//Array methods
// myArr.push(6); //add at the end
// myArr.push(7);
// myArr.pop(); //remove from the end
//myArr.unshift(9); //add at the beginning
//myArr.shift(); //remove from the beginning

//console.log(myArr.includes(9)); //false
//console.log(myArr.indexOf(3)); //false


console.log(myArr);

// const newArr = myArr.join(); //join array elements into a string
// console.log(newArr);
// console.log(typeof newArr);

//slice, spice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3); //slice(startIndex, endIndex) - endIndex is not included
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);