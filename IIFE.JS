// immediately Invoked function expression (IIFE)

// It is used to removed Global scope pollution

(function () {
  console.log(`DB CONNECTED`);
})();

// named  and multiple IIFE
(function chai() {
  console.log(`DB CONNECTED TWO`);
})();

(() => {
  console.log(`DB CONNECTED THREE`);
})();
// unnamed and parameterized IIFE
((name) => {
  console.log(`DB CONNECTED ${name}`);
})("mongoDb");
