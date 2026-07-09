//singleton
//Object.Create
//object literal

const mySym = Symbol("key1");

const JsUser = {
    name: "Ayaz",
    "full name": "Syed Ayaz Hussain",
    [mySym]: "myKey1",
    age: 18,
    location: "Mumbai",
    email: "ayaz110hussain@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]    
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "ayaz@chatgpt.com"
//Object.freeze(JsUser) //freeze the object so that we can't change the properties of the object
JsUser.email = "ayaz@microsoft.com"
//console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());