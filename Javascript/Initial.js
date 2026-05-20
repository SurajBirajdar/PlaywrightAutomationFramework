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
