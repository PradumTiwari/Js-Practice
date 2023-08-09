// Objects can be created by two types SingleTon and Object Create
//and Object Literals

// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// Object.freeze (JsUser)

// JsUser.email = "hitesh@chatgpt.com"
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);
// JsUser.greeting = function() {
// console.log("Hello JS user");
// }
// JsUser.greetingTwo = function () {
// console.log('Hello JS user, ${this.name}');
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greeting Two());

// const tinderUser=new Object()  SIngleTOne Obj

// Non SingleTOne Object

const tinderUser={};


//Array Destructuring

//It is very tidius to Call the variables with . so we give them a name

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//here we assigned CourseInstructor value to instructor
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


function loggedInUserName(userName){
    return userName+" Is the user Logged in";
}

const result=loggedInUserName("Pradum");

console.log(result)

console.log();

console.log();


function one(){
    let username="Hitwsh"
    console.log(this.userName);
}

one();

const addTwo=(num1,num2)=>(num1+num2);//if we declare inside brackets no need of using return keyword

