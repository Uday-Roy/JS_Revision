// singleton -> made using constructor then always singleton object
// object literals

const mySym = Symbol("key1");

Object.create; // object made using constructor then it is singleton
const user = {
  name: "Uday",
  full_name: "Uday Roy",
  [mySym]: "myKey1",
  age: 20,
  location: "Jaipur",
  email: "uday@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

// console.log(user.email);
// console.log(user["email"]);
// console.log(user.full_name);
// console.log(user[mySym]);

user.email = "uday@chatgpt.com";
//Object.freeze();
//console.log(user);

user.greeting = function () {
  console.log("welcome ji");
};
user.greeting2 = function () {
  console.log(`Hello user : ${this.name}`);
};
console.log(user.greeting); // function return back
console.log(user.greeting());
console.log(user.greeting());
