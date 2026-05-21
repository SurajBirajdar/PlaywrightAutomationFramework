function add(a,b) {
    return a + b;
}

let sum = add(5,4);
console.log(sum);

let sumOfIntegers = function(a,b) {
    var greet = "Morning";
    return a+b;
}

// let keyword scope is inside block only
// var keyword scope is gloabl but if declare inside function then it's scope becomes inside function only.

console.log(greet); // scope of this is inside function only

console.log(sumOfIntegers);

let sumOfElements = (a,b) => 
    a + b;

console.log(sumOfElements(1,2));
console.log(sumOfIntegers(5,6));