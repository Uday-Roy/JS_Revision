// *** Dates and Time
let myDate = new Date();
//console.log(myDate);

//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);

//console.log(myCreatedDate.toLocaleString());
//console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2023-02-14");
let myCreatedDate3 = new Date("01-14-2026");
//console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now() / 1000)); // Math.floor/round help to remove decimal value

let newDate = new Date();
//console.log(newDate);
//console.log(newDate.getMonth());
//console.log(newDate.getDay());

// newDate.toLocaleString("default", {
//   weekday: "long",
//   timeZone: myDate,
// });
