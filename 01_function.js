// function sayMyName() {
//   console.log("U");
//   console.log("D");
//   console.log("A");
//   console.log("Y");
//   console.log("R");
//   console.log("O");
//   console.log("Y");
// }

// // reference = sayMyName
// sayMyName(); // function execute...
// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// const result = addTwoNumbers(5, 10);
// console.log(result);

// function sum(num1, num2) {
//   //   const result = num1 + num2;
//   //   return result;
//   return num1 + num2;
// }

// const total = sum(90, 10);
// console.log(total);

function loginUserMessage(username = "sam") {
  // now it will not go to undefinedd it wiil add sam if data not pass into it
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  // same work not using
  if (!username) {
    console.log("Please enter a username");
    return;
  }

  return `${username} just logged in`;
}

// console.log(loginUserMessage("Asus_Tuff_Gaming"));
// console.log(loginUserMessage("")); // just logged in
// console.log(loginUserMessage()); // undefined just logged in

function calculateCartPrice(...num1) {
  // rest or spread operator = ...variable
  return num1;
}

//console.log(calculateCartPrice(100, 200, 500, 1000));

const user = {
  username: "uday",
  price: 28000,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and purchasing price is ${anyobject.price}`,
  );
}

//handleObject(user);
handleObject({
  // now direct object passing
  username: "sam",
  price: 399,
});

const myNewArray = [100, 299, 399, 499];

function returnSecondValue(getAnyArray) {
  return getAnyArray[1];
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 199, 299, 399]));
