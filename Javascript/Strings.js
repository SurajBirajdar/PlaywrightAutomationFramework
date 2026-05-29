const Person = require('./Classes')

let day = 'tuesday ';
console.log(day.length);

console.log(day.slice(0,4));

let dayArr = day.split('s');
console.log(dayArr[0]);

let date1 = "26";
let date2 = "28";

console.log(parseInt(date2) - parseInt(date1));

// how to concatenate two strings
console.log(date1 + " is not todays date");

// how to get index of any character in string
console.log(day.indexOf('s'));

// create new object of person class
const person_2 = new Person("Tim","cook");
person_2.fullName();
         