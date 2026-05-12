let a = 300; // global variable
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  d = 40; // changable outside the scope
  console.log("INNER: ", a);
}

for (let i = 0; i < array.length; i++) {
  const element = array[i];
}
console.log(a); // undefined
//console.log(b); // undefined
console.log(c); // it will print it break scope var variable is changable outside scope
