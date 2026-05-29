let person= {
    firstName : "Suraj",
    lastName : "Birajdar",
    fullName : function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

console.log(person.lastName);
console.log(person['firstName']);
person.gender = "Male";
console.log(person);

delete person.gender;
console.log(person);

//wanted to check if particular property exists in given object
console.log('gender' in person);

//how to traverse object and grab values
for(let key in person) {
    console.log(person[key]);
}

//calling function from the object
console.log(person.fullName());