// function similar class

function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const person1 = new Person("Oybek", "Narzullayev");
const person2 = new Person("Shohzod", "Narzullayev");

// add new method to person1
person1.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person1.getFullName()); // Oybek Narzullayev

// console.log(person2.getFullName()); // !Error

// to solve this error we use prototype
// Prototype can set some methods all instances of Person

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

// then getFullName method avaiable all Person instance
console.log(person1.getFullName()); //Oybek Narzullayev
console.log(person2.getFullName()); //Shohzod Narzullayev
