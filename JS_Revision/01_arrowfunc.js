// // learning arraow functionand this keyword
// // this refer to current context

// const user = {
//   username: "hitesh",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username} , welcome to website`);
//     console.log(this);
//   },
// };

// //user.welcomeMessage();
// //user.username = "sam"; // context changes here
// //user.welcomeMessage();
// //console.log(this); // now no context {} object

// function chai() {
//   console.log(this); // many value we get eher inside
//   let name = "ekta";
//   console.log(this.name); // cant be accesed directly in function, it uses in object
// }
// chai();

// *** Arrow function
const chai1 = () => {
  let username1 = "karn";
  console.log(this.username1); // undefined
  console.log(this); // blank {} output
};
chai1();

const addtwo = (num1, num2) => {
  // wrap function in {} then retrun keyword is used
  return num1 + num2;
};
addtwo(5, 10);

// *** now implicit function arrow
//const addThree = (num1, num2) => num1 + num2;
const addThree = (num1, num2) => num1 + num2; // wrap function in () then return keyword is not used
const a = (num1, num2) => ({ username: "ramji" }); // wrap object with () used
addThree(10, 20);

const myArray1 = [1, 2, 3, 4, 5];
const a,
  my = [1, 2, 3, 4, 5];

myArray1.forEach(function () {});
myArray1.forEach(() => n);
amyArray.forEach(() => {});
