class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Developer extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isDeveloper = true;
  }

  displayCountry() {
    console.log("Uzbekistan");
  }
}
