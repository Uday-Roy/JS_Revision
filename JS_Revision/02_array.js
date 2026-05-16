// *** more advance part of array revision that will help in react, node js etc

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allheros = marvel_heros.concat(dc_heros);
//console.log(allheros);

// ** spread operator

const all_new_heros = [...marvel_heros, ...dc_heros];
//console.log(all_new_heros);

// *** flat method
const another_array = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];
const real_another_arrya = another_array.flat(Infinity); // work likr spread operator , Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//console.log(real_another_arrya);

// *** from and isArray method
console.log(Array.isArray("Uday"));
console.log(Array.from("Uday"));
console.log(Array.from({ name: "uday" })); // *** Interesting case

// *** of method
let score1 = 20;
let score2 = 30;
let score3 = 40;
console.log(Array.of(score1, score2, score2));
