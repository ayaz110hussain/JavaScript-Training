//const tinderUser = new Object();
 const tinderUser = {}


tinderUser.id = "123abc";
tinderUser.name = "Ayaz";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Ayaz",
            lastName: "Hussain"
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};

//const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4}; //spread operator
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "ayaz@gmail.com"
    },
    {
        id: 1,
        email: "ayaz@gmail.com"
    },
    {
        id: 1,
        email: "ayaz@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
courseName: "JavaScript",
price: 299,
courseInstructor: "Hitesh"
}

//course.courseInstructor = "Ayaz";

const {courseInstructor: instructor} = course; //destructuring
//console.log(courseInstructor);
console.log(instructor);