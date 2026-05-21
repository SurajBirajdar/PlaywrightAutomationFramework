var m = 90;
var m = 10; // if we have var keyword then we can re-declare same variable again. But, with let keyword we cannot do this.

const a = 12;
console.log(a);

for(let i=0; i<100; i++) {
    if(i%2 == 0) {
        console.log(i);
    }
}

let marks = [10,30,40,70,80];
newMarks = marks.slice(2,4);
console.log("newMarks Array: ", newMarks);
console.log(marks);
console.log(marks[0]);
marks[1] = 90;
console.log(marks);
console.log(marks.length);

//-------------------------------------
// now how to push element in array at end and how to remove element from end of array
marks.push(120);
console.log(marks);
marks.pop();
console.log(marks);
marks.unshift(9); // if I have to add value at start of the array then I use unshift() method
console.log(marks);
// now I have to check index of particular element in array
console.log(marks.indexOf(70));
// now to check whether any paricular element includes in array or not
console.log(marks.includes(120));

// sum up all the elements in array
var sum = 0;
for(var i=0; i<marks.length; i++) {
    sum = sum + marks[i];
}
console.log("sum is: " + sum);

let total = marks.reduce((sum,mark)=> sum+mark,0); // If I have to iterate array and accumulate , for e.g, sum of all elements in array, I will use reduce
console.log("Total marks using reduce anonymous function are: " + total);

var scores = [12,13,14,15,70,45];
// I wanted to create new array which is having only even numbers
var evenScores = [];
for(let i=0; i<scores.length; i++) {
    if(scores[i] % 2 == 0) {
        evenScores.push(scores[i]);
    }
}
console.log(evenScores);

let evenFilterScores = scores.filter(score => score%2 == 0);
console.log(evenFilterScores);

// Map - if I have to map - like each and every element in array multiply by 3
let eventAfterMap = evenFilterScores.map(element=> element * 3);
console.log(eventAfterMap);

// First of all filter for even numbers and then mulyiply each element with 3
let finalAns = scores.filter(element=> element%2 == 0).map(element=> element * 3);
console.log("Final Ans is: " , finalAns);

// sorting on strings
let fruits = ["mango", "banana", "grapes", "watermelon"];
fruits.sort();
console.log(fruits);

//sorting on numbers
let numbers = [45,12,67,89,43];
console.log(numbers.sort());



