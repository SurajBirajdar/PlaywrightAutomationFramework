module.exports = class Person {
    // constructor 
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        console.log(this.firstName + " " + this.lastName);
    }

    age = 25;
    get location() {
        return 'canada';
    }
}


// let person = new Person("Suraj", "Birajdar");
// console.log(person.age);
// console.log(person.location);
// person.fullName()

