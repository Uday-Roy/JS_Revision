//const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123bc";
tinderUser.name = "Ramu";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const newUser = {
  full_name: {
    user: {
      first_name: "babul",
      last_name: "kumar",
      email: {
        userEmail: "babul@gmail.com",
        user_email: "babul@gmail.go",
      },
    },
  },
};
//console.log(newUser.full_name.user.email.userEmail);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

//const obj3 = { obj1, obj2 };
const obj4 = Object.assign(obj1, obj2);
//console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2);
//console.log(obj5);

const obj6 = { ...obj1, ...obj2 }; // using spread operator
//console.log(obj6);

const users = [
  {
    email: "Uday@google.com",
  },
  {},
];

// console.log(users[1].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("name"));

// ** Object destructuring
const course = {
  coursename: "JS in Hindi",
  price: 999,
  courseInstructor: "Hitesh",
};

const { courseInstructor: instructor } = course;
//console.log(courseInstructor);
console.log(instructor);

// *** Destructure in react example props
// const navbar = ({ company }) => {};
// navbar((company = "uday"));

// **** API response example
// *** https://api.github.com/users/Uday-Roy/repos

// {
//     "name" : "uday_roy",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

[
  {
    name: "uday_roy",
    coursename: "js in hindi",
    price: "free",
  },
  {
    name: "uday_roy",
    coursename: "js in english",
    price: "free",
  },
];
