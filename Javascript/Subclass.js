const Person = require("./Classes");

class Subclass extends Person {
    age = 37;
    
}

const subclass = new Subclass("Sam", "San");
subclass.fullName();
console.log(subclass.firstName);
console.log(subclass.location);
console.log(subclass.age);