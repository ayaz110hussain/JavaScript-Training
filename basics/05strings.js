const name = "ayaz"
const repoCount = 50
//console.log(name + repoCount + "Value"); 
console.log(`Hello ${name.toUpperCase()} you have ${repoCount} repo`);

const gameName = new String("GTA-NEW")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('A'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,2)
console.log(anotherString);

const newStringOne = "   ayaz  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ayaz110hussain.com/ayaz%20hussain"
console.log(url.replace('%20', '-'));

console.log(url.includes('ayaz'));

console.log(gameName.split('-'));