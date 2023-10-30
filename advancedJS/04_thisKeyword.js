const person = {
  name: "Oybek",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

// first option
person.sayMyName(); // My name is Oybek

// second option
function sayMyName1() {
  console.log(`My name is ${this.name}`);
}

sayMyName1.call(person); // My name is Oybek
// the call method take this.name from person object to logging because this = person

sayMyName1(); // My name is undefined
// because this = globalScobe and this.name = undefined

globalThis.name = "Shohzod";

sayMyName1(); //My name is Shohzod
// because this = globalScobe and this.name = Shohzod
