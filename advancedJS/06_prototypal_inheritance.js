function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

// add new method called getFullName to Person
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

// new type function inheritance of Person
function Developer(fName, lName) {
  Person.call(this, fName, lName);
  this.isDeveloper = true;
}

// add new method
Developer.prototype.country = function () {
  console.log("Uzbekistan");
};

console.log(Person.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype = Object.create(Person.prototype);

// instance
const dev1 = new Developer("Oybek", "Narzullayev");

console.log(dev1.getFullName());
