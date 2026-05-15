let a = 300; // global variable
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  d = 40; // changable outside the scope
  //console.log("INNER: ", a);
}

for (let i = 0; i < array.length; i++) {
  const element = array[i];
}
//console.log(a); // undefined
//console.log(b); // undefined
//console.log(c); // it will print it break scope var variable is changable outside scope

function one() {
  const username = "Uday";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  console.log(username);
  two();
}

//one();

if (true) {
  const username = "ramu";
  if (username === "ramu") {
    const website = "instagram";
    console.log(username + website);
  }
  //console.log(website);
}

//console.log(username);

// **************** Interesting ******************

console.log(addOne(10));
// you can call it before definition also
function addOne(num) {
  return num + 1;
}
addOne(5);

// variable is very powerful in javascript it can hold object, function, data etc...
const addTwo = function (num) {
  // more like hoisting
  //  you can call it after definition only this function
  return num + 2;
};
addTwo(5);
